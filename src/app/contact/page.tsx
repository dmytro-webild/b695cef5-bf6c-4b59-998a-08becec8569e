"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import ReactLenis from "lenis/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

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
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "/" }, { name: "Contact", id: "/contact" }]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778597600633-cjlo78tg.png"
          logoClassName="scale-[2.5]"
          className="py-6"
          button={{ text: "Get Started", href: "/contact" }}
        />
        <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2"><strong>Address:</strong> 287 Rothbury Ct, Suwanee, GA 30024</p>
            <p className="mb-2"><strong>Phone:</strong> 732-579-2932</p>
            <p className="mb-2"><strong>Email:</strong> info@benakconsulting.com</p>
            <p><strong>Hours:</strong> Mon-Fri, 9am - 5pm</p>
          </div>
          <h2 className="text-2xl font-semibold mb-6">Send us an inquiry</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="p-3 border rounded" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" className="p-3 border rounded" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="text" placeholder="Company/Subject" className="p-3 border rounded" required onChange={(e) => setFormData({...formData, subject: e.target.value})} />
            <textarea placeholder="Message" rows={5} className="p-3 border rounded" required onChange={(e) => setFormData({...formData, message: e.target.value})} />
            <button type="submit" className="p-3 rounded font-semibold">Send Message</button>
          </form>
        </div>
        <FooterLogoEmphasis
          columns={[{ items: [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }] }]} 
          logoText="Benak Consulting LLC"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dan5Ic1q1Umi6BwcobeOcsttrO/uploaded-1778597600633-cjlo78tg.png"
          logoClassName="scale-[0.6]"
          className="py-8"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}