import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FaChevronDown,
  FaDownload,
  FaFilePdf,
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
import { DownloadCloudIcon } from "lucide-react";

const projects = [
  {
    icon: <FaTerminal className="text-blue-600" />,
    title: "LiveMigrateAI",
    description:
      "AI guide to Canadian immigration: simplify your journey or upgrade status with AI-powered assistance, form automation, and expert guidance.",
    link: "https://livemigrate.ai",
  },
  {
    icon: <SiRedis className="text-red-500" />,
    title: "Redis Rust",
    description:
      "A Redis implementation with support for replication, RDB files, streams and transactions.",
    link: "https://github.com/shadrach-tayo/redis-rust",
  },
  {
    icon: <SiTauri className="text-blue-500" />,
    title: "Notor",
    description:
      "Calendar/meetings reminder macOS tray app (similar to Notion Calendar) with multiple Google accounts; built with Rust, Tauri and Next.js. Used daily for meetings and events.",
    link: "https://github.com/shadrach-tayo/notor",
  },
  {
    icon: <TbMathSymbols className="text-black" />,
    title: "Calc-parser",
    description:
      "Mathematical language analyzer, parser, interpreter and compiler written in Rust.",
    link: "https://github.com/shadrach-tayo/calc-parser",
  },
  {
    icon: <FaTerminal className="text-green-500" />,
    title: "Patter",
    description:
      "Rust CLI for backing up local data to multiple IPFS storage providers.",
    link: "https://github.com/shadrach-tayo/patter",
  },
  {
    icon: <SiRust className="text-orange-500" />,
    title: "Typester",
    description: "Library to convert Rust types to TypeScript types.",
    link: "https://github.com/shadrach-tayo/Typester",
  },
];

const experience = [
  {
    title: "Senior Software Engineer",
    company: "DeSci Labs AG",
    date: "Sept 2022 – Present",
    summary:
      "DeSci Labs builds solutions that make research faster, accessible, and more transparent—powered by AI and designed for the future of science.",
    description: [
      "Architecture and development of next-gen Research AI assistant web and mobile application using scientifically indexed articles for trusted peer-reviewed citations.",
      "Led the research and implementation of our multiplayer server architecture on top of Cloudflare (Durable Objects, Hyperdrive), PartyKit WebSocket and Automerge (CRDT) library.",
      "Kubernetes deployment workflow and monitoring setup on AWS.",
      "Owned the full-stack development of several modules/features, API architecture, development and testing using TypeScript, Node.js, Postgres, and crypto libraries/frameworks.",
      "Core engineering contributor to the DeSci Codex protocol for open science—libraries that create APIs on top of our internal Ceramic & smart contracts publishing architecture.",
      "Smart contract architecture, development and testing of our Research object publishing and DPID registry protocol (Solidity, TypeScript, ethers.js, Foundry); use of advanced Solidity security testing tools for auditing.",
      "Led UI engineering for Nodes Protocol web app: architectural setup, blockchain integration (wallets, ethers.js, wagmi), performance optimisation and avoiding SSR pitfalls for modern web3 apps.",
    ],
  },
  {
    title: "Software Engineer",
    company: "JPEGVault DAO",
    date: "Sept 2021 – Sept 2022",
    summary:
      "Designed and deployed production DeFi smart contracts; architected serverless DAO infrastructure on AWS.",
    description: [
      "Designed, implemented, tested and deployed multiple production DeFi smart contracts on EVM-compatible chains, with Oracle integration and multi-chain liquidity management.",
      "Architected and implemented a serverless architecture for running the DAO using AWS Lambda, Serverless Framework, TypeScript and DynamoDB.",
      "At peak, ~$2M held in JPEG smart contracts safely for DAO members.",
      "Development of frictionless multi-wallet web3 login, staking and unstaking UIs and web3 analytics dashboard.",
      "Developed subgraphs to index and query data from multiple smart contracts for dApps and serverless cron jobs.",
      "Built complex web applications with Next.js, TypeScript, ethers.js, wagmi, and reusable components for smart contract integration and feedback mechanisms.",
    ],
  },
  {
    title: "Software Engineer (Fullstack | Web3)",
    company: "Angel Protocol (Better Giving)",
    date: "Nov 2021 – May 2022",
    summary:
      "Better Giving is your nonprofit's free one-stop solution for fundraising, saving, and investing.",
    description: [
      "Joined the team to develop one of crypto's first multi-chain crypto donations UIs with support for Terra and EVM chains (mainnet, Arbitrum, L2s such as Polygon).",
      "Over $3M in donations processed on the multi-chain UI for foundations, charities, and crypto-native users globally.",
      "Picked up Rust to contribute to the Cosmos Rust smart contract core library of the protocol.",
      "Developed and maintained well-structured, reusable web3 UI components using TypeScript, React.js, and Tailwind.",
      "Led implementation of unit, integration and end-to-end tests using Jest and React Testing Library.",
      "Rust smart contract development (Cosmos) for vault business logic.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Simbi Interactives",
    date: "Oct 2019 – Feb 2021",
    summary:
      "Led development of mobile EdTech/gaming apps; built desktop and web apps for education and admin.",
    description: [
      "Led the development of the Simbibot mobile EdTech/gaming app with 100k+ downloads on Google Play in its first few weeks in West Africa (Ionic, Angular, TypeScript).",
      "Developed Bright Minds, an educational app for K–9 students across Nigeria for an international franchise.",
      "Developed desktop apps for colleges to monitor education statistics and manage admin operations using Electron, TypeScript, Node.js and React.",
      "Built reusable UI components using React, Storybook, and TypeScript.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "TechMediaplace",
    date: "Feb 2019 – Sept 2019",
    summary:
      "Developed university portals, dashboards and multi-tenant systems for higher institutions.",
    description: [
      "Worked in a team to develop university portals and dashboards using React.",
      "Developed a multi-tenant front-end dashboard system used by higher institutions across the country.",
      "Refactored and maintained existing web applications to improve user experience.",
    ],
  },
];

const keyskills = [
  "JavaScript, TypeScript, Solidity, Rust, Python",
  "React.js, Next.js, Node.js, FastAPI, Nest, Actix, Axum",
  "PostgreSQL, MySQL, MongoDB, Redis, DynamoDB",
  "Docker, Kubernetes, AWS, Terraform, Prometheus, Grafana, Ansible, GitOps",
  "Solidity, Foundry, Hardhat, Ethers.js, DeFi, EVM",
  "Software architecture & scalable system design",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="container px-4 py-8 max-w-3xl">
        <header className="flex items-end justify-between mb-8">
          <div>
            <Image
              src="/shadrach.webp"
              alt="Shadrach Oloyede"
              width={70}
              height={70}
              className="rounded-full mb-4"
            />
            <h1 className="text-2xl font-bold">Shadrach Oloyede</h1>
            <p className="text-gray-600">
              Full Stack | Blockchain | Distributed Systems
            </p>
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
                href="mailto:shadrachtemitayo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRegEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1IhtnSb61-k8ZBN8HZWfQDSBmk-JVswHI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-black border border-gray-500 hover:border-gray-900 rounded-lg px-3 py-1"
          >
            <DownloadCloudIcon className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </header>

        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
        <section className="mb-12 flex flex-col gap-2">
          <p className="max-w-2xl">
            I&apos;m a senior software engineer with over 7 years of experience
            building complex web applications, distributed systems, and cloud
            infrastructure. I lead full-stack teams and ship real-time systems
            on AWS EKS and Cloudflare—from AI research assistants and data
            pipelines (e.g. 250M+ publications on Elasticsearch/Kubernetes) to
            collaborative servers on Durable Objects and CRDTs. I use AI tools
            for analytics, monitoring and debugging in production.
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
                      <AccordionTrigger className="py-2 underline w-fit flex items-center justify-start gap-2 ">
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
                <div className="p-4">
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
