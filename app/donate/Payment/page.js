"use client";

import React from "react";
import Payment from "@/components/donation/Payment";
import Layout from "@/components/layout/Layout";

export default function PaymentPage() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
      <Payment />
    </Layout>
  );
}
