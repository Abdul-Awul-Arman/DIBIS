import { motion } from "framer-motion";
import { CircleQuestionMark, Feather,Info   } from 'lucide-react';


const EventInfoSection = () => {
  return (
    <section className="relative z-10 py-0 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300"
>
   <Feather   className="w-12 h-12 text-accent mx-auto mb-4" />
  <h3 className=" text-2xl text-foreground mb-4">
    যাদের জন্য এই কোর্স
  </h3>
  <p className="text-muted-foreground text-sm leading-relaxed">
    আমাদের মধ্যে অনেকেই ইসলামের ওপর প্রাতিষ্ঠানিকভাবে পড়াশোনা করতে আগ্রহী।
    কিন্তু জেনারেল শিক্ষায় শিক্ষিত ছাত্র-ছাত্রী, গৃহিণী কিংবা চাকরিজীবীদের জন্য
    সমাজে ইসলামের প্রাতিষ্ঠানিক শিক্ষার সুযোগ প্রায় নেই বললেই চলে।
    <br /><br />
    এই জ্ঞানপিপাসু তালেবে ইলমদের চাহিদাকে সামনে রেখে ইসলামি জ্ঞান অর্জনের একটি
    সুব্যবস্থা করা হয়েছে। তাদের সময়, প্রয়োজন ও বাস্তবতাকে বিবেচনায় রেখে
    বিশেষভাবে পরিকল্পিত ও ডিজাইন করা হয়েছে
    <strong> “ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ”</strong> কোর্সটি।
  </p>
</motion.div>


         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300"
>
   <CircleQuestionMark   className="w-12 h-12 text-accent mx-auto mb-4" />
  <h3 className="text-2xl text-foreground mb-4">
    কোর্সটি কেন করবেন?
  </h3>
  <p className="text-muted-foreground text-sm leading-relaxed">
    আল্লাহ সুবহানাহু ওয়া তা‘আলা আমাদের জন্য ইলম অর্জন ফরজ করেছেন।
    একটি সুন্দর ও সুসংগঠিত ইসলামী জীবন গঠনের জন্য এবং রাসূল ﷺ–এর আদর্শ
    ও সুন্নাহ অনুযায়ী জীবন পরিচালনা করতে ইসলামের মৌলিক জ্ঞান অর্জন
    করা অপরিহার্য।
    <br /><br />
    এই লক্ষ্যকে সামনে রেখে
    <strong> “ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ”</strong> কোর্সটি
    এমনভাবে ডিজাইন করা হয়েছে, যাতে একজন তালেবে ইলম সহজ ও সুসংহতভাবে
    ইসলামের প্রয়োজনীয় মৌলিক জ্ঞান অর্জন করতে পারেন।
  </p>
</motion.div>
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300"
>
  <Info  className="w-12 h-12 text-accent mx-auto mb-4" />

  <h3 className="text-2xl text-foreground mb-4">
    কোর্স ভেন্যু
  </h3>

  <p className="text-muted-foreground text-sm leading-relaxed">
    <strong>ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ</strong> একটি এক বছর মেয়াদি
    অফলাইন কোর্স, যা দুই সেমিস্টারে সম্পন্ন হবে, ইনশাআল্লাহ।
    কোর্সটির প্রতিটি ক্লাস অনুষ্ঠিত হবে
    <strong> আত-তাক্বওয়া মাসজিদ এন্ড ইসলামিক সেন্টার, কুমারপাড়া, সিলেট</strong>-এ।
    <br /><br />

    প্রতি মাসের ১ম, ২য় ও ৪র্থ সপ্তাহের শনিবার বাদ মাগরিব থেকে এক ঘণ্টা করে
    দুইটি ক্লাস এবং ৩য় সপ্তাহের শুক্রবার বাদ মাগরিব দুই ঘণ্টার একটি ক্লাস
    অনুষ্ঠিত হবে।
    <br /><br />

    <strong>ভর্তির শেষ তারিখ:</strong> ১৫ জানুয়ারি ২০২৬ <br />
    <strong>ক্লাস শুরুর তারিখ:</strong> ১৬ জানুয়ারি ২০২৬
    <br /><br />

    নিয়মিত উপস্থিতির ভিত্তিতে শিক্ষার্থীদের জন্য
    <strong> পুরস্কারের ব্যবস্থা</strong> থাকবে, ইনশাআল্লাহ।
  </p>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
