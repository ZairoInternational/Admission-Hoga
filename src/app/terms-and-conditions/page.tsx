const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#6DAFF7] text-white px-4 md:px-0">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <img src="/owl.png" alt="Admission Hoga Logo" height={80} width={80} />
          <h1 className="text-2xl md:text-3xl font-bold">Admission Hoga</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-justify">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Terms and Conditions
          </h2>

          <div className="space-y-6 text-gray-600">
            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">1.</span>
              <p>
                We provide counseling, guidance, and admission assistance for various
                entrance exams and college admissions but do not guarantee admission, as
                final decisions rest with the respective institutions.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">2.</span>
              <p>
                Users must provide accurate and complete information during the counseling
                process. Any misrepresentation may result in termination of assistance.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">3.</span>
              <p>
                Some services may require consultation or processing fees, which will be
                communicated in advance. Fees are non-refundable unless explicitly stated
                in a written agreement.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">4.</span>
              <p>
                Admission Hoga does not charge any hidden or extra fees beyond what is
                agreed upon.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">5.</span>{" "}
              <p>
                While we strive to provide accurate and up-to-date information, college
                admission policies may change. Students are encouraged to verify details
                directly with the respective institutions.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">6.</span>
              <p>
                Personal data is handled securely and used only for counseling and
                admission-related purposes. We do not share your information with third
                parties without consent.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">7.</span>
              <p>
                Professional conduct is expected from students and parents while
                interacting with our counselors. Misbehavior, fraudulent activity, or
                misuse of services will lead to immediate termination of assistance.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">8.</span>
              <p>
                Admission Hoga is not liable for admission rejections, delays, or policy
                changes made by colleges or universities.
              </p>
            </div>

            <div className=" mb-3 text-neutral-600 flex gap-x-2">
              <span className=" text-[#6DAFF7] font-bold text-xl">9.</span>
              <p>
                We reserve the right to modify these terms and conditions at any time,
                with updates being published on our website. Continued use of our services
                after modifications implies acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Admission Hoga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
