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
        { name: "Contact", id: "/contact" },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778597600633-cjlo78tg.png"
      logoClassName="scale-150"
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
        { id: "f1", title: "IT Staffing", descriptions: ["We provide comprehensive IT staffing services, including deep-dive candidate screening, technical proficiency assessment, and cultural alignment. Our database of over 500+ pre-vetted professionals covers roles in cloud engineering, cybersecurity, data science, and software development, ensuring we bridge the skill gaps in your current team rapidly."] },
        { id: "f2", title: "IT Consulting", descriptions: ["Our IT consulting services offer strategic guidance for complex technology roadmaps. From digital transformation initiatives to legacy system modernization, we provide expert senior consultants who act as extensions of your leadership, ensuring your IT infrastructure is robust, scalable, and optimized for long-term growth."] },
        { id: "f3", title: "Reliable Support", descriptions: ["With 20 years of proven experience, we offer continuous, dependable support for your ongoing technology needs. We focus on minimizing downtime through proactive monitoring, rapid incident response, and personalized service level agreements tailored to the unique operational requirements of your business."] },
      ]}
      title="Professional IT Services"
      description="Comprehensive technology solutions tailored to your business needs."
      useInvertedBackground={false}
      textBoxClassName="flex flex-col items-center text-center"
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
      avatars={[{ src: "https://i.pravatar.cc/100?u=1", alt: "Author avatar" }]
      }
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      faqs={[
        { id: "q1", title: "What kind of IT staffing do you support?", content: "We support contract, project-based, and long-term staffing. Our streamlined onboarding process ensures a industry-leading time-to-fill, typically identifying and vetting top-tier candidates within 5-7 business days." },
        { id: "q2", title: "Do you provide consulting services?", content: "Yes, our consulting services help organizations plan, manage, and execute technology initiatives. We leverage our network to rapidly onboard experts to minimize project downtime." },
        { id: "q3", title: "What is your process for candidate vetting?", content: "We conduct rigorous technical assessments, background checks, and cultural fit interviews. This thorough, yet accelerated process allows us to maintain high speed-to-hire without compromising on talent quality." },
        { id: "q4", title: "How do I get started with your services?", content: "You can easily contact us via our contact form or give us a call. We'll set up an initial consultation to understand your needs and provide a tailored proposal." },
        { id: "q5", title: "Are there any long-term commitments?", content: "We offer flexible engagement models tailored to your project scope and duration. Our goal is to provide the support you need, when you need it."},
        { id: "q6", title: "Do you support international clients?", content: "Currently, we focus on providing services within the United States to ensure we meet high regulatory and quality standards, but we are open to discussing global partnerships on a case-by-case basis." }
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
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778597600633-cjlo78tg.png"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}