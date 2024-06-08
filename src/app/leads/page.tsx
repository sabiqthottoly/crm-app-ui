// pages/index.js
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Heading from "../components/Heading";
import SummaryCards from "../components/SummaryCards";
import ManageLeads from "../components/ManageLeads";

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
