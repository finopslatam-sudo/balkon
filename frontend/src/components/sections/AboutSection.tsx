"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const VALUES = [
  "Materiales de primera calidad en cada proyecto",
  "Presupuesto detallado sin letra chica",
  "Plazos cumplidos y comunicación constante",
  "Equipo técnico certificado y con experiencia",
  "Gestión completa de permisos municipales",
  "Garantía extendida de 5 años en mano de obra",
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" ref={ref} className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Large card */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1a1a1a] to-[#111] border border-white/8 aspect-4/3">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.12),transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <span className="text-8xl font-black text-white/5 leading-none select-none">CJ</span>
                <div className="mt-4">
                  <p className="text-4xl font-black text-white tracking-tight">BALKON</p>
                  <p className="mt-1 text-sm text-white/40 tracking-widest uppercase">Construcciones CJ</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#161616] p-5 shadow-2xl">
              <p className="text-3xl font-black" style={{ color: "var(--accent)" }}>2014</p>
              <p className="mt-0.5 text-xs text-white/40">Fundada en Chile</p>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>
              Quiénes somos
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl leading-tight">
              Construimos con
              <span className="italic" style={{ color: "var(--accent)" }}> propósito</span>
            </h2>

            <p className="mt-6 text-white/60 leading-relaxed">
              Somos una empresa chilena especializada en construcción de balcones, terrazas y
              remodelaciones. Desde 2014 hemos transformado más de 280 proyectos con un
              compromiso inquebrantable: calidad visible en cada detalle.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Trabajamos con arquitectos, constructoras y directamente con propietarios que
              buscan espacios diseñados para durar y sorprender.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-2.5 text-sm text-white/65"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                  {v}
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Hablar con nosotros
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
