import { Link } from 'react-router-dom';
import {
  useReference,
  ReferenceProvider,
  ReferenceFAQ,
  ReferenceContactForm
} from './ReferenceUI';

export function AboutOneHero0() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"about-one-hero"}>
      <div className={"w-layout-blockcontainer about-one-hero-container w-container"}>
        <div className={"w-layout-vflex about-one-hero-main"}>
          <div className={"small-heading"}>{"About us"}</div>
          <h1 className={"about-one-hero-heading"}>
            {"You’re sincerely determined to grow"}
          </h1>
        </div>
      </div>
    </section>
  );
}

export function AboutOneMain1() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"about-one-main"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex about-one-wrap"}>
          <div className={"w-layout-vflex about-one-image-wrap"}>
            <img
              className={"about-image"}
              src={"/assets/66d9685910e51570ad70d12e_Employ_Images.webp"}
              width={"630"}
              height={"635"}
              alt={"Office Image"}
              loading={"lazy"}
            />
            <img
              src={"/assets/66f640175a11d2c4db6078d6_Trusted_By_Image_In_White.avif"}
              loading={"lazy"}
              width={"268"}
              height={"179"}
              alt={"Trusted By Image"}
              className={"about-image-two"}
            />
          </div>

          <div className={"w-layout-vflex about-one-text-wrap"}>
            <div className={"small-heading text-dark"}>{"Our Story"}</div>

            <h2 className={"heading-two-gap-updown"}>
              {"Limitless learning and get more possibilities"}
            </h2>

            <p className={"margin-bottom-thirty"}>
              {"Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus."}
            </p>

            <div className={"w-layout-hflex home-two-counters-wrap no-margin-bottom"}>
              <div className={"w-layout-vflex home-two-counters"}>
                <div className="counter-box">
                  <div className="heading-three">{"04K"}</div>
                </div>
                <div className={"small-heading text-dark"}>
                  {"Finish seasons"}
                </div>
              </div>

              <div className={"counter-border"}></div>

              <div className={"w-layout-vflex home-two-counters"}>
                <div className="counter-box">
                  <div className="heading-three">{"67K"}</div>
                </div>
                <div className={"small-heading text-dark"}>
                  {"Enrolled"}
                </div>
              </div>

              <div className={"counter-border"}></div>

              <div className={"w-layout-vflex home-two-counters"}>
                <div className="counter-box">
                  <div className="heading-three">{"099%"}</div>
                </div>
                <div className={"small-heading text-dark"}>
                  {"Job placement"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section2() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex home-two-details-main background-color-dark"}>
          <div className={"w-layout-hflex home-two-details-box"}>
            <img
              src={"/assets/66d9685900d6e3c06862ddb9_Circle_Icons_White.svg"}
              loading={"lazy"}
              width={"45"}
              height={"45"}
              alt={"Icon"}
              className={"details-icon"}
            />
            <div className={"w-layout-vflex details-text"}>
              <div className={"heading-four text-white"}>
                {"150+ online courses"}
              </div>
              <p className={"no-margin-bottom text-light-white"}>
                {"Lorem ipsum dolor sit amet"}
              </p>
            </div>
          </div>

          <div className={"w-layout-hflex home-two-details-box"}>
            <img
              src={"/assets/66d96859c968783a7b05acb2_Pen_Icons_White.svg"}
              loading={"lazy"}
              width={"45"}
              height={"45"}
              alt={"Icon"}
              className={"details-icon"}
            />
            <div className={"w-layout-vflex details-text"}>
              <div className={"heading-four text-white"}>
                {"Personalized learning"}
              </div>
              <p className={"no-margin-bottom text-light-white"}>
                {"Lorem ipsum dolor sit amet"}
              </p>
            </div>
          </div>

          <div className={"w-layout-hflex home-two-details-box"}>
            <img
              src={"/assets/66d96859eeb82869ca4d5d1e_Update_White_Icons.svg"}
              loading={"lazy"}
              width={"45"}
              height={"45"}
              alt={"Icon"}
              className={"details-icon"}
            />
            <div className={"w-layout-vflex details-text"}>
              <div className={"heading-four text-white"}>
                {"Lifetime update"}
              </div>
              <p className={"no-margin-bottom text-light-white"}>
                {"Lorem ipsum dolor sit amet"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutOneSuccessCards3() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"about-one-success-cards"}>
      <div className={"w-layout-blockcontainer w-container"}>
        <div className={"w-layout-vflex about-one-success-main"}>
          <div className={"small-heading text-dark"}>{"Why we are"}</div>
          <div className={"heading-three about-one-success-heading"}>
            {"We believe in our good education and development system and we know how to work together to reach greater success"}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section4() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section>
      <div className={"home-three-potential-cards-wrap about-one-hover-accordion"}>
        <div className={"potential-cards"}>
          <div className={"heading-three text-blue margin-bottom-ten"}>
            {"01"}
          </div>
          <div className={"heading-four margin-bottom-ten"}>
            {"Flexibility and convenience"}
          </div>
          <p className={"no-margin-bottom"}>
            {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
          </p>
          <div className={"potential-cards-button-wrap button-wrap-one"}>
            <div className={"potential-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Get Started "}</div>
              </Link>
            </div>
          </div>
        </div>

        <div className={"potential-cards"}>
          <div className={"heading-three text-blue margin-bottom-ten"}>
            {"02"}
          </div>
          <div className={"heading-four margin-bottom-ten"}>
            {"Course accessibility"}
          </div>
          <p className={"no-margin-bottom"}>
            {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
          </p>
          <div className={"potential-cards-button-wrap button-wrap-two"}>
            <div className={"potential-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Get Started "}</div>
              </Link>
            </div>
          </div>
        </div>

        <div className={"potential-cards"}>
          <div className={"heading-three text-blue margin-bottom-ten"}>
            {"03"}
          </div>
          <div className={"heading-four margin-bottom-ten"}>
            {"Cost-effectiveness"}
          </div>
          <p className={"no-margin-bottom"}>
            {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
          </p>
          <div className={"potential-cards-button-wrap button-wrap-three"}>
            <div className={"potential-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Get Started "}</div>
              </Link>
            </div>
          </div>
        </div>

        <div className={"potential-cards"}>
          <div className={"heading-three text-blue margin-bottom-ten"}>
            {"04"}
          </div>
          <div className={"heading-four margin-bottom-ten"}>
            {"Personalized learning"}
          </div>
          <p className={"no-margin-bottom"}>
            {"Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."}
          </p>
          <div className={"potential-cards-button-wrap button-wrap-four"}>
            <div className={"potential-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Get Started "}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}