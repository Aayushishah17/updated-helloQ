// import { motion } from "framer-motion";
// import { Apple, Play } from "lucide-react";

// const DownloadCTA = () => (
//   <section id="download" className="relative py-24 md:py-32 overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-rainbow" style={{ backgroundSize: "300% 300%", animation: "gradient-shift 8s ease infinite" }} />
    
//     <div className="relative z-10 container mx-auto px-6 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
//       >
//         Ready to Meet Someone New?
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.15 }}
//         className="font-heading text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto"
//       >
//         Download HelloQ today and start your journey.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="flex flex-col sm:flex-row gap-4 justify-center"
//       >
//         <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-foreground font-heading font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300">
//           <Apple className="w-5 h-5" />
//           Download on App Store
//         </a>
//         <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-foreground font-heading font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300">
//           <Play className="w-5 h-5" />
//           Get it on Google Play
//         </a>
//       </motion.div>
//     </div>
//   </section>
// );

// export default DownloadCTA;
 import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const DownloadCTA = () => (
  <section id="download" className="relative py-24 md:py-32 overflow-hidden">
    
    {/* Background */}
    <div
      className="absolute inset-0 bg-gradient-rainbow"
      style={{ backgroundSize: "300% 300%", animation: "gradient-shift 8s ease infinite" }}
    />

    <div className="relative z-10 container mx-auto px-6 text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
      >
        Ready to find your <span className="underline decoration-white/40">Q?</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-heading text-lg text-primary-foreground/90 mb-4 max-w-xl mx-auto"
      >
        <p>Your next great conversation is closer than you think.</p>
         Join HelloQ today and let's make it happen. 
      </motion.p>

      {/* Micro copy */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="text-sm text-primary-foreground/80 mb-10"
      >
        Download the app 
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-foreground font-heading font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Apple className="w-5 h-5" />
          App Store
        </a>

        <a
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-foreground font-heading font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Play className="w-5 h-5" />
          Google Play
        </a>
      </motion.div>

    </div>
  </section>
);

export default DownloadCTA;