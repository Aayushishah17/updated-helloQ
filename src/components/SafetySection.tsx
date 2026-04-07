
// import { motion } from "framer-motion";
// import { ShieldCheck, Lock, BadgeCheck, Sparkles } from "lucide-react";

// const points = [
//   {
//     icon: ShieldCheck,
//     title: "Authenticity over performance",
//     desc: "We don't reward the most polished profile. We reward the most honest one.",
//   },
//   {
//     icon: Lock,
//     title: "Safety is non-negotiable",
//     desc: "Robust reporting, proactive moderation, and human support you can actually reach.",
//   },
//   {
//     icon: BadgeCheck,
//     title: "Inclusion, by design",
//     desc: "Every feature, every choice — made so that no one has to shrink themselves to fit in.",
//   },
//   {
//     icon: Sparkles,
//     title: "No shame, no judgment",
//     desc: "Whatever you're looking for, HelloQ meets you there. Curious, casual, committed — all welcome.",
//   },
// ];

// const SafetySection = () => (
//   <section id="safety" className="py-24 md:py-32 bg-background">
//     <div className="container mx-auto px-6">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="text-center mb-14"
//       >
//         <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
//           Built on <span className="text-gradient-rainbow">trust</span>
//         </h2>

//         <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//           HelloQ is built on the idea that the best connections happen when people feel safe, seen, and free to be themselves. That's not a feature — it's the foundation.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
//         {points.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:glow-rainbow"
//           >
//             <div className="w-14 h-14 rounded-xl bg-gradient-pink-purple flex items-center justify-center mb-5">
//               <p.icon className="w-7 h-7 text-primary-foreground" />
//             </div>

//             <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
//               {p.title}
//             </h3>

//             <p className="font-body text-muted-foreground leading-relaxed">
//               {p.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Label */}
      

//     </div>
//   </section>
// );

// export default SafetySection;

import { motion } from "framer-motion";
import { BadgeCheck, Lock, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    desc: "Every account goes through photo and identity verification so you know who you're actually talking to.",
  },
  {
    icon: Lock,
    title: "Privacy Controls",
    desc: "Your data, your rules. Hide your location, blur your photos, and decide exactly how much you share.",
  },
  {
    icon: ShieldCheck,
    title: "AI Moderation",
    desc: "Our systems detect and remove harmful content in real time — 24 hours a day, 7 days a week.",
  },
];

const SafetySection = () => (
  <section id="safety" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Confidence comes <span className="text-gradient-rainbow">built-in</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your wellbeing isn't a feature — it's the foundation everything else is built on.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:glow-rainbow"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-pink-purple flex items-center justify-center mb-5">
              <p.icon className="w-7 h-7 text-primary-foreground" />
            </div>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              {p.title}
            </h3>

            <p className="font-body text-muted-foreground leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default SafetySection;