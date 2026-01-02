import { motion } from "framer-motion";
import abdullahilKafiMadani from "../assets/abdullahil_kafi_madani.svg";
import majedulIslamMadani from "../assets/majedul_islam_madani.svg";
import akmalHossainMadani from "../assets/akmal_hossain_madani.svg";
import sakhawatHossainJazani from "../assets/sakhawat_hossain_jazani.svg";

const speakers = [
  {
    name: "শাইখ ড. আব্দুল্লাহিল কাফী মাদানী",
    image: abdullahilKafiMadani,
    degree:"পি.এইচ.ডি., মদিনা ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব"
  },
  {
    name: "শাইখ মাজেদুল ইসলাম মাদানী",
    image: majedulIslamMadani,
    degree:"অনার্স, মদিনা ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব"
  },
  {
    name: "শাইখ আকমাল হোসাইন মাদানী",
    image: akmalHossainMadani,
    degree:"অনার্স, মদিনা ইসলামি বিশ্ববিদ্যালয়, সৌদি আরব"
  },
  {
    name: "শাইখ সাখাওয়াত হোসাইন জাযানী",
    image: sakhawatHossainJazani,
    degree:"অনার্স, জাযান বিশ্ববিদ্যালয়, সৌদি আরব"
  },
];

const SpeakersSection = () => {
  return (
    <section className="relative z-10 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className=" text-4xl md:text-5xl text-foreground mb-4">
          ডিপ্লোমা ইন বেসিক ইসলামিক স্টাডিজ <br /> কোর্সের  শিক্ষকবৃন্দ
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-accent group-hover:border-accent/50 transition-colors duration-300">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-foreground text-lg font-medium">{speaker.name}</h3>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">{speaker.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
