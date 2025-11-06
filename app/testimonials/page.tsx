"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Kapoor",
    role: "Founder, StyleCraft Boutique",
    company: "StyleCraft",
    content:
      "Calcutta Cloud designed our entire brand identity and website. The attention to detail and creative vision exceeded our expectations. Our online sales tripled!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
  },
  {
    id: 2,
    name: "Priya & Rohit",
    role: "Wedding Couple",
    company: "Personal",
    content:
      "Our wedding invitation video was absolutely stunning! Everyone at our wedding was talking about it. The team captured our story beautifully.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "CEO, TechVentures",
    company: "TechVentures",
    content:
      "From strategy to execution, Calcutta Cloud handled our complete digital transformation. Their technical expertise and creative solutions are unmatched.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Marketing Director, FreshBites",
    company: "FreshBites",
    content:
      "Their social media management and SEO services took our brand from zero to hero. We're now ranking #1 for our target keywords and engagement is through the roof.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    id: 5,
    name: "Rahul Chatterjee",
    role: "Founder, EduTech Solutions",
    company: "EduTech",
    content:
      "They built our mobile app from scratch with a beautiful UI and flawless performance. The ongoing support has been exceptional. Highly recommend!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
  },
  {
    id: 6,
    name: "Anjali Mehta",
    role: "Owner, Wellness Studio",
    company: "Wellness Co",
    content:
      "The complete package — branding, website, and marketing automation. Everything works seamlessly together. Our client bookings increased by 200%.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
  },
];

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "500+", label: "Projects Delivered" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "100+", label: "Happy Clients" },
];

export default function TestimonialsPage() {
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
              Loved by creators and businesses
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our clients have to say about their experience with Calcutta Cloud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-muted/50 py-12">
        <div className="container mx-auto px-4">
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
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
              >
                {/* Quote Icon */}
                <div className="absolute -right-4 -top-4 opacity-10">
                  <Quote className="h-24 w-24" />
                </div>

                {/* Rating */}
                <div className="relative flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="relative mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                    <div className="h-full w-full rounded-full bg-background p-0.5">
                      <div
                        className="h-full w-full rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Join hundreds of satisfied clients
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Start your digital journey with Calcutta Cloud today and bring your vision to life.
            </p>
            <div className="mt-10">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
