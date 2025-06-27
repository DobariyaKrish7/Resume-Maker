import React, { useContext, useState } from 'react';
import { ArrowRight, LayoutTemplate, Menu, X, Zap, Download } from 'lucide-react';
import { landingPageStyles } from '../assets/dummystyle.js';
import { UserContext } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import Modal from "../componets/Modal.jsx"
import Login from "../componets/Login.jsx";
import SignUp from "../componets/Signup.jsx";
import { ProfileInfoCard } from '../componets/Cards.jsx';






function Landingpage() {
  const {user} = useContext(UserContext)
  const navigate = useNavigate();
  const [openAuthModal , setOpenAuthModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("log in")
  const handleCTA= () =>
    {
      if(!user)
      {
        setOpenAuthModal(true)
      }
      else
      {
        navigate('/dashboard')
      }
    }
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

          {/* Mobile Menu Button*/}
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

            
             <div className='hidden md:flex items-centr'>
              {user ? (
                <ProfileInfoCard/>
              ) : (
                 <button className={landingPageStyles.desktopAuthButton} onClick={()=> setOpenAuthModal(true)}>
                  <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
                  <span className={landingPageStyles.desktopAuthButtonText}>
                    Get Started
                  </span>
                </button>
              
              )}
            </div> 
            

        </div>
        {/* mobile menu */}
        {
        mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ?(
                <div className={landingPageStyles.mobileUserInfo}>
                    <div className={landingPageStyles.mobileUserWelcome}>
                       welcome back
                    </div>
                    <button className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate('/dashboard')
                      setMobileMenuOpen(false)
                    }}>
                        Go to dashboard
                    </button>
                </div>
              ) : (
                <button className={landingPageStyles.mobileAuthButton}
                onClick={() =>{
                  setOpenAuthModal(true)
                  setMobileMenuOpen(false)
                }}>
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>
      {/*MAIN CONTENT */}
      <main className={landingPageStyles.main}>
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroLeft}>
            {/*left content*/}
            <div className={landingPageStyles.tagline}>
              Resume Bilder
            </div>

            <h1 className={landingPageStyles.heading}>
              <span className={landingPageStyles.headingGradient}>Craft</span>
              <span className={landingPageStyles.headingGradient}>
                Professional
              </span>
              <span className={landingPageStyles.headingGradient}>
                Resume
              </span>
            </h1>

            <p className={landingPageStyles.description}>
              Create a professional resume in minutes, not hours.
              Ats friendly, easy to use, and affordable.
            </p>

            <div className={landingPageStyles.ctaButtons}>
              <button className={landingPageStyles.primaryButton}
              onClick={handleCTA}>
                 <div className={landingPageStyles.primaryButtonOverlay}></div>
                 <span className={landingPageStyles.primaryButtonContent}>
                   Start Creating
                   <ArrowRight className={landingPageStyles.primaryButtonIcon} size={20}></ArrowRight>
                 </span>
              </button>

              <button className={landingPageStyles.secondaryButton} 
              onClick={handleCTA}>
                Template gallery
              </button>
            </div>
            {/*stats grid*/}
            <div className="flex flex-wrap  gap-6 sm:gap-10 mt-10">
              {[
                { value: '50K+', label: 'Resumes Created', gradient: 'from-indigo-500 to-purple-600' },
                { value: '4.9★', label: 'User Rating', gradient: 'from-rose-500 to-pink-500' },
                { value: '5 Min', label: 'Build Time', gradient: 'from-cyan-500 to-blue-500' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3
                    className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-slate-600 font-medium">{stat.label}</p>
                </div>
              ))}
           </div>
          

               {/* Right Content - SVG Illustration */}
                        <div className={landingPageStyles.heroIllustration}>
                            <div className={landingPageStyles.heroIllustrationBg}></div>
                            <div className={landingPageStyles.heroIllustrationContainer}>
                                <svg
                                    viewBox="0 0 400 500"
                                    className={landingPageStyles.svgContainer}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Background */}
                                    <defs>
                                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8b5cf6" />
                                            <stop offset="100%" stopColor="#d946ef" />
                                        </linearGradient>
                                        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ffffff" />
                                            <stop offset="100%" stopColor="#f8fafc" />
                                        </linearGradient>
                                    </defs>

                                    {/* SVG elements */}
                                    <rect x="50" y="50" width="300" height="400" rx="20" className={landingPageStyles.svgRect} />
                                    <circle cx="120" cy="120" r="25" className={landingPageStyles.svgCircle} />
                                    <rect x="160" y="105" width="120" height="8" rx="4" className={landingPageStyles.svgRectPrimary} />
                                    <rect x="160" y="120" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
                                    <rect x="70" y="170" width="260" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="185" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="200" width="240" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="230" width="60" height="6" rx="3" className={landingPageStyles.svgRectPrimary} />
                                    <rect x="70" y="250" width="40" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                                    <rect x="120" y="250" width="50" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                                    <rect x="180" y="250" width="45" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                                    <rect x="70" y="290" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
                                    <rect x="70" y="310" width="180" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="325" width="150" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="340" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />

                                    {/* Animated elements */}
                                    <circle cx="320" cy="100" r="15" className={landingPageStyles.svgAnimatedCircle}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 0,-10; 0,0"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <rect x="30" y="300" width="12" height="12" rx="6" className={landingPageStyles.svgAnimatedRect}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 5,0; 0,0"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    <polygon points="360,200 370,220 350,220" className={landingPageStyles.svgAnimatedPolygon}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 360 210; 360 360 210; 0 360 210"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                    </polygon>
                                </svg>
                            </div>
                        </div>
          </div>
        </section>
        {/* Features Section */}
          <section className={landingPageStyles.featuresSection}>
            <div className={landingPageStyles.featuresContainer}>
              <div className={landingPageStyles.featuresHeader}>
                <h2 className={landingPageStyles.featuresTitle}>
                  Why Choose{" "}
                  <span className={landingPageStyles.featuresTitleGradient}>
                    ResumeXpert?
                  </span>
                </h2>
                <p>
                  Our platform is designed to help you create a professional resume that stands out from the crowd.
                </p>
              </div>

              {/* Feature Cards */}
              
            <div className={landingPageStyles.featuresGrid}>
                                    {[
                                        {
                                            icon: <Zap className={landingPageStyles.featureIcon} />,
                                            title: "Lightning Fast",
                                            description: "Create professional resumes in under 5 minutes with our streamlined process",
                                            gradient: landingPageStyles.featureIconViolet,
                                            bg: landingPageStyles.featureCardViolet
                                        },
                                        {
                                            icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
                                            title: "Pro Templates",
                                            description: "Choose from dozens of recruiter-approved, industry-specific templates",
                                            gradient: landingPageStyles.featureIconFuchsia,
                                            bg: landingPageStyles.featureCardFuchsia
                                        },
                                        {
                                            icon: <Download className={landingPageStyles.featureIcon} />,
                                            title: "Instant Export",
                                            description: "Download high-quality PDFs instantly with perfect formatting",
                                            gradient: landingPageStyles.featureIconOrange,
                                            bg: landingPageStyles.featureCardOrange
                                        }
                                    ].map((feature, index) => (
                <div key={index} className={landingPageStyles.featureCard}>
                  <div className={landingPageStyles.featureCardHover}></div>
                  <div className={`${landingPageStyles.featureCardContent} ${feature.Bg}`}>
                    <div className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}>
                      {feature.icon}
                    </div>
                    <h3 className={landingPageStyles.featureTitle}>{feature.title}</h3>
                    <p className={landingPageStyles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
              {/* CTA Section */}
              <section className={landingPageStyles.ctaSection}>
                <div className={landingPageStyles.ctaContainer}>
                  <div className={landingPageStyles.ctaCard}>
                    <div className={landingPageStyles.ctaCardBg}></div>
                    <div className={landingPageStyles.ctaCardContent}>
                      <h2 className={landingPageStyles.ctaTitle}>
                        Ready to create your{' '}
                        <span className={landingPageStyles.ctaTitleGradient}>
                          dream resume?
                        </span>
                      </h2>
                      <p className={landingPageStyles.ctaDescription}>
                        Join thousands of professionals who have created stunning resumes with our platform.
                      </p>
                      <button className={landingPageStyles.ctaButton} onClick={handleCTA}>
                        <div className={landingPageStyles.ctaButtonOverlay}></div>
                        <span className={landingPageStyles.ctaButtonText}>
                          Start Creating
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
      </main>
  {/*fotter*/}
  <footer className={landingPageStyles.footer}>
    <div className={landingPageStyles.footerContainer}>
      <p className={landingPageStyles.footerText}>
         Created by me {/*<span className={landingPageStyles.footerHeart}> ❤ </span> by{' '}
        <a href="https://hexagondigitalservices.com/" target='_blank' className={landingPageStyles.footerLink}></a> */}
      </p>
    </div>
  </footer>

  {/*modal for logging and sign up*/}
  <Modal isOpen = {openAuthModal} onClose={() =>{
    setOpenAuthModal(false);
    setCurrentPage("login")

  }} hideHeader>
    <div>
      {currentPage =="login" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage =="signup" && <SignUp setCurrentPage={setCurrentPage} />}

    </div>
  </Modal>
  
  


    </div>
  );
}

export default Landingpage;

