import React from 'react';

const PrivacyPolicy = () => (
    <div className="max-w-4xl mx-auto prose prose-lg">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-2 mt-0">Privacy Policy</h1>
        <p className="text-blue-700 mb-0">Last Updated: July 2025</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-6">
          Proxima Investment Management Limited, operating as BanorCapital ("we," "our," or "us") operates banorcapital.com and uses Meta's Business API to provide secure authentication services via WhatsApp. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
        <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 Phone Numbers</h3>
        <p className="text-gray-600 mb-4">
          • We collect your phone number when you attempt to log in to our platform<br/>
          • Phone numbers are used solely for sending One-Time Password (OTP) verification codes via WhatsApp
        </p>

        <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Authentication Data</h3>
        <p className="text-gray-600 mb-4">
          • Login timestamps and IP addresses for security purposes<br/>
          • Device information for fraud prevention<br/>
          • OTP generation and verification logs
        </p>

        <h3 className="text-xl font-medium text-gray-700 mb-3">2.3 Meta/WhatsApp Integration Data</h3>
        <p className="text-gray-600 mb-6">
          • WhatsApp delivery status (delivered, read, failed)<br/>
          • Message interaction data as provided by Meta's Business API<br/>
          • No WhatsApp chat history or personal messages are accessed
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
        <h3 className="text-xl font-medium text-gray-700 mb-3">3.1 Primary Purposes</h3>
        <p className="text-gray-600 mb-4">
          • <strong>Authentication:</strong> Send OTP codes via WhatsApp for secure login<br/>
          • <strong>Security:</strong> Verify your identity and prevent unauthorized access<br/>
          • <strong>Service Delivery:</strong> Ensure reliable message delivery through Meta's infrastructure
        </p>

        <h3 className="text-xl font-medium text-gray-700 mb-3">3.2 We Do NOT Use Your Data For</h3>
        <p className="text-gray-600 mb-6">
          • Marketing communications (unless separately consented)<br/>
          • Selling to third parties<br/>
          • Profiling or behavioral analysis<br/>
          • Any purpose unrelated to authentication
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing and Third-Party Services</h2>
        <h3 className="text-xl font-medium text-gray-700 mb-3">4.1 Meta Platforms (WhatsApp Business API)</h3>
        <p className="text-gray-600 mb-6">
          • Your phone number is shared with Meta to deliver OTP messages<br/>
          • Message content (OTP codes) is transmitted through Meta's secure infrastructure<br/>
          • Meta may process this data according to their own privacy policies<br/>
          • We comply with Meta's Business API terms and data handling requirements
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Storage and Security</h2>
        <h3 className="text-xl font-medium text-gray-700 mb-3">5.1 Storage Duration</h3>
        <p className="text-gray-600 mb-4">
          • Phone numbers: Retained only as long as your account is active<br/>
          • OTP codes: Automatically deleted within 10 minutes of generation<br/>
          • Authentication logs: Retained for 90 days for security purposes
        </p>

        <h3 className="text-xl font-medium text-gray-700 mb-6">5.2 Security Measures</h3>
        <p className="text-gray-600 mb-6">
          • All data is encrypted in transit and at rest<br/>
          • Access is restricted to authorized personnel only<br/>
          • Regular security audits and monitoring<br/>
          • Compliance with industry-standard security practices
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights and Choices</h2>
        <p className="text-gray-600 mb-6">
          • Request access to your personal data<br/>
          • Request deletion of your phone number and associated data<br/>
          • Opt-out of WhatsApp OTP delivery (though this will prevent login)
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-800 font-medium mb-2">Proxima Investment Management Limited (operating as BanorCapital)</p>
          <p className="text-gray-600">Email: wst06@banorcapital.com</p>
          <p className="text-gray-600">Website: banorcapital.com</p>
        </div>
      </div>
    </div>
  );

  export default PrivacyPolicy;