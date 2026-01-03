import atTawaLogo from "/src/assets/favicon.png";
const Footer = () => {
  return (
    <footer className="relative z-10  bg-gradient-to-b m-5 md:m-20 border border-white/10 bg-white/5 rounded-xl">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - About */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground"></h3>
                <img className="max-w-[100px]" src={atTawaLogo} alt="At-Taqwa Masjid & Islamic Center" />
              <p className="text-sm text-muted-foreground font-medium">At-Taqwa Masjid & Islamic Center</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                At-Taqwa Masjid & Islamic Center
The Prophet (ﷺ) said, “When a man dies, his deeds come to an end except for three things: Sadaqah Jariyah (continuing charity), knowledge which is beneficial, or a virtuous descendant who prays for him” [Muslim]
              </p>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2.5">
              <a href="https://attaqwamasjidsylhet.com/en/terms" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                → Terms of Service
              </a>
              <a href="https://attaqwamasjidsylhet.com/en/privacy-policy" className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                → Privacy Policy
              </a>
            </div>
          </div>

          {/* Right - Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:+8801894946363" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">+88 018 94 94 63 63</span>
               
              </a>
              <a href="tel:+8801704585503" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">+88 017 04 58 55 03</span>
               
              </a>
              <a href="mailto:info@attaqwamasjidsylhet.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 group">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm truncate">info@attaqwamasjidsylhet.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span className="text-sm">Kumarpara, Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2026 At-Taqwa Masjid & Islamic Center. All rights reserved.<br/>
            Developed by At-taqwa Masjid & Islamic Center media team 
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/attaqwasylhet"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent/40 hover:to-accent/30 rounded-lg flex items-center justify-center text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              title="Facebook"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UC5JISa4wFxC3KYizjacm1TQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 bg-gradient-to-br from-highlight/20 to-highlight/10 hover:from-highlight/40 hover:to-highlight/30 rounded-lg flex items-center justify-center text-highlight transition-all duration-300 hover:shadow-lg hover:shadow-highlight/20"
              title="YouTube"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
