const HomePageSupplierSection = () => {
  return (
    <div className="bg-card">
      <div className="container mx-auto p-6 md:p-10">
        <div className="flex flex-col md:flex-row max-w-6xl items-center p-6 md:p-10">
          <div className="flex items-center font-semibold text-xl sm:text-3xl md:text-4xl">
            <div>Let Suppliers</div>
            <div className="ml-2 relative">
              <p>Find You</p>
              <span className="absolute h-1 bottom-0 bg-secondary inset-x-0"></span>
            </div>
          </div>
          <div className="md:ml-auto p-6 md:p-10">
            <button className="px-4 h-12 rounded-md bg-secondary text-white font-semibold tracking-wider">
              Get Verified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSupplierSection;
