import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[#111] text-white pt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold flex items-center gap-2 mb-2">
              <span className="text-purple-600 text-3xl">🩸</span>
              Sugary
            </div>
            <p className="text-sm text-gray-300">
              Sit leo non vestibulum cras ut nunc. <br />
              Commodo ornare ultrices ipsum dolor parturient sem fusce.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["About Us", "Events", "Contact Us", "Volunteers", "FAQs"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-purple-500 cursor-pointer flex items-center gap-1"
                  >
                    <span className="text-purple-500">›</span> {item}
                  </li>
                )
              )}
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhone className="text-purple-500" />
                +98 765 43210
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-purple-500" />
                SugaryAdmin@support.com
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-purple-500 mt-1" />
                130 Anywhere St, Tomsk, Rusia 238795
              </li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <div className="bg-gray-700 p-4 rounded-md">
              <h3 className="font-semibold text-white mb-2">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-3">
                Subscribe to Our Newsletter to receive the newest updates and info.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-l-md text-black bg-white"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Social & Copyright */}
        <div className="border-t border-gray-600 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex gap-3 text-white">
              <a href="#" className="bg-purple-600 p-2 rounded hover:bg-purple-700 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded hover:bg-purple-700 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded hover:bg-purple-700 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded hover:bg-purple-700 transition-colors">
                <FaYoutube />
              </a>
            </div>
            <p className="text-center">
              {`Copyright © 2025 Sumaiya, All rights reserved. Present by `}
              <span className="text-white">Sumaiya</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
  