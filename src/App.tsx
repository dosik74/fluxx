import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  
  // Hero Parallax
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const specs = [
    { title: "GRAPHICS", value: "RX 580", desc: "Свобода в играх." },
    { title: "PROCESSOR", value: "Core i7 3770", desc: "Мощь и надежность." },
    { title: "MEMORY", value: "16GB DDR3", desc: "1600 MHz. Идеальная многозадачность." },
    { title: "STORAGE", value: "512GB SSD + 756GB HDD", desc: "Мгновенная загрузка. Много места." },
    { title: "POWER", value: "500W FSP 80+ Bronze", desc: "Стабильная энергия." },
    { title: "CASE", value: "FSP CMT192", desc: "Стиль и охлаждение." },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black scroll-smooth">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex justify-between items-center shadow-2xl"
      >
        <div className="font-black text-xl tracking-widest cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          FLU<span className="text-[#00e1ff]">XX</span>
        </div>
        <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-bold tracking-widest text-gray-300">
          <a href="#specs" className="hover:text-white transition-colors">ХАРАКТЕРИСТИКИ</a>
          <a href="#fps" className="hover:text-white transition-colors">ФПС В ИГРАХ</a>
          <a href="#order" className="hover:text-[#ff6b9d] transition-colors text-white">ЗАКАЗАТЬ</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#0d0415] px-6 md:px-20 pt-20">
        {/* Animated Gradient Background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #4a0d66 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #ff5e00 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #4a0d66 0%, transparent 50%)"
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-100"
        />
        
        {/* Animated Orbs for more effect */}
        <motion.div
          animate={{
            x: [0, 150, -50, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#d1007a] rounded-full mix-blend-screen filter blur-[150px] opacity-50"
        />
        <motion.div
          animate={{
            x: [0, -200, 100, 0],
            y: [0, 150, -200, 0],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[45rem] h-[45rem] bg-[#ff5e00] rounded-full mix-blend-screen filter blur-[180px] opacity-50"
        />
        <motion.div
          animate={{
            x: [0, 100, -150, 0],
            y: [0, 200, -100, 0],
            scale: [1, 1.2, 1.4, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/2 w-[35rem] h-[35rem] bg-[#4a0d66] rounded-full mix-blend-screen filter blur-[140px] opacity-60"
        />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="z-10 relative flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto"
        >
          <div className="text-left max-w-4xl lg:w-3/5">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-tight mb-8 uppercase"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="text-white">НАДЁЖНАЯ</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="text-white mb-2">СБОРКА</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="italic bg-gradient-to-r from-[#c678dd] to-[#ff6b9d] text-transparent bg-clip-text">ДЛЯ ИГР</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="italic bg-gradient-to-r from-[#ff6b9d] via-[#8c82ff] to-[#00e1ff] text-transparent bg-clip-text pb-2">И РАБОТЫ</motion.div>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl font-medium text-gray-300 max-w-2xl leading-relaxed" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              Собранный с умом компьютер для тех, кому важна стабильность. Intel Core i7-3770, RX 580 4 ГБ, 16 ГБ DDR3 — тянет CS2, Valorant, GTA V без сюрпризов. SSD 512 ГБ для быстрой загрузки + HDD 750 ГБ для всего остального.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 200, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1.5, x: 0, rotateY: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.6, rotateZ: 5, rotateY: 10, y: -15, transition: { duration: 0.4, type: "spring" } }}
            className="w-full max-w-2xl lg:w-2/5 relative mt-10 lg:mt-0 perspective-1000 z-20"
          >
            <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-[#c678dd] to-[#00e1ff] blur-[100px] rounded-full pointer-events-none" 
            />
            <img 
              src="/tmb_117731_2370_upscayl_4x_upscayl-standard-4x.png" 
              alt="Custom PC" 
              className="w-full h-auto object-cover rounded-3xl relative z-20 shadow-[0_0_80px_rgba(198,120,221,0.6)]" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro to Specs */}
      <section id="specs" className="py-32 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          style={{ perspective: 1000 }}
          className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-20"
        >
          МОЩЬ В <br/> КАЖДОЙ ДЕТАЛИ.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {specs.map((spec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="border-t border-gray-800 pt-8"
            >
              <h3 className="text-gray-500 font-bold tracking-widest text-sm mb-4">{spec.title}</h3>
              <p className="text-4xl md:text-6xl font-black mb-4">{spec.value}</p>
              <p className="text-xl text-gray-400 font-semibold">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FPS Section */}
      <section id="fps" className="py-32 px-6 md:px-20 max-w-7xl mx-auto relative">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 50%, #d1007a 0%, transparent 50%)",
              "radial-gradient(circle at 100% 50%, #00f0ff 0%, transparent 50%)",
              "radial-gradient(circle at 0% 50%, #d1007a 0%, transparent 50%)"
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
        />
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-5xl md:text-8xl mb-20 text-center uppercase"
          style={{ fontFamily: "'Arial Black', Impact, sans-serif", fontWeight: 900, letterSpacing: "2px" }}
        >
          ФПС В <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f]">ИГРАХ</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10" style={{ perspective: 1200 }}>
          {[
            { name: "CS2", logo: "https://avatars.mds.yandex.net/i?id=a565ceffeb522202989377634b1f83e62408e646-10639912-images-thumbs&n=13", settings: "Низкие, 1080p", fps: "130-160", color: "from-orange-400 to-yellow-400", shadow: "shadow-orange-500/20" },
            { name: "Valorant", logo: "https://images.seeklogo.com/logo-png/37/1/valorant-logo-png_seeklogo-379976.png", settings: "Низкие, 1080p", fps: "180-220", color: "from-red-500 to-rose-400", shadow: "shadow-red-500/20" },
            { name: "GTA V", logo: "https://avatars.mds.yandex.net/i?id=2005d8d9e5b780446338ceca4399d99e1621177f-11951022-images-thumbs&n=13", settings: "Высокие, 1080p", fps: "70-90", color: "from-green-400 to-emerald-400", shadow: "shadow-green-500/20" },
            { name: "Cyberpunk", logo: "https://i.redd.it/cybertrucks-logo-is-cyberpunks-v0-uefbcouybu3c1.jpg?width=1284&format=pjpg&auto=webp&s=3f8d1b76b56527828b1210725c290d9a93842125", settings: "Средние, 1080p", fps: "60", color: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-500/20" },
            { name: "PUBG", logo: "https://toplogos.ru/images/logo-pubg.jpg", settings: "Низкие, 1080p", fps: "90-120", color: "from-amber-400 to-orange-500", shadow: "shadow-amber-500/20" },
            { name: "Dota 2", logo: "https://avatars.mds.yandex.net/i?id=a8f2a6b278b0c7e25e1af2a6071a9ad2af2cc3e3-13605392-images-thumbs&n=13", settings: "Высокие, 1080p", fps: "100-140", color: "from-purple-400 to-pink-500", shadow: "shadow-purple-500/20" },
          ].map((game, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100, rotateY: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-72 shadow-2xl ${game.shadow} hover:border-white/30 transition-all duration-300 relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <img src={game.logo} alt={game.name} className="w-10 h-10 rounded-full object-cover shadow-lg border border-white/20" />
                  <h3 className="text-3xl font-black tracking-tight">{game.name}</h3>
                </div>
                <p className="text-gray-400 text-sm font-medium">{game.settings}</p>
              </div>
              
              <div className="mt-auto relative z-10">
                <p className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-widest">Средний FPS</p>
                <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${game.color}`}>
                  {game.fps}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-32 w-full relative overflow-hidden bg-black">
        {/* Abstract shapes - Green to Pink */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00ff88]/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#ff007f]/10 rounded-full blur-[150px] mix-blend-screen" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Text & Specs) */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center relative z-10"
            >
              <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-6 w-max backdrop-blur-md">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#ff007f] font-bold tracking-widest uppercase text-sm">
                  АКЦИЯ ОГРАНИЧЕНА
                </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] uppercase" style={{ fontFamily: "Impact, sans-serif", letterSpacing: "1px" }}>
                СБОРКА <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">МЕЧТЫ</span>
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                {specs.slice(0, 4).map((spec, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 text-sm md:text-base font-medium shadow-xl flex flex-col">
                    <span className="text-zinc-500 text-xs uppercase tracking-widest mb-1">{spec.title}</span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10">
                <div className="flex flex-col">
                  <span className="text-gray-500 font-bold uppercase tracking-widest mb-1">СУПЕР ЦЕНА</span>
                  <span className="text-7xl font-black text-white" style={{ fontFamily: "Impact, sans-serif" }}>120 000 ₸</span>
                </div>
                <div className="hidden sm:block w-[2px] h-20 bg-zinc-800"></div>
                <div className="flex flex-col max-w-[200px]">
                  <span className="text-[#00ff88] font-black text-xl mb-1">БЕСПЛАТНО</span>
                  <span className="text-gray-400 text-sm leading-tight">Доставка в любую точку Алматы до двери</span>
                </div>
              </div>

              <motion.a 
                href="https://wa.me/77752570646"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 211, 102, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-max bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black font-black text-xl px-14 py-4 rounded-full transition-all flex items-center justify-center uppercase tracking-widest"
              >
                КУПИТЬ
              </motion.a>
            </motion.div>

            {/* Right Content (Image) */}
            <motion.div 
              initial={{ opacity: 0, x: 100, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="lg:col-span-5 relative perspective-1000 mt-12 lg:mt-0"
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#00ff88] via-black to-[#ff007f] blur-[80px] opacity-30 rounded-full" />
                <img 
                  src="/images/pc-main.png" 
                  alt="PC Render" 
                  className="w-full h-auto object-cover relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-125"
                />
              </motion.div>
              
              {/* Decorative elements behind image */}
              <div className="absolute top-10 right-0 w-32 h-32 border border-[#00ff88]/10 rounded-full pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-48 h-48 border border-[#ff007f]/10 rounded-full pointer-events-none" />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
            className="text-5xl md:text-7xl font-black mb-16 text-center"
          >
            ДИЗАЙН
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.5, y: 100, rotateZ: num % 2 === 0 ? 10 : -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: (num % 3) * 0.15, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                onClick={() => setSelectedImage(num)}
                className="rounded-3xl overflow-hidden aspect-square bg-black cursor-pointer shadow-2xl shadow-black/50"
              >
                <img 
                  src={`/images/img${num}.jpeg`} 
                  alt={`Gallery ${num}`} 
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section / Footer */}
      <footer id="order" className="py-32 px-6 md:px-20 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#ff007f]/20 via-[#8c82ff]/20 to-[#00f0ff]/20 blur-[100px] pointer-events-none rounded-full"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.2, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.7 }}
            className="text-4xl md:text-7xl font-black tracking-tight mb-8 uppercase"
          >
            Всё что нужно — <br/>
            и ничего лишнего
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
          >
            Не флагман, но честная рабочая лошадка.
          </motion.p>
          <motion.a 
            href="https://wa.me/77752570646"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black font-black text-2xl px-12 py-6 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] uppercase tracking-widest"
          >
            ОФОРМИТЬ ЗАКАЗ
          </motion.a>
        </div>
      </footer>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.img 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              src={`/images/img${selectedImage}.jpeg`} 
              alt={`Gallery Full ${selectedImage}`} 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
