import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="text-center mb-8">
        <Image
          src="/placeholder.svg"
          alt="Ansub Khan"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">Ansub Khan</h1>
        <p className="text-gray-600">Engineer & Designer</p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaTwitter className="w-5 h-5" />
          <FaGithub className="w-5 h-5" />
          <FaLinkedin className="w-5 h-5" />
        </div>
      </header>

      <nav className="flex justify-center space-x-4 mb-8">
        <Button variant="default">About</Button>
        <Button variant="ghost">Blogs</Button>
        <Button variant="ghost">Newsletter</Button>
        <Button variant="ghost">Contact</Button>
      </nav>

      <section className="mb-12">
        <p className="text-center max-w-2xl mx-auto">
          Hello! I&apos;m Ansub, a Lead Software Engineer &amp; Designer. Passionate about crafting
          tools that empower developers and designers to express themselves seamlessly.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="font-semibold">Lead Software Engineer - Frontend <span className="text-xs bg-gray-200 px-2 py-1 rounded">PRESENT</span></h3>
              <p className="text-gray-600">Phidata</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="font-semibold">Founding Software Engineer</h3>
              <p className="text-gray-600">Speedybrand (YC-W23)</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="font-semibold">Front-End Engineer</h3>
              <p className="text-gray-600">Maya Labs (YC-S22)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '⚡', title: 'SyntaxUI', description: 'Free-to-use UI elements designed for rapid development.' },
            { icon: '🖼️', title: 'Prettyfolio', description: 'A curated collection of portfolios for inspiration.' },
            { icon: '🎨', title: 'Enchant', description: 'A vibrant theme for Visual Studio Code.' },
            { icon: '🌐', title: 'Ansubkhan.com', description: 'My personal website, blogs and newsletter.' },
            { icon: '💬', title: 'Quote Vault', description: 'Social media, but for sharing quotes.' },
          ].map((project, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{project.icon}</div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Latest Blogs</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">How to Design Clean UI as an Engineer</h3>
              <p className="text-sm text-gray-600">Learn to think like a designer as an engineer.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">My Crazy Ride in Tech</h3>
              <p className="text-sm text-gray-600">How my unexpected firing leads to career redemption and valuable life lessons in the unpredictable world of tech.</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-4">
          <Button variant="outline">Read More</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Luminary Newsletter</h2>
        <p className="mb-4">
          Stay ahead of the curve with my monthly newsletter called Luminary. Receive
          valuable insights on the latest trends, techniques, and tools in web
          development and design.
        </p>
        <div className="flex space-x-2">
          <Input type="email" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </section>

      <footer className="text-center text-gray-600">
        <p>✌️</p>
        <p>© 2024 - Ansub Khan</p>
      </footer>
    </div>
  )
}