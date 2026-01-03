import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Perfect Job Hunter App
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            A revolutionary job search platform with AI-powered fit scoring,
            multi-dimensional filtering, and comprehensive career tools.
          </p>
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              🚀 Phase 1 Foundation Complete
            </h2>
            <div className="text-left space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg">Features Included:</h3>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Multi-dimensional job search (Novice to Expert modes)</li>
                  <li>AI-powered fit scoring algorithm</li>
                  <li>10,000+ synthetic job postings database</li>
                  <li>Cover letter generation with GPT-4 integration</li>
                  <li>Application tracking system</li>
                  <li>Market analytics dashboard</li>
                  <li>Docker Compose infrastructure</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg">Technology Stack:</h3>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Frontend: React + Vite + TailwindCSS</li>
                  <li>Backend: Python FastAPI</li>
                  <li>Database: PostgreSQL with pgvector</li>
                  <li>Search: Elasticsearch</li>
                  <li>AI/ML: GPT-4, BERT, XGBoost</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-left">
              <strong>📋 Next Steps:</strong> This repository contains the complete
              codebase structure. To run locally:
              <code className="block mt-2 bg-gray-800 text-green-400 p-2 rounded">
                docker-compose up --build
              </code>
            </p>
          </div>
          <a
            href="https://github.com/MABAIStrategies/Perfect-Job-Hunter-App"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
