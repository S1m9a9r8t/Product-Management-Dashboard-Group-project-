function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

     
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-900 mb-3">
          About Prodexa
        </p>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-800">
          Shopping made simple.
        </h1>

        <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Prodexa is an online store created to make discovering and
          shopping for everyday products simple and enjoyable.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto">

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-4"></div>

            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Our Mission
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Our mission is to make everyday shopping simple by providing
              clear product information, variety, and a smooth browsing
              experience for everyone.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="text-3xl mb-4"></div>

            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Our Vision
            </h2>

            <p className="text-gray-500 leading-relaxed">
              We aim to build a trusted online shopping experience known for
              reliability, variety, simplicity, and putting customers first.
            </p>
          </div>

        </div>

        
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-center text-white">

          <div className="text-3xl mb-4"></div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Meet Our Team
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We're a small and dedicated team passionate about creating
            simple, enjoyable shopping experiences using modern web
            technology.
          </p>

        </div>

      </div>
    </div>
  );
}

export default About;