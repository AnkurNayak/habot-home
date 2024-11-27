import { motion } from "framer-motion";

const LoginButton = () => {
  return (
    <div className="relative">
      <motion.button className="border-2 border-accent rounded-md text-base h-10 flex items-center justify-center px-4 text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300 min-w-max">
        Login / Sign Up
      </motion.button>
    </div>
  );
};

export default LoginButton;
