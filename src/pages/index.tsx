import { NextPage } from "next";
import { postDiscord } from "../api/postDiscord";

const IndexPage: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-80 h-80 flex flex-col justify-center items-center">
        <h1 className="font-semibold mx-4 my-2">
          つよつよポップアップ建設予定地!!
        </h1>
        <div
          className="bg-blue-500 hover:bg-blue-700 font-semibold text-white px-4 py-2 rounded hover:cursor-pointer duration-100"
          onClick={postDiscord}
        >
          Discordに投稿
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
