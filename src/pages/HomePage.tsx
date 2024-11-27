import HomePageBannerSection from "components/HabotHomepage/HomePageBannerSection";
import HomePageInstructions from "components/HabotHomepage/HomePageInstructationSection";
import HomepageReadySection from "components/HabotHomepage/HomePageReadySection";
import HomePageSupplierSection from "components/HabotHomepage/HomePageSupplierSection";
import HomePageYoutubeSection from "components/HabotHomepage/HomePageYoutubeSection";

const HomePage = () => {
  return (
    <div className="flex min-w-0 flex-col w-full">
      <HomePageBannerSection />
      <div className="flex flex-col container mx-auto">
        <HomepageReadySection />
        <HomePageYoutubeSection />
      </div>
      <HomePageSupplierSection />
      <HomePageInstructions />
    </div>
  );
};

export default HomePage;
