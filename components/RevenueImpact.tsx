'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function RevenueImpact() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate first counter to 73
          let current1 = 0;
          const timer1 = setInterval(() => {
            current1 += 1;
            setCount1(current1);
            if (current1 >= 73) clearInterval(timer1);
          }, 20);

          // Animate second counter to 36500
          let current2 = 0;
          const timer2 = setInterval(() => {
            current2 += 500;
            setCount2(current2);
            if (current2 >= 36500) {
              setCount2(36500);
              clearInterval(timer2);
            }
          }, 20);

          // Animate third counter to 180000
          let current3 = 0;
          const timer3 = setInterval(() => {
            current3 += 2500;
            setCount3(current3);
            if (current3 >= 180000) {
              setCount3(180000);
              clearInterval(timer3);
            }
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              The Cost of <span className="gradient-text">Missed Calls</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Research shows that businesses lose thousands in revenue every month from unanswered calls. 
              Here's what you're leaving on the table:
            </p>
          </div>
        </ScrollReveal>

        {/* Big Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ScrollReveal delay={100} direction="left">
            <div className="glass-card-light p-10 rounded-3xl text-center hover:scale-105 transition-all border border-purple-200">
              <div className="text-7xl mb-4">📞</div>
              <div className="text-6xl font-black gradient-text mb-2">{count1}%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Of Customers</div>
              <div className="text-gray-600">Won't call back after getting voicemail</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <div className="glass-card-light p-10 rounded-3xl text-center hover:scale-105 transition-all border border-purple-200">
              <div className="text-7xl mb-4">💰</div>
              <div className="text-6xl font-black gradient-text mb-2">${count2.toLocaleString()}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Lost Monthly</div>
              <div className="text-gray-600">Average business with 10 missed calls/day</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} direction="right">
            <div className="glass-card-light p-10 rounded-3xl text-center hover:scale-105 transition-all border border-gray-200">
              <div className="text-7xl mb-4">📈</div>
              <div className="text-6xl font-black gradient-text mb-2">${count3.toLocaleString()}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Recovered Yearly</div>
              <div className="text-gray-600 font-light">With 24/7 automated answering</div>
            </div>
          </ScrollReveal>
        </div>

        {/* Calculator Section */}
        <ScrollReveal>
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto border-cyan-200">
            <h3 className="text-4xl font-black text-center mb-8 gradient-text">
              Quick ROI Calculator 🧮
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Missed Calls Per Week
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  defaultValue="10"
                  className="w-full h-3 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
                  id="missedCalls"
                />
                <div className="text-center mt-2">
                  <span className="text-3xl font-black gradient-text">10</span>
                  <span className="text-gray-600 ml-2">calls</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Average Job Value
                </label>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="100"
                  defaultValue="500"
                  className="w-full h-3 bg-cyan-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2">
                  <span className="text-3xl font-black gradient-text">$500</span>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl text-white text-center">
              <div className="text-sm font-semibold mb-2 opacity-90">YOU'RE LOSING</div>
              <div className="text-6xl font-black mb-2">$20,000</div>
              <div className="text-lg opacity-90">per month in missed opportunities</div>
              
              <button className="mt-8 px-10 py-4 bg-white text-cyan-600 font-bold text-lg rounded-full hover:scale-105 transition-all">
                Get This Back → Start Free Trial
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
