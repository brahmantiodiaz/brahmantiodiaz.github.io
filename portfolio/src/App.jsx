import { useEffect, useMemo, useState } from "react";
import {
	ArrowUpRight,
	BriefcaseBusiness,
	CheckCircle2,
	ChevronRight,
	Code2,
	Download,
	GraduationCap,
	Mail,
	MapPin,
	Menu,
	Moon,
	Phone,
	Rocket,
	ShieldCheck,
	Sparkles,
	Sun,
	X,
} from "lucide-react";
import {
	certificates,
	education,
	experiences,
	navItems,
	profile,
	projects,
	skillGroups,
	stats,
} from "./data/portfolioData";
function Github({ size = 24, className = "", ...props }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
			{...props}
		>
			<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.94c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
		</svg>
	);
}

function Linkedin({ size = 24, className = "", ...props }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
			{...props}
		>
			<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
		</svg>
	);
}

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function useTheme() {
	const [theme, setTheme] = useState(() => {
		if (typeof window === "undefined") return "dark";
		return localStorage.getItem("theme") || "dark";
	});

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((current) => (current === "dark" ? "light" : "dark"));

	return { theme, toggleTheme };
}

function SectionHeader({ eyebrow, title, description, align = "left" }) {
	return (
		<div
			className={classNames(
				"mb-10 max-w-3xl",
				align === "center" && "mx-auto text-center",
			)}
		>
			<p className="mb-3 inline-flex items-center gap-2 rounded-full border border-navy-400/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-navy-700 shadow-sm shadow-navy-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-navy-200">
				<Sparkles size={14} /> {eyebrow}
			</p>
			<h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
				{title}
			</h2>
			{description && (
				<p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
					{description}
				</p>
			)}
		</div>
	);
}

function GlassCard({ children, className = "", hover = true }) {
	return (
		<div
			className={classNames(
				"relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur-xl transition duration-300 dark:border-white/10 dark:bg-white/[0.055]",
				hover &&
					"hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-glow",
				className,
			)}
		>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-400/70 to-transparent" />
			{children}
		</div>
	);
}

function Navbar({ theme, toggleTheme }) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) setOpen(false);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
			<nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75">
				<a
					href="#home"
					className="group flex items-center gap-3"
					onClick={() => setOpen(false)}
				>
					<img
						src={profile.brandIcon}
						alt="Aulia Brahmantio Diaz logo"
						className="h-10 w-10 rounded-full border border-navy-400/30 object-cover shadow-glow"
					/>
				</a>

				<div className="hidden items-center gap-1 lg:flex">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-navy-50 hover:text-navy-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
						>
							{item.label}
						</a>
					))}
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						aria-label="Toggle theme"
						onClick={toggleTheme}
						className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-navy-300 hover:text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
					>
						{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
					</button>
					<a
						href={profile.cvFile}
						download="Aulia-Brahmantio-Diaz-CV.pdf"
						className="hidden rounded-full bg-navy-700 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-navy-600 sm:inline-flex sm:items-center sm:gap-2 dark:bg-navy-500 dark:hover:bg-navy-400"
					>
						<Download size={16} /> Download CV
					</a>
					<button
						type="button"
						onClick={() => setOpen((current) => !current)}
						className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
						aria-label="Open menu"
					>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</nav>

			{open && (
				<div className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-slate-200/70 bg-white/95 p-3 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
					<div className="grid gap-1">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-navy-50 hover:text-navy-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
							>
								{item.label}
							</a>
						))}
						<a
							href={profile.cvFile}
							download="Aulia-Brahmantio-Diaz-CV.pdf"
							className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-navy-700 px-4 py-3 text-sm font-bold text-white dark:bg-navy-500"
						>
							<Download size={16} /> Download CV
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

function Hero() {
	return (
		<section
			id="home"
			className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
		>
			<div className="absolute inset-0 -z-10 bg-radial" />
			<div className="absolute inset-0 -z-20 bg-grid bg-[length:32px_32px] opacity-70" />

			<div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
				<div className="relative z-10">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-400/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-navy-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-navy-200 sm:text-sm">
						<span className="relative flex h-2.5 w-2.5">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
						</span>
						Available for opportunities
					</div>

					<h1 className="max-w-4xl text-balance text-4xl font-black tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
						Hello, I&apos;m{" "}
						<span className="gradient-text">Aulia Brahmantio Diaz</span>
					</h1>

					<p className="mt-5 text-2xl font-black tracking-tight text-navy-800 dark:text-navy-200 sm:text-3xl">
						A Software Engineer
					</p>

					<p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
						I build clean, scalable, and business-driven web applications using
						React, Node.js, Blazor WebAssembly, NestJS, Laravel, PostgreSQL, and
						enterprise CRM technologies.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href="#projects"
							className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-navy-600 dark:bg-navy-500 dark:hover:bg-navy-400"
						>
							View Projects
							<ArrowUpRight
								className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								size={18}
							/>
						</a>

						<a
							href={profile.cvFile}
							download="Aulia-Brahmantio-Diaz-CV.pdf"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-4 text-sm font-bold text-slate-800 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-navy-300 hover:text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-navy-300/40"
						>
							<Download size={18} />
							Download CV
						</a>
					</div>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<a
							className="social-link"
							href={profile.github}
							target="_blank"
							rel="noreferrer"
						>
							<Github size={18} />
							GitHub
						</a>

						<a
							className="social-link"
							href={profile.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<Linkedin size={18} />
							LinkedIn
						</a>

						<a className="social-link" href={`mailto:${profile.email}`}>
							<Mail size={18} />
							Email
						</a>
					</div>
				</div>

				<div className="relative">
					<div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-navy-400/20 blur-3xl dark:bg-navy-500/20" />
					<div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/10" />

					<div className="grid gap-5 sm:grid-cols-2">
						<GlassCard className="relative overflow-hidden p-4 sm:col-span-2">
							<div className="relative overflow-hidden rounded-[1.55rem]">
								<img
									src={profile.profilePhoto}
									alt="Aulia Brahmantio Diaz professional portrait"
									className="h-[420px] w-full object-cover object-top sm:h-[500px] lg:h-[540px]"
								/>

								<div className="absolute inset-x-4 bottom-4 rounded-[1.45rem] border border-white/15 bg-slate-950/75 p-4 text-white shadow-2xl backdrop-blur-xl">
									<p className="text-sm font-semibold text-navy-200">
										Based in {profile.location}
									</p>
									<p className="mt-1 text-xl font-black">
										Software Engineer · Full Stack Developer
									</p>
								</div>
							</div>
						</GlassCard>

						<GlassCard className="p-5">
							<p className="text-3xl font-black text-slate-950 dark:text-white">
								5+
							</p>
							<p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
								Years Experience
							</p>
						</GlassCard>

						<GlassCard className="p-5">
							<p className="text-3xl font-black text-slate-950 dark:text-white">
								10+
							</p>
							<p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
								Web & Enterprise Projects
							</p>
						</GlassCard>
					</div>
				</div>
			</div>
		</section>
	);
}

function About() {
	return (
		<section id="about" className="section-pad">
			<div className="mx-auto max-w-7xl">
				<SectionHeader
					eyebrow="About"
					title="A developer profile built around clean delivery and business impact."
					description="I combine full-stack engineering, enterprise system experience, and production support mindset to transform requirements into maintainable applications."
				/>

				<div className="grid gap-5 lg:grid-cols-12">
					<GlassCard className="lg:col-span-7">
						<div className="flex items-start gap-4">
							<div className="icon-box">
								<BriefcaseBusiness size={22} />
							</div>
							<div>
								<h3 className="text-2xl font-black text-slate-950 dark:text-white">
									Professional Summary
								</h3>
								<p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
									{profile.summary}
								</p>
							</div>
						</div>
					</GlassCard>

					<GlassCard className="lg:col-span-5">
						<div className="flex items-start gap-4">
							<div className="icon-box">
								<ShieldCheck size={22} />
							</div>
							<div>
								<h3 className="text-2xl font-black text-slate-950 dark:text-white">
									What I Deliver
								</h3>
								<div className="mt-5 grid gap-3">
									{[
										"Scalable web applications",
										"Maintainable backend services",
										"Enterprise workflow automation",
										"Responsive and accessible UI",
										"Production debugging and support",
									].map((item) => (
										<p
											key={item}
											className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200"
										>
											<CheckCircle2
												size={18}
												className="text-navy-600 dark:text-navy-300"
											/>{" "}
											{item}
										</p>
									))}
								</div>
							</div>
						</div>
					</GlassCard>

					<GlassCard className="lg:col-span-4">
						<GraduationCap
							className="mb-5 text-navy-600 dark:text-navy-300"
							size={30}
						/>
						<h3 className="text-xl font-black text-slate-950 dark:text-white">
							Education
						</h3>
						<p className="mt-3 font-bold text-slate-800 dark:text-slate-100">
							{education.school}
						</p>
						<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
							{education.degree}
						</p>
						<p className="mt-4 text-sm font-semibold text-navy-700 dark:text-navy-200">
							{education.period}
						</p>
						<p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
							{education.gpa}
						</p>
					</GlassCard>

					<GlassCard className="lg:col-span-8">
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{stats.map((item) => (
								<div
									key={item.label}
									className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-950/45"
								>
									<p className="text-3xl font-black text-navy-700 dark:text-navy-200">
										{item.value}
									</p>
									<p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
										{item.label}
									</p>
								</div>
							))}
						</div>
					</GlassCard>
				</div>
			</div>
		</section>
	);
}

function ExperienceCard({ item, index }) {
	return (
		<div className="relative grid gap-5 lg:grid-cols-[180px_1fr]">
			<div className="hidden lg:block">
				<div className="sticky top-28 rounded-[1.6rem] border border-slate-200/70 bg-white/70 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.055]">
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700 dark:text-navy-200">
						{item.period}
					</p>
					<p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
						{item.location}
					</p>
				</div>
			</div>

			<GlassCard className="group">
				<div className="flex flex-col gap-5 sm:flex-row sm:items-start">
					<div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/90">
						<img
							src={item.logo}
							alt={`${item.company} logo`}
							className="max-h-full max-w-full object-contain"
						/>
					</div>
					<div className="min-w-0 flex-1">
						<div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
							<div>
								<p className="text-sm font-bold uppercase tracking-[0.18em] text-navy-700 dark:text-navy-200">
									{item.theme}
								</p>
								<h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
									{item.role}
								</h3>
								<p className="mt-1 font-bold text-slate-700 dark:text-slate-200">
									{item.company}
								</p>
							</div>
							<div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-300 lg:hidden">
								{item.period}
							</div>
						</div>

						<div className="mt-5 rounded-[1.4rem] border border-navy-300/25 bg-navy-50/70 p-4 dark:border-navy-300/15 dark:bg-navy-400/10">
							<p className="text-sm font-black text-navy-800 dark:text-navy-100">
								Project: {item.project}
							</p>
							<p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
								{item.overview}
							</p>
						</div>

						<div className="mt-5 grid gap-3">
							{item.points.map((point) => (
								<p
									key={point}
									className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
								>
									<ChevronRight
										className="mt-1 shrink-0 text-navy-600 dark:text-navy-300"
										size={17}
									/>
									<span>{point}</span>
								</p>
							))}
						</div>

						<div className="mt-5 flex flex-wrap gap-2">
							{item.stack.map((tech) => (
								<span key={tech} className="tech-pill">
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
				<span className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition group-hover:text-navy-100 dark:text-white/[0.035] dark:group-hover:text-navy-400/10">
					{String(index + 1).padStart(2, "0")}
				</span>
			</GlassCard>
		</div>
	);
}

function Experience() {
	return (
		<section id="experience" className="section-pad">
			<div className="mx-auto max-w-7xl">
				<SectionHeader
					eyebrow="Experience"
					title="Experience across enterprise systems, web products, and backend services."
					description="Logos are included from the provided image sources and placed directly in the project assets folder."
				/>

				<div className="grid gap-6">
					{experiences.map((item, index) => (
						<ExperienceCard
							key={`${item.company}-${item.role}-${item.period}`}
							item={item}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectCard({ project, featured }) {
	return (
		<GlassCard
			className={classNames("group flex flex-col", featured && "lg:col-span-2")}
		>
			<div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
				<div className="flex items-center gap-4">
					<div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/90">
						<img
							src={project.logo}
							alt={`${project.title} logo`}
							className="max-h-full max-w-full object-contain"
						/>
					</div>
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700 dark:text-navy-200">
							{project.type}
						</p>
						<h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
							{project.title}
						</h3>
						<p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
							{project.subtitle}
						</p>
					</div>
				</div>

				<a
					href={project.url}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-navy-300 hover:text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
				>
					Visit <ArrowUpRight size={16} />
				</a>
			</div>

			<p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
				{project.description}
			</p>

			<div className="mt-6 grid gap-3">
				{project.highlights.map((highlight) => (
					<p
						key={highlight}
						className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
					>
						<CheckCircle2
							className="mt-1 shrink-0 text-navy-600 dark:text-navy-300"
							size={18}
						/>
						<span>{highlight}</span>
					</p>
				))}
			</div>

			<div className="mt-6 flex flex-wrap gap-2">
				{project.stack.map((tech) => (
					<span key={tech} className="tech-pill">
						{tech}
					</span>
				))}
			</div>
		</GlassCard>
	);
}

function Projects() {
	return (
		<section id="projects" className="section-pad">
			<div className="mx-auto max-w-7xl">
				<SectionHeader eyebrow="Projects" />

				<div className="grid gap-5 lg:grid-cols-2">
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} featured />
					))}
				</div>
			</div>
		</section>
	);
}

function Skills() {
	const allSkills = useMemo(
		() => skillGroups.flatMap((group) => group.skills),
		[],
	);

	return (
		<section id="skills" className="section-pad">
			<div className="mx-auto max-w-7xl">
				<SectionHeader
					eyebrow="Skills"
					title="Technical skills shaped by frontend, backend, and enterprise delivery."
					description="Grouped by practical usage so visitors can quickly understand the technologies behind the work."
				/>

				<div className="grid gap-5 lg:grid-cols-12">
					<GlassCard className="lg:col-span-5">
						<Rocket
							className="mb-5 text-navy-600 dark:text-navy-300"
							size={34}
						/>
						<h3 className="text-2xl font-black text-slate-950 dark:text-white">
							Core Stack
						</h3>
						<p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
							React.js, Node.js, NestJS, Laravel, PostgreSQL, Redis, Tailwind
							CSS, Blazor WebAssembly, Oracle Fusion CRM, and production-focused
							delivery.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{allSkills.slice(0, 18).map((skill) => (
								<span key={skill} className="tech-pill">
									{skill}
								</span>
							))}
						</div>
					</GlassCard>

					<div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
						{skillGroups.map((group) => (
							<GlassCard key={group.title} className="p-5">
								<h3 className="text-lg font-black text-slate-950 dark:text-white">
									{group.title}
								</h3>
								<div className="mt-4 flex flex-wrap gap-2">
									{group.skills.map((skill) => (
										<span key={skill} className="tech-pill">
											{skill}
										</span>
									))}
								</div>
							</GlassCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function Certificates() {
	return (
		<section className="section-pad">
			<div className="mx-auto max-w-7xl">
				<SectionHeader
					eyebrow="Certifications"
					title="Continuous learning through technical certifications."
					align="center"
				/>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{certificates.map((certificate) => (
						<GlassCard key={certificate} className="p-5">
							<CheckCircle2
								className="mb-4 text-navy-600 dark:text-navy-300"
								size={24}
							/>
							<p className="text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">
								{certificate}
							</p>
						</GlassCard>
					))}
				</div>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section id="contact" className="px-4 pb-10 pt-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<GlassCard className="overflow-hidden p-0">
					<div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
						<div className="p-5 sm:p-8 lg:p-12">
							<p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-navy-400/30 bg-navy-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-navy-200 sm:text-xs">
								<Mail size={14} className="shrink-0" />
								<span className="truncate">Contact</span>
							</p>

							<h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
								Let&apos;s build reliable software that supports real business
								needs.
							</h2>

							<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
								Open for software engineering, full-stack development, backend,
								frontend, and enterprise application opportunities.
							</p>

							<div className="mt-8 grid gap-3 sm:flex sm:flex-row">
								<a
									href={`mailto:${profile.email}`}
									className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 px-5 py-3.5 text-sm font-bold text-white shadow-glow transition hover:bg-navy-600 dark:bg-navy-500 dark:hover:bg-navy-400 sm:w-auto sm:px-6 sm:py-4"
								>
									Send Email
									<ArrowUpRight
										size={18}
										className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>

								<a
									href={profile.cvFile}
									download="Aulia-Brahmantio-Diaz-CV.pdf"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3.5 text-sm font-bold text-slate-800 transition hover:border-navy-300 hover:text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-white sm:w-auto sm:px-6 sm:py-4"
								>
									<Download size={18} className="shrink-0" />
									Download CV
								</a>
							</div>
						</div>

						<div className="border-t border-slate-200/70 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-slate-950/40 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
							<div className="grid gap-3">
								<a className="contact-item" href={`mailto:${profile.email}`}>
									<Mail size={20} className="contact-icon" />
									<span>{profile.email}</span>
								</a>

								<a
									className="contact-item"
									href={`tel:${profile.phone.replaceAll(" ", "")}`}
								>
									<Phone size={20} className="contact-icon" />
									<span>{profile.phone}</span>
								</a>

								<a
									className="contact-item"
									href={profile.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									<Linkedin size={20} className="contact-icon" />
									<span>linkedin.com/in/auliabrahmantiodiaz</span>
								</a>

								<a
									className="contact-item"
									href={profile.github}
									target="_blank"
									rel="noreferrer"
								>
									<Github size={20} className="contact-icon" />
									<span>github.com/brahmantiodiaz</span>
								</a>

								<div className="contact-item">
									<MapPin size={20} className="contact-icon" />
									<span>{profile.location}</span>
								</div>
							</div>
						</div>
					</div>
				</GlassCard>

				<footer className="flex flex-col gap-3 py-8 text-center text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
					<p>
						© {new Date().getFullYear()} Aulia Brahmantio Diaz. All rights
						reserved.
					</p>
				</footer>
			</div>
		</section>
	);
}

export default function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
			<Navbar theme={theme} toggleTheme={toggleTheme} />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Skills />
				<Certificates />
				<Contact />
			</main>
		</div>
	);
}
