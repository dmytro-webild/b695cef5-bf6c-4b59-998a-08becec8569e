"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import ReactLenis from "lenis/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          navItems={[{ name: "Home", id: "/" }, { name: "Contact", id: "/contact" }]}
          brandName="Benak Consulting LLC"
        />
        <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-2"><strong>Address:</strong> Suwanee, GA</p>
              <p className="mb-2"><strong>Phone:</strong> 732-579-2932</p>
              <p className="mb-2"><strong>Email:</strong> info@benakconsulting.com</p>
              <p><strong>Hours:</strong> Mon-Fri, 9am - 5pm</p>
            </div>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="p-3 border rounded" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email" className="p-3 border rounded" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="text" placeholder="Company/Subject" className="p-3 border rounded" required onChange={(e) => setFormData({...formData, subject: e.target.value})} />
              <textarea placeholder="Message" rows={5} className="p-3 border rounded" required onChange={(e) => setFormData({...formData, message: e.target.value})} />
              <button type="submit" className="bg-primary-cta text-white p-3 rounded font-semibold">Send Message</button>
            </form>
          </div>
        </div>
        <FooterLogoEmphasis
          columns={[{ items: [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }] }]} 
          logoText="Benak Consulting LLC"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}