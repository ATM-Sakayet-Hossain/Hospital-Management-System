import React from "react";

const DiagnosisDueCollDeptWise = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          Diagnosis Due Collection (Dept. Wise)
        </h2>

        {/* Department-wise Summary Table */}
        <table className="w-full text-sm border border-gray-200">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Total Patients</th>
              <th className="p-2 border">Total Due (৳)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 border">Radiology</td>
              <td className="p-2 border">15</td>
              <td className="p-2 border">3,000</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 border">Pathology</td>
              <td className="p-2 border">10</td>
              <td className="p-2 border">2,500</td>
            </tr>
          </tbody>
        </table>

        {/* Footer Notes */}
        <div className="mt-6 text-gray-600 text-sm">
          <p>* This report shows pending payments categorized by department.</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisDueCollDeptWise;
