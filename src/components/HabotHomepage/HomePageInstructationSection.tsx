import card1_svg from "assets/icons/cardItem1.svg";
import card2_svg from "assets/icons/cardItem2.svg";
import card3_svg from "assets/icons/cardItem3.svg";
import card4_svg from "assets/icons/cardItem4.svg";
import card5_svg from "assets/icons/cardItem5.svg";
import card6_svg from "assets/icons/cardItem6.svg";

const HomePageInstructions = () => {
  return (
    <div className="flex flex-col container mx-auto p-6 md:p-10">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="font-bold text-5xl">How it works?</div>
        <p className="font-normal max-w-3xl mt-4">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 md:p-10">
        <InstructionCards />
      </div>
    </div>
  );
};

// Instruction cards
const InstructionCards = () => {
  const instructions = [
    {
      icon: card1_svg,
      text: "Select Your Role and Sign Up",
      bgColor: "bg-card",
    },
    {
      icon: card2_svg,
      text: "Buyers Post Your Requirements",
      bgColor: "bg-white",
    },
    {
      icon: card3_svg,
      text: "Review, Select, and Contact the Best Suppliers",
      bgColor: "bg-card",
    },
    {
      icon: card4_svg,
      text: "Suppliers Complete your profile and get notified for opportunities",
      bgColor: "bg-white",
    },
    {
      icon: card5_svg,
      text: "Contact Buyers and Share your Quote for the service",
      bgColor: "bg-card",
    },
    {
      icon: card6_svg,
      text: "Both Parties can Connect and Make Business, Leave Feedback",
      bgColor: "bg-white",
    },
  ];

  return (
    <>
      {instructions.map((instruction, index) => (
        <div
          key={index}
          className={`h-64 ${instruction.bgColor} flex items-center flex-col  text-center`}
        >
          <div className="relative top-16">
            <div className="flex items-center justify-center">
              <img
                src={instruction.icon}
                alt="card_icon"
                className="h-16 w-16"
              />
            </div>
            <p className="mt-2 max-w-[200px] font-medium">{instruction.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePageInstructions;
