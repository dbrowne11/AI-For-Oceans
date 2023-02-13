import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Voices.module.css";
import {
	Grid,
	Typography,
	Box,
	Stack,
	List,
	ListItem,
	ListSubheader,
} from "@mui/material";
import img from "../images/OceanBanner.png";
import InfoCard from "../components/InfoCard";
import PeopleCard from "../components/PeopleCard";

const participants = [
	{
		id: 1,
		name: "Byron Belcher",
		image: "/byron-belcher.jpg",
		text: "I am a 4th year UCSC Biology major from Culver City, California. I’ve always had an interest in biological and environmental sciences and have and continue to volunteer at events held by environmental groups. My past and current endeavors have helped to further solidify my interest in biology and have helped motivate me to look toward biological research as an achievable career goal. I'm participating in the AI for the Ocean program because it will help me understand what it means to be career oriented and learn how to work effectively and efficiently with a research team. Furthermore, this opportunity will provide me with some of the experience necessary to better understand the amazing work done in the field of marine environmental science. I’m bringing my excitement for marine biology and environmental science to this program. I’m confident that my experience with student leadership at Santa Monica College will help me connect with my fellow teammates and allow us to find success in all our endeavours.",
	},
	{
		id: 2,
		name: "Eliana Bower",
		image: "/eliana-bower.jpg",
		text: "I’m a second year Marine Biology major and Sustainability Studies minor from San Jose, California. I’m passionate about protecting our oceans and discovering more about the unknown. My career goal is to help in the fight against climate change and protect targeted ecosystems. I’m participating in this project in order to learn more about tools used to study the ocean and connect with peers on a topic we share a passion for. I’m bringing to this program a huge passion for the environment and the drive to learn more about the ocean. I have experience with robotics, engineering, research projects, and working with teams to solve a design problem. I’m excited to work with this team and build community.",
	},
	{
		id: 3,
		name: "Isa Guevara",
		image: "/isa-guevara.png",
		text: "I am a second year Human Biology major from Castro Valley, California. I am pursuing this pathway because I would love to work as an Emergency Medical Technician and eventually, a physician’s assistant. AI for the Ocean interested me due to its focus on marine change and its use of artificial intelligence, two things I believe will come to define this century and our Earth’s future. Additionally, as I hope to work in the medical field, building personal connections and community with others are instrumental to my work. Finally, due to the increase in AI usage in the medical field, prior experience with it would give me an advantage in my desired career. I bring an interest in mitigating the effects of climate change and a love for nature to this program. I am confident that my experience tutoring high school students and involvement in my high school’s scientific community will help me to be successful in this program.",
	},
	{
		id: 4,
		name: "Zulekha Khokhar",
		image: "zulekha-khokhar.jpg",
		text: "I am a third-year Biology major. I am passionate about developments and research within environmental sciences. I also express great admiration towards the research team’s significant role in helping the environment. Participating in AI for the Ocean will provide me with in-depth research experience. This opportunity also aids me in developing a well-rounded application for Medical School. I am bringing to this program a huge interest and passion for Ocean Science and the environment. I am very thrilled and excited about the opportunity this position presents for developing my expertise. I have lab experience and training in biomedical sciences. I have also worked alongside The City of Fremont to advocate for climate change. I believe these skills will help me succeed in this project.",
	},
	{
		id: 5,
		name: "Anjana Manjunath",
		image: "/anjana-manjunath.jpg",
		text: "Hi! I am a fourth year UCSC Mathematics major and Earth Science minor from Pleasanton, California. I’ve always enjoyed making sense of the patterns and logic and the inherent problem solving found in mathematics. So far, I’ve gotten a chance to learn some of the applied math and statistical backbones of climate change models. Over the course of my career, I would like the chance to research them further so that we can better predict and track the various physical and biological impacts of climate change. I’m participating in AI for the Ocean to research the utilization of applied math/statistics in the AI that’s being adopted and developed to study marine environments. I’m bringing my technical knowledge of applied mathematics, predictive statistics, and coding to the program, as well as a lot of excitement to work with such an interdisciplinary team. Having taught programming languages to kids and participated in different collaborative math programs, I’ve gotten chances to develop my communication and leadership skills. I hope that these skills, along with my ability to work at something until it’s completed, will help me do well with both the research and community building aspects of this program.",
	},
	{
		id: 6,
		name: "Mohamad Saleh",
		image: "/mohamad-saleh.png",
		text: "I am a 4th year UCSC Computer Science major from San Dimas, California. From the moment I was able to make my computer do something, I was hooked on learning how to do that more, leading me to Computer Science. Which leads me to this program, which will use that same principle, but with the added bonus of doing some good. I particularly found it very exciting that we could use AI to help predict when an ocean ecosystem has issues/is nearing collapse which seems invaluable moving forward. I have worked on several teams in classes and internships and am really looking forward to getting to know everyone and growing as a team.",
	},
	{
		id: 7,
		name: "Brayan Vaca",
		image: "/missing-image.jpg",
		text: "I am a 2nd year UCSC proposed Electrical Engineering major from Soledad, California. Ever since I learned about STEM careers from the MESA Club in middle school, I was hooked and I knew I wanted to do something in STEM. I ended up learning about Electrical Engineering from a friend and I knew that's what I wanted to pursue. Knowing that I’ll be able to learn about electronics and work with them is really intriguing and being able to learn as much as I can in general is why I’m trying to pursue this subject. I’m participating in this program to expand my knowledge in both Marine Biology and research in general. The opportunity to possibly be able to contribute to a project like this is great as well. I bring to this program a big interest in knowledge and a good amount of experience of working with others. Being a good follower but also being able to take initiative at times with problem solving skills could help with researching and working with others.",
	},
	{
		id: 8,
		name: "Salma Valladares",
		image: "/salma-valladares.jpg",
		text: "I am a 2nd year UCSC Marine Biology Major from East Los Angeles, California. From a young age my curiosity about the ocean and how to protect it has been what drove me to pursue this career path. I am participating in AI For Oceans because I want to explore the different mechanisms that are used to study marine life and further my knowledge about different career paths I can pursue in Marine Biology. I bring to this program an excitement to be part of a team that has a huge passion for the environment and learning how we can contribute to marine research. I am confident that my experience in previous environmental groups and collaborating with teams will help me connect with this team and make the most out of the program.",
	},
];

const mentors = [
	{
		id: 1,
		name: "Ben Burford",
		image: "/ben-burford.png",
		text: "Ben is a postdoctoral researcher at the National Oceanic and Atmospheric Administration and UC Santa Cruz' Institute of Marine Sciences. His PhD research explored the impacts of social behavior on physiology and ecology in marine organisms. He is interested in combining experimental and field research to create a more complete understanding of how social interactions shape migratory behavior.",
	},
	{
		id: 2,
		name: "Mimi Celis",
		image: "/missing-image.jpg",
		text: "Mimi Celis is a specialist at UC Santa Cruz Institute of Marine Sciences and affiliate at the National Oceanic and Atmospheric Administration. She has worked in high-performance and scientific computing both in industry and goverment. Her expertise is in mathematics, numerical analysis, parallel computing and machine learning. She applies her expertise to improve code performance of many different applications including the modeling and understanding of animal behavior.",
	},
	{
		id: 3,
		name: "Ashkaan Fahimipour",
		image: "/missing-image.jpg",
		text: "Ashkaan is an assistant project scientist at the University of California, Santa Cruz Institute of Marine Sciences. His research mixes mathematics and data analysis with experiments in the field and laboratory, to learn how organisms interact and how the rules of interaction determine biodiversity at larger scales.",
	},
	{
		id: 4,
		name: "Andrew Hein",
		image: "andrew-hein.png",
		text: "Andrew is co-director of the STEM Success Research program, and a research scientist at the National Oceanic and Atmospheric Administration and UC Santa Cruz' Institute of Marine Sciences. He has led scientific studies of ocean and ecosystem science in both academia and government. His expertise is in using machine learning and mathematics to understand animal ecology and behavior.",
	},
	{
		id: 5,
		name: "Sam Nelson",
		image: "/sam-nelson.jpg",
		text: "Sam is a senior at UC Berkeley majoring in Data Science. His goal is to use data to help answer questions in biology, political science, and sociology through an understanding of experimental design, data analysis, and programming. He is excited to apply what he has learned (and is learning) about AI to tracking fish. As a math tutor, he is excited to be making tools for AI and data science accessible by building websites. Sam has been working with the Hein research group on problems related to computer vision and inference from video datasets.",
	},
	{
		id: 6,
		name: "Simone Olivetti",
		image: "/missing-image.jpg",
		text: "Simone is a postdoctoral scientist with a background in computational mechanics with particular focus on computational fluid dynamics. His experience in computational modelling is mostly based on open source software development. Recently he also has focused on machine learning applications for time series analysis.",
	},
	{
		id: 7,
		name: "Stella Hein",
		image: "/stella-hein.jpg",
		text: "Stella is co-director and coordinator of the STEM Success Research program. She holds a PhD in marine ecology with a focus on the resilience of marine ecosystems. Stella is a lecturer in Rachel Carson College at UCSC, where she teaches cources on success and retention in STEM fields, sustainability, and other topics at the interface of STEM education and environmental science.",
	},
];

const People: NextPage = () => {
	return (
		<Box>
			<Typography
				variant="h3"
				component="h2"
				color="secondary.contrastText"
				gutterBottom
				align="center"
				paddingTop={2}
			>
				Project Participants
			</Typography>

			<Grid container spacing={4}>
				{participants.map((participant) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={participant.id}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<PeopleCard {...participant} />
					</Grid>
				))}
			</Grid>

			<Typography
				variant="h3"
				component="h2"
				color="secondary.contrastText"
				gutterBottom
				align="center"
				paddingTop={2}
			>
				Project Mentors
			</Typography>

			<Grid container spacing={4}>
				{mentors.map((mentor) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={mentor.id}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<PeopleCard {...mentor} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default People;
