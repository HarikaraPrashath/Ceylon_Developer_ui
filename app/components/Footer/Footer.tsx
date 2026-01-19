import Link from "next/link";
export default function Footer() {
  return (
    <div className="transition-colors duration-300 bg-white text-black  dark:bg-black dark:text-white">
      {/* Mobile & Tablet Footer */}
      <footer className="lg:hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8">
            {/* Brand Section */}
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-semibold">Ceylon Developers</h2>

              <p className="text-sm leading-relaxed mx-auto max-w-md text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>

              {/* (Social icons removed as you asked) */}
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  <Link
                      href="/"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Home
                  </Link>
                  <Link
                      href="#"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Service
                  </Link>
                  <Link
                      href="#"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Projects
                  </Link>
                  <Link
                      href="/about"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      About
                  </Link>
                  <Link
                      href="#"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Client
                  </Link>
                  <Link
                      href="contact"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Contact
                  </Link>
                </ul>
              </div>

              {/* Important */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Important</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  <Link
                      href="/career"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Career
                  </Link>
                  <Link
                      href="#"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Terms &amp; Conditions
                  </Link>
                  <Link
                      href="/policy"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </Link>
                  <Link
                      href="#"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Cookies Policy
                  </Link>
                  <Link
                      href="#"
                      className="transition-colors hover:text-black dark:hover:text-white"
                    >
                      Social Work
                  </Link>
                </ul>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  <div className="flex justify-center sm:justify-start gap-2">
                    <span className="font-medium">Tel:</span>
                    <span>+223 456 789</span>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-2">
                    <span className="font-medium">Email:</span>
                    <span>example@gmail.com</span>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-2">
                    <span className="font-medium">Address:</span>
                    <span>45d, example example</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 text-center border-t border-gray-300 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-500">
              Copyright 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden  lg:block bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-bold">HEXZYON</h2>
                {/* (Icon removed) */}
              </div>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet.
              </p>

              {/* (Social icons removed) */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick links</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <Link
                    href="/"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Home
                </Link>
                <Link
                    href="#"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Service
                  </Link>
                <Link
                    href="#"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Projects
                </Link>
                <Link
                    href="/about"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    About
                </Link>
                <Link
                    href="#"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Client
                </Link>
                <Link
                    href="/contact"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Contact
                </Link>
              </ul>
            </div>

            {/* Important */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Important</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <Link
                    href="/career"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Career
                </Link>
                <Link
                    href="#"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                <Link
                    href="/policy"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Privacy Policy
                </Link>
                <Link
                    href="#"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Cookies Policy
                </Link>
                <Link
                    href="#"
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    Social Work
                </Link>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <div className="flex gap-2">
                  <span className="font-medium">Tel:</span>
                  <span>+223 456 789</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Email:</span>
                  <span>example@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Address:</span>
                  <span>45d, example example</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 text-center border-t border-gray-300 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-500">
              Copyright 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
