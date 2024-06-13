import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Banner from "../../assets/website/board.png";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={bannerImg}
      >
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">
              Read Books at Your Fingertips
            </h1>
            <div className="flex flex-wrap justify-center items-center mt-8"> {/* Added mt-8 for margin top */}
  <a href="https://nush-recommends.streamlit.app/" className="mr-4"> {/* Added mr-4 for margin right */}
    <img
      src={PlayStoreImg}
      alt="Play store"
      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
    />
  </a>
  
  <a href="https://nushreads.vercel.app/book">
    <img
      src={AppStoreImg}
      alt="nushReads"
      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
    />
  </a>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
