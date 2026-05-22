// src/app/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faHeart, 
  faGlobe, 
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faGraduationCap,
  faHandshake,
  faShieldAlt,
  faLightbulb,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Image arrays for each panel - cycling through different protest/activism photos
  const panelImages = {
    panel1: [
      "https://cdn.thestandard.co.zw/images/newsday/uploads/2024/02/B90zSud5QyHVUZPfUhBv34Ch6FbQ3ABQQbmHXzBf.jpg",
      "https://english.news.cn/africa/20260223/474d51ee8b714b2db0d069a9ba6c6f85/20260223474d51ee8b714b2db0d069a9ba6c6f85_20260223b753df9dd07a4a8dbd81a4b21ff6d3b4.jpg",
      "https://youthvillage.co.zw/wp-content/uploads/11281808_825135437573352_2118729969_n-1.jpg",
      "https://static.africa-press.net/zimbabwe/sites/14/2022/07/postQueueImg_32-62dd227a82589.jpg",
    ],
    panel2: [
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/484654396_122109211424797501_7725457101061083164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ig8dq0K-vWsQ7kNvwEfh2uN&_nc_oc=AdqODSo_lAoMLFRLEnNBF7cpUie-yoVBa_69bpmtkBhUeRGYfZ4L9wRQZSK5dLDCjkGUHt0LMMW6K1FcoX2TfWlC&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=JEm9HIU0-XsoFJFQB5q27A&_nc_ss=7b289&oh=00_Af4lO2aIE8CgQTzeTECQ3Haha5DCB1G25cpNCPgSsJz7Uw&oe=6A161C55",
      "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-15/670893345_18044836034758151_6857002377557457472_n.webp?_nc_cat=101&ig_cache_key=Mzg3NDk0MDEzMzc0OTI5MzM0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=LuqAvHnggwsQ7kNvwEhUF4z&_nc_oc=AdqM3F2NOqnTHBUTabYjHcL3mvsnWvxJwTJ4ZndJQY4MwAgwoemS3cndu21CI79PcLQxbGWOLrFXbHFuWSgiY5ab&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=nd-CQfCRbSVU141PLDV5sA&_nc_ss=7a22e&oh=00_Af6k34O0qapPkwzRMiJ76e998_AGHyboTmJPf4jhYFz-Kw&oe=6A160C9B",
      "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-15/689017665_18048526709758151_8289188938472869989_n.webp?_nc_cat=104&ig_cache_key=Mzg5NDA4Njc5ODMyMjIyMTczNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=po55NrRspZUQ7kNvwGwtFRD&_nc_oc=Adq3Cm-_L8jl4stVyQJQJFNAVJS62yGaV7p-cL3ZQBPjHUEm68Qwfzouqi9pJvdaoZcvFySbc-9-uJsyP8uRnl0A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=u7mDoTYDvh47i869j9sVGw&_nc_ss=7a22e&oh=00_Af70ig8bT_jrBVFtIHeSdPHatP3QLYRVlomRSnTBbQQCHA&oe=6A1608E5",
      "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-15/689085975_18048526718758151_7182671319505266234_n.webp?_nc_cat=100&ig_cache_key=Mzg5NDA4Njc5NDg5MTI4MTA3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=x0p_LQSnbL0Q7kNvwF8TqXd&_nc_oc=AdraVA5IoDYSWERr8TW3iOfSOuFIu03A7EIdtsi1iPqsTXd3_BfMqxj3x8SYBXG-DesZmcQP2R7rlBySeqpZm3pJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=u7mDoTYDvh47i869j9sVGw&_nc_ss=7a22e&oh=00_Af5tv29ja5u-fw8hqjDbJZCA744bHJHPDCBDzQu9YYVbQw&oe=6A16307F",
    ],
    panel3: [
      "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-15/688617118_18048526658758151_6403508507742381315_n.webp?_nc_cat=105&ig_cache_key=Mzg5NDA4Njc2NjkxNTIyODQ1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BTZOtJHl8hQQ7kNvwEhCEk8&_nc_oc=Adrl79GmDCyvHH_Xx0dehmG5-tmhayOp2oII46tu7jXhq711NcuycCuknx5KWJsihrCU9_1mzqm_lrnsNEuQhf1_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=u7mDoTYDvh47i869j9sVGw&_nc_ss=7a22e&oh=00_Af65sZiH4E9j0aEJfpt7hMMy15HrXXn84W0wCGwEeTe1Pw&oe=6A161072",
      "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-15/675404803_18039146186790430_1875999245870248180_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzg4Mjk3MjM0MDI5NjY3Mzc4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_uZu8q9O5GkQ7kNvwFbzAey&_nc_oc=AdqiNiox9g5aiCXiQZsYcELDB02QE8uBQgWepAzpOfuf6r-p4a14Rwd2JOQsQQdIS4NZ4pNZn2HCaBKmb5YcQzOh&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=qhjWeXSPDKJBZUTAvH5zdA&_nc_ss=7a22e&oh=00_Af40trevo0Eb9kZGcadgYTI4owzEqpiLncfXdn_QSnOxUw&oe=6A1635C1",
      "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-15/682123407_18039146213790430_2577732682273934420_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzg4Mjk3MjM0OTc1MDYzMzAxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=RLbLViLFrcoQ7kNvwGehHvZ&_nc_oc=Adr1Sx_xx2efyugES7eYSiFGBL0sK1j_nosFqFkGChs52r69PMvvtQ02J6GoQSsRp5D9MyAw93EmI5EsfCeydk1p&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=qhjWeXSPDKJBZUTAvH5zdA&_nc_ss=7a22e&oh=00_Af7zM2JHQpQpLTLLnN9AjIDB3c3BbsZMVubvchHgGj22kw&oe=6A162494",
      "https://pbs.twimg.com/media/G5exKv2X0AArXzd?format=jpg&name=small",
    ],
  };

  // State for current image indices
  const [currentImages, setCurrentImages] = useState({
    panel1: 0,
    panel2: 0,
    panel3: 0,
  });

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const intervals = Object.keys(panelImages).map((panel) => {
      return setInterval(() => {
        setCurrentImages(prev => ({
          ...prev,
          [panel]: (prev[panel as keyof typeof prev] + 1) % panelImages[panel as keyof typeof panelImages].length
        }));
      }, 3000);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const pillars = [
    { 
      title: "Educate", 
      desc: "Providing knowledge and skills for tomorrow's leaders",
      icon: faGraduationCap,
      color: "from-blue-500 to-cyan-400"
    },
    { 
      title: "Inspire", 
      desc: "Igniting passion and purpose in every young mind",
      icon: faLightbulb,
      color: "from-yellow-500 to-orange-400"
    },
    { 
      title: "Unite", 
      desc: "Building bridges across communities and generations",
      icon: faHandshake,
      color: "from-green-500 to-emerald-400"
    },
    { 
      title: "Secure", 
      desc: "Creating lasting foundations for future generations",
      icon: faShieldAlt,
      color: "from-red-500 to-rose-400"
    },
  ];

  const programs = [
    { name: "Leadership Academy", impact: "5,000+ graduates", color: "yellow" },
    { name: "Mentorship Program", impact: "3,000+ mentors", color: "green" },
    { name: "Community Grants", impact: "$2M+ funded", color: "red" },
    { name: "Global Exchange", impact: "45+ countries", color: "yellow" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section - NO NAVBAR HERE */}
      <div className="relative h-screen overflow-hidden -mt-16">
        {/* Background images grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-40">
          {[0, 1, 2].map((panelIndex) => {
            const panelKey = `panel${panelIndex + 1}` as keyof typeof panelImages;
            const currentImgIndex = currentImages[panelKey];
            return (
              <AnimatePresence mode="wait" key={panelKey}>
                <motion.div
                  key={`${panelKey}-${currentImgIndex}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.3}}
                  transition={{ duration: 0.7 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${panelImages[panelKey][currentImgIndex]})`,
                      backgroundSize: 'cover',
                      minHeight: '400px',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Image src={'/logo.png'} alt="Logo" width={200} height={100} className='mx-auto'/>
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-yellow-400 px-6 py-2 rounded-full mb-6 shadow-xl"
            >
              <span className="font-black text-black text-sm tracking-wider">⚠️ SYSTEM CHANGE NEEDED • URGENT ⚠️</span>
            </motion.div> */}
            <motion.h1 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-8xl md:text-9xl font-black uppercase tracking-tighter mb-6"
            >
              <div className="bg-yellow-300 inline-block px-8 py-2 transform -rotate-4 shadow-2xl " >
                <span>AMA</span>
                <span className="text-red-500">2</span>
                <span className="text-green-500">K</span>
                4
                <span className="text-red-500 " >ED</span>
                </div>
              <br />
              {/* <span className="text-white drop-shadow-lg">4ED</span> */}
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white font-bold drop-shadow-lg max-w-2xl mx-auto italic"
            >
              A reflection of a brighter future
            </motion.p>
            {/* <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/90 mt-4 max-w-xl mx-auto"
            >
              50,000+ strong. 127 cities. Real change happening NOW.
            </motion.p> */}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
        >
          <div className="text-3xl">↓</div>
        </motion.div>
      </div>

      {/* MISSION STATEMENT SECTION */}
      <div className="py-20 bg-gradient-to-br from-yellow-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-yellow-400"
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              Empowering Youth, Transforming Lives: Educate, Inspire, Unite, and Secure a Brighter Future for All, Today and Tomorrow
            </p>
          </motion.div>
        </div>
      </div>

      {/* MISSION PILLARS SECTION */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 px-4 py-1 rounded-full mb-4">
              <span className="font-black text-black">OUR MISSION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">Building Tomorrow, Today</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Four pillars driving real change for youth worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={pillar.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAMS SECTION */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-1 rounded-full mb-4">
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 text-green-600" />
              <span className="font-black text-green-600">OUR IMPACT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">Programs That Transform</h2>
            <p className="text-gray-600 mt-4">Real initiatives creating measurable change</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-2xl overflow-hidden border-2 border-${program.color}-200 bg-gradient-to-br from-white to-${program.color}-50`}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${program.color}-400 rounded-bl-full opacity-10`} />
                <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                <p className="text-gray-600 text-sm">{program.impact}</p>
                <div className="mt-4">
                  <span className={`text-xs font-semibold text-${program.color}-600`}>Learn more →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="py-24 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* <FontAwesomeIcon icon={faHeart} className="w-16 h-16 mx-auto mb-6 text-black" /> */}
            <h2 className="text-4xl md:text-5xl font-black mb-6">Be Part of the Change</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-semibold">
              Together, we're building a reflection of a brighter future. Join thousands of young leaders already making an impact.
            </p>
            <Link href="/join" className="inline-block cursor-pointer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-12 py-4 rounded-full font-black text-xl inline-flex items-center gap-3 shadow-2xl cursor-pointer"
            >
              Get Started Now <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}