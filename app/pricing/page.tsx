"use client";

import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/project",
    description: "Perfect for small projects and startups",
    icon: Zap,
    features: [
      "Logo & Brand Identity",
      "1 Landing Page Design",
      "Basic SEO Setup",
      "Social Media Profile Setup",
      "Email Support",
      "2 Revisions",
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    price: "₹1,999",
    period: "/month",
    description: "Ideal for growing businesses",
    icon: Sparkles,
    features: [
      "Complete Brand Strategy",
      "Website Development (5-10 pages)",
      "SEO & Content Marketing",
      "Social Media Management",
      "Email & WhatsApp Marketing",
      "Monthly Analytics Reports",
      "Priority Support",
      "Unlimited Revisions",
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale organizations",
    icon: Crown,
    features: [
      "Full Digital Transformation",
      "Custom Software Development",
      "Advanced Marketing Automation",
      "Dedicated Account Manager",
      "API Integration & Cloud Setup",
      "24/7 Premium Support",
      "Advanced Analytics & BI",
      "White-label Solutions",
      "Custom SLA",
      "Unlimited Everything",
    ],
    popular: false,
    gradient: "from-orange-500 to-red-500",
  },
];

const services = [
  {
    category: "Strategy & Planning",
    items: [
      { name: "Business Strategy", price: "₹1,500" },
      { name: "Brand Strategy", price: "₹1,200" },
      { name: "Marketing Strategy", price: "₹1,000" },
      { name: "Market Research", price: "₹800" },
    ],
  },
  {
    category: "Creative & Design",
    items: [
      { name: "Logo & Brand Identity", price: "₹500" },
      { name: "UI/UX Design", price: "₹150/screen" },
      { name: "Motion Graphics Video", price: "₹300/min" },
      { name: "Graphic Design Package", price: "₹400" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Website Development", price: "₹2,500+" },
      { name: "Mobile App (iOS/Android)", price: "₹8,000+" },
      { name: "Custom Software", price: "Custom" },
      { name: "API Integration", price: "₹500+" },
    ],
  },
  {
    category: "Marketing & Growth",
    items: [
      { name: "SEO (Monthly)", price: "₹800/mo" },
      { name: "Social Media Management", price: "₹600/mo" },
      { name: "Google/Facebook Ads", price: "₹500/mo + ad spend" },
      { name: "Content Marketing", price: "₹700/mo" },
    ],
  },
  {
    category: "Wedding & Event",
    items: [
      { name: "Wedding Invitation Video", price: "₹200" },
      { name: "Save The Date Animation", price: "₹150" },
      { name: "Wedding Highlight Reel", price: "₹500" },
      { name: "Event Slideshow", price: "₹250" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a package or mix and match services to fit your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="mb-12 text-center text-2xl font-bold">Service Packages</h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col rounded-2xl border ${
                    plan.popular
                      ? "border-purple-500 shadow-xl shadow-purple-500/20 ring-2 ring-purple-500"
                      : "border-border"
                  } bg-card p-8 ${plan.popular ? "lg:scale-105" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className={`flex items-center gap-1 rounded-full bg-gradient-to-r ${plan.gradient} px-4 py-1 text-sm font-medium text-white`}>
                        <Sparkles className="h-4 w-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${plan.gradient}`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="mt-6">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient}`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className={`block rounded-lg py-3 text-center font-medium transition-all hover:scale-105 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl`
                        : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* À La Carte Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="mb-4 text-center text-2xl font-bold">Our Services</h2>
            <p className="mb-12 text-center text-muted-foreground">
              Pick individual services based on your specific needs
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="mb-4 text-lg font-semibold">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-3xl"
          >
            <h2 className="text-center text-3xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-12 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">Can I customize a package?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Absolutely! All our packages are flexible. We can mix and match services to create the perfect solution for your needs.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">What payment methods do you accept?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We accept all major credit cards, PayPal, bank transfers, and cryptocurrency for international clients.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">Do you offer refunds?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We offer a satisfaction guarantee. If you're not happy with our initial concepts, we'll work with you until you are or provide a full refund within the first 14 days.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">How long does a typical project take?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Timeline varies by project scope. Logo design: 5-7 days, Website: 2-4 weeks, Mobile App: 8-12 weeks, Custom Software: 3-6 months.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">Do you provide ongoing support?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yes! All our Professional and Enterprise packages include ongoing support and maintenance. We also offer standalone support contracts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
