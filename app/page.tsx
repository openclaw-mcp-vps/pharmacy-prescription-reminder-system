export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Tracking
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Smart prescription refill<br />
          <span className="text-[#58a6ff]">reminders for patients</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          RxRemind tracks prescription schedules, sends timely refill reminders via SMS &amp; email, and alerts staff to drug interactions or missed doses — built for independent pharmacies and elderly care facilities.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Get Started for $13/mo
        </a>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💊</div>
            <h3 className="text-white font-semibold mb-1">Prescription Tracking</h3>
            <p className="text-[#8b949e] text-sm">Manage all patient prescriptions in one dashboard with refill schedules and dosage details.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="text-white font-semibold mb-1">Automated Reminders</h3>
            <p className="text-[#8b949e] text-sm">Send SMS and email reminders automatically before prescriptions run out or doses are missed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="text-white font-semibold mb-1">Interaction Alerts</h3>
            <p className="text-[#8b949e] text-sm">Real-time drug interaction checks flag potential conflicts before they become a problem.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$13<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to run a modern pharmacy reminder system</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited patients & prescriptions",
              "SMS + email reminders",
              "Drug interaction alerts",
              "Missed dose notifications",
              "Pharmacy staff dashboard",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does RxRemind send reminders to patients?</h3>
            <p className="text-[#8b949e] text-sm">RxRemind integrates with SMS and email services to automatically notify patients when their prescriptions are due for refill or when a dose has been missed, based on the schedule you configure.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can it detect drug interactions?</h3>
            <p className="text-[#8b949e] text-sm">Yes. RxRemind checks prescriptions against a drug interaction database and immediately alerts pharmacy staff if a potential conflict is detected, helping prevent adverse events.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is RxRemind suitable for elderly care facilities?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. RxRemind is designed with elderly care in mind — caregivers can manage multiple patients, receive missed-dose alerts, and ensure residents never run out of critical medications.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} RxRemind. All rights reserved.
      </footer>
    </main>
  );
}
