import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import DashboardWidgets from "@/components/Admin/DashboardWidgets";
import { useIsAdmin } from "@/utils/useAdmin";
import Error from "@/components/Error";
import { getAllInvoices } from "@/actions/invoices/getAllInvoices";

const Page = async () => {
  const isAdmin = await useIsAdmin();
  const data = await getAllInvoices();
  
  return (
    <>
      {isAdmin ? (
        <>
          <div>
            <Heading
              title="PROMPT HUB - Admin"
              description="PROMPTHUB is a place to buy and sell AI images prompts"
              keywords="ai,images,prompt., Prompt"
            />
            <div className="flex min-h-screen">
              <div className="2xl:w-[16%] w-1/5">
                <Sidebar activeItem="Dashboard" />
              </div>
              <div className="2xl:w-[84%] w-[80%]">
                <DashboardWidgets data={data} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Page;
