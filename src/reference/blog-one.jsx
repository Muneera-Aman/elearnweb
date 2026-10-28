import { Link } from 'react-router-dom';
import {
  useReference,
  ReferenceProvider,
  ReferenceFAQ,
  ReferenceContactForm
} from './ReferenceUI';

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

export function BlogHero1() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"blog-hero"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-vflex blog-hero-wrap"}>
          <div className={"small-heading"}>
            {"News and journals"}
          </div>

          <h1 className={"heading-one-top-gap text-white"}>
            {"Planning to transition to a new career?"}
          </h1>
        </div>
      </div>
    </section>
  );
}

export function BlogOneCards2() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"blog-one-cards"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-dyn-list"}>
          <div
            role={"list"}
            className={"blog-one-cards-wrapper w-dyn-items"}
          >
            <div role={"listitem"} className={"w-dyn-item"}>
              <Link to={"/blog/0"} className={"blog-card-one w-inline-block"}>
                <div className={"overflow-hidden"}>
                  <img
                    className={"blog-card-one-image"}
                    src={"/assets/66ff7196253a4813606a5f52_Blog_Small_Thumbnail-12.webp"}
                    width={"410"}
                    height={"296"}
                    alt={""}
                    loading={"lazy"}
                  />
                </div>

                <div className={"w-layout-vflex blog-card-one-text"}>
                  <div className={"small-shot-heading margin-bottom-fifteen"}>
                    {"Career"}
                  </div>

                  <div className={"heading-five margin-bottom-twenty-five"}>
                    {"Improve knowledge retention with visual learning"}
                  </div>

                  <div>{"October 4, 2024"}</div>
                </div>
              </Link>
            </div>

            <div role={"listitem"} className={"w-dyn-item"}>
              <Link to={"/blog/1"} className={"blog-card-one w-inline-block"}>
                <div className={"overflow-hidden"}>
                  <img
                    className={"blog-card-one-image"}
                    src={"/assets/66ff6e0a6f9b375fbca970fe_Blog_Small_Thumbnail-11.webp"}
                    width={"410"}
                    height={"296"}
                    alt={""}
                    loading={"lazy"}
                  />
                </div>

                <div className={"w-layout-vflex blog-card-one-text"}>
                  <div className={"small-shot-heading margin-bottom-fifteen"}>
                    {"Development"}
                  </div>

                  <div className={"heading-five margin-bottom-twenty-five"}>
                    {"Master online learning with proven strategies"}
                  </div>

                  <div>{"October 4, 2024"}</div>
                </div>
              </Link>
            </div>

            <div role={"listitem"} className={"w-dyn-item"}>
              <Link to={"/blog/2"} className={"blog-card-one w-inline-block"}>
                <div className={"overflow-hidden"}>
                  <img
                    className={"blog-card-one-image"}
                    src={"/assets/66ff6a72dd07492f0cbb0a6d_Blog_Small_Thumbnail-10.webp"}
                    width={"410"}
                    height={"296"}
                    alt={""}
                    loading={"lazy"}
                  />
                </div>

                <div className={"w-layout-vflex blog-card-one-text"}>
                  <div className={"small-shot-heading margin-bottom-fifteen"}>
                    {"Teaching"}
                  </div>

                  <div className={"heading-five margin-bottom-twenty-five"}>
                    {"How to enhance your learning experience today"}
                  </div>

                  <div>{"October 3, 2024"}</div>
                </div>
              </Link>
            </div>

            <div role={"listitem"} className={"w-dyn-item"}>
              <Link to={"/blog/3"} className={"blog-card-one w-inline-block"}>
                <div className={"overflow-hidden"}>
                  <img
                    className={"blog-card-one-image"}
                    src={"/assets/66e93b2410f6e96cbbc70c8d_Blog_Small_Thumbnail.webp"}
                    width={"410"}
                    height={"296"}
                    alt={""}
                    loading={"lazy"}
                  />
                </div>

                <div className={"w-layout-vflex blog-card-one-text"}>
                  <div className={"small-shot-heading margin-bottom-fifteen"}>
                    {"Career"}
                  </div>

                  <div className={"heading-five margin-bottom-twenty-five"}>
                    {"The evolution of teaching tools in the 21st century"}
                  </div>

                  <div>{"September 17, 2024"}</div>
                </div>
              </Link>
            </div>

            <div role={"listitem"} className={"w-dyn-item"}>
              <Link to={"/blog/4"} className={"blog-card-one w-inline-block"}>
                <div className={"overflow-hidden"}>
                  <img
                    className={"blog-card-one-image"}
                    src={"/assets/66e93b734e839a98823ff445_Blog_Small_Thumbnail-3.webp"}
                    width={"410"}
                    height={"296"}
                    alt={""}
                    loading={"lazy"}
                  />
                </div>

                <div className={"w-layout-vflex blog-card-one-text"}>
                  <div className={"small-shot-heading margin-bottom-fifteen"}>
                    {"Development"}
                  </div>

                  <div className={"heading-five margin-bottom-twenty-five"}>
                    {"The role of parental involvement in academic achievement"}
                  </div>

                  <div>{"September 16, 2024"}</div>
                </div>
              </Link>
            </div>

            <div role={"listitem"} className={"w-dyn-item"}>
              <Link to={"/blog/5"} className={"blog-card-one w-inline-block"}>
                <div className={"overflow-hidden"}>
                  <img
                    className={"blog-card-one-image"}
                    src={"/assets/66e93bb940c86a7d79f1e185_Blog_Small_Thumbnail-8.webp"}
                    width={"410"}
                    height={"296"}
                    alt={""}
                    loading={"lazy"}
                  />
                </div>

                <div className={"w-layout-vflex blog-card-one-text"}>
                  <div className={"small-shot-heading margin-bottom-fifteen"}>
                    {"Teaching"}
                  </div>

                  <div className={"heading-five margin-bottom-twenty-five"}>
                    {"The role of technology in modern classrooms"}
                  </div>

                  <div>{"September 14, 2024"}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaThree3() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"cta-three"}>
      <div className={"w-layout-blockcontainer cta-three-container w-container"}>
        <div className={"w-layout-hflex cta-three-main"}>
          <div className={"heading-three cta-heading text-white"}>
            {"Are you ready to start your journey?"}
          </div>

          <div className={"w-layout-hflex cta-button-wrapper"}>
            <Link
              to={"/course-one"}
              className={"button white-border-button w-inline-block"}
            >
              <div>{"Browse courses"}</div>
            </Link>

            <Link
              to={"/contact-one"}
              className={"button button-yellow w-inline-block"}
            >
              <div>{"Became an  instructor"}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterTwo4() {
  const { tab, setTab, yearly, setYearly } = useReference();

  return (
    <section className={"footer-two"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex footer-two-main"}>
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
              <Link to={"/blog-one"} className={"footer-link-hover w--current"}>
                {"Blog"}
              </Link>
              <Link to={"/contact-one"} className={"footer-link-hover"}>
                {"Contact"}
              </Link>
              <Link to={"/about-one"} className={"footer-link-hover"}>
                {"License"}
              </Link>
              <Link to={"/pricing-one"} className={"footer-link-hover"}>
                {"Pricing"}
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
              <Link to={"/course-one"} className={"footer-link-hover"}>
                {"Blog details"}
              </Link>
            </div>
          </div>

          <div className={"w-layout-vflex footer-links-wrap-three"}>
            <div className={"heading-five text-white"}>
              {"Need help?"}
            </div>

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
      <BlogHero1 />
      <BlogOneCards2 />
      <CtaThree3 />
      <FooterTwo4 />
    </ReferenceProvider>
  );
}