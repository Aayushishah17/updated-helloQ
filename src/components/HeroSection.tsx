// import { motion } from "framer-motion";
// import { Apple, Play } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Video background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ willChange: "transform", transform: "translate3d(0,0,0)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
//       >
//         <source src="/videos/hero-bg.mp4" type="video/mp4" />
//       </video>

//       {/* Rainbow overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-coral/30 via-golden/20 to-lavender/30" />
//       <div className="absolute inset-0 bg-black/35" />

//       {/* Floating blobs */}
//       <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink/20 blur-3xl" style={{ animation: "blob 10s ease-in-out infinite" }} />
//       <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lavender/20 blur-3xl" style={{ animation: "blob 12s ease-in-out infinite 2s" }} />
//       <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-sky/15 blur-3xl" style={{ animation: "blob 14s ease-in-out infinite 4s" }} />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center bg-[#fffafa]/0">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6"
//           style={{ fontFamily: "'Fredoka', sans-serif" }}
//         >
//           Find Your Perfect
//           <br />
//           <span className="text-gradient-rainbow">Connection</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.2 }}
//           className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-10"
//           style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
//         >
//           Meet new people, express yourself freely, and connect with a vibrant
//           inclusive community on HelloQ.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.4 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <a href="#download" className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base" style={{ fontFamily: "'Fredoka', sans-serif" }}>
//             <Apple className="w-5 h-5" />
//             Download on App Store
//           </a>
//           <a href="#download" className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base" style={{ fontFamily: "'Fredoka', sans-serif" }}>
//             <Play className="w-5 h-5" />
//             Get it on Google Play
//           </a>
//         </motion.div>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
//     </section>
//   );
// };

// export default HeroSection;
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: "transform", transform: "translate3d(0,0,0)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Rainbow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral/30 via-golden/20 to-lavender/30" />
      <div className="absolute inset-0 bg-black/35" />

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink/20 blur-3xl" style={{ animation: "blob 10s ease-in-out infinite" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lavender/20 blur-3xl" style={{ animation: "blob 12s ease-in-out infinite 2s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-sky/15 blur-3xl" style={{ animation: "blob 14s ease-in-out infinite 4s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-white mb-6"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
         
          <br />
          <span className="text-gradient-rainbow">
            Meet Someone Worth Knowing
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-8"
          style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
        >
          HelloQ matches you with people who share your depth - through intelligent compatibility, not just a quick swipe.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a
            href="#download"
            className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <Apple className="w-5 h-5" />
            Download HelloQ
          </a>

          <a
            href="#how-it-works"
            className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <Play className="w-5 h-5" />
            See how it works
          </a>
        </motion.div>

        {/* Small text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-white/80"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          Free to join · Available on iOS & Android
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;