import { PART_CONTAINER, NEXT_BTN } from "./PART"
import { SELECT, INPUT } from "./FIELDS"
import { __ } from "./local"
import { useContext } from "react"
import { AppContext } from "../App"

export function PART_1() {

  const { state } = useContext(AppContext)

  return (
    <>
      <div className="ip-alert ip-alert-success mb-4">
        <div className="text-center">{__(27, 'Full Website plan')}</div>
        <ul>
          <li>{__(28, '7 days free')}</li>
          <li>{__(29, 'Management of the complete biz.host website: contacts + information and presentation blocks + catalog of goods and services + contact form')}</li>
        </ul>
      </div>

      <div className="ip-alert ip-alert-secondary mb-4">
        <div className="text-center">{__(30, 'Free Website plan')}</div>
        <ul>
          <li>{__(31, 'Free always')}</li>
          <li>{__(32, 'Management of the limited biz.host website: contacts + 2 infoboxes')}</li>
        </ul>
      </div>

      <PART_CONTAINER
        pretitle={__(2, 'Create your website right now') + ':'}
        step={`${__(9, 'Шаг')} 1/3`}
        progress="33%"
      >
        <label className="col-12 col-md-6 col-form-label mb-4">{state.o.fields['KIND_OF_ACTIVITY']['label']}:</label>

        <div className="col-12 col-md-6 mb-4">
          <SELECT f="KIND_OF_ACTIVITY" />
        </div>

        <label className="col-12 col-lg-6 col-form-label mb-4">
          {__(13, 'Come up with a name for your site (in Latin letters)')}:<br />
          <span className="text-muted">{__(14, '*You can direct your domain from the site control panel')}</span>
        </label>

        <div className="col-12 col-lg-6 d-flex align-items-center mb-4">
          <div className="input-group">
            <span className="input-group-text">https://</span>
            <INPUT f="USER_DOMEN" pattern="\w" />
            <span className="input-group-text">.biz.host</span>
          </div>
        </div>

        <label className="col-12 col-lg-6 col-form-label mb-4">
          {__(6, 'Enter promo code (if you have one)')}:<br />
        </label>

        <div className="col-12 col-lg-6 d-flex align-items-center mb-4">
          <div className="input-group">
            <INPUT f="USER_PROMOCODE" pattern="\w" />
          </div>
        </div>

        <NEXT_BTN part={2} text={`${__(9, 'Step')} 2/3`} />

        <div className="text-center mb-4 mt-5 fw-bold">{__(15, 'You have to spend 5-7 minutes to get a finished site')}</div>

      </PART_CONTAINER>
    </>
  )
}