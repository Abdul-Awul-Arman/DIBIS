import calligraphyBg from "@/assets/calligraphy-background-stroke.png";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0 gradient-background" />
      
      {/* Calligraphy Background */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-40">
        <img
          src={calligraphyBg}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[2] pointer-events-none opacity-[0.025] noise-overlay" />

      {/* Glow Effects */}
      <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
        <div
          className="absolute glow-teal rounded-full blur-3xl"
          style={{
            bottom: "-15%",
            left: "-10%",
            width: "55%",
            height: "55%",
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute glow-teal rounded-full blur-3xl"
          style={{
            top: "-20%",
            right: "-15%",
            width: "50%",
            height: "50%",
            background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="max-w-[300px]" />
            </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8"
        > 
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm uppercase tracking-wider text-foreground">
          কুরআন ও সুন্নাহ আলোকে, সালাফের পথে
          </span>
        </motion.div>
 
        {/* Title */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6"
        >
          <span className="text-foreground">
            ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ
          </span>
        
        </motion.h1> */}

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
         
সালাফদের মানহাজের আলোকে সঠিক আক্বিদাহ ও প্রকৃত আমল শিক্ষা প্রদানের উদ্দেশ্যে এবং সহীহ দ্বীনের দাওয়াত সর্বত্র ছড়িয়ে দেওয়ার প্রত্যয় নিয়ে আমাদের এই আয়োজন। মানুষের আক্বীদা, আমল-আখলাক ও দৈনন্দিন মুয়ামালাত পরিশুদ্ধ করাই কোর্সের লক্ষ ও উদ্দেশ্য। কোর্সটি সাজানো হয়েছে আক্বীদা, ফিক্বহুল উসরাহ, ফিক্বহুল ইবাদাত এবং সিরাহ বিষয়ের আলোকে। 

        </motion.p>
        <div className="flex justify-center">
           <motion.a
          href="#registration"
          // Added: 'relative', 'overflow-hidden', inner shadow for static gloss, and ring for edge highlight
          className="relative overflow-hidden flex max-w-[280px] h-16 justify-between items-center gap-1 mt-4 px-4 py-2 bg-cta text-cta-foreground rounded-full text-md font-medium hover:bg-cta/90 transition-all duration-300 group-hover:scale-105 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ring-1 ring-white/10"
        >
          {/* This is the shine that runs forever */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            initial={{ x: "-150%" }}
            animate={{ x: "350%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,   // Adjusts how fast the shine moves
              repeatDelay: .5,  // Adjusts how long it waits before shining again
              ease: "easeInOut",
            }}
          />

          {/* Content (Z-index ensures text stays on top of the shine) */}
          <div className="relative z-10 flex justify-between items-center w-full">
            রেজিস্ট্রেশন করতে এখানে ক্লিক করুন
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.a>
        </div>

      </div>
    
    </section>
  );
};

export default HeroSection;
