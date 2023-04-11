import Bulp from "../assets/images/bulp.png";
const Fund = () => {
  return (
    <div className="fund my-20">
      <div className="pl-50">
        <div className="py-12 flex items-center justify-between space-x-9">
          <div className="w-6/12 text-white">
            <h2 className="text-6xl py-4 font-semibold">
              Fundraising solution
            </h2>
            <p className="text-sm py-2 leading-6">
              Crowdfunding with the speed and flexibility of crypto! We’re the
              first and only platform to offer a cryptocurrency based
              fundraising program. Contribution rewards can be delivered in
              minutes, not months using our revolutionary NFT fractionalization
              and steganography technology – a first in the cryptocurrency and
              crowdfunding space. Some of your campaign contributors not crypto
              – savvy? No problem! We offer fiat based payments as well using
              credit and debit cards. We’re a true end to end crowdfunding
              solution!
            </p>
            <button className="global_white w-48 h-10 my-3">
              Start Fundraising
            </button>
          </div>
          <div className="w-6/12 text-white">
            <img className="w-full h-full" src={Bulp} alt="Bulp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fund;
