import React from "react";

const Page = () => {
  return (
    <div className="font-primary text-sm bg-grey-800 text-white text-center py-6 px-6 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden w-16 mb-6">
          <img src="/avatar-jessica.jpeg" alt="Jessica" />
        </div>
        <h1 className="text-2xl font-semibold mb-1">Jessica Randall</h1>
        <h2 className="text-green text-">London, United Kingdom</h2>
        <p className="py-4 font-normal opacity-80">
          "Front-end developer and avid reader."
        </p>
        <div className="w-full flex flex-col gap-4">
          <button className="bg-grey-700 w-72 rounded-md py-3 font-semibold hover:text-grey-800 hover:bg-green delay-30 transition ease-in">
            GitHub
          </button>
          <button className="bg-grey-700 w-72 rounded-md py-3 font-semibold hover:text-grey-800 hover:bg-green delay-30 transition ease-in">
            Frontend Mentor
          </button>
          <button className="bg-grey-700 w-72 rounded-md py-3 font-semibold hover:text-grey-800 hover:bg-green delay-30 transition ease-in">
            LinkedIn
          </button>
          <button className="bg-grey-700 w-72 rounded-md py-3 font-semibold hover:text-grey-800 hover:bg-green delay-30 transition ease-in">
            Twitter
          </button>
          <button className="bg-grey-700 w-72 rounded-md py-3 font-semibold hover:text-grey-800 hover:bg-green delay-30 transition ease-in">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
