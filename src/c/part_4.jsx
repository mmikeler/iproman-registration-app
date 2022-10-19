import { useContext } from "react"
import { AppContext } from "../App"
import { __ } from "./local"

export function PART_4() {

  const { state } = useContext(AppContext)

  return (
    <div className="row part">
      <div className="col-12">
        <div className="form-section">
          <div className="form-section__content">
            <p className="fs-4 text-center">
              <i>{__(26) /** Your request to create... */}</i>
            </p>
            <div className="fs-2">
              <div className="results d-flex align-items-center justify-content-around">
                <span className="d-flex"><i class="bi bi-globe2"></i><div className="p-1"></div>{state.form.USER_DOMEN}</span>
                <span className="d-flex"><i class="bi bi-envelope"></i><div className="p-1"></div>{state.form.s1_3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}