"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import DonationBanner from "@/components/donation/DonationBanner";
import SelectiveDonation from "@/components/donation/SelectiveDonation";
import DonationCards from "@/components/donation/donationCards";
import Payment from "@/components/donation/Payment";
import QRSection from "@/components/donation/QRSection";
function Page() {
  const router = useRouter();

  const handleDonateClick = () => {
    router.push("/donate/payment");
  };

  return (
    <Layout headerStyle={3} footerStyle={4}>
      <DonationBanner onDonateNowClick={handleDonateClick} />
      <SelectiveDonation onDonateNowClick={handleDonateClick} />
      <DonationCards onDonateNowClick={handleDonateClick} />
      <QRSection />
    </Layout>
  );
}

export default Page;
