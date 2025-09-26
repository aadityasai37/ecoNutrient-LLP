"use client";
import { Suspense } from "react";
import PaymentResultForm from "./PaymentResultForm";

export default function PaymentResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentResultForm />
    </Suspense>
  );
}
