import { motion } from "framer-motion";
import phoneProfile from "@/assets/phone-profile.png";
import phoneDiscover from "@/assets/phone-discover.png";
import phoneChat from "@/assets/phone-chat.png";

const phones = [
  { src: phoneProfile, alt: "Profile Screen", delay: 0, rotate: -6, speed: "8s", x: -40 },
  { src: phoneDiscover, alt: "Discover Screen", delay: 0.2, rotate: 0, speed: "6s", center: true, x: 0 },
  { src: phoneChat, alt: "Chat Screen", delay: 0.4, rotate: 6, speed: "10s", x: 40 },
];

const ExperienceSection = () => (
  <section className="py-24 md:py-32 bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
      >
        Discover the <span className="text-gradient-rainbow">HelloQ</span> Experience
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {phones.map((phone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, x: phone.x, rotateY: phone.rotate * 3 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: phone.delay, type: "spring", stiffness: 60, damping: 12 }}
            whileHover={{ scale: 1.08, zIndex: 10, rotate: 0, transition: { duration: 0.4 } }}
            className={`relative group ${phone.center ? "md:scale-110 z-[5]" : "z-[1]"}`}
          >
            {/* Animated glow */}
            <motion.div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-rainbow blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-rainbow opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500" />

            <motion.div
              className="relative"
              animate={{
                y: [0, -12, 0],
                rotate: [phone.rotate, phone.rotate + 1.5, phone.rotate],
              }}
              transition={{
                duration: parseFloat(phone.speed),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              <img
                src={phone.src}
                alt={phone.alt}
                className={`w-56 md:w-64 ${phone.center ? "md:w-72" : ""} transition-transform duration-300`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
