import CtaButton from "./CtaButton";

export default function CtaFooter() {
  return (
    <>
      <div className="text-center pt-16 sm:pt-20 md:pt-32 lg:pt-40" id="cta">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mx-auto leading-tight pb-4">
          Start Your Solar Journey Today
        </h1>
        <p className="text-white text-xl lg:text-3xl max-w-3xl mb-8 mx-auto">
          The opportunity for Solar is Now. Get you Proposal and a Personalized Clean Energy Consultation Plan and join
          Thousands Getting Started with Solar and Secure Your Own Solar Power Plant, Today!
        </p>
        <CtaButton />
      </div>
    </>
  );
}
