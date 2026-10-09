type ContactCTAProps = {
  href?: string;
};

export default function ContactCTA({ href = "#contact" }: ContactCTAProps) {
  return (
    <section className="w-full bg-white py-8">
      <div className="info-container">
        <div className="flex flex-col items-center justify-between gap-5 rounded-[10px] bg-[#D90D32] px-5 py-7 text-center sm:px-8 md:flex-row md:gap-8 md:px-10 lg:px-8">
          <h2 className="max-w-[820px] text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[30px] lg:leading-[1.2]">
            আপনার এলাকার যেকোনো সমস্যা, অভিযোগ বা পরামর্শ সরাসরি প্রার্থী ও তার
            টিমকে জানাতে চান?
          </h2>

          <a
            href={href}
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-white px-6 py-2 text-base font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#D90D32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#D90D32] sm:text-lg"
          >
            এখনই এমপিকে লিখুন
          </a>
        </div>
      </div>
    </section>
  );
}
