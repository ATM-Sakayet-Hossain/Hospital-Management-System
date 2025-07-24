import React from "react";

const DiagnosisInvoice = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Diagnosis Invoice</h2>

        {/* Example Invoice Table */}
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border">Test Name</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 border">Blood Test</td>
              <td className="p-2 border">1</td>
              <td className="p-2 border">500৳</td>
              <td className="p-2 border">500৳</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 border">X-Ray</td>
              <td className="p-2 border">1</td>
              <td className="p-2 border">700৳</td>
              <td className="p-2 border">700৳</td>
            </tr>
          </tbody>
        </table>

        {/* Total Section */}
        <div className="mt-4 text-right">
          <p className="text-lg font-semibold">Grand Total: 1200৳</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisInvoice;
