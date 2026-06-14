import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TbArrowRight, TbBriefcase, TbCode, TbDeviceMobile, TbMapPin, TbChevronDown } from "react-icons/tb";
import { personalData } from "../data/personalData.js";
import { scrollToElement } from "../utils/scrollUtils.js";

const useCounter = (target, duration = 1200) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView || typeof target !== "number") return;
        const steps = 40;
        const step = Math.ceil(target / steps);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(current);
        }, duration / steps);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return { count, ref };
};

const FloatingOrb = ({ className, delay = 0, duration = 8 }) => (
    <motion.div
        className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
        animate={{ y: [-18, 18, -18], x: [-8, 8, -8] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        aria-hidden="true"
    />
);


export const First = () => {
    const { count: expCount, ref: expRef } = useCounter(2);

    return (
        <header className="overflow-visible py-8 sm:py-12 lg:py-16" role="banner">
            <div className="grid items-center gap-10 overflow-visible lg:grid-cols-2 lg:gap-14">

                {/* ── LEFT ──────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col gap-7"
                >
                    <div className="space-y-5">
                        <motion.p
                            className="space-eyebrow"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            Full Stack Developer
                        </motion.p>

                        <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem]">
                            Building{" "}
                            <span className="text-gradient">scalable</span>{" "}
                            web apps and clean interfaces.
                        </h1>

                        <p className="max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
                            I&apos;m{" "}
                            <span className="font-semibold text-slate-200">{personalData.name}</span>{" "}
                            — a full-stack developer specialising in the MERN stack, currently at{" "}
                            <span className="text-blue-400 font-medium">{personalData.currentCompany}</span>.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <motion.button
                            type="button"
                            onClick={() => scrollToElement("projects", 80)}
                            className="button-primary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View Projects <TbArrowRight className="text-lg" />
                        </motion.button>
                        <motion.button
                            type="button"
                            onClick={() => scrollToElement("contact", 80)}
                            className="button-secondary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get In Touch
                        </motion.button>
                    </div>

                    {/* Animated stats */}
                    <div className="grid grid-cols-3 gap-3" ref={expRef}>
                        {[
                            { value: `${expCount}+`, label: "Years building" },
                            { value: "MERN",          label: "Core stack" },
                            { value: "SaaS",          label: "Focus area" },
                        ].map((s) => (
                            <motion.div
                                key={s.label}
                                whileHover={{ y: -3, borderColor: "rgba(59,130,246,0.30)" }}
                                className="surface-card rounded-2xl p-4 text-center transition-colors sm:p-5"
                            >
                                <p className="text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── RIGHT: custom code editor mockup ───────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.14 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Glow orbs — positioned on the outer wrapper so they're NOT clipped */}
                    <FloatingOrb className="absolute right-[-60px] top-[-50px] h-72 w-72 bg-blue-500/[0.09]"     delay={0}   duration={9}  />
                    <FloatingOrb className="absolute left-[-40px]  bottom-[-40px] h-56 w-56 bg-indigo-500/[0.07]" delay={2.5} duration={11} />

                    <div className="relative w-full max-w-[28rem]">
                        <div className="surface-card relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/40 p-5 shadow-2xl backdrop-blur-xl flex flex-col gap-4">
                            {/* Window header */}
                            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                                    <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                                </div>
                                <div className="rounded-md border border-white/[0.05] bg-white/[0.02] px-3 py-1 text-center font-mono text-[10px] tracking-wide text-slate-400">
                                    abhishek.config.js
                                </div>
                                <div className="w-10" />
                            </div>

                            {/* Editor Workspace */}
                            <div className="flex font-mono text-xs leading-6 md:text-sm select-none">
                                {/* Line Numbers */}
                                <div className="mr-4 flex flex-col text-right text-slate-600 border-r border-white/5 pr-3">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                {/* Code with custom syntax styling */}
                                <div className="flex-1 text-slate-300 overflow-x-auto whitespace-pre">
                                    <div><span className="text-pink-400">const</span> <span className="text-blue-300">developer</span> = &#123;</div>
                                    <div>    <span className="text-sky-300">name</span>: <span className="text-amber-300">"{personalData.name}"</span>,</div>
                                    <div>    <span className="text-sky-300">role</span>: <span className="text-amber-300">"Full Stack Developer"</span>,</div>
                                    <div>    <span className="text-sky-300">location</span>: <span className="text-amber-300">"{personalData.locationShort}"</span>,</div>
                                    <div>    <span className="text-sky-300">stack</span>: <span className="text-purple-300">[</span><span className="text-amber-300">"MERN"</span>, <span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"React Native"</span><span className="text-purple-300">]</span>,</div>
                                    <div>    <span className="text-sky-300">motto</span>: <span className="text-amber-300">"Clean UI, robust APIs"</span>,</div>
                                    <div>    <span className="text-sky-300">opportunities</span>: <span className="text-emerald-400">true</span></div>
                                    <div>&#125;;</div>
                                    <div className="mt-2 text-slate-500 italic">// Building dynamic web platforms...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="mt-12 flex justify-center lg:mt-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <button
                    type="button"
                    onClick={() => scrollToElement("about", 80)}
                    className="flex flex-col items-center gap-1.5 text-slate-500 transition hover:text-blue-400"
                    aria-label="Scroll to about section"
                >
                    <span className="text-xs font-medium tracking-[0.15em] uppercase">Explore</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <TbChevronDown className="h-5 w-5" />
                    </motion.div>
                </button>
            </motion.div>
        </header>
    );
};
