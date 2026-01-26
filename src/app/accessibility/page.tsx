import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Accessibility Statement | BKND Development',
  description: 'BKND Development is committed to digital accessibility. Learn about our WCAG 2.1 compliance efforts and how to contact us with accessibility concerns.',
};

export default function AccessibilityStatement() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="section-py-md border-b border-[#D2D2D7]">
          <div className="container-sg">
            <div className="max-w-3xl">
              <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.1em] uppercase mb-4">
                Accessibility
              </p>
              <h1 className="text-[#1D1D1F] text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Accessibility Statement
              </h1>
              <p className="text-[#86868B] text-lg">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-py-md">
          <div className="container-sg">
            <div className="max-w-3xl space-y-12">

              {/* Our Commitment */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Our Commitment to Accessibility</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  BKND Development is committed to ensuring digital accessibility for people with
                  disabilities. We are continually improving the user experience for everyone and
                  applying the relevant accessibility standards to guarantee we provide equal access
                  to all users.
                </p>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  We believe that the web should be accessible to all, regardless of ability or
                  technology used to access it. Accessibility is not just a legal requirement;
                  it&apos;s a core value that reflects our commitment to inclusivity.
                </p>
              </div>

              {/* Conformance Status */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Conformance Status</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  The Web Content Accessibility Guidelines (WCAG) defines requirements for designers
                  and developers to improve accessibility for people with disabilities. It defines
                  three levels of conformance: Level A, Level AA, and Level AAA.
                </p>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  BKND Development strives to conform to WCAG 2.1 Level AA standards. We are actively
                  working to achieve and maintain this level of accessibility across our website.
                </p>
              </div>

              {/* Accessibility Features */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Accessibility Features</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  We have implemented the following accessibility features on our website:
                </p>

                <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Navigation and Structure</h3>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Consistent and predictable navigation throughout the site</li>
                  <li>Clear page structure using semantic HTML headings</li>
                  <li>Skip navigation links to bypass repetitive content</li>
                  <li>Logical tab order for keyboard navigation</li>
                  <li>Breadcrumbs and clear page titles for orientation</li>
                </ul>

                <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Visual Design</h3>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Sufficient color contrast between text and backgrounds</li>
                  <li>Text can be resized up to 200% without loss of content or functionality</li>
                  <li>Color is not used as the sole means of conveying information</li>
                  <li>Focus indicators are visible for keyboard users</li>
                  <li>Responsive design that works across different screen sizes</li>
                </ul>

                <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Content</h3>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Alternative text for images and non-text content</li>
                  <li>Descriptive link text that indicates the purpose of each link</li>
                  <li>Clear and simple language</li>
                  <li>Proper labeling of form fields and error messages</li>
                  <li>ARIA labels and roles where appropriate</li>
                </ul>

                <h3 className="text-[#1D1D1F] text-lg font-medium mt-6">Interactive Elements</h3>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>All functionality available via keyboard</li>
                  <li>Form inputs with visible labels and clear instructions</li>
                  <li>Error identification and suggestions for correction</li>
                  <li>No time limits that cannot be extended or disabled</li>
                  <li>No content that flashes more than three times per second</li>
                </ul>
              </div>

              {/* Assistive Technologies */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Compatibility with Assistive Technologies</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  Our website is designed to be compatible with the following assistive technologies:
                </p>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                  <li>Browser accessibility features and extensions</li>
                </ul>
                <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                  We recommend using the latest versions of browsers and assistive technologies for
                  the best experience.
                </p>
              </div>

              {/* Known Limitations */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Known Limitations</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  While we strive for comprehensive accessibility, some areas may have limitations:
                </p>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Some older PDF documents may not be fully accessible</li>
                  <li>Third-party content or embedded applications may not meet all accessibility standards</li>
                  <li>Some complex interactive features may require additional accessibility improvements</li>
                </ul>
                <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                  We are actively working to address these limitations and improve accessibility
                  throughout our website.
                </p>
              </div>

              {/* Feedback */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Feedback and Assistance</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  We welcome your feedback on the accessibility of our website. If you encounter any
                  accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="bg-[#F5F5F7] rounded-lg p-6 mt-4">
                  <p className="text-[#1D1D1F] text-base font-medium">BKND Development</p>
                  <p className="text-[#1D1D1F] text-base">Accessibility Coordinator</p>
                  <p className="text-[#1D1D1F] text-base mt-2">30 Union St, Unit 13</p>
                  <p className="text-[#1D1D1F] text-base">Elizabeth, NJ 07202</p>
                  <p className="text-[#1D1D1F] text-base mt-2">
                    Email: <Link href="mailto:info@bknddevelopment.com" className="text-[#00D4FF] hover:underline">info@bknddevelopment.com</Link>
                  </p>
                  <p className="text-[#1D1D1F] text-base">
                    Phone: <Link href="tel:+19735185600" className="text-[#00D4FF] hover:underline">(973) 518-5600</Link>
                  </p>
                </div>
                <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                  When contacting us about an accessibility issue, please include:
                </p>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>A description of the accessibility problem you encountered</li>
                  <li>The URL or page where you encountered the issue</li>
                  <li>The browser and assistive technology you were using</li>
                  <li>Any other information that might help us understand and address the issue</li>
                </ul>
                <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                  We will make reasonable efforts to respond to accessibility feedback within 5
                  business days and to address reported issues in a timely manner.
                </p>
              </div>

              {/* Alternative Access */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Alternative Access</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  If you are unable to access any content or use any features of our website due to
                  a disability, please contact us and we will work with you to provide the information
                  or service you need through an alternative accessible format.
                </p>
              </div>

              {/* Third-Party Content */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Third-Party Content</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  Our website may contain links to third-party websites and embedded content from
                  external services. We are not responsible for the accessibility of third-party
                  content. However, we encourage you to contact us if you encounter accessibility
                  issues with any linked content, and we will work with those providers when possible.
                </p>
              </div>

              {/* Continuous Improvement */}
              <div className="space-y-4">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Continuous Improvement</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  We are committed to continuously improving the accessibility of our website. Our
                  ongoing efforts include:
                </p>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Regular accessibility audits and testing</li>
                  <li>Incorporating accessibility into our design and development process</li>
                  <li>Training our team on accessibility best practices</li>
                  <li>Staying current with evolving accessibility standards and guidelines</li>
                  <li>Gathering and acting on user feedback</li>
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4 pb-8">
                <h2 className="text-[#1D1D1F] text-2xl font-semibold">Legal Compliance</h2>
                <p className="text-[#1D1D1F] text-base leading-relaxed">
                  This accessibility statement applies to the BKND Development website
                  (bknddevelopment.com). We are committed to compliance with:
                </p>
                <ul className="list-disc list-inside text-[#1D1D1F] text-base leading-relaxed space-y-2 ml-4">
                  <li>Americans with Disabilities Act (ADA)</li>
                  <li>Section 508 of the Rehabilitation Act</li>
                  <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                </ul>
                <p className="text-[#1D1D1F] text-base leading-relaxed mt-4">
                  This statement was created on January 2025 and is reviewed and updated periodically
                  to reflect changes to our website and accessibility standards.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
