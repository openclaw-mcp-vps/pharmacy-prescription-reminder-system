import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RxRemind – Smart Prescription Refill Reminders",
  description: "Tracks prescription schedules, sends timely refill reminders, and alerts for drug interactions or missed doses. Built for independent pharmacies and elderly care facilities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e945d519-f574-4e80-8b12-42e6a7cf3baf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
