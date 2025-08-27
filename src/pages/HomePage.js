import React from 'react';
import { Shield, FileText } from 'lucide-react';

const HomePage = () => (
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12 rounded-2xl shadow-xl mb-8">
      <h1 className="text-4xl font-bold mb-4">
        Banor Capital Limited
      </h1>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
        <p className="text-lg">
          Professional investment management services with secure WhatsApp authentication
        </p>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <Shield className="text-blue-600 mb-4 mx-auto" size={48} />
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Authentication</h3>
        <p className="text-gray-600">
          We use Meta's WhatsApp Business API to provide secure OTP-based login for your account safety.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <FileText className="text-green-600 mb-4 mx-auto" size={48} />
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Transparent Policies</h3>
        <p className="text-gray-600">
          Clear privacy and terms policies that explain exactly how we handle your data and protect your privacy.
        </p>
      </div>
    </div>

    <div className="bg-gray-50 p-8 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Legal Information</h2>
      <p className="text-gray-600 mb-6">
        Please review our privacy policy and terms of service to understand how we protect your data
        and the terms governing our services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/privacypolicy"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Privacy Policy
        </a>
        <a
          href="/termsofservices"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          View Terms of Service
        </a>
      </div>
    </div>
  </div>
);

export default HomePage;
