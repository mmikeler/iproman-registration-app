import { PART_CONTAINER, PREV_BTN } from "./PART"
import { INPUT, LABEL, CHECKBOX } from "./FIELDS"
import { useContext } from "react"
import { AppContext } from "../App"
import { useState } from "react"
import { __ } from "./local"

export function PART_3() {

  const { state, dispatch } = useContext(AppContext)
  const [error, setError] = useState(null)
  const [request, doRequest] = useState(false)

  const createAccount = async () => {
    if ("ajax" in state) {

      doRequest(true)
      setError(null)

      let data = new FormData()
      data.append('action', 'ip_reg')
      data.append('data', JSON.stringify(state.form))

      await fetch(state.ajax.url, {
        method: 'POST',
        body: data
      })
        .then(res => res.json())
        .then((res) => {
          if (res > 0) {
            dispatch({
              type: "SWITCH_PART",
              pay: 4
            })
          }
          else {
            setError(res.reson)
          }
          doRequest(false)
        })
    }
  }

  return (
    <PART_CONTAINER
      pretitle={__(4) /** You are two... */}
      step={__(9) /** Step */ + " 3/3"}
      progress="100%"
    >
      {request &&
        <div className="preloader">
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">{__(23) /** Loading... */}</span>
          </div>
        </div>
      }

      <div className="section__header mb-5">
        <img className="icon me-2 d-block" src="data: image/svg+xml; base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyOCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjc2MDEgMC4yMjMxNDVINC4xNDcwMkMzLjYzMTg3IDAuMjIzMTQ1IDMuMjE0MzUgMC42ODE3NjcgMy4yMTQzNSAxLjI0NzYyQzMuMjE0MzUgMS44MTM0NyAzLjYzMTg3IDIuMjcyMDkgNC4xNDcwMiAyLjI3MjA5SDIzLjc2MDFDMjUuMDY3OSAyLjI3MjA5IDI2LjEzMzUgMy40NDEyNSAyNi4xMzM1IDQuODgwNDJWNC45NzczMkg0LjE0NzAyQzMuNjMxODcgNC45NzczMiAzLjIxNDM1IDUuNDM1OTQgMy4yMTQzNSA2LjAwMTc5QzMuMjE0MzUgNi41NzAyMiAzLjYzMTg3IDcuMDI3NTUgNC4xNDcwMiA3LjAyNzU1SDI2LjEzMzVWMTguMTIxQzI2LjEzMzUgMTkuNTU3NiAyNS4wNjc5IDIwLjcyNjggMjMuNzYwMSAyMC43MjY4SDQuMjM5OTNDMi45MzIwOCAyMC43MjY4IDEuODY2NTEgMTkuNTU3NiAxLjg2NjUxIDE4LjEyMVY0Ljc3OTY2QzEuODY2NTEgNC4yMTI1MSAxLjQ0NzgxIDMuNzUyNiAwLjkzMTQ5MSAzLjc1MjZDMC40MTc1MjQgMy43NTI2IDAgNC4yMTI1MSAwIDQuNzc5NjZWMTguMTIxQzAgMjAuNjg4IDEuOTAxNzkgMjIuNzc1NyA0LjIzOTkzIDIyLjc3NTdIMjMuNzYwMUMyNi4wOTgyIDIyLjc3NTcgMjggMjAuNjg4IDI4IDE4LjEyMVY0Ljg4MDQyQzI4IDIuMzEwODUgMjYuMDk4MiAwLjIyMzE0NSAyMy43NjAxIDAuMjIzMTQ1Wk0xMS41MzMxIDE3LjM4NkMxMS43MTQyIDE3LjM4NiAxMS44OTY1IDE3LjMyNzggMTIuMDU2NSAxNy4yMTAzTDIwLjI0ODIgMTEuMDk4M0MyMC42NzUxIDEwLjc4MDUgMjAuNzg1NyAxMC4xNDEgMjAuNDk2MyA5LjY3MzM1QzIwLjIwODIgOS4yMDU2OSAxOS42MjcyIDkuMDgyOTYgMTkuMjAwMiA5LjQwMzM1TDExLjY4NDggMTUuMDA3Nkw4Ljk3MTQ4IDExLjY2NDJDOC42MjgwNSAxMS4yNDA0IDguMDM3NjQgMTEuMjAxNyA3LjY1NDIyIDExLjU4MTVDNy4yNjk2MyAxMS45NTc0IDcuMjM1NTIgMTIuNjA2IDcuNTgwMTIgMTMuMDI4NEwxMC44MzU2IDE3LjA0MjNDMTEuMDE5MSAxNy4yNjg0IDExLjI3NDMgMTcuMzg2IDExLjUzMzEgMTcuMzg2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="" />
        {__(5) /** Short business... */}
      </div>

      <LABEL f="s2_1">
        <INPUT f="s2_1" />
      </LABEL>

      <LABEL f="s2_2">
        <INPUT f="s2_2" type="textarea" />
      </LABEL>

      <div className="my-4 d-md-flex justify-content-between">

        <div className="form-check-inline fw-bold fs-5 mb-3 text-nowrap" style={{ lineHeight: "1" }}>{__(24) /** Options */}:</div>

        <div className="form-check form-check-inline mb-3">
          <CHECKBOX f="I_WANT_DOMEN" id="inlineCheckbox1" className="form-check-input" />
          <label className="form-check-label" htmlFor="inlineCheckbox1">{__(6) /** I want to... */}</label>
        </div>

        <div className="form-check form-check-inline mb-3">
          <CHECKBOX f="I_WANT_EMAIL" id="inlineCheckbox2" className="form-check-input" />
          <label className="form-check-label" htmlFor="inlineCheckbox2">{__(7) /** I want an email... */}</label>
        </div>

      </div>

      {error &&
        <div className="alert alert-warning text-center" role="alert">
          {error}
        </div>
      }

      <div className="row align-items-center">

        <PREV_BTN part="2" text={__(21) /** Back */} />

        <div onClick={createAccount} className="bbtn-alt arrow-right mx-auto mt-4">{__(25) /** Create a business... */}</div>

      </div>

    </PART_CONTAINER>
  )
}