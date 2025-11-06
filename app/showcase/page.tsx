"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

const showcaseProjects = [
  {
    id: 1,
    title: "Complete Brand Identity & Website",
    company: "StyleCraft Boutique",
    description:
      "Full branding and e-commerce website design for a fashion boutique, resulting in 3x online sales growth.",
    metrics: [
      { label: "Sales Growth", value: "300%", icon: TrendingUp },
      { label: "Engagement", value: "+250%", icon: Zap },
      { label: "ROI", value: "5x", icon: Users },
    ],
    tags: ["Branding", "UI/UX", "E-commerce"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Wedding Invitation Video Campaign",
    company: "Sharma-Kapoor Wedding",
    description:
      "Cinematic wedding invitation video with save-the-date animations shared across social media.",
    metrics: [
      { label: "Views", value: "50K+", icon: Users },
      { label: "Shares", value: "2K+", icon: Zap },
      { label: "Engagement", value: "95%", icon: TrendingUp },
    ],
    tags: ["Motion Graphics", "Video Editing", "Animation"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Mobile App Development",
    company: "EduTech Solutions",
    description:
      "iOS and Android learning platform with gamification features and real-time progress tracking.",
    metrics: [
      { label: "Downloads", value: "100K+", icon: Users },
      { label: "Rating", value: "4.8/5", icon: Zap },
      { label: "Retention", value: "78%", icon: TrendingUp },
    ],
    tags: ["React Native", "Firebase", "UI/UX"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    company: "FreshBites Restaurant",
    description:
      "Comprehensive SEO, social media, and PPC campaign driving significant foot traffic and online orders.",
    metrics: [
      { label: "Traffic", value: "+400%", icon: Users },
      { label: "Orders", value: "+350%", icon: Zap },
      { label: "ROAS", value: "8x", icon: TrendingUp },
    ],
    tags: ["SEO", "Social Media", "Google Ads"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Custom Software Platform",
    company: "TechVentures",
    description:
      "Enterprise CRM and automation platform with API integrations and advanced analytics dashboard.",
    metrics: [
      { label: "Users", value: "5K+", icon: Users },
      { label: "Efficiency", value: "+60%", icon: Zap },
      { label: "Cost Savings", value: "$200K/yr", icon: TrendingUp },
    ],
    tags: ["Node.js", "PostgreSQL", "AWS"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Social Media Management",
    company: "Wellness Studio",
    description:
      "Complete social media strategy, content creation, and community management for a wellness brand.",
    metrics: [
      { label: "Followers", value: "+15K", icon: Users },
      { label: "Engagement", value: "12%", icon: Zap },
      { label: "Bookings", value: "+200%", icon: TrendingUp },
    ],
    tags: ["Instagram", "Content Creation", "Analytics"],
    color: "from-pink-500 to-rose-500",
  },
];

export default function ShowcasePage() {
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
              Success Stories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how businesses and creators are transforming their brands with Calcutta Cloud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {showcaseProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                  />
                  <div className="absolute right-4 top-4">
                    <button className="rounded-full bg-background/90 p-2 backdrop-blur transition-transform hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 text-sm font-medium text-primary">
                    {project.company}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                          <metric.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-lg font-bold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to create your success story?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join these successful businesses and creators. Start your digital transformation with Calcutta Cloud today.
            </p>
            <div className="mt-10">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
