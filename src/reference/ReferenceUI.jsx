import {
  createContext,
  useContext,
  useState,
  useRef,
} from 'react';

import { FiPlus } from 'react-icons/fi';
import { motion, useReducedMotion } from 'motion/react';

const Context = createContext(null);

export const useReference = () => useContext(Context);

export function ReferenceProvider({ children }) {
  const [tab, setTab] = useState('Tab 1');
  const [yearly, setYearly] = useState(false);

  const reduced = useReducedMotion();
  const ref = useRef(null);

  return (
    <Context.Provider
      value={{
        tab,
        setTab,
        yearly,
        setYearly,
      }}
    >
      <motion.div
        ref={ref}
        className="reference-page"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => {
          const arrow = e.target.closest('[data-slide-direction]');

          if (arrow) {
            arrow
              .closest('.w-slider')
              ?.querySelector('[data-slider-mask]')
              ?.scrollBy({
                left:
                  Number(arrow.dataset.slideDirection) *
                  arrow.closest('.w-slider').clientWidth,
                behavior: reduced ? 'instant' : 'smooth',
              });
          }
        }}
      >
        {children}
      </motion.div>
    </Context.Provider>
  );
}

export function ReferenceFAQ({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq w-dropdown">
      <button
        className="faq-toggle w-dropdown-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>

        <FiPlus
          style={{
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        />
      </button>

      {open && (
        <div className="faq-answer w-dropdown-list w--open">
          {children}
        </div>
      )}
    </div>
  );
}

export function ReferenceContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
      }}
    >
      <h3 className="no-margin-top">
        Fill out for contact
      </h3>

      <p className="margin-bottom-thirty">
        Lorem ipsum dolor sit amet consectetur libero donec.
      </p>

      <input
        className="text-field w-input"
        name="name"
        aria-label="Your name"
        autoComplete="name"
        placeholder="Your name*"
        required
      />

      <input
        className="text-field w-input"
        type="email"
        name="email"
        aria-label="Your email"
        autoComplete="email"
        placeholder="Your email*"
        required
      />

      <input
        className="text-field w-input"
        name="subject"
        aria-label="Subject"
        placeholder="Subject"
      />

      <textarea
        className="text-field text-area w-input"
        name="message"
        aria-label="Your message"
        placeholder="Your message"
        rows="4"
        required
      />

      <label className="flex items-start gap-3 text-sm my-5">
        <input type="checkbox" required />
        I understand this is a demo form and no message will be sent.
      </label>

      <button type="submit" className="button">
        Submit message
      </button>

      {sent && (
        <p
          role="status"
          className="mt-4 p-4 bg-emerald-50 text-emerald-900"
        >
          Form validated. Demo only: no message was sent.
        </p>
      )}
    </form>
  );
}