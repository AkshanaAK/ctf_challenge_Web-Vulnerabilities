"use client";
import React from "react";
import { Lock, User, Key, Eye, ShieldCheck, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div class="min-h-screen bg-slate-950 text-slate-100 font-mono relative soc-scanline bg-cyber-grid flex items-center justify-center p-6">
      
      {/* BACKGROUND FLOATING GLOW DECORATION */}
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="w-full max-w-md border border-red-900/80 bg-slate-950/90 p-8 rounded-xl relative z-10 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
        
        {/* LOGO & TITLE */}
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center p-3 rounded-full bg-red-950/50 border border-red-600/40 mb-3 animate-pulse">
            <Eye class="w-8 h-8 text-red-500" />
          </div>
          <h1 class="text-2xl font-black tracking-widest text-white uppercase">AUTHENTICATE</h1>
          <p class="text-xs text-red-500 font-bold mt-1 tracking-wider">// RESTRICTED SOC CLEARANCE REQUIRED</p>
        </div>

        {/* LOGIN FORM */}
        <form class="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* USERNAME / EMAIL */}
          <div>
            <label class="block text-xs uppercase text-slate-400 mb-2 font-bold flex items-center gap-2">
              <User class="w-3.5 h-3.5 text-emerald-400" /> Username or Agent ID
            </label>
            <div class="relative">
              <input 
                type="text" 
                placeholder="agent_alderson" 
                class="w-full bg-slate-900/80 border border-slate-800 focus:border-red-500 text-white text-sm px-4 py-2.5 rounded outline-none transition font-mono"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="block text-xs uppercase text-slate-400 font-bold flex items-center gap-2">
                <Key class="w-3.5 h-3.5 text-red-400" /> Access Token / Password
              </label>
              <a href="#" class="text-[10px] text-red-400 hover:underline">Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••••••" 
              class="w-full bg-slate-900/80 border border-slate-800 focus:border-red-500 text-white text-sm px-4 py-2.5 rounded outline-none transition font-mono"
            />
          </div>

          {/* REMEMBER ME */}
          <div class="flex items-center gap-2 text-xs text-slate-400">
            <input type="checkbox" id="remember" class="accent-red-600 rounded bg-slate-900" />
            <label htmlFor="remember" class="cursor-pointer">Maintain persistent session clearance</label>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit" 
            class="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded text-sm transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          >
            <Lock class="w-4 h-4" /> AUTHORIZE LOGIN <ArrowRight class="w-4 h-4" />
          </button>
        </form>

        {/* REGISTER LINK */}
        <div class="mt-6 pt-6 border-t border-slate-900 text-center text-xs text-slate-400">
          Unregistered Agent?{" "}
          <a href="/register" class="text-emerald-400 font-bold hover:underline">Request Access Clearance (/register)</a>
        </div>

      </div>
    </div>
  );
}