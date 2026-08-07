import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeAiExposureCheck from "@/components/FreeAiExposureCheck";

export const metadata: Metadata = {
  title: "Free AI Exposure Check | Sriram Advisory",
  description: "Answer six quick questions to get a directional AI exposure score and practical next-step options matched to your role.",
};

export default function FreeAiExposureCheckPage() {
  return (
    <div className="font-body min-h-screen bg-white text-[#0a1628]">
      <Navbar />
      <main>
        <FreeAiExposureCheck />
      </main>
      <Footer />
    </div>
  );
}
