"use client"


import {
  Code,
  Smartphone,
  Search,
  Palette,
  Cloud,
  Settings,
  Shield,
  Brush,
  Brain,
  CheckCircle,
  DollarSign,
  Award,
} from "lucide-react"

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive, scalable websites and web applications using modern technologies like React, Next.js, and Node.js.",
    mockup: "web-dev",
    icon: <Code className="w-5 h-5" />,
    badges: [
      { icon: <Shield className="w-4 h-4" />, text: "SSL Secured" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Responsive Design" },
      { icon: <Award className="w-4 h-4" />, text: "SEO Optimized" },
    ],
  },
  {
    title: "App Development",
    description:
      "Create native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    mockup: "app-dev",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: "SEO & Analytics",
    description:
      "Boost your online visibility with comprehensive SEO strategies and detailed analytics to track performance.",
    mockup: "seo-analytics",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces that deliver exceptional user experiences across all platforms.",
    mockup: "ui-ux",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Streamline your development process with cloud infrastructure setup and DevOps automation solutions.",
    mockup: "cloud-devops",
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    title: "CRM/ERP Solutions",
    description:
      "Implement custom CRM and ERP systems to manage your business processes efficiently and boost productivity.",
    mockup: "crm-erp",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ensure your systems run smoothly with 24/7 technical support and regular maintenance services.",
    mockup: "maintenance",
    icon: <Shield className="w-5 h-5" />,
    badges: [
      { icon: <CheckCircle className="w-4 h-4" />, text: "24/7 Support" },
      { icon: <Shield className="w-4 h-4" />, text: "99.9% Uptime" },
      { icon: <DollarSign className="w-4 h-4" />, text: "Fixed Pricing" },
    ],
  },
  {
    title: "Branding & Identity Design",
    description:
      "Create compelling brand identities with logo design, brand guidelines, and marketing materials.",
    mockup: "branding",
    icon: <Brush className="w-5 h-5" />,
  },
  {
    title: "AI/ML Development",
    description:
      "Integrate cutting-edge AI and machine learning solutions to automate processes and gain intelligent insights.",
    mockup: "ai-ml",
    icon: <Brain className="w-5 h-5" />,
  },
]

export default function ITCompanyServices() {

  return (
    <>
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
          animation-delay: var(--delay, 0s);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .service-card {
          background: rgba(31, 41, 55, 0.3); /* bg-gray-900/30 */
          border: 1px solid #1f2937; /* gray-800 */
          border-radius: 1rem; /* rounded-2xl */
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          outline-offset: 2px;
          outline-color: transparent;
          outline-style: solid;
        }
        .service-card:hover,
        .service-card:focus-visible {
          border-color: #374151; /* gray-700 */
          transform: translateY(-5px);
          outline-color: #3b82f6; /* blue-500 focus */
        }
        /* Mockup Pulsing effect */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        /* Simple bar animation for ranking or bars */
        .bar-anim {
          animation: barGrow 0.8s ease forwards;
        }
        @keyframes barGrow {
          from { height: 2px; }
          to { height: var(--bar-height); }
        }
      `}</style>

      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 fade-in`}
            style={{ "--delay": "0s" } as React.CSSProperties}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empowering your business with cutting-edge technology solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Top row - Web & App Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.slice(0, 2).map((service, index) => (
                <div
                  key={service.title}
                  className={`service-card group fade-in`}
                  style={{ "--delay": `${index * 0.1 + 0.2}s` } as React.CSSProperties}
                  tabIndex={0}
                >
                  <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4 flex items-center justify-center">
                      {/* Web Development Mockup */}
                      {service.mockup === "web-dev" && (
                        <div className="w-full h-full bg-gray-800 rounded-lg p-4 flex flex-col justify-between">
                          <div className="bg-blue-600 h-4 rounded animate-pulse mb-3"></div>
                          <div className="grid grid-cols-3 gap-2 flex-grow">
                            <div className="bg-gray-700 h-16 rounded animate-pulse"></div>
                            <div className="bg-gray-700 h-16 rounded animate-pulse"></div>
                            <div className="bg-gray-700 h-16 rounded animate-pulse"></div>
                          </div>
                        </div>
                      )}
                      {/* App Development Mockup */}
                      {service.mockup === "app-dev" && (
                        <div className="bg-gray-800 rounded-2xl p-4 w-24 h-40 relative">
                          <div className="bg-gray-700 rounded-lg p-2 h-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-400">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  {service.badges && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.badges.map((badge, badgeIndex) => (
                        <div
                          key={badgeIndex}
                          className="flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-lg border border-gray-700/50"
                        >
                          <div className="text-green-400">{badge.icon}</div>
                          <span className="text-xs text-gray-300">{badge.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Middle rows - Other services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(2, 8).map((service, index) => (
                <div
                  key={service.title}
                  className={`service-card group fade-in`}
                  style={{ "--delay": `${(index + 2) * 0.1}s` } as React.CSSProperties}
                  tabIndex={0}
                >
                  <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                      {/* Mockup placeholders */}
                      {service.mockup === "seo-analytics" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                            <div>SEO Performance</div>
                            <div className="font-bold text-green-400 animate-pulse">+45%</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3 text-gray-300">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs">Ranking</div>
                              <div className="font-bold text-green-400">#1</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs">Traffic</div>
                              <div className="text-white">12.5K</div>
                            </div>
                          </div>
                          <div className="flex items-end space-x-1 h-6">
                            {[3, 5, 2, 7, 4, 6].map((height, i) => (
                              <div
                                key={i}
                                style={{ height: `${height * 3}px` }}
                                className="bg-blue-500 w-2 rounded-t"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      {service.mockup === "ui-ux" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="flex space-x-2 mb-3">
                            <div className="w-6 h-6 bg-purple-500 rounded" />
                            <div className="w-6 h-6 bg-pink-500 rounded-full" />
                            <div className="w-6 h-6 bg-blue-500 rounded" />
                          </div>
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-8 rounded mb-3 animate-pulse" />
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 h-6 rounded" />
                            <div className="bg-gray-700 h-6 rounded" />
                          </div>
                          <div className="space-y-1">
                            <div className="bg-gray-700 h-2 rounded" />
                            <div className="bg-gray-700 h-2 w-3/4 rounded" />
                          </div>
                        </div>
                      )}
                      {service.mockup === "cloud-devops" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="text-xs text-gray-400 mb-2">Cloud Infrastructure</div>
                          <div className="flex items-center justify-center mb-3">
                            <div className="w-8 h-6 bg-blue-500 rounded-t-lg animate-pulse" />
                          </div>
                          <div className="grid grid-cols-3 gap-1 mb-2">
                            <div className="bg-gray-700 h-4 rounded animate-pulse" />
                            <div className="bg-gray-700 h-4 rounded animate-pulse" />
                            <div className="bg-gray-700 h-4 rounded animate-pulse" />
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-400">
                            <div>Status</div>
                            <div className="text-green-400">● Online</div>
                          </div>
                        </div>
                      )}
                      {service.mockup === "crm-erp" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="text-xs text-gray-400 mb-2">CRM Dashboard</div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Leads</div>
                              <div className="text-white">247</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Sales</div>
                              <div className="font-bold text-blue-500">$125K</div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="bg-gray-700 h-2 rounded" />
                            <div className="bg-gray-700 h-2 w-2/3 rounded" />
                            <div className="bg-gray-700 h-2 w-1/2 rounded" />
                          </div>
                        </div>
                      )}
                      {service.mockup === "maintenance" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="text-xs text-gray-400 mb-2">System Health</div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Uptime</div>
                              <div className="text-green-400">99.9%</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Response</div>
                              <div className="text-white">1min</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div
                              className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                              style={{ borderTopColor: "transparent" }}
                            />
                          </div>
                        </div>
                      )}
                      {/* Branding Mockup */}
                      {service.mockup === "branding" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col items-center justify-center">
                          <div
                            className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin"
                            style={{ animationDuration: "8s" }}
                          >
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 mt-6 mb-3 w-full">
                            <div className="bg-red-500 h-4 rounded"></div>
                            <div className="bg-blue-500 h-4 rounded"></div>
                            <div className="bg-green-500 h-4 rounded"></div>
                          </div>
                          <div className="space-y-1 w-full">
                            <div className="bg-gray-700 h-2 rounded"></div>
                            <div className="bg-gray-700 h-2 w-3/4 rounded"></div>
                            <div className="bg-gray-700 h-2 w-1/2 rounded"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-400">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  {service.badges && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.badges.map((badge, badgeIndex) => (
                        <div
                          key={badgeIndex}
                          className="flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-lg border border-gray-700/50"
                        >
                          <div className="text-green-400">{badge.icon}</div>
                          <span className="text-xs text-gray-300">{badge.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom row - AI/ML */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(8).map((service, index) => (
                <div
                  key={service.title}
                  className={`service-card group fade-in`}
                  style={{ "--delay": `${(index + 8) * 0.1}s` } as React.CSSProperties}
                  tabIndex={0}
                >
                  <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                      {service.mockup === "ai-ml" && (
                        <div className="bg-gray-800 rounded-lg p-3 h-full flex flex-col justify-between">
                          <div className="text-xs text-gray-400 mb-2">AI Processing</div>
                          <div className="flex items-center justify-center mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                              <Brain className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Accuracy</div>
                              <div className="text-green-400">98.5%</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Speed</div>
                              <div className="text-white">0.2s</div>
                            </div>
                          </div>
                          <div className="flex items-end space-x-1 h-4">
                            {[2, 4, 3, 5, 4].map((height, i) => (
                              <div
                                key={i}
                                style={{ height: `${height * 2}px` }}
                                className="bg-purple-500 w-2 rounded-t"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-400">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  {service.badges && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.badges.map((badge, badgeIndex) => (
                        <div
                          key={badgeIndex}
                          className="flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-lg border border-gray-700/50"
                        >
                          <div className="text-green-400">{badge.icon}</div>
                          <span className="text-xs text-gray-300">{badge.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
