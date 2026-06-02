"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const SERVICES = [
  "Balcón",
  "Terraza",
  "Remodelación",
  "Diseño a medida",
  "Otro",
];

const INFO = [
  { icon: Phone, label: "Teléfono", value: "+56 9 1234 5678", href: "tel:+56912345678" },
  { icon: MessageCircle, label: "WhatsApp", value: "+56 9 1234 5678", href: "https://wa.me/56912345678" },
  { icon: Mail, label: "Email", value: "contacto@balkon.cl", href: "mailto:contacto@balkon.cl" },
  { icon: MapPin, label: "Oficina", value: "Santiago, Chile", href: "#" },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun–Vie 9:00–18:00",
    href: undefined,
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[#c9a84c]/50 focus:bg-white/8 focus:ring-2 focus:ring-[#c9a84c]/15";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contacto" ref={ref} className="bg-[#0d0d0d] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em]" style={{ color: "var(--accent)" }}>
            Contacto
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/55">
            Cuéntanos qué tienes en mente y te enviamos una cotización sin costo
            en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  <item.icon className="h-4.5 w-4.5" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs text-white/35 mb-0.5">{item.label}</p>
                  {item.href && item.href !== "#" ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/80">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/56912345678?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/8 px-5 py-4 text-sm font-medium text-[#25D366] transition-all duration-200 hover:bg-[#25D366]/15"
            >
              <MessageCircle className="h-5 w-5" />
              Chatear por WhatsApp ahora
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-2xl border border-[#c9a84c]/25 bg-[#c9a84c]/5 p-12 text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "rgba(201,168,76,0.15)" }}
                >
                  <Send className="h-7 w-7" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-xl font-semibold text-white">¡Mensaje enviado!</h3>
                <p className="max-w-xs text-sm text-white/55">
                  Te contactaremos en menos de 24 horas hábiles con una cotización detallada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/45">Nombre completo *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/45">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+56 9 XXXX XXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-white/45">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-white/45">Tipo de proyecto</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-[#1a1a1a]">Selecciona un servicio</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-white/45">Mensaje *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto, dimensiones, materiales de preferencia..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Solicitar cotización gratuita
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/30">
                  Sin compromiso. Respuesta en menos de 24 horas.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
