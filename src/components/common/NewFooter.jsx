import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function ModernFooter() {
  return (
    <footer className="bg-custom-gradient border-2 text-white py-4 px-4 rounded-t-[20px]">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className=" md:mb-0 text-center md:text-center">
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://x.com/medgloss"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/medgloss_official/"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/medgloss"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-xs mt-1">Made with ♥ in India</p>

          <p className="text-sm">© 2025 MedGloss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
