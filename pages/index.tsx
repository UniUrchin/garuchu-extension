import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold mx-4 my-2">
        つよつよポップアップ建設予定地!!
      </h1>
      <div className="bg-blue-500 hover:bg-blue-700 font-semibold text-white px-4 py-2 rounded hover:cursor-pointer duration-100">
        Discordに投稿
      </div>
    </div>
  );
};

export default IndexPage;
