"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 300);
  });

  return (
    <motion.a
      href="https://wa.me/56912345678?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl"
      style={{ background: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-white border-2 border-[#25D366] animate-pulse" />
    </motion.a>
  );
}
