// pages/index.js
import Table from "../componets/Table";
import Sidebar from "../componets/Sidebar";
import Header from "../componets/Header";
import SummaryCards from "../componets/SummaryCards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-grow">
      <Sidebar />
      <main className="flex-grow p-5" style={{ marginLeft: '256px' }}> {/* Ensure main content does not underlap sidebar */}
        <SummaryCards />
        <Table />
      </main>
    </div>
  </div>
  );
}
