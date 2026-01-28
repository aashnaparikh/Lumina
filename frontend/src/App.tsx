import { useState } from 'react'
import { Sparkles, Activity, Brain, Heart } from 'lucide-react'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">AI-Powered Health Intelligence</span>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            See Your Future Self
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Multi-agent AI system analyzing genomics, nutrition, and wearables 
            to predict and optimize your longevity trajectory
          </p>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg 
                     hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50
                     transform hover:scale-105"
          >
            {isHovered ? '🚀 Coming Soon' : '✨ Explore Demo'}
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="Multi-Agent AI"
            description="5 specialized agents processing vision, genomics, and research data"
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8" />}
            title="Predictive Twin"
            description="10-year health trajectory simulation based on lifestyle interventions"
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Personalized Insights"
            description="Evidence-based recommendations from 10,000+ clinical studies"
          />
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-4">Built with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Gemini AI', 'Three.js', 'Vertex AI', 'Google Cloud'].map((tech) => (
              <span
                key={tech}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 
                    hover:bg-white/20 transition-all duration-300 hover:scale-105">
      <div className="text-purple-300 mb-4">{icon}</div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  )
}

export default App