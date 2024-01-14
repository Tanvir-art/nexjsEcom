
const Footer = () => {
  return (
    <>
      <div className="hidden md:hidden lg:block">
        <div className="flex justify-center  gap-6 bg-[#fff] py-10">
          <div className="flex flex-col gap-4">
            <img width={100} src="image/logo.svg" alt="logo" />
            <p className="text-[#F95706]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
              Rem eaque suscipit nemo quaerat molestiae ut rerum <br />{" "}
              blanditiis sed! Aut, et.
            </p>

            <h2 className="text-xl font-bold">Find Us</h2>
            <div className="text-[#F95706]">
              <p>Address: Khulna, Bangladesh</p>
              <p>Phone: +88019000000</p>
              <p>Email: yourmail@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">UseFul Links</h2>

            <ul className="flex flex-col gap-3 text-[#F95706]">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Buy a New</a>
              </li>
              <li>
                <a href="">Returns & Refunds</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
            <div className="flex gap-4">
              <img width={50} src="image/bkas.svg" alt="" />
              <img width={50} src="image/nogod.svg" alt="" />
              <img width={50} src="image/visa.svg" alt="" />
            </div>

            <div className="flex gap-4 py-6">
              <img width={50} src="image/master.svg" alt="" />
              <img width={50} src="image/rocket.svg" alt="" />
              <img width={50} src="image/express.svg" alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Get Us</h2>
            <div className="flex gap-3 border-[#F95706] border-[1px] h-14 px-5 rounded-2xl items-center mb-3">
              <img src="image/google.svg" alt="google play" />
              <div className="text-sm">
                <p>Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>

            <div className="flex gap-3 border-[#F95706] border-[1px] h-14 px-5 rounded-2xl items-center">
              <img src="image/apple.svg" alt="google play" />
              <div className="text-sm">
                <p>Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
