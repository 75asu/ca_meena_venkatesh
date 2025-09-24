import { skills, stats } from "../constants/constatnts";

export default function AboutSection() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">About</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6">
            Meet <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">Meena</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Chartered Accountant & Financial Expert
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Profile Image */}
          <div className="lg:col-span-2">
            <div 
              className="relative opacity-0 translate-y-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                  <img
                    src="/meena.jpeg"
                    alt="Meena Venkatesh"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-3">
            <div 
              className="space-y-8 opacity-0 translate-y-8 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              {/* Introduction */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Financial Excellence Through Innovation
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As a Chartered Accountant with <strong className="text-white">7 years of specialized experience</strong>, 
                  I excel in financial management, reporting, and analysis across dynamic startup environments 
                  and rapidly scaling organizations.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My expertise spans <strong className="text-white">US GAAP, IFRS, and Ind AS</strong>, with a proven 
                  track record in building scalable financial processes, ensuring compliance, and driving 
                  sustainable business growth.
                </p>
              </div>

              {/* Specialty Callout */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 border border-purple-500/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-2xl blur-sm"></div>
                <div className="relative">
                  <h4 className="text-lg font-semibold text-white mb-3">Crypto Portfolio Management</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond traditional finance, I bring specialized expertise in cryptocurrency portfolio 
                    management, successfully managing portfolios valued up to <strong className="text-white">$350K USD</strong>.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="pt-4">
                <blockquote className="text-xl font-medium text-white leading-relaxed italic border-l-4 border-purple-400 pl-6">
                  "I am passionate about helping businesses — from early-stage startups to scaling 
                  companies — achieve financial transparency, compliance, and sustainable profitability."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Core Competencies</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized skills developed through years of hands-on experience in financial management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group opacity-0 translate-y-6 animate-fade-in"
                style={{ animationDelay: skill.delay }}
              >
                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-2xl font-bold text-purple-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.percentage}%`,
                        animationDelay: `${parseInt(skill.delay) + 500}ms`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div 
          className="opacity-0 translate-y-8 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="relative inline-block">
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}