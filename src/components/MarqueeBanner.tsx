const MarqueeBanner = () => {

  const items = [
    { text: "ভর্ভির শেষ তারিখ ১৫ জানুয়ারি ২০২৬", isHighlight: true },
    { text: "ক্লাস শুরু হবে ১৬ জানুয়ারি ২০২৬ ইন শা আল্লাহ", isHighlight: false },
    
  
  ];

  const renderItems = () =>
    items.map((item, index) => (
      <span key={index} className="flex items-center">
        <span
          className={`uppercase  text-md  font-medium ${
            item.isHighlight ? "text-[#28c8c0]" : "text-white"
          }`}
        >
          {item.text}
        </span>
        <span className="mx-6 text-accent">•</span>
      </span>
    ));

  return (
    <div className="relative top-0 left-0 right-0 z-50    py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {renderItems()}
        {renderItems()}
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

export default MarqueeBanner;
