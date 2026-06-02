"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Wrench } from "lucide-react";

const PRODUCTS = [
  {
    name: "Barandas de Vidrio",
    description: "Vidrio laminado 8+8mm con herrajes en acero inoxidable 316. Resistencia garantizada.",
    price: "Desde $180.000 m²",
    tag: "Más vendido",
    gradient: "from-[#1a1a1a] to-[#0f0f0f]",
    accent: true,
  },
  {
    name: "Deck Exterior IPE",
    description: "Madera dura natural con aceite UV. Resistente a lluvia y humedad. Instalación incluida.",
    price: "Desde $95.000 m²",
    tag: "Sustentable",
    gradient: "from-[#1c1810] to-[#111108]",
    accent: false,
  },
  {
    name: "Pérgolas Metálicas",
    description: "Acero galvanizado con pintura electrostática. Diseño modular adaptable a cada espacio.",
    price: "Desde $320.000 u.",
    tag: "Personalizable",
    gradient: "from-[#161820] to-[#0e0f14]",
    accent: false,
  },
  {
    name: "Cubierta Policarbonato",
    description: "Panel alveolar 10mm con 80% de transmisión lumínica. Protección UV total incluida.",
    price: "Desde $65.000 m²",
    tag: "Protección UV",
    gradient: "from-[#161616] to-[#0a0a0a]",
    accent: false,
  },
];

const BENEFITS = [
  { icon: ShieldCheck, label: "5 años de garantía" },
  { icon: Truck, label: "Despacho a todo Chile" },
  { icon: Wrench, label: "Instalación incluida" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function ProductsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="productos" ref={ref} className="bg-[#0d0d0d] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>
              Catálogo
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Productos Destacados
            </h2>
            <p className="mt-4 max-w-lg text-white/55">
              Materiales seleccionados con los más altos estándares de calidad.
              Todo disponible para tu proyecto.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--accent)" }}
          >
            Ver catálogo completo <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Benefits bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10 flex flex-wrap gap-6"
        >
          {BENEFITS.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5 text-sm text-white/60">
              <b.icon className="h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
              {b.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl bg-linear-to-b ${product.gradient} border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                product.accent
                  ? "border-[#c9a84c]/30 hover:border-[#c9a84c]/60"
                  : "border-white/6 hover:border-white/15"
              }`}
            >
              {product.tag && (
                <span
                  className="mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={
                    product.accent
                      ? { background: "rgba(201,168,76,0.2)", color: "var(--accent)" }
                      : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }
                  }
                >
                  {product.tag}
                </span>
              )}

              <h3 className="mb-2 text-lg font-semibold text-white">{product.name}</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/50">{product.description}</p>

              <div className="flex items-end justify-between">
                <span className="text-base font-bold" style={{ color: "var(--accent)" }}>
                  {product.price}
                </span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-200 hover:border-[#c9a84c]/50 hover:text-[#c9a84c] group-hover:opacity-100">
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
