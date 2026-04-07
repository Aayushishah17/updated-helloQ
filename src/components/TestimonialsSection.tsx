
// // import { motion } from "framer-motion";

// // const testimonials = [
// //   {
// //     quote: "I'd almost given up on dating apps. HelloQ felt different from the first match — like it actually read the room.",
// //     initials: "AK",
// //     name: "Amir K.",
// //     role: "Designer, Mumbai",
// //   },
// //   {
// //     quote: "The conversation prompts got us talking about things we wouldn't have brought up ourselves. Six months later, we're inseparable.",
// //     initials: "SR",
// //     name: "Sam R.",
// //     role: "Photographer, London",
// //   },
// //   {
// //     quote: "Finally an app where I don't have to explain or justify who I am. I just get to be here, and that changes everything.",
// //     initials: "JL",
// //     name: "Jordan L.",
// //     role: "Writer, New York",
// //   },
// // ];

// // const TestimonialsSection = () => (
// //   <section className="relative py-24 md:py-32 overflow-hidden">
    
// //     {/* Background */}
// //     <div
// //       className="absolute inset-0 bg-gradient-community"
// //       style={{ backgroundSize: "400% 400%", animation: "gradient-shift 15s ease infinite" }}
// //     />
// //     <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

// //     <div className="relative z-10 container mx-auto px-6">
      
// //       {/* Heading */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7 }}
// //         className="text-center mb-16"
// //       >
// //         <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
// //           People found something <span className="text-gradient-rainbow">real here</span>
// //         </h2>
// //       </motion.div>

// //       {/* Testimonials */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {testimonials.map((t, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: i * 0.1 }}
// //             className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
// //           >
// //             {/* Quote */}
// //             <p className="font-body text-foreground/90 text-base leading-relaxed mb-6">
// //               “{t.quote}”
// //             </p>

// //             {/* User Info */}
// //             <div className="flex items-center gap-4">
              
// //               {/* Initials Avatar */}
// //               <div className="w-12 h-12 rounded-full bg-gradient-pink-purple flex items-center justify-center text-white font-semibold">
// //                 {t.initials}
// //               </div>

// //               <div>
// //                 <p className="font-heading text-sm font-semibold text-foreground">
// //                   {t.name}
// //                 </p>
// //                 <p className="text-xs text-muted-foreground">
// //                   {t.role}
// //                 </p>
// //               </div>

// //             </div>
// //           </motion.div>
          
// //         ))}
        
// //       </div>

// //     </div>
// //   </section>
// // );

// // export default TestimonialsSection;

// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     quote: "I'd basically given up on dating apps. HelloQ felt different from my first match — like it actually understood what I was looking for, not just who I was looking like.",
//     initials: "AK",
//     name: "Alex K.",
//     role: "Member since 2024 · London",
//   },
//   {
//     quote: "The Depth Chat feature is genuinely clever. My now-partner and I started with a question about our unpopular opinions and somehow ended up talking for four hours. The rest is history.",
//     initials: "JM",
//     name: "Jordan M.",
//     role: "Member since 2023 · Toronto",
//   },
//   {
//     quote: "Finally — a dating app I don't feel anxious using. The privacy tools are thoughtful and I never feel like my data is being sold somewhere. That matters more than people say it does.",
//     initials: "SR",
//     name: "Sam R.",
//     role: "Member since 2024 · Sydney",
//   },
//   {
//     quote: "I met my person at a HelloQ Circles event — a small local book group. Neither of us expected anything. That's probably why it worked. The app creates space for things to happen naturally.",
//     initials: "TL",
//     name: "Taylor L.",
//     role: "Member since 2023 · New York",
//   },
// ];

// const TestimonialsSection = () => (
//   <section className="relative py-24 md:py-32 overflow-hidden">
    
//     {/* Background */}
//     <div
//       className="absolute inset-0 bg-gradient-community"
//       style={{ backgroundSize: "400% 400%", animation: "gradient-shift 15s ease infinite" }}
//     />
//     <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

//     <div className="relative z-10 container mx-auto px-6">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="text-center mb-16"
//       >
//         <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
//           Heard it from them <span className="text-gradient-rainbow">first</span>
//         </h2>
//       </motion.div>

//       {/* Testimonials */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {testimonials.map((t, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
//           >
//             {/* Stars */}
//             <div className="mb-4 text-yellow-400 text-sm">
//               ★★★★★
//             </div>

//             {/* Quote */}
//             <p className="font-body text-foreground/90 text-base leading-relaxed mb-6">
//               “{t.quote}”
//             </p>

//             {/* User Info */}
//             <div className="flex items-center gap-4">
              
//               {/* Initials Avatar */}
//               <div className="w-12 h-12 rounded-full bg-gradient-pink-purple flex items-center justify-center text-white font-semibold">
//                 {t.initials}
//               </div>

//               <div>
//                 <p className="font-heading text-sm font-semibold text-foreground">
//                   {t.name}
//                 </p>
//                 <p className="text-xs text-muted-foreground">
//                   {t.role}
//                 </p>
//               </div>

//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   </section>
// );

// export default TestimonialsSection;

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I'd basically given up on dating apps. HelloQ felt different from my first match like it actually understood what I was looking for, not just who I was looking like.",
    initials: "AK",
    name: "Alex K.",
    role: "Member since 2024 · London",
  },
  {
    quote: "The Depth Chat feature is genuinely clever. My now-partner and I started with a question about our unpopular opinions and somehow ended up talking for four hours. The rest is history.",
    initials: "JM",
    name: "Jordan M.",
    role: "Member since 2023 · Toronto",
  },
  {
    quote: "Finally a dating app I don't feel anxious using. The privacy tools are thoughtful and I never feel like my data is being sold somewhere.",
    initials: "SR",
    name: "Sam R.",
    role: "Member since 2024 · Sydney",
  },
  {
    quote: "I met my person at a HelloQ Circles event  a small local book group. The app creates space for things to happen naturally.",
    initials: "TL",
    name: "Taylor L.",
    role: "Member since 2023 · New York",
  },
];

const TestimonialsSection = () => (
  <section className="relative py-24 md:py-32">
    
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-community" />
    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

    <div className="relative z-10 container mx-auto px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Heard it from them <span className="text-gradient-rainbow">first</span>
        </h2>
      </motion.div>

      {/* Cards Row (NO SCROLL, CLEAN GRID) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 h-full flex flex-col justify-between"
          >
            {/* Top Content */}
            <div>
              {/* Stars */}
              <div className="mb-4 text-yellow-400 text-sm tracking-wide">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-foreground/90 text-base leading-relaxed">
                {t.quote}
              </p>
            </div>

            {/* Bottom User */}
            <div className="flex items-center gap-4 mt-8">
              
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-pink-purple flex items-center justify-center text-white font-semibold shrink-0">
                {t.initials}
              </div>

              {/* Name + Role */}
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.role}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;