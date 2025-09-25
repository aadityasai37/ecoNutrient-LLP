export default function CancellationPolicyPage() {
  return (
    <main className="container py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-6">Cancellation Policy – Enteconutri Foods and Beverages LLP</h1>

      <div className="prose prose-lg max-w-none">
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Orders can be cancelled within 12 hours of placing the order.</li>
          <li>If the product has already been shipped, cancellations will not be possible.</li>
          <li>For valid cancellations made before shipment, a full refund will be issued to the original payment method.</li>
          <li>For Cash on Delivery (COD) orders, customers may need to provide additional bank/payment details to complete the refund.</li>
        </ul>
      </div>
    </main>
  );
}
