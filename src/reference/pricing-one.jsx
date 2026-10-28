import { Link } from "react-router-dom";
import {
  useReference,
  ReferenceProvider,
  ReferenceFAQ,
  ReferenceContactForm,
} from "./ReferenceUI";

export function NavbarTwoTop0() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"navbar-two-top"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex top-nav-main"}>
          <div className={"top-nav-text"}>
            {"Are you interested in online coaching? "}
            <Link to={"/contact-one"} className={"text-light-white"}>
              {"Contact us."}
            </Link>
          </div>

          <div className={"w-layout-hflex top-nav-right"}>
            <a
              href={"mailto:support@example.com "}
              className={"top-nav-text"}
            >
              {"support@example.com"}
            </a>

            <div className={"top-nav-text"}>
              {"Call: "}
              <a href={"tel:8881234567"} className={"top-nav-text"}>
                {"(888) 123 4567"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingOneHero1() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"pricing-one-hero"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-vflex pricing-one-hero-main"}>
          <div className={"small-heading"}>{"Pricing"}</div>

          <h1 className={"heading-one-top-gap pricing-one-hero-heading"}>
            {"Flexible pricing plan for every one"}
          </h1>
        </div>
      </div>
    </section>
  );
}

export function PricingOneCards2() {
  const { tab, setTab, yearly, setYearly } = useReference();

  const checkIcon =
    "/assets/66e126a8745c48b34dd303f6_Pricing_Check.svg";

  return (
    <section className={"pricing-one-cards"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        {/* Billing toggle */}
        <div className={"w-layout-hflex pricing-one-toggle-box"}>
          <div className={"small-heading text-dark"}>{"Monthly"}</div>

          <button
            type="button"
            className="toggle-box"
            aria-label="Toggle yearly billing"
            aria-pressed={yearly}
            onClick={() => setYearly(!yearly)}
          >
            <span
              className="toggle-ball"
              style={{
                transform: yearly ? "translateX(100%)" : "none",
              }}
            />
          </button>

          <div className={"small-heading text-dark"}>{"Yearly"}</div>
        </div>

        <div className={"pricing-one-cards-wrapper"}>
          {/* Basic plan */}
          <div className={"w-layout-vflex pricing-one-card"}>
            <div className={"heading-five margin-bottom-twenty-five"}>
              {"Basic"}
            </div>

            <p className={"margin-bottom-thirty"}>
              {"Lorem ipsum dolor sit amet consectetur erat ipsum non."}
            </p>

            <div className={"amount-wrapper"}>
              <div
                className={"monthly-amount"}
                style={{
                  display: yearly ? "none" : "block",
                  opacity: 1,
                }}
              >
                <div className={"heading-three"}>
                  {"$199"}
                  <span className={"small-body-font"}>{"/month"}</span>
                </div>
              </div>

              <div
                className={"yearly-amount"}
                style={{
                  display: yearly ? "block" : "none",
                  opacity: 1,
                  position: "relative",
                }}
              >
                <div className={"heading-three"}>
                  {"$139"}
                  <span className={"small-body-font"}>{"/month"}</span>
                </div>
              </div>
            </div>

            <div className={"pricing-one-check-points"}>
              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"Access to 10+ top courses"}</div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"Certification prep"}</div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"Customizable content"}</div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"AI-powered coding exercises"}</div>
              </div>
            </div>

            <div className={"pricing-box-one-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Subscribe this plan"}</div>
              </Link>
            </div>
          </div>

          {/* Standard plan */}
          <div className={"w-layout-vflex pricing-one-card"}>
            <div className={"heading-five margin-bottom-twenty-five"}>
              {"Standard"}
            </div>

            <p className={"margin-bottom-thirty"}>
              {"Lorem ipsum dolor sit amet consectetur erat ipsum non."}
            </p>

            <div className={"amount-wrapper"}>
              <div
                className={"monthly-amount"}
                style={{
                  display: yearly ? "none" : "block",
                  opacity: 1,
                }}
              >
                <div className={"heading-three"}>
                  {"$299"}
                  <span className={"small-body-font"}>{"/month"}</span>
                </div>
              </div>

              <div
                className={"yearly-amount"}
                style={{
                  display: yearly ? "block" : "none",
                  opacity: 1,
                  position: "relative",
                }}
              >
                <div className={"heading-three"}>
                  {"$279"}
                  <span className={"small-body-font"}>{"/month"}</span>
                </div>
              </div>
            </div>

            <div className={"pricing-one-check-points"}>
              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"Access to 30+ top courses"}</div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"Certification prep"}</div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"Customizable content"}</div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div>{"AI-powered coding exercises"}</div>
              </div>
            </div>

            <div className={"pricing-box-one-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Subscribe this plan"}</div>
              </Link>
            </div>
          </div>

          {/* Premium plan */}
          <div className={"w-layout-vflex pricing-one-card pricing-dark-card"}>
            <div className={"pricing-cards-top-border"}></div>

            <div
              className={
                "heading-five margin-bottom-twenty-five text-white"
              }
            >
              {"Premium"}
            </div>

            <p className={"margin-bottom-thirty-five text-light-white"}>
              {"Lorem ipsum dolor sit amet consectetur erat ipsum non."}
            </p>

            <div className={"amount-wrapper"}>
              <div
                className={"monthly-amount"}
                style={{
                  display: yearly ? "none" : "block",
                  opacity: 1,
                }}
              >
                <div className={"heading-three text-white"}>
                  {"$699"}
                  <span className={"small-body-font text-light-white"}>
                    {"/month"}
                  </span>
                </div>
              </div>

              <div
                className={"yearly-amount"}
                style={{
                  display: yearly ? "block" : "none",
                  opacity: 1,
                  position: "relative",
                }}
              >
                <div className={"heading-three text-white"}>
                  {"$659"}
                  <span className={"small-body-font text-light-white"}>
                    {"/month"}
                  </span>
                </div>
              </div>
            </div>

            <div className={"pricing-one-check-points"}>
              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div className={"text-light-white"}>
                  {"Access to 50+ top courses"}
                </div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div className={"text-light-white"}>
                  {"Certification prep"}
                </div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div className={"text-light-white"}>
                  {"Customizable content"}
                </div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div className={"text-light-white"}>
                  {"AI-powered coding exercises"}
                </div>
              </div>

              <div className={"w-layout-hflex pricing-one-points"}>
                <img src={checkIcon} loading={"lazy"} alt={"Check Icon"} />
                <div className={"text-light-white"}>
                  {"Analytics and adoption reports"}
                </div>
              </div>
            </div>

            <div className={"pricing-box-one-button"}>
              <Link
                to={"/contact-one"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Subscribe this plan "}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Clients3() {
  const { tab, setTab, yearly, setYearly } = useReference();

  const logos = [
    {
      src: "/assets/66c6fb8bca715a603abbc84f_Clients_Logo.svg",
      width: "153",
      height: "51",
    },
    {
      src: "/assets/66c6fb8b87b34b4188395ff2_Clients_Logo-4.svg",
      width: "131",
      height: "54",
    },
    {
      src: "/assets/66c6fb8beb3991b3db5cd5ff_Clients_Logo-6.svg",
      width: "163",
      height: "52",
    },
    {
      src: "/assets/66c6fb8bb6896643f3baa632_Clients_Logo-2.svg",
      width: "98",
      height: "51",
    },
    {
      src: "/assets/66c6fb8bf82fe9cef5f78d2a_Clients_Logo-3.svg",
      width: "66",
      height: "53",
    },
    {
      src: "/assets/66c6fb8bf99901dda5c25e7e_Clients_Logo-5.svg",
      width: "160",
      height: "52",
    },
  ];

  return (
    <section className={"clients"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-vflex clients-main"}>
          <p className={"text-dark margin-bottom-twenty-five clients-top"}>
            {"Learn from 350+ leading universities and companies with us"}
          </p>

          <div className={"w-layout-hflex marquee-main"}>
            {[1, 2, 3].map((train) => (
              <div className={"w-layout-hflex clients-train"} key={train}>
                {logos.map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    loading={"lazy"}
                    width={logo.width}
                    height={logo.height}
                    alt={"Clients Logo"}
                    className={"clients-logo"}
                  />
                ))}
              </div>
            ))}

            <div className={"clients-overlay-one"}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingOneComparisionSection4() {
  const { tab, setTab, yearly, setYearly } = useReference();

  const blackTick = "/assets/66fa5eee841c6e46c0a6cc82_Black_Tick.svg";
  const yellowTick =
    "/assets/66fa5fdb154fc273901a471a_Yellow_Tick-2.svg";
  const blackCross = "/assets/66fa5ee479968b11ee95d851_Black_Cross.svg";
  const yellowCross =
    "/assets/66fa602acdbfb6bf9b03f6b3_Yellow_Cross_Icon.svg";

  const comparisonRows = [
    {
      label: "Access to 30+ top courses",
      available: [true, true, true],
    },
    {
      label: "Certification prep",
      available: [true, true, true],
    },
    {
      label: "Customizable content",
      available: [true, true, true],
    },
    {
      label: "AI-powered coding exercises",
      available: [true, true, true],
    },
    {
      label: "Analytics and adoption reports",
      available: [false, false, true],
    },
    {
      label: "24/7 customer support",
      available: [false, false, true],
    },
    {
      label: "Instructor Q&A",
      available: [true, true, true],
    },
    {
      label: "Skills assessments",
      available: [false, true, true],
    },
  ];

  const plans = [
    { name: "Basic plan", price: "199" },
    { name: "Starter plan", price: "299" },
    { name: "Platinum plan", price: "399" },
  ];

  return (
    <section className={"pricing-one-comparision-section"}>
      <div
        className={
          "w-layout-blockcontainer container position-relative w-container"
        }
      >
        <div
          className={
            "w-layout-vflex pricing-one-hero-heading-wrapper overflow-hidden"
          }
        >
          <h2 className={"no-margin-top text-center margin-bottom-twenty"}>
            {"Pricing "}
            <span>{"comparison"}</span>
          </h2>

          <p
            className={
              "pricing-one-hero-description margin-bottom-twenty"
            }
          >
            {
              "Distracted by the readable content of a page when looking at its point of using that it has a more  many desktop."
            }
          </p>
        </div>

        <div>
          {/* Plan headings */}
          <div className={"w-layout-hflex pricing-table-row"}>
            <div className={"table-left-column"}></div>

            <div
              className={
                "w-layout-grid pricing-right-column pricing-top-column"
              }
            >
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`w-layout-vflex pricing-table-top-wrapper ${
                    index === 1 ? "starter-plan cell-background-dark" : ""
                  }`}
                >
                  <div
                    className={`heading-five plan-name ${
                      index === 1 ? "text-white" : ""
                    }`}
                  >
                    {plan.name}
                  </div>

                  <div
                    className={`heading-three plan-pricing ${
                      index === 1 ? "text-white" : ""
                    }`}
                  >
                    <sup className={"superscript"}>{"$"}</sup>
                    {plan.price}
                    <span
                      className={`small-body-font pricing-month ${
                        index === 1 ? "text-light-white" : ""
                      }`}
                    >
                      {"/ month"}
                    </span>
                  </div>

                  <div
                    className={`mobile-body-small ${
                      index === 1 ? "text-light-white" : ""
                    }`}
                  >
                    {"No "}
                    <span>{"credit card"}</span>
                    {" required."}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison features */}
          {comparisonRows.map((row, rowIndex) => (
            <div
              key={row.label}
              className={`w-layout-hflex pricing-table-row middle-row ${
                rowIndex % 2 === 0 ? "row-background-dark" : ""
              }`}
            >
              <div
                className={`heading-six ${
                  row.label.includes("AI-powered") ||
                  row.label.includes("Analytics")
                    ? "name-in-two-line"
                    : ""
                }`}
              >
                {row.label}
              </div>

              <div className={"w-layout-grid pricing-right-column"}>
                {row.available.map((available, planIndex) => {
                  let iconSrc;

                  if (planIndex === 1) {
                    iconSrc = available ? yellowTick : yellowCross;
                  } else {
                    iconSrc = available ? blackTick : blackCross;
                  }

                  return (
                    <div
                      key={`${row.label}-${planIndex}`}
                      className={`pricing-table-icon-wrapper ${
                        planIndex === 1
                          ? "starter-plan-cell-background"
                          : ""
                      }`}
                    >
                      <img
                        width={"20"}
                        height={"20"}
                        alt={available ? "Icon" : "Unavailable"}
                        src={iconSrc}
                        loading={"lazy"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div
            className={
              "w-layout-hflex pricing-table-row middle-row tab-display-off"
            }
          >
            <div className={"pricing-table-icon-wrapper pricing-last-cell"} />

            <div className={"w-layout-grid pricing-right-column"}>
              <div className={"pricing-table-icon-wrapper pricing-last-cell"} />

              <div
                className={
                  "pricing-table-icon-wrapper starter-plan-cell-background pricing-last-cell"
                }
              />

              <div className={"pricing-table-icon-wrapper pricing-last-cell"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactTwoFaq5() {
  const { tab, setTab, yearly, setYearly } = useReference();

  const faqItems = [
    "How do I enroll in an online course?",
    "Are there any prerequisites for enrolling in online courses?",
    "What are the technical requirements for online learning?",
    "What if I encounter technical difficulties?",
    "Are there live classes, or can I learn at my own pace?",
  ];

  const answer =
    "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.";

  return (
    <section className={"contact-two-faq"}>
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
            <div className={"small-heading text-dark"}>{"Contact Us"}</div>

            <h2 className={"heading-two-gap-top"}>
              {"Frequently asked questions"}
            </h2>
          </div>
        </div>

        <div>
          {faqItems.map((question) => (
            <ReferenceFAQ key={question} title={question}>
              <div className={"toggle-answer-wrap"}>
                <p>{answer}</p>
              </div>
            </ReferenceFAQ>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTwoTestimonial6() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"home-two-testimonial"}>
      <div
        className={
          "w-layout-blockcontainer home-two-testimonial-container w-container"
        }
      >
        <div className={"w-layout-vflex home-two-testimonial-main"}>
          <img
            src={"/assets/66cff274c1ce9bc0b1d47e56_Quote_Icons.svg"}
            loading={"lazy"}
            width={"159"}
            height={"116"}
            alt={"Quote"}
            className={"testimonial-two-quote"}
          />

          <div className={"testimonial-two-slider w-slider"}>
            <div className={"w-slider-mask"} data-slider-mask="true">
              <div className={"w-slide"}>
                <div className={"w-layout-vflex home-two-testimonial-items"}>
                  <p className={"home-two-testimonial-text"}>
                    {
                      "“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”"
                    }
                  </p>

                  <div className={"home-two-testimonial-name"}>
                    {"Linda Grady"}
                  </div>

                  <div className={"body-small-text"}>
                    {"Co-assistant manager"}
                  </div>
                </div>
              </div>

              <div className={"w-slide"}>
                <div className={"w-layout-vflex home-two-testimonial-items"}>
                  <p className={"home-two-testimonial-text"}>
                    {
                      '"Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis."'
                    }
                  </p>

                  <div className={"home-two-testimonial-name"}>
                    {"Jim Adams"}
                  </div>

                  <div className={"body-small-text"}>{"Designer"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterTwo7() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"footer-two"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex footer-two-main"}>
          {/* Logo and description */}
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
              {
                "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras."
              }
            </p>
          </div>

          {/* Popular courses */}
          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
              {"Popular courses"}
            </div>

            <div className={"w-layout-vflex links-wrap"}>
              <Link
                to={"/course-one?category=Finance"}
                className={"footer-link-hover"}
              >
                {"Finance"}
              </Link>

              <Link
                to={"/course-one?category=Management"}
                className={"footer-link-hover"}
              >
                {"Management"}
              </Link>

              <Link
                to={"/course-one?category=Design"}
                className={"footer-link-hover"}
              >
                {"Design"}
              </Link>

              <Link
                to={"/course-one?category=Development"}
                className={"footer-link-hover"}
              >
                {"Web development"}
              </Link>
            </div>
          </div>

          {/* Company links */}
          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>{"Company"}</div>

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

              <Link to={"/contact-one"} className={"footer-link-hover"}>
                {"Contact"}
              </Link>

              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"License"}
              </Link>

              <Link
                to={"/pricing-one"}
                className={"footer-link-hover w--current"}
              >
                {"Pricing"}
              </Link>
            </div>
          </div>

          {/* CMS links */}
          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>{"CMS"}</div>

            <div className={"w-layout-vflex links-wrap"}>
              <Link to={"/course-one"} className={"footer-link-hover"}>
                {"Course details"}
              </Link>

              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"Instructor details"}
              </Link>

              <Link to={"/course-one"} className={"footer-link-hover"}>
                {"Blog details"}
              </Link>
            </div>
          </div>

          {/* Contact information */}
          <div className={"w-layout-vflex footer-links-wrap-three"}>
            <div className={"heading-five text-white"}>{"Need help?"}</div>

            <div className={"w-layout-vflex footer-links-contact"}>
              <div>
                <div>{"Call us"}</div>

                <a
                  href={"tel:8881234567"}
                  className={"heading-five text-white footer-hover-in"}
                >
                  {"(888) 123 4567"}
                </a>
              </div>

              <div>
                <div>{"Need support?"}</div>

                <a
                  href={"mailto:info@example.com"}
                  className={"heading-five text-white footer-hover-in"}
                >
                  {"info@example.com"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={"w-layout-blockcontainer footer-container w-container"}>
        <div className={"border-one"}></div>

        <div className={"w-layout-hflex footer-bottom-main"}>
          <div className={"footer-bottom-text"}>
            {"Design by "}
            <a
              href={"https://www.radianttemplates.com"}
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
              className={"footer-bottom-link"}
            >
              {"Webflow"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ReferencePage() {
  return (
    <ReferenceProvider>
      <NavbarTwoTop0 />
      <PricingOneHero1 />
      <PricingOneCards2 />
      <Clients3 />
      <PricingOneComparisionSection4 />
      <ContactTwoFaq5 />
      <HomeTwoTestimonial6 />
      <FooterTwo7 />
    </ReferenceProvider>
  );
}