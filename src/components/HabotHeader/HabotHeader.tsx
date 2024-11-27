import HabotLogo from "components/HabotHeader/HabotLogo";
import LoginButton from "components/HabotHeader/LoginButton";
import NavLinks from "components/HabotHeader/NavLinks";

const HabotHeader = () => {
  return (
    <div className="relative z-49 flex h-20 w-full flex-0 items-center px-4 md:px-6">
      <div className="h-12 w-36 md:w-40">
        <HabotLogo />
      </div>
      <div className="ml-auto flex items-center space-x-0.5 pl-2 sm:space-x-2">
        <NavLinks />
        <div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default HabotHeader;
