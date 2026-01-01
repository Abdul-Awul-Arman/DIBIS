const curriculumData = [
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
    speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
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
    speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
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
    speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
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
    speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
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
            ১৭ জানুয়ারি ২০২৫ জুমআবার থেকে 
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
          <div className="absolute left-1/2 top-0  bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block bg-[#6ec1d6] shadow-[0_0_17.1218px_rgba(110,193,214,0.73)]"  />

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
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${
                      isLeft ? "left-1/2 ml-8" : "right-1/2 mr-8"
                    }`}
                  >
                    <div className="text-center">
                      <span className="block text-4xl  text-accent">{event.topic}</span>
                     
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-60px)] ${
                      isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group">
                      {/* Mobile Date */}
                      <div className="md:hidden flex items-center gap-2 mb-3 text-muted-foreground text-sm">
                         <div className="text-center">
                      <span className="block text-4xl  text-accent">{event.topic}</span>
                     
                    </div>
                      </div>

                      

                      {/* Topic */}
                      <h3 className="text-foreground font-medium mb-4 leading-snug">
                        {event.topic}
                      </h3>

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
                        href="#registration"
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
      
    </section>
  );
};

export default ScheduleSection;
