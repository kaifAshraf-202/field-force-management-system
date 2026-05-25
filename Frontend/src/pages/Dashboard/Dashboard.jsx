import MainLayout from "../../layouts/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>

      <div>

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Total Tasks</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Completed Visits</h2>
            <p className="text-3xl font-bold mt-2">84</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Pending Tasks</h2>
            <p className="text-3xl font-bold mt-2">36</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">High Risk Visits</h2>
            <p className="text-3xl font-bold mt-2 text-red-500">
              8
            </p>
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Dashboard;