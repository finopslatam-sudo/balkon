"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone, FolderOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Track scroll progress within this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Video moves down 30% of its height as section exits — creates parallax lag
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Content fades and rises slightly on scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-150 w-full overflow-hidden"
    >
      {/* Parallax video — taller than container so translated pixels stay visible */}
      <motion.div
        className="absolute inset-x-0 top-[-15%] h-[130%]"
        style={{ y: videoY }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/videos/balkon.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Content — fades out as user scrolls away */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70"
        >
          Construcciones CJ
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Construimos{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            espacios
          </span>{" "}
          que inspiran
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Balcones, terrazas y remodelaciones con diseño de excelencia
          y materiales de primera calidad.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <Phone className="h-4 w-4" />
            Solicitar cotización
          </a>

          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95"
          >
            <FolderOpen className="h-4 w-4" />
            Ver proyectos
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
