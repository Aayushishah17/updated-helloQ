import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-purple-600/30">

      <Navbar />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
          </div>

          {/* Content */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-10 text-muted-foreground leading-relaxed shadow-sm">

            {/* 1 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By downloading, accessing, or using HelloQ (the "Platform"), you agree to be bound by these Terms of Service ("Terms").
                If you do not agree, please do not use the Platform. These Terms constitute a legally binding agreement between you and HelloQ Inc. ("HelloQ," "we," "us," or "our").
                We may update these Terms from time to time. Continued use of the Platform after changes take effect constitutes your acceptance of the revised Terms.
                We'll notify you of significant changes in advance.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Eligibility</h2>
              <p>To use HelloQ, you must:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into a binding agreement</li>
                <li>Not be prohibited from using the Platform under the laws of your jurisdiction</li>
                <li>Not have been previously removed from HelloQ for violating these Terms</li>
              </ul>
              <p className="mt-2">
                By creating an account, you confirm that you meet all eligibility requirements. We reserve the right to verify your eligibility at any time.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts and Profiles</h2>
              <p>You are responsible for maintaining the security of your account. This means:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Using a strong, unique password and keeping it confidential</li>
                <li>Not sharing your login credentials with anyone</li>
                <li>Notifying us immediately at support@helloq.app if you suspect unauthorised access</li>
                <li>Ensuring all profile information is accurate, truthful, and up to date</li>
                <li>Not creating more than one account</li>
                <li>Not creating an account on behalf of another person without their consent</li>
              </ul>
              <p className="mt-2">
                Your profile must represent you authentically. Misleading or false profiles violate these Terms and undermine the trust of our community.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. User Conduct</h2>
              <p>HelloQ is a space for respectful, genuine human connection. You agree to treat others with dignity at all times.</p>
              <p className="mt-2">You must not:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Post false, misleading, or impersonated information in your profile</li>
                <li>Send unsolicited, harassing, threatening, or abusive messages</li>
                <li>Share explicit, graphic, or sexual content without the explicit consent of the recipient</li>
                <li>Engage in discrimination, hate speech, or targeted harassment of any kind</li>
                <li>Solicit money, gifts, or financial transactions from other users</li>
                <li>Promote or advertise external services, products, or third-party apps</li>
                <li>Use HelloQ to solicit or facilitate illegal activities</li>
                <li>Attempt to gain unauthorised access to HelloQ's systems or other users' accounts</li>
                <li>Scrape, harvest, or extract user data through automated means</li>
                <li>Use bots, scripts, or fake accounts to interact with users or game our matching systems</li>
                <li>Post content that infringes on third-party intellectual property rights</li>
              </ul>

              <p className="mt-4">You are encouraged to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Engage in conversations with genuine curiosity and respect</li>
                <li>Report profiles or behaviour that concern you</li>
                <li>Use our privacy and safety tools to shape your experience</li>
                <li>Provide honest feedback so we can keep improving</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Content Ownership and Licensing</h2>
              <p>
                You retain ownership of any content you create and upload to HelloQ, including your photos, bio, and messages.
              </p>
              <p className="mt-2">
                By submitting content to the Platform, you grant HelloQ a non-exclusive, worldwide, royalty-free licence to use, store, display, reproduce, and process your content solely for the purpose of operating and improving the Platform.
              </p>
              <p className="mt-2">
                This licence ends when you delete your content or account.
              </p>
              <p className="mt-2">
                HelloQ's own content — including our name, logo, design, and software — is protected by intellectual property law. You may not reproduce, distribute, or create derivative works from it without our express written permission.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Matching and Communication Features</h2>
              <p>
                HelloQ's matching features, including Spark Intelligence™, are provided as a convenience tool. We do not guarantee specific match outcomes or results.
              </p>
              <p className="mt-2">
                Matches are algorithmically generated based on compatibility signals, but chemistry and connection are ultimately yours to explore.
              </p>
              <p className="mt-2">
                Messages sent through HelloQ are private between matched users. However, we may review flagged content for moderation purposes, in accordance with our Privacy Policy.
              </p>
              <p className="mt-2">
                HelloQ may introduce, modify, or remove features at any time. We'll communicate significant changes in advance where possible.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Safety and Moderation</h2>
              <p>
                We are committed to maintaining a safe environment on HelloQ. Our moderation team and AI systems monitor the Platform continuously.
              </p>
              <p className="mt-2">We may:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Remove content that violates these Terms or our Community Guidelines</li>
                <li>Issue warnings, restrict features, or suspend accounts for violations</li>
                <li>Cooperate with law enforcement where required by law or necessary to protect user safety</li>
              </ul>
              <p className="mt-2">
                If you encounter behaviour that makes you uncomfortable, please use our in-app block and report tools or contact us at safety@helloq.app.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Payments and Subscriptions</h2>
              <p>HelloQ offers free and premium subscription tiers.</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date</li>
                <li>You may cancel your subscription at any time</li>
                <li>Payments are processed by third-party providers</li>
                <li>HelloQ does not store full payment card details</li>
                <li>Refunds depend on provider policies</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Termination and Account Suspension</h2>
              <p>
               You may delete your account at any time in Settings → Account → Delete Account. Deletion removes your profile and data in accordance with our Privacy Policy.
               </p>
               <p>
HelloQ may suspend or terminate your account if:
</p>
<ul className="list-disc ml-6 space-y-1">
  <li>You violate these Terms or our Community Guidelines</li>
  <li>We detect fraudulent, harmful, or illegal behaviour</li>
  <li>We are required to do so by law</li>
</ul>
<p className="mt-2">
  If we suspend or terminate your account, you will be notified where reasonably possible. You may appeal decisions by contacting support@helloq.app.
</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Disclaimers and Limitation of Liability</h2>
              <p>
                HelloQ is provided "as is" without warranties of any kind. We do not guarantee that the Platform will be error-free, uninterrupted, or that any particular match will result in a meaningful connection.</p>
<p>To the maximum extent permitted by applicable law, HelloQ's liability for any claim arising from your use of the Platform is limited to the amount you paid us in the 12 months preceding the claim.</p>
<p>We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, reputation, or personal relationships.</p>
<p>HelloQ is not responsible for the actions of other users on or off the Platform. We encourage you to use common sense and our safety tools when meeting people from the internet in real life.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Governing Law</h2>
              <p>
               These Terms are governed by the laws of the jurisdiction in which HelloQ Inc. is incorporated, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
              </p>
              <p>
                If any provision of these Terms is found invalid or unenforceable, the remaining provisions continue to apply in full.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact Information</h2>
              <p>For questions about these Terms, please contact us:</p>
              <p>Email: <span className="text-foreground font-medium">legal@helloq.com</span></p>
              <p>General Support: <span className="text-foreground font-medium">support@helloq.com</span></p>
            </section>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;