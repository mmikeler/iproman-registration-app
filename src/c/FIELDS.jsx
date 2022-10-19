import { useContext, useCallback, useState } from "react"
import { AppContext } from "../App"
import { __ } from "./local";

export function SELECT(props) {

  const { state, dispatch } = useContext(AppContext);

  //if (state.o.fields[props.f] === undefined) return "[select is empty]";

  const options = state.o.fields[props.f]?.options.map((o, ind) => {
    if (typeof o === 'object') {
      return <option key={ind} value={o[1]}>{o[0]}</option>
    }
    else {
      return <option key={ind}>{o}</option>
    }
  })

  return (
    <select
      onChange={(e) => { dispatch({ type: "UPD_FIELD", pay: { f: props.f, v: e.target.value } }) }}
      className="form-select"
      defaultValue={state.form[props.f] !== "" ? state.form[props.f] : props.default}
      aria-label={props.default}>
      {options}
    </select>
  )
}

export function INPUT(props) {
  const { state, dispatch } = useContext(AppContext);

  //if (state.o.fields[props.f] === undefined) return "[input is empty]";

  const o = state.o.fields[props.f]
  const pattern = new RegExp(props.pattern, "i");

  const validate = (str) => {
    let valid = true
    str.split('')?.forEach(b => {
      console.log(pattern.test(b));
      if (!pattern.test(b)) valid = false
    })

    valid &&
      dispatch({
        type: "UPD_FIELD",
        pay: {
          f: props.f,
          v: str
        }
      })

  }

  return (
    <>
      <LENGTH {...props} val={state.form[props.f] !== undefined ? state.form[props.f] : ""} />

      {props.type === "textarea" &&
        <textarea
          rows="6"
          className="form-control"
          placeholder={o !== undefined ? o.placeholder : ""}
          minLength={o !== undefined ? o.min : ""}
          maxLength={o !== undefined ? o.max : ""}
          disabled={props.disabled}
          value={state.form[props.f] ? state.form[props.f] : ""}
          onChange={(e) => { dispatch({ type: "UPD_FIELD", pay: { f: props.f, v: e.target.value } }) }}
          onFocus={(e) => e.target.classList.remove("is-invalid")}
        ></textarea>
      }

      {props.type !== "textarea" &&
        <input
          className="form-control"
          placeholder={o !== undefined ? o.placeholder : ""}
          minLength={o !== undefined ? o.min : ""}
          maxLength={o !== undefined ? o.max : ""}
          disabled={props.disabled}
          value={state.form[props.f] ? state.form[props.f] : ""}
          onChange={(e) => { validate(e.target.value) }}
          onFocus={(e) => e.target.classList.remove("is-invalid")}
          type={props.type ?? 'text'} />
      }
    </>
  )
}

export function LENGTH(props) {

  const { state } = useContext(AppContext)

  if (state.o === undefined) return "[0]";

  const o = state.o.fields[props.f] !== undefined ? state.o.fields[props.f] : { min: "5", max: "25" };
  const [min, max, val] = [o.min, o.max, props.val]
  const l = max - val.length >= 0 ? max - val.length : 0;

  return (
    <div className="length">
      <span>{l}</span>
      {val.length <= max && val.length >= min && <i className="bi bi-check"></i>}
    </div>
  )
}

export function OPTIONAL_INPUT(props) {
  const { state, dispatch } = useContext(AppContext)

  const change = useCallback((e) => {
    const val = e.target.checked ? 1 : 0
    dispatch({
      type: 'UPD_FIELD',
      pay: {
        f: props.f + "_open",
        v: val
      }
    })
    e.target.closest(".optional-input").querySelector(".is-invalid").classList.remove("is-invalid")
  })

  return (
    <div className={`optional-input ${props.extClass}`}>
      <div className="oi__left">
        <label className="form-check form-switch cursor-pointer">
          <div className={`social-icon ${props.f}`}></div>
          <input onChange={change} name="vk-open" className="form-check-input" type="checkbox" />
        </label>
      </div>
      <div className="oi__right position-relative w-100">
        <INPUT
          f={props.f}
          disabled={state.form[props.f + "_open"] !== undefined ? !state.form[props.f + "_open"] : true}
        />
      </div>
    </div>
  )
}

export function FILE_FIELD(props) {

  const { state, dispatch } = useContext(AppContext)
  const [upload, uploaded] = useState(false)
  const [thumb, setThumb] = useState(state.form[props.f])
  const [error, setError] = useState(null)

  if (state.o === undefined) return "[ff is empty]";

  const o = state.o.fields[props.f] ? state.o.fields[props.f] : false

  const change = (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]

    if (file.size / 1000 > 1000) { // Пропускаем файлы не больше 1МБ
      setError("Файл слишком большой")
      return
    }

    uploaded(true)
    reader.onloadend = () => {
      setThumb(window.URL.createObjectURL(file))
      uploaded(false)
      dispatch({
        type: "UPD_FIELD",
        pay: {
          f: props.f,
          v: reader.result
        }
      })
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <label className="position-relative">
        <div className="header mb-2">
          <span className="label">{o ? o.l : "[get text]"}</span>
        </div>
        <div className={`logo-wrapper${thumb ? " has-thumb" : ""}`} >

          {!thumb && <div className="ff-notice">{o ? o.note : "[get text]"}</div>}

          {upload && <div className="uploader">{__(12) /** Download */}</div>}

          {thumb && <img src={thumb} alt="" />}

        </div>
        <div className="mx-3 link-danger text-center fs-6" style={{ borderBottom: "1px solid #ddd" }}>{error}</div>
        <div className="text-muted text-center">{__(17) /** Click on the box... */}</div>
        <input name="s1_5" onChange={change} type="file" accept="jpg,jpeg,png"
          onFocus={(e) => {
            e.target.closest("label").querySelector(".logo-wrapper").classList.remove('is-invalid');
            setError(null);
          }} />
      </label>
    </>
  )
}

export function LABEL(props) {
  const { state } = useContext(AppContext)

  if (state.o === undefined) return "[label is empty]";

  const o = state.o.fields[props.f] ? state.o.fields[props.f] : false
  return (
    <label className="mb-3">
      <span className="label">&nbsp;{o ? o.label : "[get text]"}</span>
      <div className="position-relative">
        {props.children}
      </div>
    </label>
  )
}

export function CHECKBOX(props) {

  const { state, dispatch } = useContext(AppContext)

  const change = useCallback((e) => {
    const val = e.target.checked ? 1 : 0
    dispatch({
      type: 'UPD_FIELD',
      pay: {
        f: props.f,
        v: val
      }
    })
  })

  return (
    <input {...props}
      className="form-check-input"
      type="checkbox"
      checked={state.form[props.f]}
      onChange={change} />
  )
}