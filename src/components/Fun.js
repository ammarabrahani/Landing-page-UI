import { Link } from "react-router-dom";
import Mobile from "../assets/images/mobile.png";
const Fun = () => {
  return (
    <div className="pl-50">
      <div className="flex items-center space-x-9">
        <div className="w-6/12">
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-secondaryColor">Rare Find</span> Then Fund
            </h1>
            <p className="text-sm py-2 leading-6">
              The only crowdfunding platform that pays YOU to start your <br />
              fundraising journey! For a limited time only kickstart your <br />
              campaign with 10% completely free to help you reach your target!{" "}
              <br />
            </p>
          </div>
          <div className="signup py-8">
            <Link to="/">
              <button className="global_btn w-48 h-12 text-white">
                Sign UP it's Free
              </button>
            </Link>

            <span className="px-6 text-secondaryColor">OR</span>
            <Link to="/">
              <button className="global_white w-48 h-12 text-white">
                Start a Project!
              </button>
            </Link>
          </div>
        </div>
        <div className="w-6/12">
          <div>
            <img className="w-full h-full" src={Mobile} alt="Mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fun;
