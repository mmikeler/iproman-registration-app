import { PREV_BTN, NEXT_BTN, PART_CONTAINER } from "./PART";
import { INPUT, OPTIONAL_INPUT, FILE_FIELD, LABEL, SELECT } from "./FIELDS";
import { __ } from "./local";

export function PART_2() {
  return (
    <PART_CONTAINER
      pretitle={__(3) /** You are four... */}
      step={`${__(9) /** Step */} 2/3`}
      progress="66%"
    >
      <div className="section__header mb-5">
        <img className="icon me-2 d-block" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOWSURBVHgBtVdNVhpBEK5qTDTZhJzA8QTBC4ThBGFlMCs8AWjMYlAf8CLMwh/MCcRNZCc3GMYTkBNkPEF42UR5YSpVPQPyq0jGb8FM/0xXVddXXzcI0+Ck4wAraYgWHqQarX4Dx0eVu5kngCIAxSF6eORDih3wlka6nUyWgGqhTx0iakNEQASTHwYqcDiwtZGI8TrjAOkJ7NntOqSaHYgKTsYUo/IqUauRQQIjeEA9UqMCnV8M1lS4Gmy1+ykH4HNOMS5mZVvIzXAXuMOE+H+QGNbcWQJnM43gn4UD/YfJOTBBUYd73sIzgCNebhHdtqSBiImQzR4R0x+hCc+EJUjVJfyUbrmZn/wb1zk2G+XHPrbtI5MTZnBOPMv60oInYAkWgG3XDCDiCiAj6FFgV0896vnbhYPduXZJwSIQo9A3qmu9o9sKz+1izZhnCaXlkVmtrjPnAatFziitrj/WwNmYkM1q9Tg9MHrXXbMKu+uA3XUxztUQp2U/N59heGUKq5lM2XuZxAQR5pEjmPwE34UvnlW2PHmxLMtjXrT0KMFcUhuwGv6cAWGcWZ0OjFObDbcBVWvCbM93IaYzZNiVkxKobp3+vkhw+endIaTWPIZHJTNgtcHelyA5m9V25dTh0MwpQ97t3e/1crk8VfXu18fsQuSy9nZSrLclMRR2dVh06pzz1Cyj41ionAQY810ixYGTQYgsNvSjEOZ8ru/51DBUjHLCaM7rIMec77ZP2ILk5cXwB7qGgc65pMwpy3nQ621ZB9PFZHyrTWHwJKshy2VVmjAaCIepO4iJRFTnl1A0uMxiyrG/HpnwCHirV5oE3TdyOiFgXhtHYP3m8kCOeBhEV2ENe+J1Ye+ze++UzU69dHRESl0Vi7W1cnl7Zr6V1urk928Bi/WxBdqotN9fDhauVGpygCTkvedjvlDYcYcXklpmIdGaL0KyvNz7AA9HPB+U8hP9UzOmqGlXTyYn0XBDTjq4mLkezAkm2y94Gh4sq5DVUGRnjfC+JZCz2GP5c/1ko9SffHh4vKqUHIMPw/d9b39/92bC2BCrZavNgNEjECcM7QxoodAIF7uBCMAXgUadnIxs+uqjrI4QAbnYuH66mSzIDaTP6sgRXCYFo+TCQHvlPA7+xkQIvlcPBEr4Mz7Yv3TrOzBG9E8iuK8bYcujZGMNJz3b4AuAyg1NjAw6hQRb8t8Jp86QbY69TvLM6LZb0jikhP8AnWSZkFmlPRYAAAAASUVORK5CYII=" alt="" />
        {__(11) /** Contact information */}
      </div>

      <div className="section__body">
        <div className="row mb-5">
          <div className="col-12">

            <LABEL f="s1_1"><INPUT f="s1_1" pattern="[<>?!.,/]" /></LABEL>

            <LABEL f="s1_2"><INPUT f="s1_2" pattern="[<>?!.,/]" /></LABEL>

            <LABEL f="s1_3"><INPUT f="s1_3" pattern="[<>?!,/]" /></LABEL>

            <LABEL f="s1_4"><INPUT f="s1_4" pattern="[<>?!|/\\]" /></LABEL>

            <LABEL f="default_site_lang"><SELECT f="default_site_lang" /></LABEL>

            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <div className="fs-5 fw-bold mb-4 mt-5">{__(18) /** Social networks */}</div>
                <OPTIONAL_INPUT f="vk" extClass="mb-3" />
                <OPTIONAL_INPUT f="fb" extClass="mb-3" />
                <OPTIONAL_INPUT f="inst" extClass="mb-3" />
              </div>
              <div className="col-12 col-md-6">
                <div className="fs-5 fw-bold mb-4 mt-5">{__(19) /** Messengers */}</div>
                <OPTIONAL_INPUT f="whatsapp" extClass="mb-3" />
                <OPTIONAL_INPUT f="viber" extClass="mb-3" />
                <OPTIONAL_INPUT f="telegram" extClass="mb-3" />
              </div>
            </div>

          </div>
        </div>

        <div className="d-flex align-items-center mx-auto mb-5" style={{ maxWidth: "350px" }}>
          <PREV_BTN part="1" text={__(21) /** Back */} />
          <NEXT_BTN part="3" text={__(9) + " 3/3"} />
        </div>

        <div className="text-center mb-4 fw-bold">{__(22) /** You have to spend... */}</div>
        <div className="text-center mb-4 fw-bold">{__(16) /** At the third... */}</div>

      </div>

    </PART_CONTAINER>
  )
}