import React, { FC } from "react";
import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllShops from "@/components/Admin/AllShops";
import { getAllShops } from "@/actions/shops/getAllShops";

interface Props {}

const Page: FC<Props> = async (props) => {
const shopsData = await getAllShops();
  return (
    <div>
      <Heading
       title="PROMPT HUB - Admin"
       description="PROMPTHUB is a place to buy and sell AI images prompts"
       keywords="ai,images,prompt., Prompt"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="Shops" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllShops shopsData={shopsData} />
        </div>
      </div>
    </div>
  );
};

export default Page;
