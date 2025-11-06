"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
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
            <h2>1. Introduction</h2>
            <p>
              Welcome to Calcutta Cloud. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you about
              how we look after your personal data when you visit our website and tell
              you about your privacy rights and how the law protects you.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul>
              <li>
                <strong>Identity Data:</strong> includes first name, last name, username
                or similar identifier.
              </li>
              <li>
                <strong>Contact Data:</strong> includes email address and telephone
                numbers.
              </li>
              <li>
                <strong>Technical Data:</strong> includes internet protocol (IP) address,
                browser type and version, time zone setting, browser plug-in types and
                versions, operating system and platform.
              </li>
              <li>
                <strong>Usage Data:</strong> includes information about how you use our
                website, products and services.
              </li>
              <li>
                <strong>Marketing and Communications Data:</strong> includes your
                preferences in receiving marketing from us.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can improve our
                service
              </li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal
              data from being accidentally lost, used or accessed in an unauthorized way,
              altered or disclosed. We limit access to your personal data to those
              employees, agents, contractors and other third parties who have a business
              need to know.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil
              the purposes we collected it for, including for the purposes of satisfying
              any legal, accounting, or reporting requirements.
            </p>

            <h2>6. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites, plug-ins and
              applications. Clicking on those links or enabling those connections may
              allow third parties to collect or share data about you. We do not control
              these third-party websites and are not responsible for their privacy
              statements.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of
              any changes by posting the new Privacy Policy on this page and updating the
              "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@calcuttacloud.com</li>
              <li>Address: 123 Cloud Street, Tech City, TC 12345</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
