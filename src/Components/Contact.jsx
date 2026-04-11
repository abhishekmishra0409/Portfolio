import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toastify from "toastify-js";
import { TbArrowRight, TbMail, TbMapPin, TbPhone, TbSatellite } from "react-icons/tb";
import "toastify-js/src/toastify.css";

/**
 * Contact Section Component
 * Contact form and information with EmailJS integration
 */
export const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const resumeUrl = "https://drive.google.com/file/d/19r1_IolHkqCuOp64nHSh82X5btLJUquF/view?usp=sharing";
    const contactItems = [
        {
            title: "Email",
            value: "abhishekmishra0409@gmail.com",
            href: "mailto:abhishekmishra0409@gmail.com",
            icon: <TbMail className="text-xl text-cyan-300 cosmic-icon-glow" />,
        },
        {
            title: "Phone",
            value: "+91 7489977978",
            href: "tel:+917489977978",
            icon: <TbPhone className="text-xl text-sky-300 cosmic-icon-glow" />,
        },
        {
            title: "Location",
            value: "Indore, Madhya Pradesh, India",
            href: null,
            icon: <TbMapPin className="text-xl text-indigo-300 cosmic-icon-glow" />,
        },
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm("service_hbifhmr", "template_pgf2s5p", formRef.current, "id4X508VlnKloKeZi")
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    formRef.current.reset();
                    Toastify({
                        text: "Your Message was successfully sent",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        stopOnFocus: true,
                        style: {
                            background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 55%, #6366f1 100%)",
                        },
                    }).showToast();
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    Toastify({
                        text: "Failed to submit the form. Please try again.",
                        duration: 3000,
                        gravity: "top",
                        position: "center",
                        style: {
                            background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)",
                        },
                    }).showToast();
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <section id="contactSection" className="py-4 lg:py-6">
            <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="space-eyebrow justify-center">Deep Space Relay · Open Channel</p>
                <h1 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
                    Let&apos;s build a portfolio piece worth talking about.
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                    If you&apos;re hiring, collaborating, or just want to discuss a product idea, I&apos;m happy to connect.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
                <motion.div
                    className="surface-card rounded-[2rem] p-6 lg:p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                        <TbSatellite className="h-4 w-4 cosmic-icon-glow" aria-hidden />
                        Channel open · Available
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                        Developer support with a design-first eye.
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                        I enjoy working on products that need both thoughtful visual polish and reliable full stack execution.
                    </p>

                    <div className="mt-8 grid gap-4">
                        {contactItems.map((item) => {
                            const content = (
                                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-400/20">
                                    <div className="mt-1 text-lg">{item.icon}</div>
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
                                        <p className="mt-2 text-base text-slate-200">{item.value}</p>
                                    </div>
                                </div>
                            );

                            if (!item.href) {
                                return <div key={item.title}>{content}</div>;
                            }

                            return (
                                <a key={item.title} href={item.href} className="block">
                                    {content}
                                </a>
                            );
                        })}
                    </div>

                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary mt-8 w-full sm:w-fit"
                    >
                        View Resume
                        <TbArrowRight className="text-lg" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="surface-card rounded-[2rem] p-6 lg:p-8"
                >
                    <motion.form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                        <div>
                            <label htmlFor="user_name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Name
                            </label>
                            <input
                                id="user_name"
                                type="text"
                                required
                                placeholder="Your name"
                                name="user_name"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8"
                            />
                        </div>

                        <div>
                            <label htmlFor="user_email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Email
                            </label>
                            <input
                                id="user_email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                name="user_email"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                required
                                placeholder="Tell me about the project, role, or idea you have in mind."
                                name="message"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:bg-white/8"
                            />
                        </div>

                        <button type="submit" className="button-primary mt-2 w-full sm:w-fit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};
