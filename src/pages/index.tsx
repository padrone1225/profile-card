import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-dark-cyan bg-[url('/images/bg-pattern-top.svg'),url('/images/bg-pattern-bottom.svg')] bg-no-repeat bg-[length:auto] bg-[position:-30rem_-48rem,69rem_38rem]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[370px] bg-white rounded-2xl">
        <div className="relative">
          <div className="w-full h-[280px] border-b-2 border-dark-gray">
            <div className="bg-[url('/images/bg-pattern-card.svg')] bg-no-repeat rounded-t-2xl h-[170px]"></div>
            <div className="text-center">
              <h1 className="text-[18px] text-black mt-10 font-bold">
                Victor Crest{" "}
                <span className="text-dark-gray font-normal"> 26</span>
              </h1>
              <h1 className="text-dark-gray font-normal text-[18px]">London</h1>
            </div>
          </div>
          <div className="absolute rounded-full bg-[url('/images/image-victor.jpg')] h-[102px] w-[102px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-white"></div>
        </div>
        <div className="grid grid-cols-3 mt-7">
          <div className="text-center">
            <h1 className="text-[18px] text-black font-bold">80K</h1>
            <h2 className="text-[14px] text-dark-gray font-normal">
              Followers
            </h2>
          </div>
          <div className="text-center">
            <h1 className="text-[18px] text-black font-bold">803K</h1>
            <h2 className="text-[14px] text-dark-gray font-normal">Likes</h2>
          </div>
          <div className="text-center">
            <h1 className="text-[18px] text-black font-bold">1.4K</h1>
            <h2 className="text-[14px] text-dark-gray font-normal">Photos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
