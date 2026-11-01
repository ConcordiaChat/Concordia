import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Wordmark logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/branding/Wordmark - Indigo.svg"
            alt="Concordia"
            className="h-9 w-auto"
            draggable={false}
          />
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg">
            End of Project
          </span>
        </div>

      </div>
    </nav>
  )
}
