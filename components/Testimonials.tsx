'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mike Rodriguez',
      business: 'Rodriguez HVAC',
      result: '+$23K/month',
      quote: "I was losing 15-20 calls a week while I was out on jobs. Now every single call gets answered and booked. It's like hiring a receptionist without the overhead.",
    },
    {
      name: 'Sarah Chen',
      business: 'Chen Medical Clinic',
      result: '+$41K/month',
      quote: "Patients used to get frustrated calling after hours. Now they book appointments at midnight and wake up confirmed. Our patient volume increased 40%.",
    },
    {
      name: 'James Peterson',
      business: 'Peterson Auto Repair',
      result: '+$18K/month',
      quote: "Best investment I've made. Pays for itself 10x over. I'm not stressed about missing calls anymore - every customer gets through.",
    },
    {
      name: 'Maria Gonzalez',
      business: 'Gonzalez Law Firm',
      result: '+$67K/month',
      quote: "Every missed call is a case we don't get. This system answers 24/7, pre-qualifies leads, and books consultations. Complete game-changer.",
    },
    {
      name: 'Tom Bradley',
      business: 'Bradley Plumbing',
      result: '+$31K/month',
      quote: "Emergency calls at 2 AM used to go to voicemail. Now they're booked instantly. I wake up to a full schedule and happy customers.",
    },
    {
      name: 'Lisa Thompson',
      business: 'Thompson Dental',
      result: '+$29K/month',
      quote: "Our front desk was overwhelmed. Now calls are handled perfectly while my team focuses on patients. Booking rate went through the roof.",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 sm:mb-16 relative z-10">
        <div className="text-center">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold rounded-full text-sm border border-purple-200">
              ⭐ TRUSTED BY 500+ BUSINESSES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-gray-900">
            Real Business Owners, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            See how much other businesses are earning with 24/7 call answering 💰
          </p>
        </div>
      </div>

      {/* Scrolling testimonials - First row */}
      <div className="mb-8 relative z-10">
        <div className="flex animate-slide-horizontal" style={{ width: 'max-content' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 sm:mx-4"
              style={{ width: '300px', minWidth: '300px', maxWidth: '400px' }}
            >
              <div className="glass-card-light p-5 sm:p-6 rounded-3xl h-full hover:scale-105 transition-transform duration-300 shadow-xl border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full">
                  <span className="text-xs sm:text-sm font-bold text-green-700">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling testimonials - Second row (reverse) */}
      <div className="relative z-10">
        <div 
          className="flex animate-slide-horizontal" 
          style={{ 
            width: 'max-content',
            animationDirection: 'reverse'
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`reverse-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-4"
              style={{ width: '300px', minWidth: '300px', maxWidth: '400px' }}
            >
              <div className="glass-card-light p-5 sm:p-6 rounded-3xl h-full hover:scale-105 transition-transform duration-300 shadow-xl border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-xs sm:text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full">
                  <span className="text-xs sm:text-sm font-bold text-green-700">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
