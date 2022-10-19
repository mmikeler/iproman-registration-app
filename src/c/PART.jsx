import { useContext } from "react";
import App, { AppContext } from "../App";
import { __ } from "./local";
import { PART_1 } from "./part_1";
import { PART_2 } from "./part_2";
import { PART_3 } from "./part_3";
import { PART_4 } from "./part_4";

export function PART(props) {

  let the_part = null;

  switch (+props.index) {
    case 1:
      the_part = <PART_1 />
      break;
    case 2:
      the_part = <PART_2 />
      break;
    case 3:
      the_part = <PART_3 />
      break;
    case 4:
      the_part = <PART_4 />
      break;

    default:
      the_part = <PART_0 />
      break;
  }

  return the_part;
}

export function PART_CONTAINER(props) {
  return (
    <div className="part">
      <p className="fw-bold mb-2">{props.pretitle}</p>
      <div className="form-section">
        <div className="form-section__content">
          <div className="mb-4 text-center fs-5">{props.step}</div>
          <div className="progress mb-5">
            <div className="progress-bar" role="progressbar" style={{ width: props.progress }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="mb-3 row position-relative">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

function PART_0() {
  const { state, dispatch } = useContext(AppContext)
  return (
    <div className="part-0">
      <div id="create-new-site" className="bbtn bbtn--colossus" onClick={() => dispatch({
        type: "SWITCH_PART",
        pay: 1
      })}>
        {__(1)}
      </div>
    </div>
  )
}

export function PREV_BTN(props) {
  const { state, dispatch } = useContext(AppContext)

  const next = (e) => {
    dispatch({ type: "SWITCH_PART", pay: props.part })
  }

  return (
    <div className="bbtn gray mx-auto" onClick={next}>{props.text}</div>
  )
}

export function NEXT_BTN(props) {
  const { dispatch } = useContext(AppContext)

  const next = (e) => {
    const part = e.target.closest(".part")
    const fields = part.querySelectorAll("input,select,textarea")
    let form_valid = true
    fields.forEach(f => {
      const min = f.getAttribute("minlength")
      const max = f.getAttribute("maxlength")
      const val = f.value
      if (min && max) {
        if (val.length < min || val.length > max) {
          if (!f.hasAttribute("disabled")) {
            f.classList.add("is-invalid")
            form_valid = false
          }
        }
      }
      if (f.getAttribute("type") === "file" && f.files.length < 1) {
        const parent = f.closest("label").querySelector('.logo-wrapper');
        if (!parent.classList.contains("has-thumb")) {
          parent.classList.add("is-invalid")
          form_valid = false
        }
      }
    });
    if (form_valid)
      dispatch({ type: "SWITCH_PART", pay: props.part })
  }

  return (
    <div className={`bbtn mx-auto arrow-right ${props.extClass}`} onClick={next}>{props.text}</div>
  )
}


// Используется для добавления текста в точки приложения из объекта локализации
// Принимает индекс, например: 1
export function TEXT(props) {

  const { state } = useContext(AppContext)

  let text = state.o.fields[props.t].l

  if (text !== undefined) {
    text = ConvertMarks(text, state.form);
  }
  else {
    text = null
  }

  return <span dangerouslySetInnerHTML={{ __html: text }}></span>
}

// Превращаем метки в текст
export function ConvertMarks(text) {
  const { state } = useContext(AppContext)

  return text.replace(/%USER_DOMEN%/gi, "<span class='text-mark'>" + state.form.USER_DOMEN + "</span>")
}