import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  CheckCircle 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('sql');
  const [teamSize, setTeamSize] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(65);

  const playgroundDemos = {
    sql: {
      title: "NL2SQL Enterprise Data Agent",
      prompt: "Show me Q3 revenue breakdown by enterprise sector compared to target",
      output: `SELECT sector, SUM(revenue) as total_rev, target 
FROM enterprise_sales 
WHERE quarter = 'Q3' 
GROUP BY sector 
ORDER BY total_rev DESC;

-- Execution output: 4 rows returned (0.02s)
1. Financial Services | $4.2M | Met (105%)
2. Government & ATO   | $3.8M | Met (102%)
3. Healthcare         | $2.1M | Below (91%)`
    },
    support: {
      title: "Autonomous Tier-1 Support Agent",
      prompt: "Client query: 'How do we request a custom data schema audit?'",
      output: `[Agent Routing: High Priority Audit Request]
"Hello! I can schedule an Enterprise Data Architecture Audit for your team.

Next available slots with our Lead Architects:
- Tuesday at 10:00 AM ACST
- Thursday at 2:00 PM ACST

Would you like me to reserve one of these and send the calendar invite?"`
    },
    summary: {
      title: "Document & Policy Summarizer",
      prompt: "Summarize 40-page Enterprise Governance Policy",
      output: `Key Executive Takeaways:
1. Data Lineage: Mandatory registration of all GenAI pipelines in central registry.
2. Access Control: Role-Based Access Control (RBAC) required for vector databases.
3. Retention: Automated purge rules enforced after 7 years for financial records.`
    }
  };

  const monthlyHoursSaved = teamSize * 8; 
  const annualSavings = Math.round(monthlyHoursSaved * hourlyRate * 12);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
            <Cpu className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            NovaAI Solutions
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#playground" className="hover:text-cyan-400 transition">Interactive Demo</a>
          <a href="#roi" className="hover:text-cyan-400 transition">ROI Calculator</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
        </div>
        <a href="#contact" className="px-4 py-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg font-semibold transition">
          Book Consultation
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Enterprise-Grade Generative AI & MLOps Architecture</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 max-w-4xl mx-auto leading-tight">
          Automate Enterprise Workflows with Autonomous AI Systems
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          We design, deploy, and govern custom AI agents, Retrieval-Augmented Generation (RAG) platforms, and Lakehouse architectures tailored for enterprise compliance.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg shadow-lg shadow-cyan-500/20 flex items-center space-x-2 transition">
            <span>Start Building</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#playground" className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 font-semibold rounded-lg text-slate-300 transition">
            Explore Interactive Demo
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-6 py-16 max-w-6xl mx-auto border-t border-slate-900">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Core AI Engineering Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/40 transition">
            <Bot className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Autonomous Agents</h3>
            <p className="text-slate-400 text-sm">
              Custom agentic workflows capable of multi-step task execution, tool use, and automated enterprise system integrations.
            </p>
          </div>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/40 transition">
            <Database className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Enterprise RAG & Data</h3>
            <p className="text-slate-400 text-sm">
              Vector database architectures integrated with your data lakehouse for accurate context retrieval.
            </p>
          </div>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/40 transition">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Governance & Compliance</h3>
            <p className="text-slate-400 text-sm">
              Robust guardrails, prompt evaluation frameworks, access controls, and data protection aligned with enterprise security standards.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section id="playground" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Interactive AI Capability Playground</h2>
          <p className="text-slate-400 text-sm mt-2">Test how custom AI agents handle real-world operations.</p>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex border-b border-slate-800 bg-slate-950/50">
            {Object.keys(playgroundDemos).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold transition ${
                  activeTab === tab 
                    ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-900' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="p-6">
            <h4 className="text-lg font-bold text-slate-200 mb-2">{playgroundDemos[activeTab].title}</h4>
            <div className="bg-slate-950 p-4 rounded-lg font-mono text-sm border border-slate-800 mb-4">
              <span className="text-slate-500">// User Input Prompt:</span>
              <p className="text-cyan-300 mt-1">{playgroundDemos[activeTab].prompt}</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs md:text-sm border border-slate-800 text-slate-300">
              <div className="flex items-center space-x-2 text-slate-500 mb-2">
                <Terminal className="w-4 h-4" />
                <span>Agent Execution Output:</span>
              </div>
              <pre className="whitespace-pre-wrap">{playgroundDemos[activeTab].output}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi" className="px-6 py-16 max-w-4xl mx-auto border-t border-slate-900">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Operational ROI</h2>
          <p className="text-slate-400 text-sm mt-2">Estimate savings achieved by automating repetitive manual workflows.</p>
        </div>

        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-300">Team Size: <span className="text-cyan-400 font-bold">{teamSize}</span> members</label>
              <input 
                type="range" 
                min="5" 
                max="200" 
                value={teamSize} 
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full mt-2 accent-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">Avg Hourly Cost: <span className="text-cyan-400 font-bold">${hourlyRate}</span> / hr</label>
              <input 
                type="range" 
                min="30" 
                max="200" 
                value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full mt-2 accent-cyan-400"
              />
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
            <span className="text-xs uppercase font-semibold text-slate-400">Estimated Annual Value</span>
            <div className="text-4xl font-extrabold text-cyan-400 mt-2">${annualSavings.toLocaleString()}</div>
            <p className="text-xs text-slate-500 mt-2">Based on saving ~8 hours per employee monthly with AI agents.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-16 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Service Tiers</h2>
          <p className="text-slate-400 text-sm mt-2">Scalable engagement models for organizations at any stage of AI maturity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-bold">Proof of Concept</h3>
            <div className="text-3xl font-extrabold my-4">$4,500 <span className="text-xs text-slate-400 font-normal">/ fixed</span></div>
            <ul className="text-sm space-y-2 text-slate-400 mb-6">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> 2-Week Prototyping</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Architecture Blueprint</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Single Agent Demo</li>
            </ul>
            <a href="#contact" className="block text-center py-2 bg-slate-800 hover:bg-slate-700 font-semibold rounded-lg text-sm text-slate-200">Select Plan</a>
          </div>

          <div className="p-6 bg-slate-900/80 border-2 border-cyan-500 rounded-xl relative shadow-xl shadow-cyan-500/10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">Most Popular</span>
            <h3 className="text-lg font-bold">Production Build</h3>
            <div className="text-3xl font-extrabold my-4">$12,000 <span className="text-xs text-slate-400 font-normal">/ project</span></div>
            <ul className="text-sm space-y-2 text-slate-300 mb-6">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Multi-Agent Integration</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Custom Enterprise RAG</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Security & Access Controls</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Documentation & Handover</li>
            </ul>
            <a href="#contact" className="block text-center py-2 bg-cyan-500 hover:bg-cyan-400 font-semibold rounded-lg text-sm text-slate-950">Select Plan</a>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-bold">Enterprise Managed</h3>
            <div className="text-3xl font-extrabold my-4">Custom</div>
            <ul className="text-sm space-y-2 text-slate-400 mb-6">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Dedicated MLOps Support</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> Continuous Model Tuning</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /> 99.9% Availability SLA</li>
            </ul>
            <a href="#contact" className="block text-center py-2 bg-slate-800 hover:bg-slate-700 font-semibold rounded-lg text-sm text-slate-200">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
 {/* Contact Section */}
export function ContactSection() {
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto border-t border-slate-900 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Operations with AI</h2>
      <p className="text-slate-400 mb-8">Schedule a 30-minute consultation with our AI Solutions Architect.</p>
      
      {status === 'success' ? (
        <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl">
          <h3 className="font-bold text-lg mb-1">Thank You!</h3>
          <p className="text-sm">Your request has been received. Our team will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md mx-auto text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Your Name" 
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 text-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Work Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="name@company.com" 
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 text-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Requirements</label>
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Describe your enterprise requirements..." 
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 text-slate-100"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-cyan-500/20 mt-2 disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Request Strategy Call'}
          </button>

          {status === 'error' && (
            <p className="text-rose-400 text-xs text-center mt-2">
              An error occurred while sending your request. Please try again.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
        
       

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NovaAI Solutions. All rights reserved.
      </footer>

    </div>
  );
}
