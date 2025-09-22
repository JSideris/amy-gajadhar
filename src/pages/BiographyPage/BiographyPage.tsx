import { useState } from 'react';

const BiographyPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Card */}
        <div 
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-900/10 overflow-hidden border border-white/30 transition-all duration-700 hover:shadow-3xl hover:shadow-indigo-900/15"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="md:flex">
            {/* Left Profile Section */}
            <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-800 p-10 text-white relative overflow-hidden">
              {/* Sophisticated overlay with multiple gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-amber-400/10 via-transparent to-blue-400/5"></div>
              {/* Subtle mesh pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 transform rotate-45"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -rotate-45"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className={`w-56 h-56 bg-gradient-to-br from-white/20 via-blue-200/30 to-indigo-300/40 rounded-full mx-auto mb-8 flex items-center justify-center transition-transform duration-500 ${isHovered ? 'scale-105' : ''} shadow-2xl border-4 border-white/20 backdrop-blur-sm`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-white/60 font-medium">Photo</span>
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-light tracking-tight text-white">
                    Amy Gajadhar, Ph. D
                  </h1>
                  <div className="space-y-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                    <p className="text-amber-200 font-medium tracking-wide">
                      Performer • Teacher • Musicologist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="md:w-3/5 p-10">
              <div className="space-y-8">
                {/* Header */}
                <div className="border-b border-gray-100 pb-6">
                  <h2 className="text-4xl font-light text-gray-900 tracking-tight">
                    Biography
                  </h2>
                </div>

                {/* Introduction */}
                <div className="space-y-6">
                  <p className="text-xl font-light text-gray-700 leading-relaxed">
                    Amy brings over twenty years of diverse musical experience to her teaching,
                    performance, and collaborative work. With advanced degrees in performance and musicology,
                    she combines scholarly depth with practical artistry to serve students and audiences
                    throughout the Greater Toronto Area.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                  {[
                    {
                      title: "Education & Training",
                      content: "Amy holds advanced degrees from prestigious institutions, where she studied under renowned pedagogues and performers. Her academic foundation in musicology provides unique insights that enrich both her teaching and performance practice."
                    },
                    {
                      title: "Performance Experience", 
                      content: "As a versatile performer, Amy has appeared in recitals, chamber music concerts, and collaborative performances across Ontario. Her repertoire spans from Baroque masters to contemporary composers, with particular expertise in Romantic and 20th-century literature."
                    },
                    {
                      title: "Teaching Philosophy",
                      content: "Amy believes in nurturing each student's unique musical voice while building strong technical foundations. Her approach combines traditional conservatory methods with innovative pedagogical techniques, ensuring students develop both skill and artistry."
                    }
                  ].map((section, index) => (
                    <div key={index} className="group">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {section.content}
                      </p>
                    </div>
                  ))}

                  {/* Specializations */}
                  <div className="group">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Specializations
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Classical repertoire from all periods",
                        "Jazz and popular music styles", 
                        "RCM examination preparation",
                        "Collaborative piano techniques",
                        "Music theory and history instruction"
                      ].map((specialization, index) => (
                        <div key={index} className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:bg-amber-400 transition-colors duration-300"></div>
                          <span className="text-gray-600 font-light group-hover/item:text-gray-900 transition-colors duration-300">
                            {specialization}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/60 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg border border-white/20">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="font-medium">Contact</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm-1-7.9c-.7 0-1.3-.6-1.3-1.3S7.3 6.5 8 6.5s1.3.6 1.3 1.3-.6 1.2-1.3 1.2zM17 17h-2v-3.5c0-.8-.7-1.5-1.5-1.5S12 12.7 12 13.5V17h-2v-7h2v1c.5-.8 1.4-1 2-1 1.7 0 3 1.3 3 3v4z"/>
              </svg>
              <span className="font-medium">Connect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographyPage;