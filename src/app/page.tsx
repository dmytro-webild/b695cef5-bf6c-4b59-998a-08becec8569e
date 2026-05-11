"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
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
        {
          name: "Home",          id: "hero"},
        {
          name: "About Us",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Contact Us",          id: "contact"},
      ]}
      brandName="Benak Consulting LLC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Connecting Businesses with Trusted IT Talent."
      description="Benak Consulting LLC provides professional IT staffing and consulting solutions for businesses seeking skilled technology professionals, dependable project support, and experienced consulting services."
      testimonials={[
        {
          name: "Sarah Johnson",          handle: "@techcorp",          testimonial: "Benak Consulting provided us with exceptional talent that transformed our project roadmap.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=1"},
        {
          name: "Michael Chen",          handle: "@innovatelab",          testimonial: "Reliable communication and deep technical expertise every single time.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=2"},
        {
          name: "Emily Rodriguez",          handle: "@growthco",          testimonial: "They truly understand our staffing needs and deliver quality professionals fast.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=3"},
        {
          name: "David Kim",          handle: "@startupxyz",          testimonial: "An incredible consulting partner for long-term project support.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=4"},
        {
          name: "Alex Rivera",          handle: "@enterprisetech",          testimonial: "The best experience we have had with an IT consulting firm in years.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=5"},
      ]}
      buttons={[
        {
          text: "Contact Us",          href: "#contact"},
        {
          text: "View Services",          href: "#services"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=6"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png",          alt: "Logo"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "20 Years Excellence"},
        {
          type: "text",          text: "Expert IT Staffing"},
        {
          type: "text",          text: "Consulting Solutions"},
        {
          type: "text",          text: "Reliable Talent"},
        {
          type: "text",          text: "Proven Success"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="20 Years of IT Excellence"
      description="Benak Consulting LLC is an IT staffing and consulting business focused on helping organizations connect with skilled technology professionals. With around 20 years of professional experience, our team understands the importance of reliable communication, qualified talent, and client-focused service."
      subdescription="We work with businesses that need technology support, consulting resources, or staffing assistance for ongoing operations and project-based needs. Our approach is formal, responsive, and built around long-term professional relationships."
      icon={Users}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=7"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "IT Staffing",          descriptions: [
            "Identifying qualified technology professionals for project-based, contract, and long-term staffing needs."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=8",          imageAlt: "Service Image"},
        {
          id: "f2",          title: "IT Consulting",          descriptions: [
            "Planning, managing, and executing technology initiatives with experienced consulting resources."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=9",          imageAlt: "Service Image"},
        {
          id: "f3",          title: "Reliable Support",          descriptions: [
            "Dependable service delivery built on 20 years of professional consulting experience."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=10",          imageAlt: "Service Image"},
        {
          id: "f4",          title: "Technical Areas",          descriptions: [
            "Specialized support in Software Development, Database/Data, Cloud, Infrastructure, Business Analysis, and QA."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png?_wi=11",          imageAlt: "Service Image"},
      ]}
      title="Professional IT Services"
      description="Comprehensive technology solutions tailored to your business needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "20+",          title: "Years Experience",          description: "Professional IT and staffing history.",          icon: Award,
        },
        {
          id: "m2",          value: "500+",          title: "Professionals",          description: "Highly qualified talent network.",          icon: Users,
        },
        {
          id: "m3",          value: "100%",          title: "Client-Focused",          description: "Commitment to project success.",          icon: Target,
        },
      ]}
      title="Proven Results"
      description="Our experience delivers tangible value to our clients."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Benak Consulting has been instrumental in scaling our engineering team effectively. Their commitment to matching qualified professionals is unmatched."
      rating={5}
      author="Chief Technical Officer, TechSolutions Group"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778529182671-0qz5etsj.png",          alt: "Client"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What kind of IT staffing do you support?",          content: "We support contract, project-based, and long-term staffing for a variety of IT roles including developers, analysts, and infrastructure experts."},
        {
          id: "q2",          title: "Do you provide consulting services?",          content: "Yes, our consulting services help organizations plan, manage, and execute technology initiatives with our experienced experts."},
        {
          id: "q3",          title: "How long has Benak Consulting been in business?",          content: "Our team brings around 20 years of professional IT consulting and staffing experience to every client project."},
      ]}
      title="Frequently Asked Questions"
      description="Answers to common inquiries about our staffing and consulting process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Get in touch today. Our team is ready to discuss how we can support your business with reliable IT staffing and consulting services. Contact us at info@benakconsulting.com or visit us in Suwanee, GA."
      buttons={[
        {
          text: "Call 732-579-2932",          href: "tel:7325792932"},
        {
          text: "Email Us",          href: "mailto:info@benakconsulting.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "LinkedIn (Beena)",              href: "https://linkedin.com/in/beenasidharthan"},
            {
              label: "LinkedIn (Deepa)",              href: "https://linkedin.com/in/deepapcs"},
          ],
        },
      ]}
      logoText="Benak Consulting LLC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}