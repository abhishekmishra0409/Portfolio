import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

export const CosmicBackdrop = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Skip the canvas entirely on mobile — too expensive on low-end CPUs
        if (isMobile()) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        const mouse = { x: null, y: null, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor(x, y, dx, dy, size, color) {
                this.x = x; this.y = y;
                this.dx = dx; this.dy = dy;
                this.size = size; this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                this.x += this.dx;
                this.y += this.dy;
                if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
                if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= (dx / distance) * force * 1.2;
                        this.y -= (dy / distance) * force * 1.2;
                    }
                }
            }
        }

        const initParticles = () => {
            particles = [];
            const count = Math.min(65, Math.floor((canvas.width * canvas.height) / 28000));
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    (Math.random() - 0.5) * 0.35,
                    (Math.random() - 0.5) * 0.35,
                    Math.random() * 1.5 + 0.6,
                    "rgba(147, 197, 253, 0.18)"
                ));
            }
        };

        const connect = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 110) {
                        ctx.strokeStyle = `rgba(147, 197, 253, ${(1 - distance / 110) * 0.06})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = particles[a].x - mouse.x;
                    const dy = particles[a].y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        ctx.strokeStyle = `rgba(96, 165, 250, ${(1 - distance / mouse.radius) * 0.12})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => { p.update(); p.draw(); });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();

        const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div aria-hidden="true" className="site-backdrop fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0b1020]">
            {/* Nebula blobs — static on mobile, animated on desktop */}
            <motion.div
                animate={{ x: [0, 60, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.92, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[15%] -left-[10%] h-[50vw] w-[50vw] max-w-[500px] rounded-full bg-blue-500/[0.14] blur-[130px] motion-reduce:animate-none"
            />
            <motion.div
                animate={{ x: [0, -50, 60, 0], y: [0, 30, -50, 0], scale: [1, 0.90, 1.12, 1] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-[15%] -right-[10%] h-[45vw] w-[45vw] max-w-[450px] rounded-full bg-indigo-500/[0.10] blur-[110px] motion-reduce:animate-none"
            />
            <motion.div
                animate={{ x: [0, 30, -30, 0], y: [0, 30, -30, 0], scale: [1, 1.08, 0.95, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[35%] left-[20%] h-[35vw] w-[35vw] max-w-[350px] rounded-full bg-blue-600/[0.07] blur-[100px] motion-reduce:animate-none"
            />

            {/* Canvas hidden on mobile (no ref effect runs) */}
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70 hidden sm:block" />

            <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
    );
};

export default CosmicBackdrop;
