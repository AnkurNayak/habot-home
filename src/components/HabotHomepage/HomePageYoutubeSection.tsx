import { motion } from "framer-motion";
import { useState } from "react";
import { HiMiniCheckCircle } from "react-icons/hi2";
const HomePageYoutubeSection = () => {
  return (
    <div className="p-6 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary p-6 sm:p-10 text-white">
        <div>
          <iframe
            className="h-80 w-full"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=6qGR1vwi-WN8Y3_R"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <BuyerSection />
        </div>
      </div>
    </div>
  );
};

// Buyer section
interface TabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ active, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-12 font-bold items-center justify-center cursor-pointer flex ${
        active && "text-secondary border-b-secondary border-b-2"
      }`}
    >
      {children}
    </div>
  );
};

// tabContent component props
interface TabContentProps {
  active: boolean;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ active, children }) => {
  return <div>{active ? children : null}</div>;
};

interface TabItem {
  title: string;
  content: string[];
}

const BuyerSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: TabItem[] = [
    {
      title: "Tab One",
      content: [
        "Post your requirements.",
        "Sit back for multiple suppliers to contact you.",
        "Choose among the suppliers based on the ratings and reviews.",
      ],
    },
    {
      title: "Tab Two",
      content: [
        "Lorem ipsum consectetur",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, explicabo.",
      ],
    },
  ];

  return (
    <div className="flex flex-col md:px-8">
      <div className="flex w-full">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </Tab>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tabs.map((tab, index) => (
          <TabContent key={index} active={activeTab === index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {tab.content.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.3 }}
                  className="py-2 flex space-x-2 items-start"
                >
                  <HiMiniCheckCircle
                    size={20}
                    className="text-[#0AA06E] min-h-5 min-w-5"
                  />

                  <div className="flex items-center leading-tight">{point}</div>
                </motion.div>
              ))}
            </motion.div>
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default HomePageYoutubeSection;
