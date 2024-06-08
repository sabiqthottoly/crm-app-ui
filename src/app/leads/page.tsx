// pages/index.js
import Table from "../componets/Table";
import Sidebar from "../componets/Sidebar";
import Header from "../componets/Header";
import Heading from "../componets/Heading";
import SummaryCards from "../componets/SummaryCards";
import ManageLeads from "../componets/ManageLeads";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow p-5" style={{ marginLeft: '256px' }}> {/* Ensure main content does not underlap sidebar */}
              <div className="flex justify-between items-center mb-4">
                <Heading title="Leads" />
                <ManageLeads />
              </div>
              <SummaryCards />
              <Table />
            </main>
          </div>
        </div>
      );
}
