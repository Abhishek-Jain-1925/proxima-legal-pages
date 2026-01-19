import React from 'react';

const TermsOfService = () => (
  <div className="max-w-4xl mx-auto prose prose-lg">
    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
      <h1 className="text-3xl font-bold text-purple-900 mb-2 mt-0">Terms of Service</h1>
      <p className="text-purple-700 mb-0">Last Updated: July 2025</p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-6">
        By using banorcapital.com, Clopad, and our WhatsApp OTP authentication services, you agree
        to these Terms of Service and our Privacy Policy. These terms govern your use of services
        provided by <strong>Banor Capital Limited</strong>, including its product
        <strong> Clopad Technologies</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
      <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 WhatsApp OTP Authentication</h3>
      <p className="text-gray-600 mb-4">
        • We provide secure login authentication through WhatsApp OTP delivery for Banor Capital
        and Clopad platforms<br/>
        • Service uses Meta's Business API for reliable message delivery<br/>
        • Available for users with valid WhatsApp accounts
      </p>

      <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Service Availability</h3>
      <p className="text-gray-600 mb-6">
        • We strive for 99.9% uptime but cannot guarantee uninterrupted service<br/>
        • Meta/WhatsApp service disruptions may affect OTP delivery<br/>
        • Alternative authentication methods may be provided during outages
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
      <h3 className="text-xl font-medium text-gray-700 mb-3">3.1 Accurate Information</h3>
      <p className="text-gray-600 mb-4">
        • Provide a valid, active phone number with WhatsApp access<br/>
        • Ensure your WhatsApp account can receive business messages<br/>
        • Keep your phone number updated in your account settings
      </p>

      <h3 className="text-xl font-medium text-gray-700 mb-3">3.2 Security Obligations</h3>
      <p className="text-gray-600 mb-4">
        • Keep OTP codes confidential and do not share with others<br/>
        • Report any unauthorized access immediately<br/>
        • Use strong passwords in addition to OTP authentication
      </p>

      <h3 className="text-xl font-medium text-gray-700 mb-6">3.3 Prohibited Uses</h3>
      <p className="text-gray-600 mb-6">
        • Do not abuse the OTP service by requesting excessive codes<br/>
        • Do not attempt to circumvent authentication measures<br/>
        • Do not use the service for illegal or fraudulent activities
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. WhatsApp and Meta Integration</h2>
      <p className="text-gray-600 mb-6">
        • OTP delivery depends on Meta's WhatsApp Business API<br/>
        • We are not responsible for WhatsApp service interruptions<br/>
        • Users must comply with WhatsApp's terms of service<br/>
        • OTP codes are typically delivered within seconds
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
      <p className="text-gray-600 mb-6">
        • Banor Capital Limited, including its product Clopad Technologies, retains all rights
        to its platforms and services<br/>
        • Users may not reproduce, distribute, or reverse engineer our authentication systems<br/>
        • WhatsApp and Meta trademarks belong to their respective owners
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
      <p className="text-gray-600 mb-6">
        • We are not liable for WhatsApp/Meta service interruptions<br/>
        • Not responsible for delays in OTP delivery due to carrier issues<br/>
        • Our liability is limited to the maximum extent permitted by law<br/>
        • We are not liable for indirect, consequential, or punitive damages
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-gray-800 font-medium mb-2">Banor Capital Limited</p>
        <p className="text-gray-600">Including its product: <strong>Clopad Technologies</strong></p>
        <p className="text-gray-600">Email: wst06@banorcapital.com</p>
        <p className="text-gray-600">Official Website: banorcapital.com</p>
      </div>
    </div>
  </div>
);

export default TermsOfService;
