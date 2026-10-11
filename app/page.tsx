"use client";
import React from "react";
import { Terminal, ShieldAlert, Cpu, Lock, Fingerprint, Eye, Flame, ArrowRight, Activity } from "lucide-react";

export default function HomePage() {
  return (
    <div class="min-h-screen bg-slate-950 text-slate-100 font-mono relative soc-scanline bg-cyber-grid overflow-hidden">
      
      {/* TOP NAVIGATION BAR */}
      <nav class="border-b border-emerald-900/60 bg-slate-950/90 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="relative flex items-center justify-center">
            <Eye class="w-7 h-7 text-red-500 animate-pulse" />
            <span class="absolute -top-1 -right-1 flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </div>
          <div>
            <span class="text-xl font-black tracking-widest text-emerald-400 glow-green">RAVEN//TRACE</span>
            <span class="text-[10px] block text-red-500 tracking-wider font-bold">SOC CTF PLATFORM v2.6</span>
          </div>
        </div>

        <div class="flex items-center gap-6 text-sm">
          <a href="/challenges" class="hover:text-emerald-400 flex items-center gap-1 transition"><Terminal class="w-4 h-4" /> Challenges</a>
          <a href="/events" class="hover:text-emerald-400 flex items-center gap-1 transition"><Activity class="w-4 h-4" /> Events</a>
          <a href="/admin" class="hover:text-red-400 flex items-center gap-1 transition"><ShieldAlert class="w-4 h-4 text-red-500" /> Admin</a>
          <a href="/login" class="bg-red-950/80 hover:bg-red-900 text-red-400 border border-red-600/60 px-4 py-1.5 rounded font-bold transition flex items-center gap-2">
            <Lock class="w-4 h-4" /> ACCESS SYSTEM
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section class="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold mb-6 animate-pulse">
          <Flame class="w-4 h-4 text-red-500" /> SYSTEM DEFCON-1 LEVEL ALERT :: INTRUSION DETECTED
        </div>
        
        <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white uppercase">
          BREACH THE MATRIX. <br />
          <span class="text-emerald-400 glow-green">TRACE THE THREAT ACTOR.</span>
        </h1>
        
        <p class="max-w-2xl mx-auto text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
          Step into a live Security Operations Center (SOC) incident workspace. Investigate network PCAPs, reverse malware binaries, exploit live web targets, and capture flags.
        </p>

        <div class="flex justify-center gap-4">
          <a href="/challenges" class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded font-black flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.4)] transition">
            BROWSE CHALLENGES <ArrowRight class="w-5 h-5" />
          </a>
          <a href="/events" class="border border-slate-700 bg-slate-900/80 hover:border-emerald-500 px-6 py-3 rounded font-bold transition">
            VIEW ACTIVE EVENTS
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section class="max-w-6xl mx-auto px-6 py-12 border-t border-slate-900">
        <h2 class="text-xs uppercase tracking-widest text-emerald-500 mb-8 text-center">// OPERATIONAL PROTOCOL (HOW IT WORKS)</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border border-slate-800 bg-slate-900/40 p-6 rounded-lg relative overflow-hidden group hover:border-emerald-500/50 transition">
            <div class="text-emerald-500 font-bold text-3xl mb-2">01</div>
            <h3 class="font-bold text-white mb-2 flex items-center gap-2"><Fingerprint class="w-5 h-5 text-emerald-400" /> SELECT CHALLENGE</h3>
            <p class="text-xs text-slate-400">Filter through Web, OSINT, RE, and Steganography targets according to difficulty.</p>
          </div>

          <div class="border border-slate-800 bg-slate-900/40 p-6 rounded-lg relative overflow-hidden group hover:border-cyan-500/50 transition">
            <div class="text-cyan-400 font-bold text-3xl mb-2">02</div>
            <h3 class="font-bold text-white mb-2 flex items-center gap-2"><Cpu class="w-5 h-5 text-cyan-400" /> LAUNCH INSTANCE</h3>
            <p class="text-xs text-slate-400">Spin up dynamic, isolated Docker target containers with custom IPs and expiring timers.</p>
          </div>

          <div class="border border-slate-800 bg-slate-900/40 p-6 rounded-lg relative overflow-hidden group hover:border-red-500/50 transition">
            <div class="text-red-500 font-bold text-3xl mb-2">03</div>
            <h3 class="font-bold text-white mb-2 flex items-center gap-2"><Lock class="w-5 h-5 text-red-500" /> CAPTURE THE FLAG</h3>
            <p class="text-xs text-slate-400">Analyze evidence, exploit flaws, retrieve hidden tokens and submit <code class="text-red-400">RAVEN&#123;...&#125;</code>.</p>
          </div>
        </div>
      </section>

      {/* FEATURED CHALLENGES PREVIEW */}
      <section class="max-w-6xl mx-auto px-6 py-12">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg font-bold text-white flex items-center gap-2"><Terminal class="w-5 h-5 text-emerald-400" /> FEATURED TARGETS</h2>
          <a href="/challenges" class="text-xs text-emerald-400 hover:underline">View all challenges →</a>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div class="border border-slate-800 bg-slate-900/60 p-5 rounded-lg">
            <div class="flex justify-between items-start mb-3">
              <span class="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded uppercase">Network</span>
              <span class="text-xs text-amber-400">★ Medium | 250 PTS</span>
            </div>
            <h3 class="font-bold text-white mb-1">The Traffic</h3>
            <p class="text-xs text-slate-400 mb-4 line-clamp-2">Inspect C2 communications captured inside Wireshark network dump.</p>
            <div class="text-[11px] text-slate-500 flex justify-between items-center">
              <span>Instance: Available</span>
              <span class="text-emerald-400 font-bold">142 Solves</span>
            </div>
          </div>

          {/* Card 2 */}
          <div class="border border-slate-800 bg-slate-900/60 p-5 rounded-lg">
            <div class="flex justify-between items-start mb-3">
              <span class="text-[10px] bg-red-950 text-red-400 border border-red-800 px-2 py-0.5 rounded uppercase">Reverse Eng.</span>
              <span class="text-xs text-red-400">★★ Hard | 500 PTS</span>
            </div>
            <h3 class="font-bold text-white mb-1">The Implant</h3>
            <p class="text-xs text-slate-400 mb-4 line-clamp-2">Decompile suspicious GuardianOS binary executable to reveal dynamic keys.</p>
            <div class="text-[11px] text-slate-500 flex justify-between items-center">
              <span>Instance: Available</span>
              <span class="text-emerald-400 font-bold">38 Solves</span>
            </div>
          </div>

          {/* Card 3 */}
          <div class="border border-slate-800 bg-slate-900/60 p-5 rounded-lg">
            <div class="flex justify-between items-start mb-3">
              <span class="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded uppercase">Web Security</span>
              <span class="text-xs text-amber-400">★ Medium | 300 PTS</span>
            </div>
            <h3 class="font-bold text-white mb-1">Internal Exposure</h3>
            <p class="text-xs text-slate-400 mb-4 line-clamp-2">Exploit server-side SQL Injection and IDOR vulnerabilities on internal portal.</p>
            <div class="text-[11px] text-slate-500 flex justify-between items-center">
              <span>Instance: Active Required</span>
              <span class="text-emerald-400 font-bold">89 Solves</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer class="border-t border-slate-900 bg-slate-950/80 px-6 py-8 text-center text-xs text-slate-500">
        RAVEN//TRACE SOC CTF PLATFORM — AUTHORIZED PERSONNEL ONLY // 2026
      </footer>
    </div>
  );
}