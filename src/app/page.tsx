"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Target, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About Us", id: "about" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Benak Consulting LLC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      title="Connecting Businesses with Trusted IT Talent."
      description="Benak Consulting LLC provides professional IT staffing and consulting solutions for businesses seeking skilled technology professionals, dependable project support, and experienced consulting services."
      testimonials={[
        { name: "Sarah Johnson", handle: "@techcorp", testimonial: "Benak Consulting provided us with exceptional talent that transformed our project roadmap.", rating: 5 },
        { name: "Michael Chen", handle: "@innovatelab", testimonial: "Reliable communication and deep technical expertise every single time.", rating: 5 },
        { name: "Emily Rodriguez", handle: "@growthco", testimonial: "They truly understand our staffing needs and deliver quality professionals fast.", rating: 5 },
      ]}
      buttons={[
        { text: "Contact Us", href: "/contact" },
        { text: "View Services", href: "#services" },
      ]}
      background={{ variant: "plain" }}
      imageSrc="http://img.b2bpic.net/free-photo/two-business-woman-working-office-with-digital-tablet_1301-3550.jpg?_wi=1"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      tag="About Us"
      title="20 Years of IT Excellence"
      description="Benak Consulting LLC is an IT staffing and consulting business focused on helping organizations connect with skilled technology professionals."
      subdescription="We work with businesses that need technology support, consulting resources, or staffing assistance for ongoing operations and project-based needs."
      icon={Users}
      imageSrc="http://img.b2bpic.net/free-photo/showing-curious-data_1098-14123.jpg?_wi=1"
      useInvertedBackground={false}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      features={[
        { id: "f1", title: "IT Staffing", descriptions: ["Identifying qualified technology professionals for project-based, contract, and long-term staffing needs."] },
        { id: "f2", title: "IT Consulting", descriptions: ["Planning, managing, and executing technology initiatives with experienced consulting resources."] },
        { id: "f3", title: "Reliable Support", descriptions: ["Dependable service delivery built on 20 years of professional consulting experience."] },
      ]}
      title="Professional IT Services"
      description="Comprehensive technology solutions tailored to your business needs."
      useInvertedBackground={false}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      metrics={[
        { id: "m1", value: "20+", title: "Years Experience", description: "Professional IT and staffing history.", icon: Award },
        { id: "m2", value: "500+", title: "Professionals", description: "Highly qualified talent network.", icon: Users },
        { id: "m3", value: "100%", title: "Client-Focused", description: "Commitment to project success.", icon: Target },
      ]}
      title="Proven Results"
      description="Our experience delivers tangible value to our clients."
      useInvertedBackground={false}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFifteen
      testimonial="Benak Consulting has been instrumental in scaling our engineering team effectively. Their commitment to matching qualified professionals is unmatched."
      rating={5}
      author="Chief Technical Officer, TechSolutions Group"
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
      avatars={[{ src: "https://i.pravatar.cc/100?u=1", alt: "Author avatar" }]}
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      faqs={[
        { id: "q1", title: "What kind of IT staffing do you support?", content: "We support contract, project-based, and long-term staffing. Our streamlined onboarding process ensures a industry-leading time-to-fill, typically identifying and vetting top-tier candidates within 5-7 business days." },
        { id: "q2", title: "Do you provide consulting services?", content: "Yes, our consulting services help organizations plan, manage, and execute technology initiatives. We leverage our network to rapidly onboard experts to minimize project downtime." },
        { id: "q3", title: "What is your process for candidate vetting?", content: "We conduct rigorous technical assessments, background checks, and cultural fit interviews. This thorough, yet accelerated process allows us to maintain high speed-to-hire without compromising on talent quality." }
      ]}
      title="Frequently Asked Questions"
      description="Answers to common inquiries."
      faqsAnimation="slide-up"
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }] }
      ]}
      logoText="Benak Consulting LLC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}