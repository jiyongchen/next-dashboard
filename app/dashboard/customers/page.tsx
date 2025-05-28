'use client';

export default function DashboardCustomersLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Customers</h1>
            <button
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => {
                // TODO: Implement customer creation logic
                console.log('Create customer clicked');
              }}
            >
              Create Customer
            </button>
          </div>
          <div className="mt-4">
            {/* Customer list will go here */}
          </div>
        </div>
      </div>
    </div>  
  );
}