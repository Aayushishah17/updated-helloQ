import { motion } from "framer-motion";

const CommunityGradientSection = () => (
  <section id="community" className="relative py-28 md:py-36 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-community" style={{ backgroundSize: "300% 300%", animation: "gradient-shift 10s ease infinite" }} />
    <div className="absolute inset-0 backdrop-blur-sm" />
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight"
      >
       We believe everyone deserves to feel at home here.
      </motion.h2>
    </div>
  </section>
);

export default CommunityGradientSection;
