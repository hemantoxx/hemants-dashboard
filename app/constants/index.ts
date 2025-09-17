export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [

	{
		title: "Business Analyst",
		icon: "/web.webp",
	},
	{
		title: "BlockChain Enthusiast",
		icon: "/mobile.webp",
	},
	{
		title: "DATA ANALYSIS",
		icon: "/creator.webp",
	},
	{
		title: "Machine Learning",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Marketing Department Head",
		company_name: "Computer Society of India (CSI)",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2022 -  2023",
		points: [
			"Led marketing efforts for CSI events and the flagship hackathon Rubix, managing outreach, branding, and digital promotions.",
			"Secured sponsorships from local brands including Theobroma, Jimmi’s Burger, and Frozen Bottle, increasing event visibility and engagement.",
			"Handled CSI’s social media accounts and executed content strategies that grew online reach and boosted registrations by 50%+.",
			"Coordinated judging and mentoring sessions via Discord and Google Meet; managed end-to-end operations and community support."
		],
	},
	{
		title: "Joint Secretary",
		company_name: "National Service Scheme (NSS), TSEC",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Completed 120+ hours of community service, leading impactful initiatives like Gyaandaan, Blood Donation Drive, Branch Clean-Up Drives, International Yoga Day, and Joy of Giving Week.",
			"Solely organized the flagship rural event “Gramotsav”, managing planning, logistics, volunteer coordination, and on-ground execution in a local village.",
			"Collaborated with NGOs and led 50+ volunteers to drive community-focused programs in education, health, and environmental awareness."
		],
	},
	// {
	// 	title: "Software Developer",
	// 	company_name: "Way to Web Pvt. Ltd.",
	// 	icon: "/company/wtw.jpg",
	// 	iconBg: "#E6DEDD",
	// 	date: "2024 - Present",
	// 	points: [
	// 		"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
	// 		"Analyzing feedbacks and fixing bugs.",
	// 		"Search Engine Optimization.",
	// 		"Design Maintainence and hosting maintenance.",
	// 	],
	// },
];

const testimonials = [
	// {
	// 	id: 1,
	// 	testimonial:
	// 		"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
	// 	name: "hemantaoxx",
	// 	image: "/socialmedia/behance.svg",
	// 	link: "httups://www.behance.net/omthecreator",
	// },
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "hemantaoxx",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/hemant-j-606235218/",
	},
	// {
	// 	id: 3,
	// 	testimonial:
	// 		"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
	// 	name: "hemantaoxx",
	// 	image: "/socialmedia/dribble.svg",
	// 	link: "httups://dribbble.com/om2121",
	// },
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "hemantaoxx",
		image: "/socialmedia/portfolio.svg",
		link: "https://github.com/hemantoxx",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "hemantaoxx",
		image: "/tech/github.webp",
		link: "https://github.com/hemantoxx",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Decentralized Lending Platform",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "blockchain",
				color: "blue-text-gradient",
			},
			{
				name: "DEfi",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.png",
		platform: "Web",
		deploy_link: "https://github.com/hemantoxx",
	},
	{
		name: "AUTO-EDA-HEMANT",
		description:
			" All-in-One Automated Data Analysis: Seamlessly load and preview datasets, detect and fix missing values, encode and scale features, and generate powerful visualizations—from scatter plots to heatmaps—all in a single automated workflow. No manual steps, just instant insights.",
		tags: [
			{
				name: "Data scrapping",
				color: "red-text-gradient",
			},
			{
				name: "python",
				color: "orange-text-gradient",
			},
			{
				name: "data-analysis",
				color: "green-text-gradient",
			},
			{
				name: "streamlit",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://github.com/hemantoxx",
		platform: "Web",
		deploy_link: "https://hemant-eda.onrender.com/",
	},
	{
		name: "Personal Portfolio",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.png",
		source_code_link: "https://github.com/hemantoxx",
		platform: "Vercel",
		deploy_link: "https://github.com/hemantoxx",
	},
	// {
	// 	name: "MERN Dashboard",
	// 	description:
	// 		" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "materialui",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "MongoDB",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Express",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/mern.png",
	// 	source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
	// 	platform: "Web",
	// 	deploy_link: "https://admin-frontend-r705.onrender.com/",
	// },
	// {
	// 	name: "Metaverse Web 3.0",
	// 	description:
	// 		"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "framer-motion",
	// 			color: "orange-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/metaverse.png",
	// 	source_code_link: "https://github.com/omunite215/Project_Metaverse",
	// 	platform: "Vercel",
	// 	deploy_link: "https://project-metaverse-beta.vercel.app/",
	// },
	// {
	// 	name: "Issue Tracker",
	// 	description:
	// 		"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
	// 	tags: [
	// 		{
	// 			name: "next",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "shadCN",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "mySQL",
	// 			color: "green-text-gradient",
	// 		},
	// 	],
	// 	image: "/projectimg/issuetracker.png",
	// 	source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
	// 	platform: "Vercel",
	// 	deploy_link: "https://project-issue-tracker.vercel.app/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
