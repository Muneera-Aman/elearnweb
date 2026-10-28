import { Link } from 'react-router-dom';
import {
  useReference,
  ReferenceProvider,
  ReferenceFAQ,
  ReferenceContactForm
} from './ReferenceUI';

export function ContactOneHero0() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"contact-one-hero"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <h1 className={"no-margin text-white"}>{"Contact us"}</h1>
      </div>
    </section>
  );
}

export function ContactOneForm1() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"contact-one-form"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex contact-one-form-main"}>
          <div className={"w-layout-vflex contact-one-form-left"}>
            <div className={"small-heading text-dark"}>
              {"Contact Us"}
            </div>

            <h2 className={"heading-two-gap-updown"}>
              {"Are you interested in online learning? Contact us"}
            </h2>

            <p className={"contact-one-description"}>
              {"Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique nullam risus semper habitant urna nisl nam elit at."}
            </p>

            <div className={"w-layout-vflex contact-one-author"}>
              <img
                src={"/assets/66de9b2588280abadd4e26df_Signature.svg"}
                loading={"lazy"}
                width={"259"}
                height={"49"}
                alt={"Signature"}
              />

              <div className={"heading-six"}>
                {"Brayden Backham"}
              </div>

              <div className={"small-shot-heading small-heading-body-color"}>
                {"Director"}
              </div>
            </div>
          </div>

          <div className={"contact-form-right"}>
            <div className={"no-margin w-form"}>
              <ReferenceContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactOneDetails2() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"contact-one-details"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-vflex contact-one-details-main"}>
          <div className={"small-heading text-dark"}>
            {"Contact details"}
          </div>

          <h2 className={"heading-two-gap-top margin-bottom-thirty-five"}>
            {"Find our location"}
          </h2>

          <div className={"contact-one-details-inner"}>
            <div className={"w-layout-hflex contact-details"}>
              <img
                src={"/assets/66de9b23b2f8295c624d2080_Home_Icon.svg"}
                loading={"lazy"}
                width={"43"}
                height={"37"}
                alt={"Icon"}
                className={"margin-top-five"}
              />

              <div className={"w-layout-vflex contact-one-content"}>
                <div className={"heading-six margin-bottom-ten"}>
                  {"Area location"}
                </div>

                <div className={"text-small"}>
                  {"410 Sandtown, California 94001, USA"}
                </div>
              </div>
            </div>

            <div className={"contact-details-border"}></div>

            <div className={"w-layout-hflex contact-details"}>
              <img
                src={"/assets/66de9b254c2ae5562dd60344_Books_Icon.svg"}
                loading={"lazy"}
                width={"32"}
                height={"37"}
                alt={"Icon"}
                className={"margin-top-five"}
              />

              <div className={"w-layout-vflex contact-one-content"}>
                <div className={"heading-six margin-bottom-ten"}>
                  {"Contact details"}
                </div>

                <a href={"tel:8881234567"} className={"text-small"}>
                  {"888-123-4567"}
                </a>

                <a href={"mailto:info@example.com"} className={"text-small"}>
                  {"info@example.com"}
                </a>
              </div>
            </div>

            <div className={"contact-details-border"}></div>

            <div className={"w-layout-hflex contact-details"}>
              <img
                src={"/assets/66de9b2343d23f2fb8c7598d_Clock_Icons.svg"}
                loading={"lazy"}
                width={"34"}
                height={"36"}
                alt={"Icon"}
                className={"margin-top-five"}
              />

              <div className={"w-layout-vflex contact-one-content"}>
                <div className={"heading-six margin-bottom-ten"}>
                  {"Opening hours"}
                </div>

                <div className={"text-small"}>
                  {"Monday-Friday"}
                </div>

                <div className={"text-small"}>
                  {"10:30a.m-7:00p.m"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section3() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"contact-one-faq-background"}>
          <div className={"w-layout-blockcontainer faq-inner-container w-container"}>
            <div className={"w-layout-hflex faq-top-wrapper"}>
              <img
                src={"/assets/66de9b24cdbecf88f8d1b2da_FAQ_Icons.svg"}
                loading={"lazy"}
                width={"263"}
                height={"247"}
                alt={"FAQ Icons"}
              />

              <div className={"w-layout-vflex faq-top-text"}>
                <div className={"small-heading text-dark"}>
                  {"Contact Us"}
                </div>

                <h2 className={"heading-two-gap-top"}>
                  {"Frequently asked questions"}
                </h2>
              </div>
            </div>

            <div>
              <ReferenceFAQ title={"How do I enroll in an online course?"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {"Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."}
                  </p>
                </div>
              </ReferenceFAQ>

              <ReferenceFAQ title={"Are there any prerequisites for enrolling in online courses?"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {"Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."}
                  </p>
                </div>
              </ReferenceFAQ>

              <ReferenceFAQ title={"What are the technical requirements for online learning?"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {"Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."}
                  </p>
                </div>
              </ReferenceFAQ>

              <ReferenceFAQ title={"What if I encounter technical difficulties?"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {"Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."}
                  </p>
                </div>
              </ReferenceFAQ>

              <ReferenceFAQ title={"Are there live classes, or can I learn at my own pace?"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {"Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."}
                  </p>
                </div>
              </ReferenceFAQ>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaOne4() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"cta-one"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex cta-main"}>
          <div className={"heading-three cta-heading"}>
            {"Are you ready to start your journey?"}
          </div>

          <div className={"w-layout-hflex cta-button-wrapper"}>
            <Link
              to={"/course-one"}
              className={"button button-border-off w-inline-block"}
            >
              <div>{"Browse courses"}</div>
            </Link>

            <Link
              to={"/contact-one"}
              className={"button black-border-button w-inline-block"}
            >
              <div>{"Became a teacher"}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterOne5() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <footer className={"footer-one"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex footer-one-main"}>
          <div className={"w-layout-vflex footer-links-wrap"}>
            <Link to={"/home-one"} className={"w-inline-block"}>
              <img
                src={"/assets/66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                loading={"lazy"}
                width={"105"}
                height={"26"}
                alt={"Elearna"}
                className={"elerna"}
              />
            </Link>

            <p className={"no-margin-bottom"}>
              {"Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras."}
            </p>
          </div>

          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
              {"Quick links"}
            </div>

            <div className={"w-layout-vflex links-wrap"}>
              <Link to={"/home-one"} className={"footer-link-hover"}>
                {"Home"}
              </Link>

              <Link to={"/contact-one"} className={"footer-link-hover"}>
                {"Events"}
              </Link>

              <Link to={"/contact-one"} className={"footer-link-hover"}>
                {"Career"}
              </Link>

              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"Instructor"}
              </Link>
            </div>
          </div>

          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
              {"Popular courses"}
            </div>

            <div className={"w-layout-vflex links-wrap"}>
              <Link to={"/course-one?category=Finance"} className={"footer-link-hover"}>
                {"Finance"}
              </Link>

              <Link to={"/course-one?category=Management"} className={"footer-link-hover"}>
                {"Management"}
              </Link>

              <Link to={"/course-one?category=Design"} className={"footer-link-hover"}>
                {"Design"}
              </Link>

              <Link to={"/course-one?category=Development"} className={"footer-link-hover"}>
                {"Web development"}
              </Link>
            </div>
          </div>

          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
              {"Company"}
            </div>

            <div className={"w-layout-vflex links-wrap"}>
              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"About"}
              </Link>

              <Link to={"/course-one"} className={"footer-link-hover"}>
                {"Courses"}
              </Link>

              <Link to={"/blog-one"} className={"footer-link-hover"}>
                {"Blog"}
              </Link>

              <Link
                to={"/contact-one"}
                className={"footer-link-hover w--current"}
              >
                {"Contact"}
              </Link>

              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"License"}
              </Link>

              <Link to={"/pricing-one"} className={"footer-link-hover"}>
                {"Pricing"}
              </Link>

              <Link to={"/home-one"} className={"footer-link-hover"}>
                {"404"}
              </Link>
            </div>
          </div>

          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
              {"CMS"}
            </div>

            <div className={"w-layout-vflex links-wrap"}>
              <Link to={"/course-one"} className={"footer-link-hover"}>
                {"Course details"}
              </Link>

              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"Instructor details"}
              </Link>

              <Link to={"/blog/3"} className={"footer-link-hover"}>
                {"Blog details"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={"w-layout-blockcontainer footer-container w-container"}>
        <div className={"border-one"}></div>

        <div className={"w-layout-hflex footer-bottom-main"}>
          <div className={"footer-bottom-text"}>
            {"Design by "}
            <a
              href={"http://radianttemplates.com/"}
              target={"_blank"}
              className={"footer-bottom-link"}
            >
              {"Radiant Templates"}
            </a>
          </div>

          <div className={"footer-bottom-text"}>
            {"Powered by "}
            <a
              href={"https://webflow.com/?r=0"}
              target={"_blank"}
              className={"footer-bottom-link"}
            >
              {"Webflow"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ReferencePage() {
  return (
    <ReferenceProvider>
      <ContactOneHero0 />
      <ContactOneForm1 />
      <ContactOneDetails2 />
      <Section3 />
      <CtaOne4 />
      <FooterOne5 />
    </ReferenceProvider>
  );
} 