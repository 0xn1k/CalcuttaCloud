"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Calcutta Cloud's services, you accept and agree to
              be bound by the terms and provision of this agreement. If you do not agree
              to these Terms of Service, please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Calcutta Cloud provides cloud infrastructure services including but not
              limited to computing resources, storage, networking, and related services
              (collectively, the "Service"). The Service is provided "as is" and we
              reserve the right to modify, suspend, or discontinue the Service at any
              time without notice.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of the Service, you must register for an
              account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept all responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>
                Violate any applicable local, state, national, or international law
              </li>
              <li>
                Transmit any material that is abusive, threatening, obscene, defamatory,
                or libelous
              </li>
              <li>
                Interfere with or disrupt the Service or servers or networks connected to
                the Service
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Service or any
                other systems or networks
              </li>
              <li>
                Use the Service to transmit any malware, viruses, or malicious code
              </li>
              <li>Mine cryptocurrency without prior written consent</li>
            </ul>

            <h2>5. Payment and Billing</h2>
            <p>
              If you choose a paid plan, you agree to pay all fees associated with that
              plan. All fees are non-refundable unless otherwise stated. We reserve the
              right to change our pricing at any time with 30 days notice.
            </p>

            <h2>6. Data and Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy. We take
              data security seriously and implement industry-standard security measures.
              However, you are responsible for backing up your own data.
            </p>

            <h2>7. Service Level Agreement</h2>
            <p>
              We strive to provide 99.9% uptime for our services. If we fail to meet this
              commitment, you may be eligible for service credits as outlined in our SLA
              documentation. This is your sole remedy for service interruptions.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content included in or made available through the Service, such as
              text, graphics, logos, images, and software, is the property of Calcutta
              Cloud or its content suppliers and is protected by copyright and
              intellectual property laws.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason, including
              if you breach these Terms of Service. Upon termination, your right to use
              the Service will immediately cease.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Calcutta Cloud shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages,
              or any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>

            <h2>11. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of
              any kind, either express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Calcutta Cloud and its officers,
              directors, employees, and agents from any claims, damages, losses,
              liabilities, and expenses arising out of your use of the Service or
              violation of these Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of the jurisdiction in which Calcutta Cloud operates, without regard to its
              conflict of law provisions.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide
              notice of material changes by posting the new Terms on this page and
              updating the "Last updated" date. Your continued use of the Service after
              such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us
              at:
            </p>
            <ul>
              <li>Email: legal@calcuttacloud.com</li>
              <li>Address: 123 Cloud Street, Tech City, TC 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
