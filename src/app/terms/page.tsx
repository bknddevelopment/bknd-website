'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';

export default function TermsOfService() {
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
                  Terms of Service
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

              {/* Agreement to Terms */}
              <AnimateOnScroll delay={0.05}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Agreement to Terms</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you
                    and BKND Development (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) governing your access
                    to and use of our website and marketing services.
                  </p>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    By accessing our website or engaging our services, you agree to be bound by these Terms.
                    If you disagree with any part of these Terms, you may not access our website or use our services.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Services Description */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Services Description</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    BKND Development provides digital marketing services including, but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Paid advertising and media buying</li>
                    <li>Content marketing and strategy</li>
                    <li>Performance creative services</li>
                    <li>Conversion rate optimization (CRO)</li>
                    <li>Analytics and reporting</li>
                    <li>Marketing consulting and strategy</li>
                  </ul>
                  <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                    The specific scope of services will be outlined in individual project proposals,
                    statements of work, or service agreements between you and BKND Development.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Client Responsibilities */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Client Responsibilities</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Provide accurate and complete information necessary for us to perform our services</li>
                    <li>Grant necessary access to accounts, platforms, and systems required for service delivery</li>
                    <li>Review and provide timely feedback on deliverables</li>
                    <li>Ensure all content and materials provided to us do not infringe on third-party rights</li>
                    <li>Comply with all applicable laws and platform terms of service</li>
                    <li>Make payments according to agreed-upon terms</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Payment Terms */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Payment Terms</h2>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Fees and Invoicing</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Payment terms will be specified in your service agreement or proposal. Unless otherwise
                    agreed in writing:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Invoices are due within 30 days of receipt</li>
                    <li>Project-based work may require deposits before work commences</li>
                    <li>Recurring services are billed monthly in advance</li>
                  </ul>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Late Payments</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Late payments may incur interest at a rate of 1.5% per month (18% annually) or the
                    maximum rate permitted by law, whichever is lower. We reserve the right to suspend
                    services for accounts with outstanding balances exceeding 30 days.
                  </p>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Advertising Spend</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    For paid advertising services, advertising spend is separate from our management fees
                    and is billed directly by the advertising platforms (Google, Meta, etc.) or as
                    specified in your service agreement.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Intellectual Property */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Intellectual Property</h2>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Client Materials</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    You retain all ownership rights to materials, content, trademarks, and other
                    intellectual property you provide to us. You grant us a non-exclusive license to
                    use these materials solely for the purpose of providing our services.
                  </p>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Work Product</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Unless otherwise specified in writing, upon full payment, you will own the final
                    deliverables created specifically for your project. We retain ownership of:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Our proprietary tools, processes, and methodologies</li>
                    <li>General knowledge and skills developed during the engagement</li>
                    <li>Pre-existing materials incorporated into deliverables</li>
                  </ul>

                  <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Portfolio Rights</h3>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Unless you notify us otherwise in writing, we may include general descriptions of
                    our work with you in our portfolio, case studies, and marketing materials.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Confidentiality */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Confidentiality</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Both parties agree to maintain the confidentiality of proprietary information
                    shared during the engagement. This includes business strategies, financial data,
                    customer information, and other sensitive materials.
                  </p>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Confidential information does not include information that is publicly available,
                    independently developed, or rightfully obtained from third parties.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Limitation of Liability */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Limitation of Liability</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, BKND DEVELOPMENT SHALL NOT BE LIABLE FOR
                    ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                    BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF
                    OR RELATED TO THESE TERMS OR OUR SERVICES.
                  </p>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Our total liability for any claim arising from these Terms or our services shall
                    not exceed the total amount paid by you to us in the six (6) months preceding the
                    claim.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Disclaimer of Warranties */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Disclaimer of Warranties</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
                    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
                    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    While we strive to deliver results, we do not guarantee specific outcomes such as
                    search rankings, traffic levels, conversion rates, or revenue increases, as these
                    depend on many factors outside our control.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Indemnification */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Indemnification</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    You agree to indemnify, defend, and hold harmless BKND Development, its officers,
                    directors, employees, and agents from any claims, damages, losses, or expenses
                    (including reasonable attorneys&apos; fees) arising from:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Your breach of these Terms</li>
                    <li>Your violation of any law or third-party rights</li>
                    <li>Content or materials you provide to us</li>
                    <li>Your use of our services</li>
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Termination */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Termination</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Either party may terminate service agreements according to the terms specified in
                    the applicable service agreement or proposal. In the absence of specific terms:
                  </p>
                  <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                    <li>Monthly services may be terminated with 30 days written notice</li>
                    <li>Project-based work may be terminated for cause with 15 days written notice</li>
                    <li>We may terminate immediately for non-payment or material breach</li>
                  </ul>
                  <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                    Upon termination, you remain responsible for payment of all services rendered
                    through the termination date.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Governing Law */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Governing Law</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the
                    State of New Jersey, without regard to its conflict of law provisions. Any disputes
                    arising from these Terms or our services shall be resolved in the state or federal
                    courts located in New Jersey, and you consent to the personal jurisdiction of such courts.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Dispute Resolution */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Dispute Resolution</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    Before initiating any legal proceedings, the parties agree to attempt to resolve
                    disputes through good-faith negotiation. If negotiation fails, the parties may
                    pursue mediation before resorting to litigation.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Modifications */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Modifications to Terms</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will provide notice of
                    material changes by posting the updated Terms on our website with a new &quot;Last updated&quot;
                    date. Your continued use of our services after such modifications constitutes your
                    acceptance of the updated Terms.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Severability */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Severability</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that
                    provision shall be limited or eliminated to the minimum extent necessary, and the
                    remaining provisions shall remain in full force and effect.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Entire Agreement */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Entire Agreement</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    These Terms, together with any applicable service agreements, proposals, or
                    statements of work, constitute the entire agreement between you and BKND Development
                    regarding the subject matter herein and supersede all prior agreements and
                    understandings.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Contact Information */}
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4 pb-8">
                  <h2 className="text-[#1D1D1F] text-2xl font-semibold">Contact Us</h2>
                  <p className="text-[#1D1D1F] text-base leading-relaxed">
                    If you have any questions about these Terms, please contact us:
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
