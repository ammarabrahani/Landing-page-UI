import Dollar from "../assets/images/dollar.png";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Links = [
  {
    item: "Home",
    redirect: "home",
  },
  {
    item: "Art",
    redirect: "art",
  },
  {
    item: "Design & Tech",
    redirect: "design",
  },
  {
    item: "Films",
    redirect: "film",
  },
  {
    item: "Food & Craft",
    redirect: "food",
  },
  {
    item: "Gamer",
    redirect: "gamer",
  },
  {
    item: "Music",
    redirect: "music",
  },
];

const Header = () => {
  const [activeState, setActiveState] = useState("home");
  const handleLinks = (redirect) => {
    setActiveState(redirect);
  };

  return (
    <>
      <div className="top_bar py-4">
        <div className="pl-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Dollar} alt="Dollar" />
              <span className="pl-2 text-white text-sm">
                Donate now and benefit from Give2Earn at Rare FND
              </span>
            </div>
            <div className="space-x-2 text-white top_right_btn">
              <button className="rounded-full border text-xs hover:bg-white hover:border-white hover:text-secondaryColor ease-in-out duration-300 w-20 h-9">
                Login
              </button>
              <button className="rounded-full border text-xs w-20 h-9 hover:bg-white hover:border-white hover:text-secondaryColor ease-in-out duration-300">
                Sign UP
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className="py-4 pb-20">
        <div className="pl-50">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16">
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <ul className="flex">
                {Links.map((link, i) => {
                  return (
                    <li key={i} className="px-5">
                      <Link
                        onClick={() => handleLinks(link.redirect)}
                        to={link.redirect}
                        className={`text-sm text-links ${
                          link.redirect === activeState ? "active_color" : ""
                        }`}
                      >
                        {link.item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <button className="global_btn tex-sm w-40 h-12 text-sm text-white">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
