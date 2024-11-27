import Habot_logo_white from "assets/images/habot-logo-removebg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const HabotFooter = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto p-6 md:p-10 flex flex-auto w-full">
        <div className="border-y border-accent-text w-full flex flex-col md:flex-row p-6 md:p-10 md:items-center">
          <div className="flex flex-col">
            <div className="h-10 w-52">
              <img
                src={Habot_logo_white}
                alt="habot_logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="font-light">© R Singhania</div>
          </div>
          <div className="w-full h-full md:px-12 mt-6 md:mt-0 flex flex-col lg:flex-row lg:items-center">
            <div className="grid gird-cols-1 sm:grid-cols-3 w-full">
              <div className="flex flex-col">
                <h1 className="font-bold">Company</h1>
                <button className="mt-2 flex max-w-max font-light">
                  About
                </button>
                <button className="flex max-w-max font-light">FAQ</button>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">Terms</h1>
                <button className="mt-2 flex max-w-max font-light">
                  Data Privacy
                </button>
                <button className="flex max-w-max font-light">Terms</button>
                <button className="flex max-w-max font-light">
                  Accessibility
                </button>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">Related</h1>
                <button className="mt-2 flex max-w-max font-light">
                  Find Buyer
                </button>
                <button className="flex max-w-max font-light">Feedback</button>
              </div>
            </div>
            <div className="flex space-x-8 mt-8 lg:mt-0 justify-between">
              <button className="h-10 w-10 border border-accent-text rounded-full flex items-center justify-center">
                <FaLinkedinIn size={24} />
              </button>
              <button className="h-10 w-10 border border-accent-text rounded-full flex items-center justify-center">
                <FaTwitter size={24} />
              </button>
              <button className="h-10 w-10 border border-accent-text rounded-full flex items-center justify-center">
                <FaFacebookF size={24} />
              </button>
              <button className="h-10 w-10 border border-accent-text rounded-full flex items-center justify-center">
                <FaInstagram size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabotFooter;
