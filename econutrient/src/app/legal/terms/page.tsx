export default function TermsOfServicePage() {
  return (
    <main className="container py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">Terms & Conditions – Enteconutri Foods and Beverages LLP</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          By accessing our website and purchasing our products, you agree to the following terms:
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Right to Update</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Enteconutri Foods and Beverages LLP reserves the right to update or modify prices, offers, or policies at any time without prior notice.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Product Information</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>All product descriptions are based on traditional knowledge. Our products have been tested for nutritional value in FSSAI-certified laboratories, and the nutritional details provided on our website are based on these results.</li>
          <li>We do not make medical or Ayurvedic claims.</li>
          <li>We are not responsible for any unrelated claims about similar products made elsewhere on the internet or by third parties.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Customer Responsibility</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Customers must provide accurate shipping details at the time of placing an order. Incorrect or incomplete addresses may result in delivery delays or failed deliveries, for which we will not be held responsible.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Unauthorized use, reproduction, or distribution of our content, images, or brand identity is strictly prohibited.</li>
        </ul>
      </div>
    </main>
  );
}
