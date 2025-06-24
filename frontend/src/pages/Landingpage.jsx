// import React from 'react'
// import { LayoutTemplate } from 'lucide-react';
// import { landingPageStyles, landingpageStyles } from '../assets/dummystyle.js'

// function Landingpage() {
//   return (
//     <div className={landingpageStyles.container}>

//     <header className={landingpageStyles.header}>
//         <div className={landingpageStyles.headerContainer}>
//             <div className={landingpageStyles.headerlogoContainer}>
//                  <div className={landingpageStyles.logoIcon}>
//                         <LayoutTemplate className={landingPageStyles.logoIconInner}></LayoutTemplate>
//                  </div>
//                 <span className={landingPageStyles.logoText}>
//                         Resume Xprts
//                 </span>
//                 </div>
//             </div>
//     </header>
//     </div>
//   )

import React, { useContext, useState } from 'react';
import { LayoutTemplate, Menu, X } from 'lucide-react';
import { landingPageStyles } from '../assets/dummystyle.js';

function Landingpage() {
  const {user} = useContext(UserContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={landingPageStyles.container}>
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
          
          {/* Logo */}
          <div className={landingPageStyles.headerlogoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />
            </div>
            <span className={landingPageStyles.logoText}>
              Resume Xprts
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={landingPageStyles.mobileMenuIcon} />
            ) : (
              <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
            )}
          </button>

        </div>
      </header>
    </div>
  );
}

export default Landingpage;



//org
// import React from 'react';
// import { LayoutTemplate, Menu } from 'lucide-react';
// import { landingPageStyles } from '../assets/dummystyle.js';


// function Landingpage() {
//   return (
//     <div className={landingPageStyles.container}>
//       <header className={landingPageStyles.header}>
//         <div className={landingPageStyles.headerContainer}>
//           <div className={landingPageStyles.headerlogoContainer}>
//             <div className={landingPageStyles.logoIcon}>
//               <LayoutTemplate className={landingPageStyles.logoIconInner} />
//             </div>
//             <span className={landingPageStyles.logoText}>
//               Resume Xprts
//             </span>
//           </div>
          
//         </div>
//       </header>
//     </div>
//   );
// // }

// export default Landingpage;


// export default Landingpage

// import React from 'react';
// import { LayoutTemplate } from 'lucide-react';
// import { landingPageStyles } from '../assets/dummystyle.js';

// function Landingpage() {
//   return (
//     <div className={landingPageStyles.container}>
//       {/* Header */}
//       <header className={landingPageStyles.header}>
//         <div className={landingPageStyles.headerContainer}>
//           <div className={landingPageStyles.headerlogoContainer}>
//             <div className={landingPageStyles.logoIcon}>
//               <LayoutTemplate className={landingPageStyles.logoIconInner} />
//             </div>
//             <span className={landingPageStyles.logoText}>Resume Xprts</span>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="text-center py-20 bg-gradient-to-b from-gray-50 to-white">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Create Professional Resumes in Minutes
//         </h1>
//         <p className="text-gray-600 text-lg mb-6">
//           Choose a template, fill in your details, and download your resume as PDF.
//         </p>
//         <a
//           href="/builder"
//           className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-200"
//         >
//           Get Started
//         </a>
//       </section>
//     </div>
//   );
// }

// export default Landingpage;



// import React from 'react';
// import { LayoutTemplate } from 'lucide-react';
// import { landingPageStyles } from '../assets/dummystyle';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className={landingPageStyles.container}>
//       {/* Header */}
//       <header className={landingPageStyles.header}>
//         <div className={landingPageStyles.headerContainer}>
//           <div className={landingPageStyles.logoContainer}>
//             <div className={landingPageStyles.logoIcon}>
//               <LayoutTemplate className={landingPageStyles.logoIconInner} />
//             </div>
//             <span className={landingPageStyles.logoText}>Resume Xprts</span>
//           </div>

//           <button
//             className={landingPageStyles.desktopAuthButton}
//             onClick={() => navigate('/login')}
//           >
//             <span className={landingPageStyles.desktopAuthButtonOverlay}></span>
//             <span className={landingPageStyles.desktopAuthButtonText}>Login</span>
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className={landingPageStyles.main}>
//         <section className={landingPageStyles.heroSection}>
//           <div className={landingPageStyles.heroGrid}>
//             {/* Left Text */}
//             <div className={landingPageStyles.heroLeft}>
//               <span className={landingPageStyles.tagline}>Build your career faster</span>

//               <h1 className={landingPageStyles.heading}>
//                 <span className={landingPageStyles.headingText}>Craft a</span>{' '}
//                 <span className={landingPageStyles.headingGradient}>Resume That Wins</span>
//               </h1>

//               <p className={landingPageStyles.description}>
//                 Easily create professional resumes with modern templates and smart guidance. Start impressing recruiters today.
//               </p>

//               <div className={landingPageStyles.ctaButtons}>
//                 <button
//                   className={landingPageStyles.primaryButton}
//                   onClick={() => navigate('/signup')}
//                 >
//                   <span className={landingPageStyles.primaryButtonOverlay}></span>
//                   <span className={landingPageStyles.primaryButtonContent}>
//                     Get Started
//                   </span>
//                 </button>

//                 <button
//                   className={landingPageStyles.secondaryButton}
//                   onClick={() => navigate('/dashboard')}
//                 >
//                   Explore Dashboard
//                 </button>
//               </div>
//             </div>

//             {/* Right Illustration */}
//             <div className={landingPageStyles.heroIllustration}>
//               <div className={landingPageStyles.heroIllustrationBg}></div>
//               <div className={landingPageStyles.heroIllustrationContainer}>
//                 <img
//                   src="/illustration.svg" // Replace with your actual illustration path
//                   alt="Resume Preview"
//                   className="rounded-3xl shadow-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className={landingPageStyles.footer}>
//         <div className={landingPageStyles.footerContainer}>
//           <p className={landingPageStyles.footerText}>
//             Made with <span className={landingPageStyles.footerHeart}>❤️</span> by Resume Xprts Team
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


// import React from 'react';
// import { LayoutTemplate, Zap, Download } from 'lucide-react';
// import { landingPageStyles } from '../assets/dummystyle';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const stats = [
//     { value: '50K+', label: 'Resumes Created', gradient: 'from-violet-600 to-fuchsia-600' },
//     { value: '4.9★', label: 'User Rating', gradient: 'from-orange-500 to-red-500' },
//     { value: '5 Min', label: 'Build Time', gradient: 'from-emerald-500 to-teal-500' }
//   ];

//   const features = [
//     {
//       icon: <Zap className={landingPageStyles.featureIcon} />,
//       title: 'Lightning Fast',
//       description: 'Create professional resumes in under 5 minutes with our streamlined process',
//       gradient: landingPageStyles.featureIconViolet,
//       bg: landingPageStyles.featureCardViolet
//     },
//     {
//       icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
//       title: 'Pro Templates',
//       description: 'Choose from dozens of recruiter-approved, industry-specific templates',
//       gradient: landingPageStyles.featureIconFuchsia,
//       bg: landingPageStyles.featureCardFuchsia
//     },
//     {
//       icon: <Download className={landingPageStyles.featureIcon} />,
//       title: 'Instant Export',
//       description: 'Download high-quality PDFs instantly with perfect formatting',
//       gradient: landingPageStyles.featureIconOrange,
//       bg: landingPageStyles.featureCardOrange
//     }
//   ];

//   return (
//     <div className={landingPageStyles.container}>
//       <header className={landingPageStyles.header}>
//         <div className={landingPageStyles.headerContainer}>
//           <div className={landingPageStyles.logoContainer}>
//             <div className={landingPageStyles.logoIcon}>
//               <LayoutTemplate className={landingPageStyles.logoIconInner} />
//             </div>
//             <span className={landingPageStyles.logoText}>Resume Xprts</span>
//           </div>
//           <button className={landingPageStyles.desktopAuthButton} onClick={() => navigate('/login')}>
//             <span className={landingPageStyles.desktopAuthButtonOverlay}></span>
//             <span className={landingPageStyles.desktopAuthButtonText}>Login</span>
//           </button>
//         </div>
//       </header>

//       <main className={landingPageStyles.main}>
//         <section className={landingPageStyles.heroSection}>
//           <div className={landingPageStyles.heroGrid}>
//             <div className={landingPageStyles.heroLeft}>
//               <span className={landingPageStyles.tagline}>Build your career faster</span>
//               <h1 className={landingPageStyles.heading}>
//                 <span className={landingPageStyles.headingText}>Craft a</span>{' '}
//                 <span className={landingPageStyles.headingGradient}>Resume That Wins</span>
//               </h1>
//               <p className={landingPageStyles.description}>
//                 Easily create professional resumes with modern templates and smart guidance. Start impressing recruiters today.
//               </p>
//               <div className={landingPageStyles.ctaButtons}>
//                 <button className={landingPageStyles.primaryButton} onClick={() => navigate('/signup')}>
//                   <span className={landingPageStyles.primaryButtonOverlay}></span>
//                   <span className={landingPageStyles.primaryButtonContent}>Get Started</span>
//                 </button>
//                 <button className={landingPageStyles.secondaryButton} onClick={() => navigate('/dashboard')}>
//                   Explore Dashboard
//                 </button>
//               </div>

//               <div className={landingPageStyles.statsContainer}>
//                 {stats.map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className={`text-center px-4 py-3 rounded-xl shadow-md bg-gradient-to-r ${stat.gradient} text-white`}
//                   >
//                     <div className="text-xl font-bold">{stat.value}</div>
//                     <div className="text-sm">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className={landingPageStyles.heroIllustration}>
//               <div className={landingPageStyles.heroIllustrationBg}></div>
//               <div className={landingPageStyles.heroIllustrationContainer}>
//                 <svg viewBox="0 0 400 500" className={landingPageStyles.svgContainer} xmlns="http://www.w3.org/2000/svg">
//                   <defs>
//                     <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#8b5cf6" />
//                       <stop offset="100%" stopColor="#d946ef" />
//                     </linearGradient>
//                     <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#ffffff" />
//                       <stop offset="100%" stopColor="#f8fafc" />
//                     </linearGradient>
//                   </defs>
//                   <rect x="50" y="50" width="300" height="400" rx="20" className={landingPageStyles.svgRect} />
//                   <circle cx="120" cy="120" r="25" className={landingPageStyles.svgCircle} />
//                   <rect x="160" y="105" width="120" height="8" rx="4" className={landingPageStyles.svgRectPrimary} />
//                   <rect x="160" y="120" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
//                   <rect x="70" y="170" width="260" height="4" rx="2" className={landingPageStyles.svgRectLight} />
//                   <rect x="70" y="185" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />
//                   <rect x="70" y="200" width="240" height="4" rx="2" className={landingPageStyles.svgRectLight} />
//                   <rect x="70" y="230" width="60" height="6" rx="3" className={landingPageStyles.svgRectPrimary} />
//                   <rect x="70" y="250" width="40" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
//                   <rect x="120" y="250" width="50" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
//                   <rect x="180" y="250" width="45" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
//                   <rect x="70" y="290" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
//                   <rect x="70" y="310" width="180" height="4" rx="2" className={landingPageStyles.svgRectLight} />
//                   <rect x="70" y="325" width="150" height="4" rx="2" className={landingPageStyles.svgRectLight} />
//                   <rect x="70" y="340" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />
//                   <circle cx="320" cy="100" r="15" className={landingPageStyles.svgAnimatedCircle}>
//                     <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite" />
//                   </circle>
//                   <rect x="30" y="300" width="12" height="12" rx="6" className={landingPageStyles.svgAnimatedRect}>
//                     <animateTransform attributeName="transform" type="translate" values="0,0; 5,0; 0,0" dur="2s" repeatCount="indefinite" />
//                   </rect>
//                   <polygon points="360,200 370,220 350,220" className={landingPageStyles.svgAnimatedPolygon}>
//                     <animateTransform attributeName="transform" type="rotate" values="0 360 210; 360 360 210; 0 360 210" dur="4s" repeatCount="indefinite" />
//                   </polygon>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className={landingPageStyles.featuresGrid}>
//             {features.map((feature, idx) => (
//               <div key={idx} className={`${landingPageStyles.featureCard} ${feature.bg}`}>
//                 <div className={`${landingPageStyles.featureIconWrapper} ${feature.gradient}`}>{feature.icon}</div>
//                 <h3 className={landingPageStyles.featureTitle}>{feature.title}</h3>
//                 <p className={landingPageStyles.featureDescription}>{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer className={landingPageStyles.footer}>
//         <div className={landingPageStyles.footerContainer}>
//           <p className={landingPageStyles.footerText}>
//             Crafted with <span className={landingPageStyles.footerHeart}>❤️</span> by Resume Xprts Team
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;