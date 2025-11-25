"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Sistema de Inventario - MEC",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1CbFlbMr1WxGqfcoX1F8DAwQMQvSQX.png",
      url: "https://v0-inventory-system-with-tailwind.vercel.app/dashboard/control",
      description: "Sistema de control de inventario para el Ministerio de Educación",
      credentials: "Demo: usuario@demo.com / demo123",
    },
    {
      id: 2,
      title: "Sistema de Control Horario",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pgPnyPACYzk8prEa6JBlAl61Sv1OdZ.png",
      url: "https://v0-time-control-system.vercel.app/dashboard",
      description: "Sistema de huellero digital para control de asistencia",
      credentials: "Demo: usuario@demo.com / demo123",
    },
    {
      id: 3,
      title: "Registro de Supervisores - MEC",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pgPnyPACYzk8prEa6JBlAl61Sv1OdZ.png",
      url: "https://vercel.com/matias-projects-63f50bf0/v0-supervisor-registration-site",
      description: "Plataforma de registro para supervisores del MEC Paraguay",
      credentials: "",
    },
    {
      id: 4,
      title: "Sistema de Finanzas Personales",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-usiUvpO967QJVmtCtFJ0U4b9MhHFsg.png",
      url: "https://vercel.com/matias-projects-63f50bf0/v0-personal-finance-system",
      description: "Dashboard completo para control financiero personal",
      credentials: "Demo: usuario@demo.com / demo123",
    },
    {
      id: 5,
      title: "Fundación Principios de Vida",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X7Jw0YsE3g1fGn2K7ibsy2AY0LwuPu.png",
      url: "https://fpv.edu.py/",
      description: "Sitio web institucional - Trabajo actual",
      credentials: "",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2847] to-[#2d1b3d]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-white">
              <span className="text-cyan-400">{"<"}</span>
              <span className="hidden xs:inline">Matías Trauth</span>
              <span className="xs:hidden">MT</span>
              <span className="text-cyan-400">{" />"}</span>
            </div>

            <div className="hidden md:flex gap-6 lg:gap-8">
              {["Home", "About", "Services", "Resume", "Portfolio", "Certificates", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm lg:text-base text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {["Home", "About", "Services", "Resume", "Portfolio", "Certificates", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  <span className="text-cyan-400">Matías Trauth</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-300 mb-4 sm:mb-6">
                Systems Analyst & Web Developer
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Estudiante en último año de Licenciatura en Análisis de Sistemas. Especializado en React, Next.js,
                análisis de datos, UI/UX design, y desarrollo de aplicaciones web responsivas. Colaboro con el MEC
                (Ministerio de Educación y Ciencias de Paraguay) mediante convenio.
              </p>
              <div className="flex flex-col xs:flex-row gap-4 items-start xs:items-center">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 w-full xs:w-auto">
                  Hire Me
                </Button>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Trauth-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mat%C3%ADas-trauth-092b6921a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://wa.me/595976148630"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-3xl"></div>
                <img
                  src="/images/design-mode/image.png"
                  alt="Matías Trauth"
                  className="relative rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Soy estudiante de último año en Licenciatura en Análisis de Sistemas con 2 años de experiencia en
              desarrollo web y análisis de datos. Mi enfoque está en crear soluciones digitales funcionales y
              profesionales que combinen diseño moderno con experiencia de usuario excepcional.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Trabajo con tecnologías modernas como React y Next.js, además de tener experiencia en plataformas no-code,
              UI/UX design, análisis de datos con SQL, optimización SEO, generación de reportes, desarrollo de
              e-commerce en Shopify y WordPress, y creación y administración de plataformas Moodle para el Ministerio de
              Educación y Ciencias de Paraguay.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2 sm:mb-4">What I Do</h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 lg:mb-16">
            Services I offer to my clients
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "💻",
                title: "Web Development",
                desc: "Desarrollo de aplicaciones web responsivas con React y Next.js, enfocadas en rendimiento y experiencia de usuario.",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Diseño de interfaces modernas y funcionales que priorizan la usabilidad y la experiencia del usuario.",
              },
              {
                icon: "🛒",
                title: "E-commerce Solutions",
                desc: "Desarrollo de tiendas online con Shopify y WordPress + Elementor, optimizadas para conversiones.",
              },
              {
                icon: "📊",
                title: "Data Analysis & SQL",
                desc: "Análisis de datos con SQL, generación de reportes, automatización de procesos y presentaciones visuales para toma de decisiones estratégicas.",
              },
              {
                icon: "⚡",
                title: "No-Code Development",
                desc: "Desarrollo rápido de aplicaciones usando plataformas no-code para soluciones ágiles y eficientes.",
              },
              {
                icon: "🎓",
                title: "Moodle LMS",
                desc: "Creación y administración de plataformas Moodle para instituciones educativas y organizaciones.",
              },
              {
                icon: "🔍",
                title: "SEO Optimization",
                desc: "Optimización para motores de búsqueda, análisis de keywords, y mejora del posicionamiento web.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-[#1a2847]/60 border-cyan-500/20 p-4 sm:p-6 hover:border-cyan-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0f1e35]/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16">My Resume</h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 sm:p-6 text-white">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">2+</div>
              <div className="text-xs sm:text-sm">YEARS OF EXPERIENCE</div>
            </Card>
            <Card className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 sm:p-6 text-white">
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm">COMPLETED PROJECTS</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6">Education</h3>
              <Card className="bg-[#1a2847]/60 border-cyan-500/20 p-4 sm:p-6 mb-4">
                <div className="text-cyan-400 text-xs sm:text-sm mb-2">2021 - 2025</div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Lic. en Análisis de Sistemas</h4>
                <p className="text-sm sm:text-base text-gray-400">Universidad (Último Año)</p>
              </Card>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6">Experience</h3>
              <Card className="bg-[#1a2847]/60 border-cyan-500/20 p-4 sm:p-6 mb-4">
                <div className="text-cyan-400 text-xs sm:text-sm mb-2">2023 - Present</div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Web Developer & Data Analyst</h4>
                <p className="text-sm sm:text-base text-gray-400">
                  Desarrollo web con React/Next.js, análisis de datos, UI/UX design, e-commerce, y administración de
                  plataformas Moodle. Colaboración con el MEC (Ministerio de Educación y Ciencias de Paraguay) mediante
                  convenio.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16">My Skills</h2>

          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            {/* Básico Level */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="px-3 sm:px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold">
                  Básico
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Shopify / E-commerce", "SEO", "SQL"].map(
                  (skill) => (
                    <Card
                      key={skill}
                      className="bg-[#1a2847]/60 border-blue-500/20 p-3 sm:p-4 hover:border-blue-500/40 transition-all hover:scale-105"
                    >
                      <span className="text-sm sm:text-base text-white font-medium">{skill}</span>
                    </Card>
                  ),
                )}
              </div>
            </div>

            {/* Intermedio Level */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="px-3 sm:px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold">
                  Intermedio
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  "WordPress + Elementor",
                  "Moodle",
                  "Reportes & Data Analysis",
                  "UI/UX Design",
                  "Responsive Web Design",
                  "No-Code Platforms",
                ].map((skill) => (
                  <Card
                    key={skill}
                    className="bg-[#1a2847]/60 border-cyan-500/20 p-3 sm:p-4 hover:border-cyan-500/40 transition-all hover:scale-105"
                  >
                    <span className="text-sm sm:text-base text-white font-medium">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Avanzado Level */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="px-3 sm:px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold">
                  Avanzado
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {["Ofimática (Office Suite)"].map((skill) => (
                  <Card
                    key={skill}
                    className="bg-[#1a2847]/60 border-purple-500/20 p-3 sm:p-4 hover:border-purple-500/40 transition-all hover:scale-105"
                  >
                    <span className="text-sm sm:text-base text-white font-medium">{skill}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0f1e35]/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2 sm:mb-4">Portfolio</h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 lg:mb-16">My latest projects</p>

          {/* Carousel */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="relative">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <a href={projects[currentSlide].url} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={projects[currentSlide].image || "/placeholder.svg"}
                    alt={projects[currentSlide].title}
                    className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </a>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/80 hover:bg-cyan-500 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/80 hover:bg-cyan-500 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            <div className="text-center mt-4 sm:mt-6 px-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{projects[currentSlide].title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">{projects[currentSlide].description}</p>
              <a
                href={projects[currentSlide].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 underline block mb-2 break-all"
              >
                {projects[currentSlide].url}
              </a>
              {projects[currentSlide].credentials && (
                <div className="inline-block bg-cyan-500/20 border border-cyan-500/30 rounded-lg px-3 sm:px-4 py-2 mt-2">
                  <p className="text-cyan-300 text-xs sm:text-sm font-medium">{projects[currentSlide].credentials}</p>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-cyan-500 w-6 sm:w-8" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Static Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-2">{project.description}</p>
                    {project.credentials && <p className="text-cyan-400 text-xs">{project.credentials}</p>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16">Certificates</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Análisis de Datos con SQL",
                org: "Smart Data",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MBl86qIQH60RfUtm22GCdoiwhKBecs.png",
              },
              {
                title: "Especialización en SEO",
                org: "Netzun",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h5M2IQ3UZ2OO5LmVaiOcgm7hooLaUS.png",
              },
              {
                title: "Especialización en Diseño UX",
                org: "Netzun - San Ignacio University",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-saNYLJ4SS7G3KDt7dbrz7PRzsQW96c.png",
              },
              {
                title: "Crea tu sitio web con WordPress",
                org: "Netzun",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ew2EbafDsZGfBGVA6C1B8pSJnzeQru.png",
              },
              {
                title: "SEO Avanzado",
                org: "Netzun",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9bgplxb7SJKd8Y3oZnSjBSWkjFuSa8.png",
              },
              {
                title: "Moodle versión 5 para administradores",
                org: "Udemy",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eXrPnnMLFxtlMn3qS8Tqhwjx54tvEo.png",
              },
              {
                title: "React 19: De Cero a Avanzado con Supabase",
                org: "Udemy",
                year: "2025",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ucoiypatFPRCFDM8OmsH7tX90Z2mf3.png",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-[#1a2847]/60 border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all hover:transform hover:scale-105"
              >
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="text-cyan-400 text-xs sm:text-sm mb-2">{cert.year}</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{cert.org}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0f1e35]/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16">Get In Touch</h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base text-white font-medium mb-1">Email</h4>
                    <a
                      href="mailto:matiastrauth64@gmail.com"
                      className="text-xs sm:text-sm text-gray-400 hover:text-cyan-400 break-all"
                    >
                      matiastrauth64@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+595976148630" className="text-xs sm:text-sm text-gray-400 hover:text-cyan-400">
                      +595 976 148-630
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base text-white font-medium mb-1">Location</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Asunción, Paraguay</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                <a
                  href="https://github.com/Trauth-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mat%C3%ADas-trauth-092b6921a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a
                  href="https://wa.me/595976148630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#1a2847] border border-cyan-500/20 text-sm sm:text-base text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#1a2847] border border-cyan-500/20 text-sm sm:text-base text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#1a2847] border border-cyan-500/20 text-sm sm:text-base text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#1a2847] border border-cyan-500/20 text-sm sm:text-base text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none resize-none"
                  />
                </div>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 sm:py-3 text-sm sm:text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2025 Matías Trauth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
