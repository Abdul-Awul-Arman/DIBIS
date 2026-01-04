const MarqueeBanner = () => {
  const items = [
    { text: "ভর্ভির শেষ তারিখ ১৫ জানুয়ারি ২০২৬", textColor: "#28c8c0" },
    { text: "ক্লাস শুরু হবে ১৬ জানুয়ারি ২০২৬ ইন শা আল্লাহ", textColor: "white" },
    { text: "এটি একটি অফলাইন কোর্স", textColor: "#f98c10" },
  ];

  const renderItems = (keyPrefix = "") =>
    items.map((item, i) => (
      <div
        key={`${keyPrefix}-${i}`}
        className="marquee-item flex items-center gap-2 md:gap-4 px-2"
      >
        <span
          className="text-[13px] md:text-xs font-medium whitespace-nowrap"
          style={{ color: item.textColor }}
        >
          {item.text}
        </span>
        <span className="text-accent text-[8px] md:text-[10px]">•</span>
      </div>
    ));

  return (
    <div className="relative z-50 py-2 md:py-3 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {renderItems("a")}
          {renderItems("b")}
          {renderItems("c")} {/* 🔥 third copy fixes desktop gap */}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
