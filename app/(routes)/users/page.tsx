import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllUsers from "@/components/Admin/AllUsers";
import { getAllUsers } from "@/actions/users/getAllUsers";

const Page = async () => {
  const users = await getAllUsers();
  
  return (
    <div>
      <Heading
        title="PROMPT HUB - Admin"
        description="PROMPTHUB is a place to buy and sell AI images prompts"
        keywords="ai,images,prompt., Prompt"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="Users" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllUsers users={users} />
        </div>
      </div>
    </div>
  );
};

export default Page;
