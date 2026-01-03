import { motion } from "framer-motion";
import abdullahilKafiMadani from "../assets/abdullahil_kafi_madani.svg";
import akmalHossainMadani from "../assets/akmal_hossain_madani.svg";
import majedulIslamMadani from "../assets/majedul_islam_madani.svg";
import sakhawatHossainJazani from "../assets/sakhawat_hossain_jazani.svg";


const curriculumData = [
  {
    topic: "ফিকহুল উসরা",
    speaker: "শাইখ ড. আব্দুল্লাহিল কাফী মাদানী",
    speakerDegree: "পি.এইচ.ডি., মদিনা ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব",
    syllabus: 
     [
  "১. নিকাহের বিধান ও শর্তাবলি",
  "২. স্বামী-স্ত্রীর অধিকার ও দায়িত্ব",
  "৩. তালাক, খোলা ও ফাসখের বিধান",
  "৪. ভরণপোষণ ও পারিবারিক দায়-দায়িত্ব",
  "৫. সন্তান প্রতিপালন ও পারিবারিক তরবিয়াহ"

    ],
    speakerImage: abdullahilKafiMadani,
    syllabusPdf:"/assets/pdf/DIBIS (ফিকহুল উসরা).pdf"
  },
  {
    topic: "আক্বীদা",
    speaker: "শাইখ মোঃ মাজেদুল ইসলাম মাদানি",
    speakerDegree: "অনার্স, মদিনা ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব",
    syllabus: [
      "১. আক্বীদার সংজ্ঞা, বিষয়বস্তু ও গুরুত্ব",
      "২. দ্বীনের স্তর, ঈমানের রুকনসমূহ ও ইমানের ফযিলত।",
      "৩. তাওহিদের প্রকারভেদ, রুকনসমূহের প্রতি ঈমান আনার অর্থ।",
      "৪. ঈমান ভঙ্গকারী বিষয়সমূহ, তাগুতের প্রকারভেদ, কিয়ামতের আলামত।",
      "৫. আহলুস সুন্নাহ ওয়াল জামা’আত এর পরিচয়, ঈসা (আ.), ইমাম মাহদির আগমণ, ইয়াজূজ-মাজূজ।"
    ],
    speakerImage: majedulIslamMadani,
    syllabusPdf:"/assets/pdf/DIBIS (আক্বীদা).pdf"
  },
  {
    topic: "সিরাহ",
    speaker: "শাইখ আকমাল হোসাইন মাদানী",
    speakerDegree: "অনার্স, মদিনা ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব",
    syllabus: [
      "১. সিরাহ শাস্ত্রের উৎপত্তি ও ক্রমবিকাশ, আরবের রাজনৈতিক ও ধর্মীয় অবস্থা, রাসূল (সা.) এর জন্ম, শৈশব ইত্যাদি।",
      "২. রাসূল (সা.) এর বেড়ে ওঠা, নবুওত লাভ, অহি, অহির বিরতিকাল ও প্রকারভেদ ইত্যাদি।",
      "৩. গোপনে ইসলাম প্রচার, প্রথম যুগের ইসলাম গ্রহণকারীগণ, সালাতের আদেশ, প্রকাশ্যে ইসলাম প্রচার ইত্যাদি।",
      "৪. দুঃখের বছর, তায়েফ গমন, আয়েশা (রা.) এর সাথে বিবাহ, মদিনায় হিজরত, বিভিন্ন যুদ্ধের ঘটনা ইত্যাদি।",
      "৫. রাসূল (সা.) কে যাদু, হত্যার চেষ্টা, প্রতিনিধি দলের আগমন, বিদায় হজ্জ, রাসূল (সা.) এর পরিবার আচার-আচরণ ও গুণাবলী, মুজিজা, মিথ্যা বানোয়াট বর্ণনা ইত্যাদি।"
    ],
    speakerImage: akmalHossainMadani,
    syllabusPdf:"/assets/pdf/DIBIS (সিরাহ).pdf"
  },
  {
    topic: "ফিকহুল ইবাদাত",
    speaker: "শাইখ সাখাওয়াত হোসাইন জাযানী",
    speakerDegree: "অনার্স, জাযান বিশ্ববিদ্যালয়, সৌদি আরব",
    syllabus: [
      "১. ফিকহ ও ফিকহুল ইবাদাত-এর পরিচয়, লক্ষ্য-উদ্দেশ্য, প্রয়োজনিয়তা, ইখতিলাফের কারণ ও করণীয় ইত্যাদি।",
      "২. তাহারাত-এর পরিচয়, সালাতের বিবরণ, আযান, ইমামতি, জামায়াতে সালাত আদায়, সালাত পরবর্তী যিকির ইত্যাদি।",
      "৩. রমাযান মাসের গুরুত্ব, সিয়াম, কুরআন, ছিয়ামের হুকুম ও দলিল।",
      "৪. যাকাতের প্রকারভেদ, স্বর্ণ-রৌপ্য, ঋণ, ব্যবসায়িক পণ্য, নগদ অর্থ, গৃহপালিত পশুর যাকাত।",
      "৫. ভূমি ও জমিতে উৎপাদিত পণ্যের যাকাত, যাকাতুল ফিতর, যাকাত বণ্টনের খাত, হজ্জ ও ওমরায় করণীয়।"
    ],
    speakerImage: sakhawatHossainJazani,
    syllabusPdf:"/assets/pdf/DIBIS (ফিকহুল ইবাদাত).pdf"
  },


];


const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative z-10 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className=" text-4xl md:text-5xl text-foreground mb-4">
            কোর্স কারিকুলাম
          </h2>
          <p className="text-muted-foreground text-lg">
           ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-accent text-sm">সিলেট</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-accent text-sm">বাংলাদেশ</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0  bottom-0 w-px -translate-x-1/2 hidden md:block  bg-[#6ec1d6] shadow-[0_0_17.1218px_rgba(110,193,214,0.73)]" />

          {/* Events */}
          <div className="space-y-12 md:space-y-0">
            {curriculumData.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative md:flex md:items-center md:min-h-[200px]"
                >
                  {/* Date Marker - Center */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#6ec1d6] shadow-[0_0_17.1218px_rgba(110,193,214,0.73)]" />
                  </div>

                  {/* Topic */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isLeft ? "left-1/2 ml-8" : "right-1/2 mr-8"
                      }`}
                  >
                    <div className="text-center">
                      <span className="block text-4xl  text-accent">{event.topic}</span>

                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-60px)] ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                      }`}
                  >
                    <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group">
                      {/* Mobile Date */}
                      <div className="md:hidden flex items-center gap-2 mb-3 text-muted-foreground text-sm">
                        <div className="text-center">
                          <span className="block text-4xl  text-accent">{event.topic}</span>

                        </div>
                      </div>



                      {/* Speaker */}
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={event.speakerImage}
                          alt={event.speaker}
                          className="w-10 h-10 rounded-full object-cover border-2 border-accent/30"
                        />
                        <div>
                          <p className="text-accent text-sm font-medium">{event.speaker}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">{event.speakerDegree}</p>
                        </div>
                      </div>

                      {/* Syllaybus / Syllabus */}
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">পাঠ্যসূচি:</p>
                        <ul className=" list-inside text-sm text-foreground/80 space-y-1">
                          {event.syllabus.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Optional Button */}
                      <a
                        href={event.syllabusPdf}
                         target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center gap-1 mt-4 px-4 py-2 bg-cta text-cta-foreground rounded-full text-xs font-medium hover:bg-cta/90 transition-all duration-300 group-hover:scale-105"
                      >
                        
                        বিস্তারিত জানতে সিলেবাস দেখুন
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5" >



 <div className="flex justify-center">
           <motion.a
          href="https://crm.attaqwamasjidsylhet.com/attaqwamasjid/courses/diploma-in-basic-islamic-studies/enroll"
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

export default ScheduleSection;
