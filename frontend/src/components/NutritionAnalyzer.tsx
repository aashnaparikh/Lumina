import { useState } from 'react'
import { Search, Sparkles, Loader2, Utensils } from 'lucide-react'

interface NutritionData {
  foodName: string
  calories: number
  protein: number
  carbs: number
  fats: number
  fiber: number
  servingSize: string
}

// Mock nutrition database
const nutritionDatabase: Record<string, NutritionData> = {
  'salmon': {
    foodName: 'Atlantic Salmon',
    calories: 206,
    protein: 22,
    carbs: 0,
    fats: 13,
    fiber: 0,
    servingSize: '100g (3.5 oz)'
  },
  'brown rice': {
    foodName: 'Brown Rice (cooked)',
    calories: 112,
    protein: 2.6,
    carbs: 24,
    fats: 0.9,
    fiber: 1.8,
    servingSize: '1 cup (195g)'
  },
  'greek yogurt': {
    foodName: 'Greek Yogurt (plain, non-fat)',
    calories: 97,
    protein: 17,
    carbs: 7,
    fats: 0.3,
    fiber: 0,
    servingSize: '170g (6 oz)'
  },
  'avocado': {
    foodName: 'Avocado',
    calories: 240,
    protein: 3,
    carbs: 13,
    fats: 22,
    fiber: 10,
    servingSize: '1 medium (150g)'
  },
  'quinoa': {
    foodName: 'Quinoa (cooked)',
    calories: 120,
    protein: 4.4,
    carbs: 21,
    fats: 1.9,
    fiber: 2.8,
    servingSize: '1 cup (185g)'
  },
  'chicken breast': {
    foodName: 'Chicken Breast (grilled)',
    calories: 165,
    protein: 31,
    carbs: 0,
    fats: 3.6,
    fiber: 0,
    servingSize: '100g (3.5 oz)'
  },
  'banana': {
    foodName: 'Banana',
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fats: 0.4,
    fiber: 3.1,
    servingSize: '1 medium (118g)'
  },
  'spinach': {
    foodName: 'Spinach (raw)',
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fats: 0.4,
    fiber: 2.2,
    servingSize: '100g (3 cups)'
  },
  'oatmeal': {
    foodName: 'Oatmeal (cooked)',
    calories: 71,
    protein: 2.5,
    carbs: 12,
    fats: 1.5,
    fiber: 1.7,
    servingSize: '1 cup (234g)'
  },
  'almonds': {
    foodName: 'Almonds',
    calories: 164,
    protein: 6,
    carbs: 6,
    fats: 14,
    fiber: 3.5,
    servingSize: '28g (23 almonds)'
  }
}

export default function NutritionAnalyzer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<NutritionData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const normalizedQuery = searchQuery.toLowerCase().trim()
    const foundFood = nutritionDatabase[normalizedQuery]

    if (foundFood) {
      setResult(foundFood)
      setLoading(false)
    } else {
      setError(`"${searchQuery}" not found. Try: Salmon, Brown Rice, Greek Yogurt, Avocado, Quinoa, Chicken Breast, Banana, Spinach, Oatmeal, or Almonds`)
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 animate-fadeIn">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
        
        {/* Header - Centered */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-500/20 p-3 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              <Utensils className="w-6 h-6 text-purple-300" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Food Search Agent</h2>
          <p className="text-white/60 text-sm">AI-Powered Nutrition Database</p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch}>
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any food... (e.g., 'salmon', 'banana', 'oatmeal')"
              className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 
                       focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/30
                       transition-all duration-300 hover:bg-white/15 hover:border-purple-300/50"
            />
            <button
              type="submit"
              disabled={loading || !searchQuery.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 
                       bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500/50 
                       text-white p-3 rounded-xl 
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-purple-500/50 hover:scale-110
                       active:scale-95
                       disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
          </div>
        </form>

        {/* Quick Search Examples */}
        {!result && !loading && (
          <div className="mt-6 animate-slideUp">
            <p className="text-white/60 text-sm mb-3 text-center">Popular searches:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Salmon', 'Brown Rice', 'Greek Yogurt', 'Avocado', 'Quinoa', 'Chicken Breast', 'Banana'].map((food, index) => (
                <button
                  key={food}
                  onClick={() => {
                    setSearchQuery(food)
                    setTimeout(() => {
                      const form = document.querySelector('form')
                      if (form) {
                        const event = new Event('submit', { bubbles: true, cancelable: true })
                        form.dispatchEvent(event)
                      }
                    }, 0)
                  }}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="bg-white/5 hover:bg-white/15 text-white/70 hover:text-white 
                           px-4 py-2 rounded-lg text-sm 
                           transition-all duration-300
                           hover:shadow-lg hover:shadow-purple-500/30
                           hover:-translate-y-1 hover:scale-105
                           active:scale-95
                           animate-fadeIn"
                >
                  {food}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-white animate-pulse">
            <div className="relative">
              <Loader2 className="w-12 h-12 animate-spin text-purple-400" />
              <div className="absolute inset-0 blur-xl bg-purple-500/50 animate-pulse"></div>
            </div>
            <span className="text-lg">Analyzing nutrition data...</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-500/20 border border-red-500/50 rounded-xl p-4 animate-shake">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-4 animate-slideUp">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10
                          hover:bg-white/10 hover:border-purple-400/50
                          hover:shadow-2xl hover:shadow-purple-500/20
                          transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{result.foodName}</h3>
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
              
              <p className="text-white/60 text-sm mb-6">Per {result.servingSize}</p>

              <div className="grid grid-cols-2 gap-4">
                <NutrientCard label="Calories" value={result.calories} unit="kcal" highlight delay={0} />
                <NutrientCard label="Protein" value={result.protein} unit="g" delay={100} />
                <NutrientCard label="Carbs" value={result.carbs} unit="g" delay={200} />
                <NutrientCard label="Fats" value={result.fats} unit="g" delay={300} />
                <NutrientCard label="Fiber" value={result.fiber} unit="g" delay={400} />
              </div>
            </div>

            <button
              onClick={() => {
                setResult(null)
                setSearchQuery('')
              }}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-xl 
                       transition-all duration-300
                       hover:shadow-2xl hover:shadow-purple-500/50
                       hover:-translate-y-1 hover:scale-[1.02]
                       active:scale-95
                       transform"
            >
              Search Another Food
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function NutrientCard({ label, value, unit, highlight, delay }: { 
  label: string
  value: number
  unit: string
  highlight?: boolean
  delay?: number
}) {
  return (
    <div 
      style={{ animationDelay: `${delay}ms` }}
      className={`rounded-xl p-4 
                ${highlight ? 'bg-purple-500/20 border-2 border-purple-400/50' : 'bg-white/5 border border-white/10'}
                hover:scale-105 hover:-translate-y-1
                hover:shadow-xl hover:shadow-purple-500/30
                ${highlight ? 'hover:border-purple-400' : 'hover:border-purple-400/50 hover:bg-white/10'}
                transition-all duration-300
                cursor-pointer
                animate-slideUp`}
    >
      <p className="text-white/60 text-sm mb-1">{label}</p>
      <p className="text-white text-2xl font-bold">
        {value}<span className="text-lg text-white/60 ml-1">{unit}</span>
      </p>
    </div>
  )
}