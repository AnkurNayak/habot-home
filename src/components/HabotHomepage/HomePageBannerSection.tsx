import Banner_img from "assets/images/banner.png";
import HomePageSearchBox from "components/HabotHomepage/HomePageSearchBox";
import { HiBriefcase, HiMapPin } from "react-icons/hi2";

const HomePageBannerSection = () => {
  return (
    <div
      className="relative w-full h-[60vh] sm:h-screen xl:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner_img})` }}
    >
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <div className="text-4xl md:text-8xl font-bold leading-10">
          Are You a Supplier?
        </div>
        <div className="text-3xl md:text-7xl font-normal">
          Explore Matching Opportunities.
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 mt-8 items-center">
          <HomePageSearchBox
            icon={<HiBriefcase size={24} className="text-secondary" />}
            placeholder="Search your required service here"
          />
          <HomePageSearchBox
            icon={<HiMapPin size={24} className="text-secondary" />}
            placeholder="Search your desired location here"
          />
          <button className="h-12 px-6 flex items-center justify-center bg-accent text-white rounded-md font-medium text-base">
            Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row mt-4 gap-2">
          <p className="font-bold">Are you a buyer ?</p>
          <p className="underline cursor-pointer">
            Click here if you are looking to post a requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageBannerSection;
