"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const CATEGORIES = ["Todos", "Balcones", "Terrazas", "Remodelaciones"];

const PROJECTS = [
  {
    id: 1,
    title: "Terraza Panorámica Las Condes",
    category: "Terrazas",
    location: "Las Condes, Santiago",
    year: "2024",
    size: "large",
    gradient: "from-stone-800 to-stone-900",
    accentLine: "Deck IPE + pérgola acero corten",
  },
  {
    id: 2,
    title: "Balcón Vitacura Tower",
    category: "Balcones",
    location: "Vitacura, Santiago",
    year: "2024",
    size: "small",
    gradient: "from-zinc-800 to-zinc-900",
    accentLine: "Vidrio laminado + acero inoxidable",
  },
  {
    id: 3,
    title: "Remodelación Providencia",
    category: "Remodelaciones",
    location: "Providencia, Santiago",
    year: "2023",
    size: "small",
    gradient: "from-neutral-800 to-neutral-900",
    accentLine: "Cocina + living + terraza",
  },
  {
    id: 4,
    title: "Terraza Rooftop Ñuñoa",
    category: "Terrazas",
    location: "Ñuñoa, Santiago",
    year: "2023",
    size: "small",
    gradient: "from-slate-800 to-slate-900",
    accentLine: "Piso cerámico exterior + iluminación",
  },
  {
    id: 5,
    title: "Balcones Edificio Barrio Italia",
    category: "Balcones",
    location: "Barrio Italia, Santiago",
    year: "2023",
    size: "small",
    gradient: "from-gray-800 to-gray-900",
    accentLine: "Aluminio lacado + barandas vidrio",
  },
  {
    id: 6,
    title: "Ampliación Casa Lo Barnechea",
    category: "Remodelaciones",
    location: "Lo Barnechea, Santiago",
    year: "2024",
    size: "large",
    gradient: "from-stone-700 to-stone-900",
    accentLine: "Terraza + balcón + quincho",
  },
];

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" ref={ref} className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>
              Portafolio
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Nuestros Proyectos
            </h2>
            <p className="mt-4 max-w-lg text-white/55">
              Cada obra refleja nuestro compromiso con la calidad, el diseño
              y la satisfacción del cliente.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--accent)" }}
          >
            Ver todos los proyectos <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "text-[#0a0a0a]"
                  : "border border-white/15 text-white/60 hover:border-white/30 hover:text-white/80"
              }`}
              style={
                activeFilter === cat
                  ? { background: "var(--accent)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${project.gradient} cursor-pointer ${
                  project.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08),transparent_60%)]" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-400 group-hover:bg-black/20" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <span
                      className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: "rgba(201,168,76,0.2)", color: "var(--accent)" }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/50">{project.accentLine}</p>

                    <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-1.5 text-xs text-white/55">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                      <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
