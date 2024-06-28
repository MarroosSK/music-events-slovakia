const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center  sm:justify-start">
            <>
              <h4 className="z-[3] text-[#156b2c] text-center  text-[2rem]  font-extrabold  m-0 ">
                <span className="text-[#31ff38] ">music</span> events
              </h4>
            </>
          </div>

          <p className="mt-4 text-center text-sm text-[#156b2c] lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
