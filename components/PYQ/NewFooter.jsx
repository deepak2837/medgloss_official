import { Twitter, Instagram, Linkedin } from "lucide-react"

export default function NewFooter() {
  return (
    <footer className="bg-custom-gradient border-2  border-red-500 text-white p-3 rounded-t-[52px] flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://x.com/medgloss" className="hover:text-gray-200">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.instagram.com/medgloss_official/" className="hover:text-gray-200">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/medgloss" className="hover:text-gray-200">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <p className="mb-2">Made with ♥ in India</p>
        <p className="text-sm">Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  )
}