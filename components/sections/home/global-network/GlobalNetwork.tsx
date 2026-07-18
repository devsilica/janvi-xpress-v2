import { Container } from "@/components/ui";
import CountryCard from "./CountryCard";
import { countries } from "./data";
import HeroScene from "@/components/three/HeroScene";

export default function GlobalNetwork() {
  return (
    <section className="bg-[#F8FAF9] py-28">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#0E9AA7]/10 px-4 py-2 text-sm font-semibold text-[#0E9AA7]">
            GLOBAL NETWORK
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Connecting Nigeria To The World
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Through our trusted international freight network, Janvi Xpress
            delivers reliable air and sea cargo services across major global
            trade routes.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-10 lg:grid-cols-3">
          {/* Left Countries */}
          <div className="space-y-6">
            {countries.slice(0, 3).map((country) => (
              <CountryCard key={country.country} {...country} />
            ))}
          </div>

          {/* Globe Placeholder */}
          <div className="flex justify-center">
          <div className="flex justify-center">
  <div className="h-[550px] w-[550px]">
    <HeroScene />
  </div>
</div>
          </div>

          {/* Right Countries */}
          <div className="space-y-6">
            {countries.slice(3).map((country) => (
              <CountryCard key={country.country} {...country} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}