import React from "react";

interface HomePageSearchBoxProps {
  icon: React.ReactNode;
  placeholder: string;
}

const HomePageSearchBox: React.FC<HomePageSearchBoxProps> = ({
  icon,
  placeholder,
}) => {
  return (
    <div className="w-96 h-14 bg-white flex items-center rounded-md text-secondary-text px-4 space-x-2">
      <div>{icon}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none placeholder:text-accent-text"
      />
    </div>
  );
};

export default HomePageSearchBox;
