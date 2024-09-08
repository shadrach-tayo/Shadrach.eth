import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaTerminal,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiRedis, SiRust, SiTauri } from "react-icons/si";
import { TbMathSymbols } from "react-icons/tb";

const projects = [
  {
    icon: <SiRedis className="text-red-500" />,
    title: "Redis Rust",
    description:
      "A Redis implementation with support for Replication, Rdb file, Streams and Transactions, I had a lot of fun working on this.",
    link: "https://github.com/shadrach-tayo/redis-rust",
  },
  {
    icon: <SiTauri className="text-blue-500" />,
    title: "Notor",
    description:
      " A simple calender/meetings reminder MacOs tray app similar to notion calendar, has support for multiple google accounts integration. This was developed with Rust, tauri and nextjs. \
      I and a couple of friends use this everyday at work to keep track of our meetings and events",
    link: "https://github.com/shadrach-tayo/notor",
  },
  {
    icon: <TbMathSymbols className="text-black" />,
    title: "Calc-parser",
    description:
      "A simple mathematical language analyzer, parser, interpreter and compiler written in Rust.",
    link: "https://github.com/shadrach-tayo/calc-parser",
  },
  {
    icon: <FaTerminal className="text-green-500" />,
    title: "Patter",
    description:
      "A Rust cli app for backing up your local data to multiple IPFS storage providers.",
    link: "https://github.com/shadrach-tayo/patter",
  },
  {
    icon: <SiRust className="text-orange-500" />,
    title: "Typester",
    description:
      "An awesome library to convert Rust types to Typescript types. This is not a comprehensive converter and doesn't handle all types but it's awesome anyway.",
    link: "https://github.com/shadrach-tayo/Typester",
  },
];

const experience = [
  {
    title: "Software Engineer",
    company: "Desci Labs",
    date: "2022 - PRESENT",
    summary:
      "Core software engineering across the stack (fronted/backend/blockchain), Lead the design, implementation and maintainance of distributed systems solutions, Major product/features owner.",
    description: [
      "Leading engineering efforts in the development and migration of desci-nodes web architecture to an offline-first collaborative editor for Researchers to develop/share Researches using (Automerge, websockets, postgres, etc)",
      "Lead developer in the specification/implementation of Autonomous Research communities (ARC) to enable peer review on the node platforms",
      "Development of in-browser fast and performant pdf viewer and next generation code/pdf annotator for rapid scientific research development",
      "Lead engineering efforts of the implementation of attestations and comments to support ARCs",
      "Implemented a state of art Pdf/Code Annotations to enhance modern peer review experience.",
      "Open source collaborator: worked with engineers/maintainers of popular open source project (Automerge) we use to further ease adoption.",
      // "Designed and development a discourse plugin integration for displaying desoc badges",
      "Designed and implemented an ERC specification for soul-bound(Account bound) tokens (SBT) for Decentralized society tooling",
      "Development an web3 dApp for managing SBTs and a Decentralized science project using Nextjs and typescript etc",
    ],
  },
  {
    title: "Blockchain Developer",
    company: "JPegVault - Contractor",
    date: "2021 - 2022",
    summary:
      "Worked with multiple web3 projects including (JPEGVault Dao, now Desciety) as a contractor developing smart contracts and web3 applications",
    description: [
      "Designed, Implemented, tested and deployed multiple smart contracts to support the daily activities of the DAO",
      "Developed subgraphs to index and query data from the multiple smart contracts to be consumed by both the daaps and serverless cron jobs",
      "Setup a serverless-backend infrastructure on AWS to support the activities of the Dao",
      "Implement well structured and reusable components to support user staking, un-staking and claiming of rewards from smart contracts.",
      "Designed and Developed serverless APIs using AWS lambda functions",
      "Wrote unit tests and end-2-end tests in jest, cypress and react-testing-library for dApps built using Typescript and React",
      "Transformed web3 UI designs into well-architected dAaps",
    ],
  },
  {
    title: "Full-stack Blockchain Developer",
    company: "Angel Protocol",
    date: "2021 - 2022",
    summary:
      "Worked across the stack to develop web3 components for accepting payments in multiple chains (Eth, BnB, Terra, Polygon etc )",
    description: [
      "Worked across the stack to develop web3 components for accepting payments in multiple chains (Eth, BnB, Terra, Polygon etc )",
      "Writing unit and e2e tests for critical components to increase the confidence in our software in production",
      "Transformed web3 designs into well-structured and reusable UI components using Typescript, React.js, and Tailwindcss...",
      "Developed web3 components for bridging the gap between user interaction with the smart contracts.",
      "Unit tests, integration and end-2-end tests for major components of the codebase using jest and react-testing-library and other libraries.",
      "Worked on Cosmos smart contracts to handle the business logic of vaults",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Simbi Interactives",
    date: "2019 - 2021",
    summary:
      "I worked on a series of frontend projects for clients, Developed and maintained a educational mobile app using Ionic, angular, typescript that did 100k+ downloads on google playstore.",
    description: [
      "Develop mobile apps used by thousands of students across Nigeria using Ionic, angular, typescript",
      "Collaborate with designers and marketers to develop an immersive experience for mobile and web app users",
      "Refactor and maintain existing mobile apps to improve performance and user experience.",
      "Deploy Mobile and web apps using cutting edge technologies like AWS, docker etc.",
      "Develop desktop app using Electron.",
      "Documentation for web and mobile apps using Notion",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="container px-4 py-8 max-w-3xl">
        <header className="mb-8">
          <Image
            src="/shadrach.webp"
            alt="Shadrach Oloyede"
            width={70}
            height={70}
            className="rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold">Shadrach Oloyede</h1>
          <p className="text-gray-600">Blockchain | Distributed Systems</p>
          <div className="flex justify-start space-x-4 mt-4">
            <a
              href="https://x.com/oloyedeshadrach"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/shadrach-tayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shadrach-oloyede"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shadrach@oloyede.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegEnvelope className="w-5 h-5" />
            </a>
          </div>
        </header>

        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
        <section className="mb-12 flex flex-col gap-2">
          <p className="max-w-2xl">
            I am a coder who loves building elegant systems. I&apos;m most
            interested in tackling and solving complex distributed systems
            problems with Rust and other languages and tools, You&apos;d find me
            talking or tweeting about this every now and then.
          </p>
          <p className="max-w-2xl">
            {" "}
            I&apos;ve had a lot of experience building web apps using React,
            Typescript, Nodejs, and other frontend frameworks. I have a few
            years of experience developing and deploying production-ready smart
            contracts on Ethereum and other EVM-compatible chains.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4"></div>
                <div className="w-full">
                  <h3 className="font-semibold flex items-center gap-4">
                    <span>{exp.title}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {exp.date}
                    </span>
                  </h3>
                  <p className="text-gray-600 font-semibold">{exp.company}</p>
                  <p className="text-black">{exp.summary}</p>
                  <Accordion type="single" collapsible className="w-fit">
                    <AccordionItem value="roles" className="w-fit border-none">
                      <AccordionTrigger className="py-2 underline w-fit flex itens-center justify-start gap-2 ">
                        View more
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                          {exp.description.map((desc, index) => (
                            <li key={index} className="text-black text-md">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-gray-100 hover:shadow-lg transition-all duration-300 hover:animate-slide-up"
              >
                <div className="p-6 p-4">
                  <div className="text-2xl mb-2">{project.icon}</div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
          <Link
            href="https://taytimes.substack.com/p/practical-distributed-locking-in?r=25t6n"
            className="space-y-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="hover:border-gray-100 hover:shadow-lg transition-all duration-300 hover:animate-slide-up">
              <CardContent className="p-4">
                <h3 className="font-semibold">
                  Practical distributed locking in backend systems
                </h3>
                <p className="text-sm text-gray-600">
                  Tackling race conditions in multi-server architecture
                </p>
              </CardContent>
            </Card>
          </Link>
          <div className="text-center mt-4">
            <Link
              href="https://taytimes.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center mt-4 border border-gray-200 p-2 rounded-md"
            >
              Read More
            </Link>
          </div>
        </section>
        <footer className="text-center text-gray-600">
          <p>© 2024 - Shadrach Oloyede</p>
        </footer>
      </div>
    </main>
  );
}
