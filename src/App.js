import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Shield, ScrollText } from 'lucide-react';
import './App.css';

import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Proxima Investment</h1>
                  <p className="text-sm text-gray-500">Operating as BanorCapital</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-4">
                <Link to="/" className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                  <Home size={20} /> <span>Home</span>
                </Link>
                <Link to="/privacypolicy" className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                  <Shield size={20} /> <span>Privacy Policy</span>
                </Link>
                <Link to="/termsofservices" className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                  <ScrollText size={20} /> <span>Terms of Service</span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Routes */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofservices" element={<TermsOfService />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Proxima Investment Management</h3>
                <p className="text-gray-300">
                  Professional investment management services with secure authentication.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <div className="space-y-2">
                  <Link to="/privacypolicy" className="block text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/termsofservices" className="block text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="text-gray-300 space-y-2">
                  <p>Email: wst06@banorcapital.com</p>
                  <p>Website: banorcapital.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; 2025 Proxima Investment Management Limited (operating as BanorCapital). All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
