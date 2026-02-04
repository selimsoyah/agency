'use client';

import ScrollReveal from './ScrollReveal';

export default function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Never Miss a Customer Again',
      description: 'Every call is answered instantly, even at 3 AM. Your customers get help when they need it most.',
      stat: '99.8% Answer Rate',
    },
    {
      icon: '⚡',
      title: 'Instant Booking, Zero Hassle',
      description: 'Appointments scheduled automatically while you sleep. Wake up to a full calendar.',
      stat: '3x More Bookings',
    },
    {
      icon: '💼',
      title: 'Focus on Your Real Work',
      description: 'Stop juggling phone calls while trying to serve customers. We handle the interruptions.',
      stat: '10hrs Saved/Week',
    },
    {
      icon: '📊',
      title: 'Turn Calls into Revenue',
      description: 'Every conversation is an opportunity. We make sure none slip through the cracks.',
      stat: '+35% Revenue',
    },
    {
      icon: '🌙',
      title: 'After-Hours Money Maker',
      description: 'Competitors go to voicemail at 6 PM. You keep capturing business all night long.',
      stat: '24/7 Availability',
    },
    {
      icon: '🎊',
      title: 'Happy Customers, Every Time',
      description: 'Professional, friendly service on every call. No rushed conversations or missed details.',
      stat: '4.9★ Satisfaction',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-700 font-semibold rounded-full text-sm border border-cyan-200">
                ✨ REAL RESULTS, ZERO TECH TALK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 px-4 text-gray-900">
              What This Means for <span className="gradient-text">Your Business</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              No complicated setup. No technical mumbo-jumbo. Just more customers, more revenue, and more free time.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid with alternating animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {benefits.map((benefit, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 150}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            >
              <div className="glass-card p-6 sm:p-8 rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group h-full border-cyan-200">
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-all">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
                <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-700 border border-cyan-200 rounded-full text-xs sm:text-sm font-bold">
                  {benefit.stat}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Proof Section */}
        <ScrollReveal>
          <div className="text-center">
            <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto border-cyan-200">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">500+</div>
                  <div className="text-gray-700 font-semibold text-xs sm:text-base">Businesses Served</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">2.5M+</div>
                  <div className="text-gray-700 font-semibold text-xs sm:text-base">Calls Handled</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">$47M+</div>
                  <div className="text-gray-700 font-semibold text-xs sm:text-base">Revenue Recovered</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
