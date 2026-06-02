"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Layers,
  Hammer,
  Paintbrush2,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Balcones",
    description:
      "Diseñamos y construimos balcones que amplían tu espacio y aumentan el valor de tu propiedad. Estructuras seguras con materiales de primera calidad.",
    features: ["Acero inoxidable", "Vidrio templado", "Aluminio anodizado"],
  },
  {
    icon: Layers,
    title: "Terrazas",
    description:
      "Transformamos espacios exteriores en terrazas funcionales y elegantes, perfectas para el clima chileno. Diseño personalizado a cada proyecto.",
    features: ["Deck de madera", "Porcelanato exterior", "Pérgolas metálicas"],
  },
  {
    icon: Hammer,
    title: "Remodelaciones",
    description:
      "Renovamos y transformamos espacios interiores y exteriores con soluciones constructivas de alto estándar y garantía de obra.",
    features: ["Cocinas", "Baños", "Espacios comerciales"],
  },
  {
    icon: Paintbrush2,
    title: "Diseño a medida",
    description:
      "Cada proyecto comienza con una consulta de diseño personalizada. Nuestro equipo crea soluciones únicas adaptadas a tu visión y presupuesto.",
    features: ["Renders 3D", "Asesoría técnica", "Gestión de permisos"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" ref={ref} className="bg-[#0d0d0d] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>
            Lo que hacemos
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/55">
            Más de 10 años construyendo espacios de excelencia en Chile.
            Cada proyecto es único, cada detalle importa.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={card}
              className="group relative rounded-2xl border border-white/8 bg-white/3 p-7 transition-all duration-300 hover:border-[#c9a84c]/40 hover:bg-white/5"
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "rgba(201,168,76,0.12)" }}
              >
                <service.icon className="h-6 w-6" style={{ color: "var(--accent)" }} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-white/55">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/45">
                    <span className="h-1 w-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ color: "var(--accent)" }}>
                Saber más <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
