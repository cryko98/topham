/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Copy, 
  Check, 
  Shield, 
  Zap, 
  Target, 
  Radio, 
  Menu, 
  X as CloseIcon,
  ChevronRight,
  Plane
} from 'lucide-react';

const CA = "xxxxxxxxxxxxxxxxxxxxxxxx";
const LOGO_URL = "https://lcaryepoaiuzuppladzq.supabase.co/storage/v1/object/public/ccc/photo_2026-03-01_20-12-54.jpg";

// Custom X (Twitter) icon for 2026
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans relative overflow-hidden">
      {/* CRT Overlay */}
      <div className="fixed inset-0 crt-effect z-50 pointer-events-none opacity-20"></div>
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-war-black/90 border-b border-war-olive/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-full border border-war-olive shadow-[0_0_10px_rgba(61,68,48,0.5)]" referrerPolicy="no-referrer" />
            <span className="stencil text-xl tracking-wider text-war-sand hidden sm:block">HAMSTER AIR FORCE</span>
          </div>

          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="flex items-center bg-black/50 border border-war-olive/30 rounded-sm px-3 py-1.5 group hover:border-war-olive/60 transition-colors">
              <span className="text-[10px] text-war-olive mr-2 font-bold uppercase">CA:</span>
              <code className="text-xs text-war-sand truncate flex-1">{CA}</code>
              <button onClick={copyToClipboard} className="ml-2 text-war-olive hover:text-war-sand transition-colors">
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://t.me/hamsterairforce" target="_blank" rel="noopener noreferrer" className="p-2 bg-war-olive/20 rounded-sm hover:bg-war-olive/40 text-war-sand transition-all">
                <Send size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-war-olive/20 rounded-sm hover:bg-war-olive/40 text-war-sand transition-all">
                <XIcon />
              </a>
            </div>
            <button className="md:hidden text-war-sand" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-war-black pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="bg-black/50 border border-war-olive/30 rounded-sm p-4">
                <span className="text-[10px] text-war-olive block mb-2 font-bold uppercase">CONTRACT ADDRESS</span>
                <div className="flex items-center justify-between">
                  <code className="text-xs text-war-sand break-all">{CA}</code>
                  <button onClick={copyToClipboard} className="ml-4 text-war-olive">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
              <nav className="flex flex-col gap-4 text-war-sand stencil text-2xl">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>MISSION BRIEFING</a>
                <a href="#tokenomics" onClick={() => setIsMenuOpen(false)}>SUPPLY CHAIN</a>
                <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>FLIGHT PLAN</a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full radar-sweep opacity-5 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-war-red/20 border border-war-red/40 text-war-red text-[10px] font-bold tracking-widest uppercase mb-6">
                <Radio size={12} className="animate-pulse" /> Live Transmission: Operation $TOPHAM
              </div>
              <h1 className="stencil text-6xl md:text-8xl text-war-sand leading-none mb-6">
                HAMSTER <br />
                <span className="text-white">AIR FORCE</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg mb-8 font-medium">
                The elite $TOPHAM squadron has been deployed to the Solana frontlines. 
                No seed, no surrender. Just pure aerial dominance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-war-olive text-white stencil text-xl hover:bg-war-olive/80 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  JOIN THE SQUADRON
                </button>
                <button className="px-8 py-4 border border-war-olive text-war-sand stencil text-xl hover:bg-war-olive/10 transition-all">
                  VIEW CHART
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-war-olive/20 blur-3xl rounded-full"></div>
              <div className="relative border-4 border-war-olive p-2 bg-war-black shadow-2xl">
                <img 
                  src={LOGO_URL} 
                  alt="Hamster Pilot" 
                  className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-war-red px-2 py-1 text-[10px] text-white font-bold uppercase">
                  Classified
                </div>
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Target key={i} size={16} className="text-war-sand" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Briefing (About) */}
        <section id="about" className="py-24 bg-war-olive/5 border-y border-war-olive/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="stencil text-4xl text-war-sand mb-12">MISSION BRIEFING: THE PILOT</h2>
              <div className="relative p-8 border border-war-olive/30 bg-black/40 text-left">
                <div className="absolute -top-3 left-8 bg-war-black px-4 text-war-olive text-xs font-bold uppercase tracking-widest">
                  Intelligence Report #2026-A
                </div>
                <p className="text-xl leading-relaxed text-gray-300 italic mb-6">
                  "In the scorched skies of World War III, where drones outnumber birds and the horizon is a permanent shade of tactical grey, one legend emerged from the sawdust. Sgt. Nibbles wasn't just a hamster; he was the finest ace the 101st Rodent Wing had ever seen."
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Strap in for the story of the Hamster Air Force. While the giants fought over borders, Sgt. Nibbles fought for the only thing that mattered: the $TOPHAM supply lines. Flying a modified F-35 'Sunflower-Seed' Edition, he dominated the dogfights of 2026. Now, he's transitioned his tactical genius to the Solana blockchain. $TOPHAM isn't just a coin; it's a veteran-led assault on the status quo.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-war-olive/20 pt-6">
                  <div className="w-12 h-12 rounded-full bg-war-olive/30 flex items-center justify-center text-war-sand">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-war-sand uppercase">Status: ACTIVE DUTY</div>
                    <div className="text-xs text-war-olive uppercase">Location: Solana Mainnet</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="stencil text-4xl text-war-sand mb-16 text-center">SUPPLY CHAIN LOGISTICS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "TOTAL PAYLOAD", value: "1,000,000,000", icon: <Zap /> },
                { label: "TAXES", value: "0% BUY / 0% SELL", icon: <Shield /> },
                { label: "LIQUIDITY", value: "BURNED & LOCKED", icon: <Target /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-war-olive/30 bg-war-olive/5 hover:bg-war-olive/10 transition-all group"
                >
                  <div className="text-war-olive mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-xs text-war-olive font-bold uppercase mb-2">{item.label}</div>
                  <div className="stencil text-2xl text-war-sand">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-24 bg-black/40">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="stencil text-4xl text-war-sand mb-16 text-center">FLIGHT PLAN</h2>
            <div className="space-y-12">
              {[
                { phase: "PHASE 1: TAKEOFF", tasks: ["Launch on pump.fun", "Community Recruitment", "Social Media Blitz"] },
                { phase: "PHASE 2: DOGFIGHT", tasks: ["DEX Listings", "Strategic Partnerships", "Influencer Air Support"] },
                { phase: "PHASE 3: AIR SUPERIORITY", tasks: ["CEX Deployment", "Global Marketing Campaign", "Hamster Air Force DAO"] }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-war-olive text-white stencil text-2xl flex items-center justify-center">
                    0{i + 1}
                  </div>
                  <div className="flex-1 border-l-2 border-war-olive/30 pl-6 pb-8">
                    <h3 className="stencil text-2xl text-war-sand mb-4">{step.phase}</h3>
                    <ul className="space-y-2">
                      {step.tasks.map((task, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-400">
                          <ChevronRight size={14} className="text-war-olive" /> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-war-olive/20 bg-war-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Logo" className="w-8 h-8 rounded-full grayscale" referrerPolicy="no-referrer" />
            <span className="stencil text-lg text-war-olive">HAMSTER AIR FORCE</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-[10px] text-war-olive uppercase tracking-[0.2em] mb-2">© 2026 Operation $TOPHAM. All rights reserved.</p>
            <p className="text-[10px] text-gray-600 max-w-xs">
              $TOPHAM is a memecoin with no intrinsic value. Invest at your own risk. 
              The Hamster Air Force assumes no responsibility for lost seeds.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://t.me/hamsterairforce" target="_blank" rel="noopener noreferrer" className="text-war-olive hover:text-war-sand transition-colors"><Send size={20} /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-war-olive hover:text-war-sand transition-colors"><XIcon /></a>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="w-14 h-14 bg-war-red text-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
          <Plane size={24} />
        </button>
      </div>
    </div>
  );
}
