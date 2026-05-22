// src/components/Footer.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-600" },
    { icon: faTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
    { icon: faInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-600" },
    { icon: faYoutube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-600" },
    { icon: faLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
                          <Image src={'/logoYellow.png'} alt="Logo" width={150} height={100} className='rounded-2xl'/>
            
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering the next generation to build a brighter, more inclusive future for all.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              Quick Links
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <Link href="/" className="block hover:text-yellow-400 transition">Home</Link>
              <Link href="/join" className="block hover:text-yellow-400 transition">Join Us</Link>
              {/* <Link href="/about" className="block hover:text-yellow-400 transition">About</Link>
              <Link href="/impact" className="block hover:text-yellow-400 transition">Our Impact</Link> */}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> Contact
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> ama2k4ed@gmail.com</p>
              <p className="flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="w-4 h-4" /> +263 77 354 8786</p>
              <p className="flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Harare, Zimbabwe</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            {/* <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              <span>Made in Zimbabwe</span>
            </div> */}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} AMA2K4ED. All rights reserved.</p>
          {/* <p className="mt-2 text-xs">Empowering Youth, Transforming Lives: Educate, Inspire, Unite, and Secure a Brighter Future for All, Today and Tomorrow</p> */}
        </div>
      </div>
    </footer>
  );
}