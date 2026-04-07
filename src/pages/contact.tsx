
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("We'll get back to you within 24–48 hours");
  };

  return (
    <div className="min-h-screen bg-purple-600/30">

      <Navbar />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>

            <p className="text-muted-foreground text-lg">
              We're real people. Say hello.
            </p>
          </div>

          {/* MAIN CARD */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-12 shadow-sm">

            {/* INTRO */}
            <section className="text-muted-foreground leading-relaxed">
              <p>
                Got a question, a concern, or just some feedback? Our team genuinely reads every message — and we reply. Usually within 24–48 hours.
              </p>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="space-y-6 text-muted-foreground">
              <h2 className="text-2xl font-semibold text-foreground">How can we help?</h2>

              <div>
                <p className="font-semibold text-foreground">General Inquiries</p>
                <p>hello@helloq.com</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Safety & Report an Issue</p>
                <p>safety@helloq.com — monitored 24/7.</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Press & Media</p>
                <p>press@helloq.com</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Bug Reports & Technical Support</p>
                <p>support@helloq.com or use in-app support in Settings → Help.</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Feedback & Suggestions</p>
                <p>hello@helloq.com — we read everything.</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Before you write — check the FAQ</p>
                <p>Many common questions are already answered in our FAQ section.</p>
              </div>
            </section>

            {/* FORM */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h2>

              {/* <p className="text-muted-foreground mb-6">
                We'll get back to you within 24–48 hours, Monday through Sunday.
              </p> */}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* BUTTON */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-grey px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Send Message →
                  </button>
                </div>

              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By submitting this form, you agree to our Privacy Policy. We never share your contact details with third parties.
              </p>

              
            </section>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;