"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Share2
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Turn ideas into executable, data-driven strategies for sustainable growth.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Creative & Design Studio",
    description: "Design that inspires trust and engagement — from UI/UX to motion graphics.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Code reliability from front-end to cloud infrastructure.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Growth",
    description: "Drive growth with strategy, not luck — SEO, SMM, PPC, and more.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Sales & Lead Generation",
    description: "Sell smarter, not harder with optimized funnels and CRM automation.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Branding & PR",
    description: "Build reputation and trust — the true brand capital.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description: "Where technology meets efficiency — automation, DevOps, and analytics.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Wedding & Event Creatives",
    description: "Creative storytelling for life's most beautiful moments.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Share2,
    title: "Social Media Services",
    description: "Create social experiences that connect and convert.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "9", label: "Core Services" },
  { value: "100+", label: "Happy Clients" },
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
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image - Very Low Opacity */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10"
            style={{
              backgroundImage: "url('/ImageTest.jpg')",
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

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
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-lg"
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
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  View Our Services
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
