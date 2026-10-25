# Elearna React project

A local React recreation of https://elearna.webflow.io/home-one and the requested About One, Course One, Pricing One, Blog One, and Contact One pages.

## Run

Install Node.js 20.19+ or 22.12+ (Node.js 24 was used for verification), extract the ZIP, then open a terminal inside the elearna-react folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production

```sh
npm run build
npm run preview
```

The included dist folder contains a prebuilt version. Serve it with an HTTP server; opening index.html directly from the filesystem is not supported. Deploy at the domain root, with all application routes rewritten to /index.html. A public/_redirects file is included for hosts that support it.

## Stack

React 19, Vite 6, Tailwind CSS 4, React Router 7, React Icons, and Motion. Tailwind is configured through @tailwindcss/vite. Original layout rules are retained alongside Tailwind to preserve the reference appearance.

## Routes

- /home-one
- /about-one
- /course-one
- /pricing-one
- /blog-one
- /contact-one
- /courses/:id — additional demo course details
- /blog/:id — additional demo articles

## Source map

- src/reference/*-one.jsx: individual React section components for each requested reference page. Sections retain descriptive original class names for styling fidelity.
- src/reference/ReferenceUI.jsx: shared React state, billing switch, FAQ, sliders, and demo contact form.
- src/reference/reference.css: original responsive layout rules, with local asset URLs.
- src/reference/fonts.css: locally bundled Outfit and Space Grotesk fonts.
- src/components/Layout.jsx: responsive shared navigation and supporting page heading.
- src/App.jsx: routes, demo cart, and registration dialog.
- src/pages/: supplemental course and blog details.
- src/overrides.css: React interaction and navigation styling.
- src/extra-styles.css: scoped styling for supplemental pages.
- public/assets/: 139 local reference images, decorative assets, and font files.

## Included behavior

Responsive navigation, React Router links, home course category tabs, monthly/yearly pricing, FAQ expansion, horizontal sliders, contact validation, and a browser-local demo cart.

Registration opens a contact prompt. Contact forms validate locally and do not send messages. Checkout, authentication, subscriptions, actual course content, and payment processing require a backend. Statistics, testimonials, business contact details, and article copy are demonstration/template content.

## Verification

Production build completed. All six requested routes and the two supplemental detail routes rendered successfully in a React server-rendering smoke check. All six main routes returned HTTP 200 from the production preview. Local asset paths were checked. The environment's browser webview timed out, so screenshot comparison and interactive browser QA were not completed. The development dependency optimizer encountered a filesystem restriction in this sandbox; the production build and preview server were available. Standard local Node.js environments do not have that sandbox restriction.

## Design provenance

Reference design and imagery: Elearna by Radiant Templates, hosted on Webflow. The ZIP preserves the requested reference assets and styling; it does not include a separate commercial template license. Supplemental demo article text and React interaction code were created for this project.
