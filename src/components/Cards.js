import { AiOutlineArrowRight } from "react-icons/ai";
import cardImg from "../assets/images/box_1.png";
const Cards = () => {
  return (
    <>
      <div className="rect">
        <div className="pl-50">
          <div className="flex py-20 justify-between space-x-5">
            <div className="w-4/12">
              <div className="box p-3">
                <div className="">
                  <img className="w-full h-full" src={cardImg} alt="" />
                  <h5 className="text-headColor text-xl font-[500] pt-4">
                    Free And More
                  </h5>
                  <p className="text-sm pr-5 py-2">
                    It’s not only free to fundraise — but we’ll also help you
                    meet your goal! We’re currently offering campaigns 10%
                    toward their fundraising target. YES, we’re paying you to
                    launch your fundraising campaign n Rare FND!
                  </p>
                </div>
                <div className="absolute right-7 bottom-9 cursor-pointer arrow"></div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="box p-3">
                <div className="">
                  <img className="w-full h-full" src={cardImg} alt="" />
                  <h5 className="text-headColor text-xl font-[500] pt-4">
                    Free And More
                  </h5>
                  <p className="text-sm pr-5 py-2">
                    It’s not only free to fundraise — but we’ll also help you
                    meet your goal! We’re currently offering campaigns 10%
                    toward their fundraising target. YES, we’re paying you to
                    launch your fundraising campaign n Rare FND!
                  </p>
                </div>
                <div className="absolute right-7 bottom-9 cursor-pointer arrow"></div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="box p-3">
                <div className="">
                  <img className="w-full h-full" src={cardImg} alt="" />
                  <h5 className="text-headColor text-xl font-[500] pt-4">
                    Free And More
                  </h5>
                  <p className="text-sm pr-5 py-2">
                    It’s not only free to fundraise — but we’ll also help you
                    meet your goal! We’re currently offering campaigns 10%
                    toward their fundraising target. YES, we’re paying you to
                    launch your fundraising campaign n Rare FND!
                  </p>
                </div>
                <div className="absolute right-7 bottom-9 cursor-pointer arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
