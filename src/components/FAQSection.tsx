import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How is HelloQ different from other dating apps?",
    a: "HelloQ is built around compatibility depth, not swipe volume. Our Spark Intelligence™ algorithm analyses values, communication styles, and genuine interests — not just profile photos — to surface connections that have real potential. We also prioritise quality conversations over rapid-fire matching.",
  },
  {
    q: "Is HelloQ free to use?",
    a: "Yes — HelloQ's core features are free, including profile creation, daily matches, and messaging. HelloQ Premium unlocks unlimited matches, Quiet Mode, advanced filters, and priority access to Circles events. You can explore meaningfully before ever spending a thing.",
  },
  {
    q: "What verification do you do on profile?",
    a: "Every HelloQ profile goes through photo verification using facial recognition technology to ensure users are who they say they are. Verified profiles display a clear badge. We also use AI to continuously monitor for suspicious behaviour and policy violations — so the community stays trustworthy.",
  },

  // ✅ NEW CONTENT ADDED

  {
    q: "How does HelloQ support all kinds of people and identities?",
    a: `HelloQ is designed to be a truly inclusive platform where everyone feels they belong. We welcome people from all backgrounds, identities, and orientations, creating a space where genuine connections can grow without judgment.
Beyond dating, HelloQ also acts as a community platform where users can interact, share experiences, and build meaningful relationships in a safe and respectful environment.`,
  },
  {
    q: "What does HelloQ mean by being inclusive?",
    a: `HelloQ believes inclusion means welcoming everyone without exceptions. We do not limit people based on identity, preferences, or background.
Our platform promotes respect, acceptance, and equality. Any behavior involving hate, discrimination, or harassment is strictly prohibited and results in immediate action.`,
  },
  {
    q: "Does HelloQ support social impact or community initiatives?",
    a: `Yes. HelloQ actively promotes values of respect, safety, and inclusivity.
We aim to build a digital environment that encourages healthy interactions and supports a positive community culture. As we grow, we continue exploring partnerships and initiatives that align with these values.`,
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 max-w-3xl">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Got questions? 
          <p><span className="text-gradient-rainbow">We've got good answers.</span></p>
        </h2>
      </motion.div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <AccordionItem
              value={`faq-${i}`}
              className="glass-card rounded-2xl px-6 border-none"
            >
              <AccordionTrigger className="font-heading text-lg font-semibold text-foreground hover:no-underline py-5 text-left">
                {f.q}
              </AccordionTrigger>

              <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed whitespace-pre-line">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

    </div>
  </section>
);

export default FAQSection;