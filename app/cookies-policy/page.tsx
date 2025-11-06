"use client";

import { motion } from "framer-motion";

export default function CookiesPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/40 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight">Cookies Policy</h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: November 6, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-slate dark:prose-invert mx-auto max-w-3xl"
          >
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile
              device when you visit a website. They are widely used to make websites work
              more efficiently and provide information to the owners of the site.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Calcutta Cloud uses cookies to distinguish you from other users of our
              website. This helps us to provide you with a good experience when you
              browse our website and also allows us to improve our site.
            </p>

            <h2>3. Types of Cookies We Use</h2>

            <h3>Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for you to browse the website and use its
              features, such as accessing secure areas of the site. Without these
              cookies, services you have asked for cannot be provided.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use a website, for
              instance which pages visitors go to most often. These cookies don't collect
              information that identifies a visitor. All information these cookies
              collect is aggregated and therefore anonymous.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your
              user name, language or the region you are in) and provide enhanced, more
              personal features.
            </p>

            <h3>Targeting Cookies</h3>
            <p>
              These cookies are used to deliver adverts more relevant to you and your
              interests. They are also used to limit the number of times you see an
              advertisement as well as help measure the effectiveness of advertising
              campaigns.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies
              to report usage statistics of the website, deliver advertisements on and
              through the website, and so on. These cookies are set by third parties and
              we have no control over them.
            </p>

            <h2>5. How to Control Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all
              cookies that are already on your computer and you can set most browsers to
              prevent them from being placed. However, if you do this, you may have to
              manually adjust some preferences every time you visit a site and some
              services and functionalities may not work.
            </p>

            <h3>Browser Controls</h3>
            <p>Most web browsers allow you to control cookies through their settings preferences. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:</p>
            <ul>
              <li>
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                  www.allaboutcookies.org
                </a>
              </li>
              <li>
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
                  www.aboutcookies.org
                </a>
              </li>
            </ul>

            <h2>6. Changes to This Cookies Policy</h2>
            <p>
              We may update our Cookies Policy from time to time. We will notify you of
              any changes by posting the new Cookies Policy on this page and updating the
              "Last updated" date at the top of this Cookies Policy.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <ul>
              <li>Email: cookies@calcuttacloud.com</li>
              <li>Address: 123 Cloud Street, Tech City, TC 12345</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
