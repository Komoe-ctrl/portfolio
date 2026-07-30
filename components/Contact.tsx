"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ContactInfo {
  label: string;
  value: string;
  link?: boolean;
}

export default function Contact() {
  const t = useTranslations("Contact");
  const infos = t.raw("infos") as ContactInfo[];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
          website: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          {t("badge")}
        </span>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          {t("intro")}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {infos.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02 }}
              className="
                rounded-2xl
                border border-slate-800
                bg-slate-900/40
                p-5
                transition-all
                hover:border-blue-500/40
                hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]
              "
            >
              <p className="text-sm text-slate-400">
                {item.label}
              </p>

              {item.link ? (
                <a
                  href={`https://${item.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-400 transition hover:text-blue-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
          />

          <input
            name="name"
            type="text"
            required
            placeholder={t("form.namePlaceholder")}
            value={form.name}
            onChange={handleChange}
            className="
              w-full rounded-xl
              border border-slate-800
              bg-slate-900
              px-4 py-3
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />

          <input
            name="email"
            type="email"
            required
            placeholder={t("form.emailPlaceholder")}
            value={form.email}
            onChange={handleChange}
            className="
              w-full rounded-xl
              border border-slate-800
              bg-slate-900
              px-4 py-3
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />

          <textarea
            name="message"
            rows={6}
            required
            placeholder={t("form.messagePlaceholder")}
            value={form.message}
            onChange={handleChange}
            className="
              w-full rounded-xl
              border border-slate-800
              bg-slate-900
              px-4 py-3
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              w-full
              rounded-xl
              bg-blue-600
              px-6 py-3
              font-medium
              text-white
              transition
              hover:bg-blue-500
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? t("form.submitting") : t("form.submit")}
          </motion.button>

          {success && (
            <p className="text-sm text-green-400">
              {t("form.success")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
