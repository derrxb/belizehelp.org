import HomeHero from "~/components/home-hero";
import HomeHowWeHelp from "~/components/home-how-we-help";
import HomeStats from "~/components/home-stats";
import Newsletter from "~/components/newsletter";

export default function Index() {
  return (
    <div className="px-20">
      <HomeHero />
      <HomeStats />
      <HomeHowWeHelp />
      <Newsletter />
    </div>
  );
}
