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
            <main className="flex-grow p-5" style={{ marginLeft: '200px', width: '100vh' }}> {/* Ensure main content does not underlap sidebar */}
              <div className="flex justify-between items-center mb-4">
                <Heading title="Leads" />
                <ManageLeads />
              </div>
              <SummaryCards />
              <div style={{ overflowX: 'auto' }}>
                <Table />
              </div>
            </main>
          </div>
        </div>
      );
}
