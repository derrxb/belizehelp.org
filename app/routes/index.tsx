import HomeHero from "~/components/home-hero";
import HomeHowToGetSupport from "~/components/home-how-to-get-support";
import HomeHowToSupport from "~/components/home-how-to-support";
import HomeHowWeHelp from "~/components/home-how-we-help";
import HomeStats from "~/components/home-stats";
import Newsletter from "~/components/newsletter";

export default function Index() {
  return (
    <div className="flex flex-col px-8 md:px-20">
      <HomeHero />
      <HomeStats />
      <HomeHowWeHelp />
      <HomeHowToSupport />
      <HomeHowToGetSupport />
      <Newsletter />
    </div>
  );
}
