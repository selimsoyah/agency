'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Solutions() {
  const [activeAgent, setActiveAgent] = useState(0);

  const agents = [
    {
      name: 'The Voice Agent',
      subtitle: 'Reception & Booking',
      description: 'Handles 24/7 inbound calls using Amazon Lex & Connect. It uses custom NLP to understand complex intent and urgency.',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Intent classification & routing',
        'Sentiment analysis',
        'Real-time transcription',
      ],
      color: 'cyan',
      stats: { calls: '10K+', accuracy: '97%', uptime: '99.9%' },
    },
    {
      name: 'The Scraping Agent',
      subtitle: 'Calendar Sync',
      description: 'A dedicated EC2 worker that logs into your third-party portals to ensure 100% accurate availability without an API.',
      features: [
        'Headless browser automation',
        'Anti-detection mechanisms',
        'Real-time data extraction',
        'Multi-platform support',
        'Scheduled synchronization',
      ],
      color: 'purple',
      stats: { syncs: '50K+', accuracy: '100%', speed: '<2s' },
    },
    {
      name: 'The Notification Agent',
      subtitle: 'Communication Hub',
      description: 'Real-time confirmation flow using AWS SES/SNS for instant client and staff synchronization.',
      features: [
        'Multi-channel delivery (SMS, Email)',
        'Template management',
        'Delivery tracking',
        'Retry logic',
        'Compliance monitoring',
      ],
      color: 'green',
      stats: { sent: '100K+', delivery: '99.5%', speed: '<1s' },
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan text-sm font-mono px-4 py-2 border border-cyan/30 rounded">
              AGENT LINEUP
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-cyan glow-text">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three specialized agents working in perfect synchronization
          </p>
        </div>

        {/* Agent Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {agents.map((agent, index) => (
            <button
              key={index}
              onClick={() => setActiveAgent(index)}
              className={`px-6 py-3 font-mono font-semibold rounded transition-all ${
                activeAgent === index
                  ? 'bg-cyan text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                  : 'glass-effect text-gray-400 border border-cyan/20 hover:border-cyan/50'
              }`}
            >
              {agent.name}
            </button>
          ))}
        </div>

        {/* Active Agent Display */}
        <ScrollReveal>
          <div className="glass-effect rounded-lg p-8 md:p-12 border border-cyan/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {agents[activeAgent].name}
                </h3>
                <p className="text-cyan text-xl font-mono">
                  {agents[activeAgent].subtitle}
                </p>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {agents[activeAgent].description}
              </p>

              <div className="space-y-3">
                <h4 className="text-white font-mono font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan rounded-full"></span>
                  Key Features
                </h4>
                {agents[activeAgent].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-cyan mt-1">▸</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Stats Display */}
              <div className="glass-effect p-6 rounded border border-cyan/30 mb-6">
                <h4 className="text-white font-mono mb-6 text-center">Performance Metrics</h4>
                <div className="space-y-6">
                  {Object.entries(agents[activeAgent].stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400 text-sm uppercase font-mono">{key}</span>
                        <span className="text-cyan font-bold">{value}</span>
                      </div>
                      <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan to-cyan/50 rounded-full"
                          style={{ width: key === 'uptime' || key === 'accuracy' || key === 'delivery' ? '98%' : '85%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Code Block */}
              <div className="glass-effect rounded overflow-hidden border border-cyan/20">
                <div className="bg-charcoal px-4 py-2 border-b border-cyan/20">
                  <span className="text-cyan text-xs font-mono">agent_config.json</span>
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto">
                  <code className="text-gray-300">
{`{
  "agent": "${agents[activeAgent].name}",
  "status": "active",
  "region": "us-east-1",
  "runtime": "python3.11",
  "memory": "1024MB",
  "timeout": 300,
  "triggers": ["inbound", "scheduled"]
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Integration Flow */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass-effect px-8 py-4 rounded-full border border-cyan/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan rounded-full animate-pulse"></div>
              <span className="text-white font-mono text-sm">Voice</span>
            </div>
            <span className="text-cyan">→</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-white font-mono text-sm">Scraper</span>
            </div>
            <span className="text-cyan">→</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-mono text-sm">Notification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
