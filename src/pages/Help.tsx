import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Help = () => {
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
              Emergency Resources
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you need immediate help.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-10 text-muted-foreground leading-relaxed shadow-sm">

            <section>
              <p>
                HelloQ cares about your safety beyond the app. If you're in danger or need immediate support, please reach out to the right services.
              </p>
            </section>

            {/* Emergency Services */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">🆘 Emergency Services</h2>
              <p>
                In an immediate emergency, always call your local emergency number (911 in the US, 999 in the UK, 112 in the EU).
              </p>
            </section>

            {/* Hotline */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">◎ National Domestic Violence Hotline</h2>
              <p className="text-foreground font-medium">
                1-800-799-7233 (US)
              </p>
              <p>24/7 confidential support for those experiencing abuse.</p>
            </section>

            {/* Crisis Line */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">◈ Crisis Text Line</h2>
              <p className="text-foreground font-medium">
                Text HOME to 741741 (US/UK/CA)
              </p>
              <p>Free, 24/7 crisis counselling via text.</p>
            </section>

            {/* HelloQ Safety */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">⊛ HelloQ Safety Team</h2>
              <p>
                Email{" "}
                <span className="text-foreground font-medium">
                  safety@helloq.com
                </span>{" "}
                for urgent, non-emergency safety concerns within our platform.
              </p>
            </section>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;