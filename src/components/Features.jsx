import React, { useState, useEffect } from 'react';
import { Layers, Terminal, CalendarCheck, Sparkles, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Features() {
  /* ========================================================
     CARD 1: DIAGNOSTIC SHUFFLER
     Cycles 3 overlapping cards vertically using array.unshift(array.pop())
     every 3 seconds with spring-bounce transition
  ======================================================== */
  const initialShufflerCards = [
    {
      id: 1,
      title: "Écorces Bio-Actives Sélectives",
      desc: "Stimulation de l'oxyde nitrique endogène et ouverture des capillaires caverneux.",
      metric: "Pureté 100%",
      badge: "VASCULARITÉ",
      color: "bg-moss text-cream border-moss-light/40"
    },
    {
      id: 2,
      title: "Racines Rares de Haute Savane",
      desc: "Régulation des récepteurs hormonaux et régénération de l'endurance surrénalienne.",
      metric: "Récolte Sauvage",
      badge: "ENDURANCE",
      color: "bg-charcoal text-cream border-clay/30"
    },
    {
      id: 3,
      title: "Miel Brut Non Pasteurisateur",
      desc: "Transporteur cellulaire naturel accélérant l'assimilation sublinguale immédiate.",
      metric: "Bio-Vecteur",
      badge: "VITALITÉ IMMÉDIATE",
      color: "bg-cream-darker text-charcoal border-moss/20"
    }
  ];

  const [shufflerCards, setShufflerCards] = useState(initialShufflerCards);

  useEffect(() => {
    const timer = setInterval(() => {
      setShufflerCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  /* ========================================================
     CARD 2: TELEMETRY TYPEWRITER
     Monospace live-text feed typing out character-by-character
     with blinking accent-colored cursor & "Live Feed" pulsing dot
  ======================================================== */
  const telemetryMessages = [
    "> SYNERGIE DÉTECTÉE : Tisane + Poudre + Sirop",
    "> [01. TISANE] : Détoxification hépatique & drainage vasculaire actif...",
    "> [02. POUDRE] : Amplification érectile & renfort de testostérone libre...",
    "> [03. SIROP]  : Absorption sublinguale immédiate (Miel sauvage brut)...",
    "> STATUT CLINIQUE : Vigueur masculine rétablie. Équilibre 100% durable.",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    const currentLine = telemetryMessages[currentLineIndex];
    if (typedChars < currentLine.length) {
      const timeout = setTimeout(() => {
        setTypedChars((c) => c + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setTypedChars(0);
        setCurrentLineIndex((prev) => (prev + 1) % telemetryMessages.length);
      }, 2500);
      return () => clearTimeout(pause);
    }
  }, [currentLineIndex, typedChars]);

  /* ========================================================
     CARD 3: CURSOR PROTOCOL SCHEDULER
     Weekly grid (S M T W T F S) with animated SVG cursor entering,
     clicking a day cell, activating highlight, moving to Save
  ======================================================== */
  const days = [
    { label: "L", active: true },
    { label: "M", active: true },
    { label: "M", active: true },
    { label: "J", active: true },
    { label: "V", active: false },
    { label: "S", active: false },
    { label: "D", active: false },
  ];

  const [activeDayIndex, setActiveDayIndex] = useState(4); // Friday activated dynamically
  const [cursorPhase, setCursorPhase] = useState(0); // 0: enter, 1: click, 2: save, 3: rest

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPhase(1); // clicking
      setTimeout(() => {
        setActiveDayIndex((prev) => (prev === 4 ? 5 : 4));
        setCursorPhase(2); // moving to save
      }, 700);
      setTimeout(() => {
        setCursorPhase(3); // resting
      }, 1800);
      setTimeout(() => {
        setCursorPhase(0); // reset
      }, 2800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-moss/10 text-moss text-xs font-mono uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-clay" />
            <span>Architecture Thérapeutique</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-charcoal">
            Trois piliers conçus comme un{' '}
            <span className="font-drama italic font-normal text-clay text-4xl sm:text-6xl block sm:inline">
              instrument de précision.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70">
            Fini les pilules chimiques éphémères aux effets secondaires dangereux. Agbara combine 
            la puissance brute des plantes médicinales africaines et la rigueur de formulation moderne.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ========================================================
              CARD 1: DIAGNOSTIC SHUFFLER
          ======================================================== */}
          <div className="bg-cream-card border border-moss/10 rounded-[2.5rem] p-8 shadow-xl shadow-moss/5 flex flex-col justify-between hover-lift">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-moss/10 flex items-center justify-center text-moss mb-6">
                <Layers className="w-6 h-6 text-clay" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold">
                Pilier 01 • Formule Pure
              </span>
              <h3 className="text-2xl font-bold font-sans mt-1 mb-2 text-charcoal">
                100% Naturel & Sauvage
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                Sélection rigoureuse d'écorces médicinales et de racines rares non dénaturées, 
                associées à du miel brut non pasteurisé.
              </p>
            </div>

            {/* Shuffler Micro-UI Container */}
            <div className="relative h-56 w-full flex items-center justify-center">
              {shufflerCards.map((card, idx) => {
                const isTop = idx === 0;
                const isMid = idx === 1;
                const isBack = idx === 2;

                const translateY = isTop ? 0 : isMid ? 18 : 36;
                const scale = isTop ? 1 : isMid ? 0.94 : 0.88;
                const opacity = isTop ? 1 : isMid ? 0.85 : 0.65;
                const zIndex = 30 - idx * 10;

                return (
                  <div
                    key={card.id}
                    className={`absolute inset-x-2 p-5 rounded-2xl border shadow-lg transition-all duration-700 ease-spring ${card.color}`}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase font-bold px-2 py-0.5 rounded-full bg-white/15">
                        {card.badge}
                      </span>
                      <span className="text-xs font-mono font-medium text-clay">
                        {card.metric}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm tracking-tight mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs opacity-80 leading-snug">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-moss/10 flex items-center justify-between text-xs font-mono text-charcoal/60">
              <span>CYCLE ROTATION BIO-ACTIF</span>
              <span className="text-clay font-bold">3.2s AUTO</span>
            </div>
          </div>

          {/* ========================================================
              CARD 2: TELEMETRY TYPEWRITER
          ======================================================== */}
          <div className="bg-charcoal text-cream border border-charcoal-border rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between hover-lift">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-clay mb-6">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold">
                Pilier 02 • Action Échelonnée
              </span>
              <h3 className="text-2xl font-bold font-sans mt-1 mb-2 text-white">
                Triple Synergie Ciblée
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed mb-6">
                Tisane détoxifiante, Poudre ultra-dense et Sirop élixir au miel brut. 
                Chaque forme intervient à un créneau physiologique précis.
              </p>
            </div>

            {/* Typewriter Terminal UI */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-5 font-mono text-xs shadow-inner h-56 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] tracking-wider text-emerald-400 font-bold uppercase">
                      Live Telemetry Feed
                    </span>
                  </div>
                  <span className="text-[10px] text-white/40">SYS-AGBARA-v2.6</span>
                </div>

                <div className="text-cream/90 min-h-[70px] leading-relaxed">
                  {telemetryMessages[currentLineIndex].slice(0, typedChars)}
                  <span className="inline-block w-2 h-4 bg-clay ml-1 animate-pulse align-middle" />
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                <span>PHASE: {currentLineIndex + 1}/5</span>
                <span className="text-emerald-400 font-bold">FLUX ACTIF 100%</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cream/50">
              <span>TRANSMISSION EN DIRECT</span>
              <span className="text-clay font-bold">IMMÉDIAT & DURABLE</span>
            </div>
          </div>

          {/* ========================================================
              CARD 3: CURSOR PROTOCOL SCHEDULER
          ======================================================== */}
          <div className="bg-cream-card border border-moss/10 rounded-[2.5rem] p-8 shadow-xl shadow-moss/5 flex flex-col justify-between hover-lift">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-moss/10 flex items-center justify-center text-moss mb-6">
                <CalendarCheck className="w-6 h-6 text-clay" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold">
                Pilier 03 • Cure & Discrétion
              </span>
              <h3 className="text-2xl font-bold font-sans mt-1 mb-2 text-charcoal">
                Protocole 30J & Discrétion
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                Calendrier d'observance personnalisé. Expédition anonyme sous 24-48h 
                et paiement sécurisé à la réception du colis.
              </p>
            </div>

            {/* Protocol Scheduler Micro-UI */}
            <div className="relative bg-cream rounded-2xl border border-moss/15 p-5 shadow-sm h-56 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="font-bold text-moss">CALENDRIER SEMAINE</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-clay/10 text-clay font-bold">
                    CURE EN COURS
                  </span>
                </div>

                {/* Day Buttons Grid */}
                <div className="grid grid-cols-7 gap-1.5 mb-4">
                  {days.map((day, idx) => {
                    const isSelected = idx < 4 || (idx === activeDayIndex && cursorPhase >= 1);
                    return (
                      <div
                        key={idx}
                        className={`h-11 rounded-xl flex flex-col items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                          isSelected
                            ? 'bg-clay text-white shadow-md shadow-clay/30 scale-100'
                            : 'bg-white border border-moss/10 text-charcoal/60'
                        }`}
                      >
                        <span className="text-[10px] opacity-70">{day.label}</span>
                        <span className="text-xs font-bold">{idx + 10}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Save Button */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    cursorPhase === 2
                      ? 'bg-moss text-white scale-[0.98]'
                      : 'bg-moss-dark text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-clay" />
                  <span>Dose Journalière Validée</span>
                </button>
              </div>

              {/* Animated Floating SVG Cursor */}
              <div
                className={`absolute pointer-events-none transition-all duration-700 ease-magnetic ${
                  cursorPhase === 0
                    ? 'top-4 right-6 opacity-0'
                    : cursorPhase === 1
                    ? 'top-14 left-[64%] scale-90 opacity-100'
                    : cursorPhase === 2
                    ? 'bottom-5 left-[50%] scale-95 opacity-100'
                    : 'bottom-2 right-4 opacity-0'
                }`}
              >
                <svg
                  className="w-6 h-6 text-clay drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" />
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-moss/10 flex items-center justify-between text-xs font-mono text-charcoal/60">
              <span>TRAÇABILITÉ DISCRÈTE</span>
              <span className="text-clay font-bold">COLIS 100% NEUTRE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

