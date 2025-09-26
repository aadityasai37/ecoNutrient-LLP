export default function PrivacyPolicyPage() {
  return (
    <main className="container py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy – Enteconutri Foods and Beverages LLP</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          At Enteconutri Foods and Beverages LLP (ecoNutrient), we value and respect your privacy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          When you place an order on our website, we collect the following information for the purpose of processing your order and providing quality products and services to you:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Full Name</li>
          <li>Email</li>
          <li>Phone Number</li>
          <li>Address Line 1 & 2</li>
          <li>City</li>
          <li>State</li>
          <li>Pincode</li>
          <li>Country</li>
          <li>Order Notes</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Your details are used solely to process and deliver your order.</li>
          <li>We share your details with our trusted shipping partner Shiprocket, strictly for the purpose of product delivery.
            <ul className="list-circle pl-6 mt-2">
              <li>Please refer to Shiprocket&apos;s Privacy Policy for details on how they handle data.</li>
            </ul>
          </li>
          <li>Any breach of data that occurs within the scope of the courier partner will be the sole responsibility of the courier partner.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Payment Information</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Any payment-related details (such as credit/debit card numbers, net banking credentials, UPI IDs, account numbers, OTPs, or passwords) entered on the payment gateway page are not received, stored, or accessed by us.</li>
          <li>These details are processed exclusively by the third-party payment gateway provider, and their security and handling remain their sole responsibility.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Communication & Marketing</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>When you submit your email ID during checkout, you are automatically signed up to receive updates and promotional content from us.</li>
          <li>You may unsubscribe from promotional emails at any time.</li>
          <li>We do not sell or rent your data to any third party.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Data Security</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>We use secure storage with encryption and access control to protect your personal data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You may contact us at <a href="mailto:info@econutrient.in" className="text-blue-600 hover:underline">info@econutrient.in</a> if you:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Need clarification regarding your personal data, or</li>
          <li>Wish to have your personally identifiable information (PII) permanently deleted from our database.</li>
        </ul>

        <p className="text-gray-700">
          We are committed to ensuring a safe and secure shopping experience for you.
        </p>
      </div>
    </main>
  );
}
