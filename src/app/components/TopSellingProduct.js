const TopSellingProduct = () => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-1 md:col-span-2">
      <h2 className="text-lg font-semibold">Top Selling Product</h2>
      <div className="mt-4 flex items-center">
        <img src="/path/to/image.jpg" alt="Product" className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <p className="font-semibold">Denim Jacket with White Feathers</p>
          <p className="text-gray-500">Item sold out</p>
        </div>
      </div>
    </div>
  );
  