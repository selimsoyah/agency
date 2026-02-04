'use client';

import ScrollReveal from './ScrollReveal';

export default function AnimationTest() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-white mb-4">🎬 Animation Test Zone</h2>
          <p className="text-xl text-gray-300">Scroll down to see each animation type in action!</p>
        </div>
        
        <div className="space-y-12">
          <ScrollReveal direction="left">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-10 rounded-3xl shadow-2xl border-4 border-blue-300 transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-black mb-3">← SLIDE FROM LEFT</h3>
              <p className="text-xl">Watch this box fly in from the left side with a 3D rotation!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-10 rounded-3xl shadow-2xl border-4 border-green-300 transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-black mb-3">↑ FADE FROM BOTTOM</h3>
              <p className="text-xl">This box zooms up from below with a scaling effect!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-10 rounded-3xl shadow-2xl border-4 border-purple-300 transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-black mb-3">SLIDE FROM RIGHT →</h3>
              <p className="text-xl">Flying in from the right with dramatic 3D effects!</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} direction="up">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-10 rounded-3xl shadow-2xl border-4 border-red-300 transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-black mb-3">⏱️ DELAYED ANIMATION</h3>
              <p className="text-xl">This one waits 300ms before starting - creating a cascade effect!</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <ScrollReveal direction="left" delay={0}>
              <div className="bg-yellow-400 text-gray-900 p-6 rounded-2xl font-bold text-center shadow-xl">
                <div className="text-4xl mb-2">1️⃣</div>
                First!
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-yellow-400 text-gray-900 p-6 rounded-2xl font-bold text-center shadow-xl">
                <div className="text-4xl mb-2">2️⃣</div>
                Second!
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <div className="bg-yellow-400 text-gray-900 p-6 rounded-2xl font-bold text-center shadow-xl">
                <div className="text-4xl mb-2">3️⃣</div>
                Third!
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl border-4 border-yellow-300 shadow-2xl">
          <p className="text-center text-2xl font-black text-gray-900">
            👆 Scroll up and down slowly to trigger these animations!<br/>
            <span className="text-lg font-normal">Each box should move dramatically as it enters the viewport.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
