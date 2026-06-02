"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WhatsAppLogo = ({ size = "lg" }: { size?: "sm" | "lg" }) => (
  <svg
    viewBox="0 0 24 24"
    className={size === "sm" ? "h-3.5 w-3.5" : "h-8 w-8"}
    fill="white"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 300);
  });

  // Show message bubble 2s after the button appears
  useEffect(() => {
    if (!visible || dismissed) return;
    const t = setTimeout(() => setShowBubble(true), 2000);
    return () => clearTimeout(t);
  }, [visible, dismissed]);

  // Auto-hide bubble after 6s
  useEffect(() => {
    if (!showBubble) return;
    const t = setTimeout(() => setShowBubble(false), 6000);
    return () => clearTimeout(t);
  }, [showBubble]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Message bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 shadow-2xl"
          >
            {/* Sender row */}
            <div className="mb-1.5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "#25D366" }}>
                <WhatsAppLogo size="sm" />
              </div>
              <span className="text-[11px] font-semibold" style={{ color: "#25D366" }}>BALKON</span>
            </div>
            <p className="text-[13px] leading-snug text-gray-700">
              ¡Hola! ¿En qué podemos ayudarte hoy? 👋
            </p>
            {/* Timestamp */}
            <p className="mt-1.5 text-right text-[10px] text-gray-400">ahora</p>
            {/* Tail */}
            <span className="absolute -bottom-2 right-0 h-0 w-0 border-l-[10px] border-t-[10px] border-l-transparent border-t-white" />
            {/* Close */}
            <button
              onClick={() => { setShowBubble(false); setDismissed(true); }}
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors text-[10px] font-bold leading-none"
              aria-label="Cerrar"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
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
        className="relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl"
        style={{ background: "#25D366" }}
        onClick={() => { setShowBubble(false); setDismissed(true); }}
      >
        <WhatsAppLogo />

        {/* Outer pulse ring */}
        {showBubble && (
          <>
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(37,211,102,0.35)" }}
            />
            <span
              className="absolute -inset-1 rounded-full animate-ping [animation-delay:0.4s]"
              style={{ background: "rgba(37,211,102,0.18)" }}
            />
          </>
        )}

        {/* Notification dot */}
        <AnimatePresence>
          {showBubble && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-md"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
