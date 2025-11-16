"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Code,
  TrendingUp,
  Target,
  Award,
  Settings,
  Heart,
  Share2,
  X,
  Check
} from "lucide-react";
import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const services = [
  {
    icon: Code,
    title: "Web & App Development",
    description: "Code reliability from front-end to cloud infrastructure.",
    gradient: "from-orange-500 to-red-500",
    detailedDescription: "Build robust, scalable applications with cutting-edge technology. From responsive websites to cross-platform mobile apps, we deliver solutions that drive your business forward.",
    features: [
      "Responsive website development",
      "Cross-platform mobile apps (iOS/Android)",
      "Custom software solutions",
      "API development & integration",
      "Cloud infrastructure setup",
      "Performance optimization"
    ],
    pricing: [
      { name: "Website Development", price: "₹2,500+" },
      { name: "Mobile App (iOS/Android)", price: "₹8,000+" },
      { name: "Custom Software", price: "Custom" },
      { name: "API Integration", price: "₹500+" }
    ]
  },
  {
    icon: Palette,
    title: "Creative & Design Studio",
    description: "Design that inspires trust and engagement — from UI/UX to motion graphics.",
    gradient: "from-purple-500 to-pink-500",
    detailedDescription: "Transform your vision into stunning visuals. Our creative team delivers designs that not only look beautiful but drive engagement and conversions.",
    features: [
      "Logo & brand identity design",
      "UI/UX design for web & mobile",
      "Motion graphics & video animation",
      "Graphic design packages",
      "Brand guidelines & style guides",
      "Print & digital assets"
    ],
    pricing: [
      { name: "Logo & Brand Identity", price: "₹500" },
      { name: "UI/UX Design", price: "₹150/screen" },
      { name: "Motion Graphics Video", price: "₹300/min" },
      { name: "Graphic Design Package", price: "₹400" }
    ]
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Turn ideas into executable, data-driven strategies for sustainable growth.",
    gradient: "from-blue-500 to-cyan-500",
    detailedDescription: "Strategic thinking that drives results. We help you navigate market complexities and build actionable roadmaps for sustainable growth.",
    features: [
      "Business strategy & planning",
      "Brand positioning & strategy",
      "Go-to-market strategy",
      "Competitive analysis & market research",
      "Growth planning & forecasting",
      "Digital transformation roadmaps"
    ],
    pricing: [
      { name: "Business Strategy", price: "₹1,500" },
      { name: "Brand Strategy", price: "₹1,200" },
      { name: "Marketing Strategy", price: "₹1,000" },
      { name: "Market Research", price: "₹800" }
    ]
  },
  {
    icon: TrendingUp,
    title: "Marketing & Growth",
    description: "Drive growth with strategy, not luck — SEO, SMM, PPC, and more.",
    gradient: "from-green-500 to-emerald-500",
    detailedDescription: "Data-driven marketing that delivers measurable results. From SEO to paid advertising, we help you reach and convert your target audience.",
    features: [
      "Search engine optimization (SEO)",
      "Social media marketing & management",
      "Google & Facebook advertising",
      "Content marketing & strategy",
      "Email marketing campaigns",
      "Analytics & performance tracking"
    ],
    pricing: [
      { name: "SEO (Monthly)", price: "₹800/mo" },
      { name: "Social Media Management", price: "₹600/mo" },
      { name: "Google/Facebook Ads", price: "₹500/mo + ad spend" },
      { name: "Content Marketing", price: "₹700/mo" }
    ]
  },
  {
    icon: Target,
    title: "Sales & Lead Generation",
    description: "Sell smarter, not harder with optimized funnels and CRM automation.",
    gradient: "from-indigo-500 to-purple-500",
    detailedDescription: "Build a predictable sales pipeline. Our sales solutions help you attract qualified leads, nurture relationships, and close deals faster.",
    features: [
      "Sales funnel optimization",
      "CRM setup & automation",
      "Lead generation campaigns",
      "Email automation sequences",
      "Landing page optimization",
      "Conversion rate optimization"
    ],
    pricing: [
      { name: "Sales Funnel Setup", price: "₹1,000+" },
      { name: "CRM Implementation", price: "₹1,500+" },
      { name: "Lead Gen Campaign", price: "₹800/mo" },
      { name: "Email Automation", price: "₹600/mo" }
    ]
  },
  {
    icon: Award,
    title: "Branding & PR",
    description: "Build reputation and trust — the true brand capital.",
    gradient: "from-pink-500 to-rose-500",
    detailedDescription: "Craft a compelling brand story that resonates. We help you build brand awareness, manage reputation, and establish thought leadership.",
    features: [
      "Brand identity development",
      "Public relations & media outreach",
      "Press release creation & distribution",
      "Reputation management",
      "Influencer partnerships",
      "Crisis communication"
    ],
    pricing: [
      { name: "Brand Identity Package", price: "₹1,200" },
      { name: "PR Campaign", price: "₹1,500/mo" },
      { name: "Press Release", price: "₹300" },
      { name: "Reputation Management", price: "₹800/mo" }
    ]
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description: "Where technology meets efficiency — automation, DevOps, and analytics.",
    gradient: "from-yellow-500 to-orange-500",
    detailedDescription: "Expert technical guidance for your digital infrastructure. We optimize your technology stack, automate workflows, and implement best practices.",
    features: [
      "DevOps & CI/CD setup",
      "Cloud migration & optimization",
      "Workflow automation",
      "Technical architecture review",
      "Security audits & compliance",
      "Performance optimization"
    ],
    pricing: [
      { name: "DevOps Setup", price: "₹2,000+" },
      { name: "Cloud Migration", price: "₹3,000+" },
      { name: "Technical Audit", price: "₹1,500" },
      { name: "Automation Setup", price: "₹1,200+" }
    ]
  },
  {
    icon: Heart,
    title: "Wedding & Event Creatives",
    description: "Creative storytelling for life's most beautiful moments.",
    gradient: "from-red-500 to-pink-500",
    detailedDescription: "Make your special moments unforgettable. From save-the-date videos to wedding highlight reels, we create beautiful memories that last forever.",
    features: [
      "Wedding invitation videos",
      "Save the date animations",
      "Wedding highlight reels",
      "Event slideshow creation",
      "Social media teasers",
      "Photo & video editing"
    ],
    pricing: [
      { name: "Wedding Invitation Video", price: "₹200" },
      { name: "Save The Date Animation", price: "₹150" },
      { name: "Wedding Highlight Reel", price: "₹500" },
      { name: "Event Slideshow", price: "₹250" }
    ]
  },
  {
    icon: Share2,
    title: "Social Media Services",
    description: "Create social experiences that connect and convert.",
    gradient: "from-cyan-500 to-blue-500",
    detailedDescription: "Build an engaged community around your brand. We create compelling content and manage your social presence across all major platforms.",
    features: [
      "Social media strategy",
      "Content creation & curation",
      "Community management",
      "Social media advertising",
      "Influencer collaboration",
      "Analytics & reporting"
    ],
    pricing: [
      { name: "Social Media Management", price: "₹600/mo" },
      { name: "Content Creation Package", price: "₹500/mo" },
      { name: "Social Media Ads", price: "₹500/mo + ad spend" },
      { name: "Community Management", price: "₹400/mo" }
    ]
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "9", label: "Core Services" },
  { value: "18+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

const whyChooseUs = [
  {
    title: "All-in-One Platform",
    description: "No need to hire multiple vendors. Everything from design to deployment in one place.",
  },
  {
    title: "Modern, Sleek Aesthetic",
    description: "Built with the latest design and tech trends for a contemporary look.",
  },
  {
    title: "Tech-Driven Creativity",
    description: "Data-backed strategies combined with human-centered design.",
  },
  {
    title: "Heritage Meets Innovation",
    description: "Inspired by the creative soul of Calcutta, powered by modern technology.",
  },
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"connect"});
      cal("ui", {
        "styles": { "branding": { "brandColor": "#9333ea" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (() => {
          const service = services[selectedService];
          const ServiceIcon = service.icon;

          return (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed inset-4 z-50 overflow-y-auto sm:inset-8 md:inset-16 lg:inset-24"
              >
                <div className="flex min-h-full items-center justify-center p-4">
                  <div className="relative w-full max-w-4xl rounded-2xl border border-border bg-background shadow-2xl">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute right-4 top-4 z-10 rounded-full bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Modal Content */}
                    <div className="p-6 sm:p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}>
                          <ServiceIcon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                        <p className="mt-2 text-lg text-muted-foreground">
                          {service.detailedDescription}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="mb-4 text-xl font-semibold">What We Offer</h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient}`}>
                                <Check className="h-3 w-3 text-white" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <h3 className="mb-4 text-xl font-semibold">Pricing</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {service.pricing.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4"
                            >
                              <span className="font-medium">{item.name}</span>
                              <span className={`font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                        <button
                          data-cal-namespace="connect"
                          data-cal-link="nishant-k/connect-for-calcuttacloud"
                          data-cal-config='{"layout":"month_view"}'
                          className={`flex-1 rounded-lg bg-gradient-to-r ${service.gradient} px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
                        >
                          Schedule a Consultation
                        </button>
                        <Link
                          href="/pricing"
                          className="flex-1 rounded-lg border border-input bg-background px-6 py-3 text-center font-medium transition-all hover:bg-accent hover:text-accent-foreground"
                        >
                          View All Pricing
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })()}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image - Very Low Opacity */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10"
            style={{
              backgroundImage: "url('/cloud.jpg')",
            }}
          />
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,transparent,black)] dark:[mask-image:linear-gradient(0deg,transparent,white)]" />

        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 px-4 py-1.5 text-sm font-medium text-primary">
                Heritage Meets Tech
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">All-in-One Creative,</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Technology & Marketing Ecosystem
                </span>
              </h1>
            </motion.div>

            {/* Catchy MVP Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 opacity-30 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative rounded-2xl border-2 border-yellow-500/50 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 px-6 py-3 sm:px-8 sm:py-4">
                  <p className="text-xl font-bold text-yellow-900 dark:text-yellow-100 sm:text-2xl lg:text-3xl">
                    Turn Your Idea Into a Revenue-Ready MVP in 28 Days
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              Empowering creators, businesses, and brands — from concept to launch to growth.
              Strategy, design, development, marketing, and automation — all under one seamless platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                data-cal-namespace="connect"
                data-cal-link="nishant-k/connect-for-calcuttacloud"
                data-cal-config='{"layout":"month_view"}'
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <Link
                href="/showcase"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105"
              >
                View Showcase
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/40 bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A digital marketplace of interconnected services — from branding and UI/UX to web apps, SEO, automation, and more.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedService(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-5`} />

                <div className="relative">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-4">
                    <span className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      Learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-y border-border/40 bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Calcutta Cloud?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Custom solutions tailored for startups, agencies, and enterprises.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8"
            >
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-muted-foreground">
                To merge creativity, culture, and code — enabling every idea to come alive digitally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-8"
            >
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-muted-foreground">
                To be the most trusted all-in-one digital ecosystem for modern brands and creators — globally born, proudly rooted in Calcutta.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to bring your idea to life?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join hundreds of creators and businesses who trust Calcutta Cloud to create, deploy, market, and scale — all in one place.
            </p>
            <div className="mt-10">
              <button
                data-cal-namespace="connect"
                data-cal-link="nishant-k/connect-for-calcuttacloud"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Schedule a Meeting
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
