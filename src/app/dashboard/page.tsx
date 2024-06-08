// pages/index.js
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";

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
