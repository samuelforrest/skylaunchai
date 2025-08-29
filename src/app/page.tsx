'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, LightningBolt, Layers, Users, DollarSign, Mail, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const featureList = [
  {
    icon: <Rocket className="w-8 h-8 text-sky-600" aria-hidden="true" />,
    title: "Instant App Launch",
    description: "Deploy your MVP in days, not weeks. SkyLaunch AI automates app scaffolding and infrastructure.",
  },
  {
    icon: <LightningBolt className="w-8 h-8 text-sky-600" aria-hidden="true" />,
    title: "Smart Automation",
    description: "Leverage AI-powered workflows to eliminate repetitive tasks and accelerate development.",
  },
  {
    icon: <Layers className="w-8 h-8 text-sky-600" aria-hidden="true" />,
    title: "Seamless Integrations",
    description: "Connect with the tools you love. Integrate with databases, auth, payments, and more in one click.",
  },
];

const testimonials = [
  {
    name: "Alex Kim",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "SkyLaunch AI cut our launch timeline in half. We went from idea to app store in a week!",
  },
  {
    name: "Priya Nair",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The onboarding and automation blew me away. I wish we&apos;d used SkyLaunch AI sooner.",
  },
  {
    name: "Jordan Lee",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Finally, a tool that understands what startups need. The integrations are seamless.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$29/mo",
    features: [
      "Launch 1 app",
      "Basic integrations",
      "Community support",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    price: "$79/mo",
    features: [
      "Up to 5 apps",
      "Premium integrations",
      "Priority support",
      "AI workflow builder",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited apps",
      "Custom integrations",
      "Dedicated manager",
      "Advanced security",
    ],
    recommended: false,
  },
];

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#newsletter" },
];

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" aria-label="Twitter" />, href: "https://twitter.com" },
  { icon: <Github className="w-5 h-5" aria-label="GitHub" />, href: "https://github.com" },
  { icon: <Linkedin className="w-5 h-5" aria-label="LinkedIn" />, href: "https://linkedin.com" },
];

const heroBgUrl =
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1500&q=80";
const heroOverlay =
  "bg-gradient-to-tr from-sky-900/80 via-sky-700/60 to-blue-500/60";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="font-sans bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`absolute inset-0 ${heroOverlay}`} aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center py-20 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Launch Your Startup <span className="text-sky-300">10x Faster</span> with SkyLaunch AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            The AI-powered platform that automates app development, integrations, and deployment—so you can focus on building what matters.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full shadow-lg transition-colors"
              aria-label="Get Started with SkyLaunch AI"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-slate-900">
            Why Choose <span className="text-sky-600">SkyLaunch AI</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featureList.map((feature, idx) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8, scale: 1.04, boxShadow: "0 8px 32px 0 rgba(56,189,248,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="flex flex-col items-center text-center gap-4 p-8 rounded-xl border border-slate-100 bg-slate-50 hover:bg-sky-50 transition-colors shadow-md">
                  <div className="mb-2">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-slate-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <Card className="p-6 flex flex-col items-center shadow-lg rounded-xl border-0 bg-white hover:shadow-xl transition-shadow">
                  <Avatar className="mb-4 w-16 h-16">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}&apos;s avatar`}
                      className="rounded-full object-cover"
                    />
                  </Avatar>
                  <p className="italic text-slate-700 mb-4">"&nbsp;{testimonial.quote}&nbsp;"</p>
                  <span className="font-semibold text-sky-700">{testimonial.name}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                whileHover={{ y: -6, scale: 1.03, boxShadow: tier.recommended ? "0 8px 32px 0 rgba(56,189,248,0.18)" : "0 2px 8px 0 rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 320 }}
                className={`flex-1 ${tier.recommended ? "z-10" : ""}`}
              >
                <Card
                  className={`flex flex-col h-full p-8 rounded-2xl border-2 ${
                    tier.recommended
                      ? "border-sky-600 bg-sky-50 shadow-2xl scale-105"
                      : "border-slate-100 bg-white"
                  } transition-all`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className={`w-5 h-5 ${tier.recommended ? "text-sky-600" : "text-slate-400"}`} aria-hidden="true" />
                    <span className={`text-xl font-semibold ${tier.recommended ? "text-sky-700" : "text-slate-700"}`}>{tier.name}</span>
                    {tier.recommended && (
                      <span className="ml-2 px-2 py-0.5 bg-sky-600 text-white text-xs rounded-full font-bold tracking-wide">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-6 ${tier.recommended ? "text-sky-700" : "text-slate-800"}`}>
                    {tier.price}
                  </div>
                  <ul className="flex-1 mb-8 space-y-3 text-left">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-slate-700">
                        <span className="inline-block w-2 h-2 rounded-full bg-sky-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.recommended ? "default" : "outline"}
                    className={`w-full py-3 font-semibold rounded-full ${
                      tier.recommended
                        ? "bg-sky-600 hover:bg-sky-700 text-white border-0"
                        : "border-sky-600 text-sky-700"
                    }`}
                    aria-label={`Choose the ${tier.name} plan`}
                  >
                    {tier.recommended ? "Start Now" : "Select"}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-tr from-sky-700 via-sky-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="mb-8 text-white/90">
              Get product updates, launch tips, and exclusive resources delivered to your inbox.
            </p>
            <form
              className="flex flex-col md:flex-row gap-4 items-center justify-center"
              onSubmit={e => {
                e.preventDefault();
                if (email.trim()) {
                  setSubmitted(true);
                  setTimeout(() => setSubmitted(false), 3000);
                  setEmail("");
                }
              }}
              aria-label="Newsletter signup form"
            >
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Enter your email &apos;to join our list&apos;"
                className="w-full md:w-72 px-4 py-3 rounded-full focus:ring-2 focus:ring-sky-400"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="Enter your email &apos;to join our list&apos;"
              />
              <Button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold hover:bg-sky-100 transition-colors"
                aria-label="Sign up for newsletter"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Subscribe
              </Button>
            </form>
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 text-green-100 bg-green-600 rounded-full px-6 py-2 font-semibold inline-block shadow"
                >
                  Thanks for subscribing!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-sky-400" aria-hidden="true" />
            <span className="text-lg font-bold tracking-tight">SkyLaunch AI</span>
          </div>
          <nav className="flex items-center gap-6">
            {footerLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} SkyLaunch AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;