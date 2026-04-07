// import { motion } from "framer-motion";

// const CommunityTextSection = () => (
//   <section className="py-24 md:py-32 bg-background">
//     <div className="container mx-auto px-6 text-center">
//       <motion.h2
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-rainbow leading-tight max-w-4xl mx-auto"
//         style={{ filter: "drop-shadow(0 0 30px rgba(255, 79, 216, 0.15))" }}
//       >
//         Connect with people who celebrate who you are.
//       </motion.h2>
//     </div>
//   </section>
// );

// export default CommunityTextSection;
import { motion } from "framer-motion";

const CommunityTextSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-rainbow leading-tight max-w-4xl mx-auto"
        style={{ filter: "drop-shadow(0 0 30px rgba(255, 79, 216, 0.15))" }}
      >
        Connect with people who celebrate who you are.
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        Most apps are built for volume. HelloQ is built for quality. We believe 
        the right person isn&apos;t found — they&apos;re matched. Our intelligence 
        works quietly behind the scenes, so your conversations can take centre stage.
      </motion.p>

    </div>
  </section>
);

export default CommunityTextSection;
