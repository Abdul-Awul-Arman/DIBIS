import { motion } from "framer-motion";
import { useState } from "react";
import calligraphyBg2 from "@/assets/calligraphy-background-stroke-2.png";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    phone: "",
    country: "Canada",
    hearAboutUs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="registration" className="relative z-10 py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src={calligraphyBg2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Reserve Your Spot
          </h2>
          <p className="text-muted-foreground">
            Join us for this transformative journey.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm text-muted-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter your email"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-foreground">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-foreground">Female</span>
              </label>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm text-muted-foreground mb-2">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
            >
              <option value="Canada">Canada</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* How did you hear about us */}
          <div>
            <label htmlFor="hearAboutUs" className="block text-sm text-muted-foreground mb-2">
              How did you hear about us? (Optional)
            </label>
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
            >
              <option value="">Select an option</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend/Family</option>
              <option value="mosque">Mosque</option>
              <option value="website">Website</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-cta text-cta-foreground font-semibold rounded-full hover:bg-cta/90 transition-all duration-300 hover:scale-[1.02] glow-orange"
          >
            Complete Registration
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationSection;
