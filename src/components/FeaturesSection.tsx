
// import { motion } from "framer-motion";
// import { Sparkles, Shield, UserCog } from "lucide-react";

// const features = [
//   {
//     icon: Sparkles,
//     title: "Q Compatibility Score",
//     desc: "Our algorithm goes beyond swiping. It learns your preferences, values, and vibe — then surfaces people who actually align with you.",
//   },
//   {
//     icon: Shield,
//     title: "Privacy by design",
//     desc: "Your data belongs to you. We don't sell it, we don't share it. Your profile is yours to control — always.",
//   },
//   {
//     icon: UserCog,
//     title: "Express yourself fully",
//     desc: "Tell your story your way. From pronouns to passions, your profile reflects who you really are — not just a highlight reel.",
//   },
// ];

// const FeaturesSection = () => (
//   <section id="features" className="py-24 md:py-32 bg-background">
//     <div className="container mx-auto px-6">
      
//       {/* Section Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="text-center mb-14"
//       >
//         <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
//           What makes us <span className="text-gradient-rainbow">different</span>
//         </h2>

//         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
//           Smart matching. Real people. No noise.
//         </p>

//         <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
//           Most apps flood you with options and hope for the best. HelloQ takes a different approach — we focus on compatibility, personality, and what actually matters to you.
//         </p>
//       </motion.div>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {features.map((f, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             whileHover={{ y: -8 }}
//             className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:shadow-xl hover:glow-rainbow"
//           >
//             <div className="w-14 h-14 rounded-xl bg-gradient-pink-purple flex items-center justify-center mb-5">
//               <f.icon className="w-7 h-7 text-primary-foreground" />
//             </div>

//             <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
//               {f.title}
//             </h3>

//             <p className="font-body text-muted-foreground leading-relaxed">
//               {f.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Label */}
      
//     </div>
//   </section>
// );

// export default FeaturesSection;

import { motion } from "framer-motion";
import { Sparkles, Palette, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Spark Intelligence™",
    desc: "Our AI goes beyond surface-level interests. It learns what lights you up — your quirks, values, and conversational style — to surface connections that feel less like luck and more like fate.",
  },
  {
    icon: Palette,
    title: "Your Canvas",
    desc: "Build a profile that feels like you — not a résumé. Choose your vibe, showcase your interests, add voice intros, and let your personality breathe. First impressions should be accurate ones.",
  },
  {
    icon: Users,
    title: "Circles & Gatherings",
    desc: "Find your people through shared passions. Join interest-based events, local hangouts, and themed groups — a lower-pressure way to meet new connections doing things you already love.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Dating, <span className="text-gradient-rainbow">thoughtfully redesigned</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
          From your very first profile question to your first date conversation, every step of HelloQ is designed to feel intentional, effortless, and genuinely you.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:shadow-xl hover:glow-rainbow"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-pink-purple flex items-center justify-center mb-5">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              {f.title}
            </h3>

            <p className="font-body text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default FeaturesSection;