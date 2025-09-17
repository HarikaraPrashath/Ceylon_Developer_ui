import { Facebook, Instagram, Linkedin, Sun ,Phone, MapPin , SendHorizontal  } from "lucide-react"

export default function Footer() {
  return (
    <div>
      {/* Mobile & Tablet Footer */}
      <footer className="bg-black text-white lg:hidden">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 ">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-center">Ceylon Developers</h2>
              <p className="text-gray-400 text-sm leading-relaxed mx-auto max-w-md text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
              </p>
              <div className="flex gap-4 justify-center">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                <div className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Client</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Important */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Important</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Social Work</a></li>
                </ul>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex  gap-2 ">
                    <Phone className="text-gray-400"/> <span>+223 456 789</span>
                  </div>
                  <div className="flex  gap-2">
                    <SendHorizontal className="text-gray-400"/> <span>example@gmail.com</span>
                  </div>
                  <div className="flex  gap-2">
                    <MapPin className="text-gray-400"/> <span>45d, example example</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">Copyright 2025 | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="bg-black text-white hidden lg:block">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">HEXZYON</h2>
                <Sun className="w-6 h-6" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                <div className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Client</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Important */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Important</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Work</a></li>
              </ul>
            </div>

            {/* Contacts */}
           <div>
  <h3 className="text-lg font-semibold mb-4">Contacts</h3>
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-gray-400">
      <span></span> <span>+223 456 789</span>
    </div>
    <div className="flex items-center gap-2 text-gray-400">
      <span>✉️</span> <span>example@gmail.com</span>
    </div>
    <div className="flex items-center gap-2 text-gray-400">
      <span>📍</span> <span>45d, example example</span>
    </div>
  </div>
</div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">Copyright 2025 | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
