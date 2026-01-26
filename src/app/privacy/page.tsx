'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="section-py-md border-b border-[#D2D2D7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="max-w-3xl">
                <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.1em] uppercase mb-4">
                  Legal
                </p>
                <h1 className="text-[#1D1D1F] text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Privacy Policy
                </h1>
                <p className="text-[#86868B] text-lg">
                  Last updated: January 2025
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-py-md">
          <div className="container-sg">
            <div className="max-w-3xl space-y-12">

              {/* Introduction */}
              <AnimateOnScroll delay={0.05}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Introduction</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    BKND Development (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you visit our website or engage our marketing services.
                  </p>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Please read this privacy policy carefully. If you do not agree with the terms of this
                    privacy policy, please do not access our website or use our services.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Information We Collect */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Information We Collect</h2>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Personal Information</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Fill out a contact form or request a consultation</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Engage our services as a client</li>
                    <li>Communicate with us via email, phone, or other channels</li>
                  </ul>
                  <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                    This information may include your name, email address, phone number, company name,
                    job title, and any other information you choose to provide.
                  </p>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Automatically Collected Information</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Cookies and Tracking */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Cookies and Tracking Technologies</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We use cookies and similar tracking technologies to collect and track information about
                    your browsing activities. Cookies are small data files stored on your device that help
                    us improve our website and your experience.
                  </p>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We use the following types of cookies:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
                  </ul>
                  <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                    You can control cookies through your browser settings. However, disabling certain cookies
                    may affect the functionality of our website.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* How We Use Your Information */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">How We Use Your Information</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Responding to your inquiries and requests</li>
                    <li>Sending you marketing and promotional communications (with your consent)</li>
                    <li>Analyzing and improving our website and services</li>
                    <li>Protecting against fraud and unauthorized access</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Third-Party Services */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Third-Party Services</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We may share your information with third-party service providers who assist us in
                    operating our website and conducting our business. These providers include:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Analytics providers (e.g., Google Analytics)</li>
                    <li>Email marketing platforms</li>
                    <li>Customer relationship management (CRM) systems</li>
                    <li>Advertising and marketing partners</li>
                    <li>Cloud hosting providers</li>
                  </ul>
                  <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                    These third parties are contractually obligated to protect your information and use it
                    only for the purposes we specify.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Data Security */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Data Security</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Data Retention */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Data Retention</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes
                    for which it was collected, comply with legal obligations, resolve disputes, and enforce
                    our agreements.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Your Rights - GDPR */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Your Rights (GDPR)</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    If you are a resident of the European Economic Area (EEA), you have certain data
                    protection rights under the General Data Protection Regulation (GDPR):
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li><strong>Right to access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Right to restrict processing:</strong> Request limitation of data processing</li>
                    <li><strong>Right to data portability:</strong> Request transfer of your data</li>
                    <li><strong>Right to object:</strong> Object to processing of your personal data</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Your Rights - CCPA */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">California Privacy Rights (CCPA)</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    If you are a California resident, the California Consumer Privacy Act (CCPA) provides
                    you with specific rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Right to know what personal information is collected, used, shared, or sold</li>
                    <li>Right to delete personal information held by businesses</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Right to non-discrimination for exercising your CCPA rights</li>
                  </ul>
                  <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                    We do not sell your personal information as defined under the CCPA.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Children's Privacy */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Children&apos;s Privacy</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly
                    collect personal information from children. If you become aware that a child has provided
                    us with personal information, please contact us immediately.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Changes to This Policy */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Changes to This Policy</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes
                    by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                    Your continued use of our website after any changes constitutes your acceptance of the
                    new Privacy Policy.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Contact Information */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4 pb-8">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Contact Us</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-[#F5F5F7] rounded-lg p-6 mt-4">
                    <p className="text-[#1D1D1F] text-base font-medium">BKND Development</p>
                    <p className="text-[#1D1D1F] text-base">Charwin Vanryck deGroot, CEO</p>
                    <p className="text-[#1D1D1F] text-base mt-2">30 Union St, Unit 13</p>
                    <p className="text-[#1D1D1F] text-base">Elizabeth, NJ 07202</p>
                    <p className="text-[#1D1D1F] text-base mt-2">
                      Email: <Link href="mailto:info@bknddevelopment.com" className="text-[#00D4FF] hover:underline">info@bknddevelopment.com</Link>
                    </p>
                    <p className="text-[#1D1D1F] text-base">
                      Phone: <Link href="tel:+19735185600" className="text-[#00D4FF] hover:underline">(973) 518-5600</Link>
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
