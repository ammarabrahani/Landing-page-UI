import { Link } from "react-router-dom";
import leftlayer from "../assets/images/leftlayer.png";
import rightlayer from "../assets/images/rightlayer.png";

const Partnership = () => {
  return (
    <>
      <div className="pl-50">
        <div className="flex items-center">
          <div className="w-6/12">
            <img src={leftlayer} alt="layer" />
          </div>
          <div className="w-6/12">
            <div className="pl-8">
              <h6 className="text-4xl text-secondaryColor py-2">
                Key Partnerships
              </h6>
              <p className="text-sm py-2 leading-6">
                Key partnerships to be announced with some of the leading <br />{" "}
                names in the industry across the charity space. Stay tuned to{" "}
                <br />
                our socials as some of the biggest partnerships in the <br />
                crowdfunding space are to be announced, and you have the <br />{" "}
                chance to get involved too!
              </p>
              <Link to="/">
                <button className="global_btn text-white text-sm w-40 h-10 my-5">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-6/12">
            <div className="pl-8">
              <h6 className="text-4xl text-secondaryColor py-2 leading-[3rem]">
                The Only Crowdfunding <br /> Platform That Pays You <br /> To
                Crowdfund
              </h6>
              <p className="text-sm py-2 leading-6">
                Start crowdfunding with Rare Fnd today and we will give you{" "}
                <br /> 10% towards your crowdfunding target! Not only that but{" "}
                <br />
                reach your target quicker with 240% APY on all contributions.
              </p>
              <Link to="/">
                <button className="global_btn text-white text-sm w-40 h-10 my-5">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-6/12">
            <img src={rightlayer} alt="layer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
