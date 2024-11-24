"use client";

export default function Table({}) {
  return (
    <table className="min-w-full rounded-lg">
      <thead>
        <tr className="border-gray border-[1px] bg-white text-black font-thin uppercase text-sm shadow-md rounded-lg">
          <th className="py-1 px-6 text-left">Stock</th>
          <th className="py-1 px-6 text-left">Purchase</th>
          <th className="py-1 px-6 text-left">Current</th>
          <th className="py-1 px-6 text-left">Quantity</th>
          <th className="py-1 px-6 text-left">P/L %</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm">
        {portfolioData.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6 text-left">{item.stock}</td>
            <td className="py-3 px-6">{`$${item.purchase}`}</td>
            <td className="py-3 px-6">{`$${item.current}`}</td>
            <td className="py-3 px-6">{item.quantity}</td>
            <td
              className={`py-3 px-6 font-semibold ${
                item.pl >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.pl.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
