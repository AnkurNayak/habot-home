import { HiArrowLongRight } from "react-icons/hi2";

interface LocationBoxProps {
  location: string;
}

const locations = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah & Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain",
];

const HomepageReadySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">
      <div className="flex flex-col">
        <div className="text-5xl font-bold">Ready to dive into HABOT?</div>
        <p className="my-6 font-light text-primary-text">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="h-12 px-4 font-medium bg-accent flex items-center text-white rounded-md sm:w-1/2">
          <span className="flex justify-center w-full">Sign up Today !</span>
          <HiArrowLongRight size={24} className="ml-auto" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 h-fit md:mt-10">
        {locations.map((location) => (
          <LocationBox key={location} location={location} />
        ))}
      </div>
    </div>
  );
};

// section box
const LocationBox = ({ location }: LocationBoxProps) => {
  return (
    <button className="border-2 border-secondary h-12 flex items-center justify-center rounded-md hover:bg-secondary hover:text-white transition-all duration-300">
      {location}
    </button>
  );
};

export default HomepageReadySection;
