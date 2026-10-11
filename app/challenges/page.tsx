"use client";
import React, { useState } from "react";
import { Terminal, Search, Filter, ShieldAlert, Cpu, Lock, Flame, Eye, CheckCircle2, Play, ExternalLink } from "lucide-react";

export default function ChallengesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Network PCAP", "Reverse Eng.", "Web Security", "Crypto & OSINT", "Steganography"];

  const challenges = [
    {
      id: 1,
      title: "The Traffic Analyst",
      category: "Network PCAP",
      points: 250,
      difficulty: "Medium",
      solves: 142,
      status: "Unsolved",
      desc: "Analyze the provided Wireshark network dump. Locate the C2 beaconing IP and extract the unencrypted exfiltrated credentials.",
      tags: ["Wireshark", "Packet Analysis", "HTTP"]
    },
    {
      id: 2,
      title: "Guardian Implant v1.0",
      category: "Reverse Eng.",
      points: 500,
      difficulty: "Hard",
      solves: 38,
      status: "Unsolved",
      desc: "A suspicious binary file was extracted from an infected workstation. Decompile and crack the key generation function.",
      tags: ["Ghidra", "x86 Assembly", "Malware"]
    },
    {
      id: 3,
      title: "Internal Portal Exposure",
      category: "Web Security",
      points: 300,
      difficulty: "Medium",
      solves: 89,
      status: "Solved",
      desc: "Exploit an IDOR vulnerability inside the SOC internal ticketing portal to escalate privileges to System Administrator.",
      tags: ["IDOR", "Web", "SQLi"]
    },
    {
      id: 4,
      title: "Shadow Cipher Transmission",
      category: "Crypto & OSINT",
      points: 150,
      difficulty: "Easy",
      solves: 310,
      status: "Solved",
      desc: "Interception log contains an RSA encrypted message with weak key parameters. Crack the modulus to recover the flag.",
      tags: ["RSA", "Math", "Crypto"]
    },
    {
      id: 5,
      title: "Hidden Pixel Payload",
      category: "Steganography",
      points: 200,
      difficulty: "Easy",
      solves: 215,
      status: "Unsolved",
      desc: "Inspect the SOC logo image file. Extract the hidden secret payload concealed within the LSB audio/visual layer.",
      tags: ["LSB", "Forensics", "Stego"]
    },
    {
      id: 6,
      title: "Kernel Stack Overflow",
      category: "Reverse Eng.",
      points: 750,
      difficulty: "Insane",
      solves: 12,
      status: "Unsolved",
      desc: "Bypass ASLR and DEP on a custom linux kernel module target to trigger a local privilege escalation root shell.",
      tags: ["Pwn", "Kernel", "Buffer Overflow"]
    }
  ];

  const filteredChallenges = challenges.filter(c => {
    const matchesCat = selectedCategory === "All" || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div class="min-h-screen bg-slate-950 text-slate-100 font-mono relative soc-scanline bg-cyber-grid pb-20">
      
      {/* TOP NAV BAR */}
      <nav class="border-b border-emerald-900/60 bg-slate-950/90 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <a href="/" class="flex items-center gap-3">
            <Eye class="w-6 h-6 text-red-500 animate-pulse" />
            <span class="text-lg font-black tracking-widest text-emerald-400 glow-green">RAVEN//TRACE</span>
          </a>
        </div>
        <div class="flex items-center gap-6 text-sm">
          <a href="/challenges" class="text-emerald-400 font-bold flex items-center gap-1"><Terminal class="w-4 h-4" /> Challenges</a>
          <a href="/login" class="bg-red-950/80 hover:bg-red-900 text-red-400 border border-red-600/60 px-3 py-1 rounded font-bold text-xs transition">
            TERMINAL LOGOUT
          </a>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header class="max-w-7xl mx-auto px-6 pt-10 pb-6 border-b border-slate-900">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 class="text-2xl md:text-3xl font-black text-white uppercase flex items-center gap-3">
              <Terminal class="w-8 h-8 text-emerald-400" /> THREAT TARGET REGISTRY
            </h1>
            <p class="text-xs text-slate-400 mt-1">// ACTIVE INCIDENT INVESTIGATION CHALLENGES</p>
          </div>
          <div class="bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center gap-6 text-xs">
            <div>
              <span class="block text-slate-500 text-[10px]">TOTAL SCORE</span>
              <span class="text-emerald-400 font-bold text-base">450 PTS</span>
            </div>
            <div class="w-px h-8 bg-slate-800"></div>
            <div>
              <span class="block text-slate-500 text-[10px]">SOLVED TARGETS</span>
              <span class="text-white font-bold text-base">2 / 6</span>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div class="mt-8 flex flex-col md:flex-row gap-4 justify-between items-stretch">
          {/* SEARCH BAR */}
          <div class="relative flex-1">
            <Search class="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input 
              type="text" 
              placeholder="Search target title, technique, or tag..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              class="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500 pl-10 pr-4 py-2.5 rounded text-xs text-white outline-none transition"
            />
          </div>

          {/* CATEGORY FILTERS */}
          <div class="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                class={`px-3 py-2 rounded text-xs font-bold transition flex items-center gap-1.5 ${
                  selectedCategory === cat 
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_10px_rgba(34,197,94,0.3)]" 
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* CHALLENGES GRID */}
      <main class="max-w-7xl mx-auto px-6 pt-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((item) => (
            <div 
              key={item.id}
              class={`border rounded-xl p-5 relative flex flex-col justify-between transition group hover:scale-[1.01] ${
                item.status === "Solved" 
                  ? "bg-slate-900/30 border-emerald-900/50" 
                  : "bg-slate-900/70 border-slate-800 hover:border-emerald-500/60"
              }`}
            >
              <div>
                {/* CARD HEADER */}
                <div class="flex justify-between items-start mb-3">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400">
                    {item.category}
                  </span>
                  
                  <div class="flex items-center gap-2">
                    <span class={`text-xs font-bold ${
                      item.difficulty === "Easy" ? "text-emerald-400" :
                      item.difficulty === "Medium" ? "text-amber-400" :
                      item.difficulty === "Hard" ? "text-red-400" : "text-purple-400"
                    }`}>
                      {item.difficulty} ({item.points} pts)
                    </span>
                  </div>
                </div>

                {/* CARD TITLE & STATUS */}
                <h3 class="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition flex items-center justify-between">
                  {item.title}
                  {item.status === "Solved" && (
                    <span class="text-emerald-400 flex items-center gap-1 text-[11px] font-normal bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      <CheckCircle2 class="w-3.5 h-3.5" /> SOLVED
                    </span>
                  )}
                </h3>

                <p class="text-xs text-slate-400 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* TAGS */}
                <div class="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map(t => (
                    <span key={t} class="text-[10px] bg-slate-950 text-slate-500 px-2 py-0.5 rounded border border-slate-900">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CARD FOOTER BUTTON */}
              <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span class="text-[11px] text-slate-500">{item.solves} Solves</span>
                
                <button class="bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs px-4 py-2 rounded font-bold transition flex items-center gap-1.5">
                  <Play class="w-3.5 h-3.5" /> LAUNCH TARGET
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}