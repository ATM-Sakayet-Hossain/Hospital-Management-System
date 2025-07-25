import React, { useState } from "react";

const DiagnosisInvoice = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  return (
    <>
      <div className="w-full flex gap-2">
        {/* Invoice part start */}
        <div className="w-9/12 rounded-lg">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="w-full text-lg text-center border-t-[2px] border-b-[1px] font-bold">
              Diagnostic Invoice
            </h1>
            <div>
              <form>
                <div className="flex items-center gap-4 w-full pl-15 pt-2">
                  <div className="w-4/12 flex gap-2">
                    <label className="text-base text-end w-4/12 font-semibold">
                      Patinet Type
                    </label>
                    <select className="form-control w-8/12">
                      <option value="Outdoor">Outdoor</option>
                      <option value="Indoor">Indoor</option>
                    </select>
                  </div>
                  <div className="w-4/12 flex items-center gap-2">
                    <label className="text-base text-end w-4/12 font-semibold">
                      Patient Id 
                    </label>
                    <input type="text" className="form-control w-8/12" />
                  </div>
                  <span className="w-2/12 tex-base flex items-center gap-2">
                    <label className=" font-semibold">
                      Donar <input type="checkbox" />
                    </label>
                    <label className=" font-semibold">
                      Baby of <input type="checkbox" />
                    </label>
                  </span>
                  <div className="w-2/12">
                    <input
                      type="date"
                      value={today}
                      min={today}
                      max={today}
                      readOnly
                      className="form-control w-full"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full pl-30 pt-2">
                  <div className="w-5/12 flex items-center gap-2">
                    <label className="text-base text-end w-2/15 font-semibold">
                      Mobile
                    </label>
                    <input type="text" className="form-control w-13/15" />
                  </div>
                  <div className="w-7/12 flex items-center gap-2">
                    <label className="text-base text-end w-4/12 font-semibold">
                      Patient Name
                    </label>
                    <input type="text" className="form-control w-8/12" />
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full pl-30 pt-2">
                  <div className="w-5/12 flex items-center gap-2">
                    <label className="text-base text-end font-semibold">
                      Address
                    </label>
                    <input type="text" className="form-control w-full" />
                  </div>
                  <div className="w-7/12 flex items-center gap-2">
                    <label className="text-base text-end w-4/12 font-semibold">
                      Gender
                    </label>
                    <select className="form-control w-4/12">
                      <option value="Select">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                    <button className="w-4/12 bg-blue-400 rounded-md text-base font-semibold text-white">
                      New Registration
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full pl-5 pt-2">
                  <div className="w-6/12 flex items-center gap-2">
                    <label className="text-base text-end w-[158px] font-semibold">
                      Date Of Birth
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      max={today}
                      className="form-control w-[374px]"
                    />
                  </div>
                  <div className="w-6/12 flex items-center gap-2">
                    <label className="w-[160px] text-base text-end font-semibold">
                      Age
                    </label>
                    <div className="w-8/12 flex items-center gap-2">
                      <input
                        type="number"
                        className="form-control w-4/12 appearance-none"
                        placeholder="Year"
                        min="0"
                        max="120"
                      />
                      <input
                        type="number"
                        className="form-control w-4/12 appearance-none"
                        placeholder="Month"
                        min="0"
                        max="12"
                      />
                      <input
                        type="number"
                        className="form-control w-4/12 appearance-none"
                        placeholder="Day"
                        min="0"
                        max="31"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full pl-15 pt-2">
                  <div className="w-full flex items-center gap-2">
                    <label className="text-base text-end w-[120px] font-semibold">
                      Cons. DrCode
                    </label>
                    <input type="text" className="form-control w-3/12" />
                    <input type="text" className="form-control w-8/12" />
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full pl-15 pt-2">
                  <div className="w-full flex items-center gap-2">
                    <label className="text-base text-end w-[120px] font-semibold">
                      Ref. DrCode
                    </label>
                    <input type="text" className="form-control w-3/12" />
                    <input type="text" className="form-control w-8/12" />
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full pl-15 pt-2">
                  <div className="w-full flex items-center gap-2">
                    <label className="text-base text-end w-[120px] font-semibold">
                      Hc Code
                    </label>
                    <input type="text" className="form-control w-3/12" />
                    <input type="text" className="form-control w-8/12" />
                  </div>
                </div>
                <div className="h-62 overflow-x-auto my-2">
                  <table className="w-full max-w-full  text-sm text-left text-white bg-blue-400">
                    <thead>
                      <tr className="text-xs">
                        <th className="py-2 px-5 text-center">Code</th>
                        <th className="py-2 px-5 text-center">Description</th>
                        <th className="py-2 px-5 text-center">Qty</th>
                        <th className="py-2 px-5 text-center">Charge(Tk.)</th>
                        <th className="py-2 px-5 text-center">Total(Tk.)</th>
                        <th className="py-2 px-5 text-center">Urgent</th>
                        <th className="py-2 px-5 text-center">Delivery</th>
                        <th className="py-2 px-5 text-center">Action</th>
                      </tr>
                      <tr className="text-xs">
                        <th className="pb-2 pl-2 w-1/12">
                          <input
                            type="text"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-2 pl-2 w-4/12">
                          <input
                            type="text"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-2 pl-2 w-1/12">
                          <input
                            type="text"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-2 pl-2 w-1/12">
                          <input
                            type="text"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-2 pl-2 w-2/12">
                          <input
                            type="text"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-1 pl-1">
                          <input
                            type="checkbox"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-2 pl-2 w-2/12">
                          <input
                            type="date"
                            className="w-full bg-white text-base px-1 py-1 text-black"
                          />
                        </th>
                        <th className="pb-2 pl-2 text-center">
                          <button className=" bg-white text-black px-4 py-1 rounded-lg">
                            Add
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="flex items-center gap-2 w-2/12">
                    <label className="text-red-600 w-6/12 font-semibold">
                      Total Test{" "}
                    </label>
                    <input
                      type="text"
                      className="w-6/12 form-control bg-white text-black px-1 py-1"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-8/12">
                    <label className=" w-2/12 text-end font-semibold">
                      Remarks{" "}
                    </label>
                    <input
                      type="text"
                      className="w-10/12 form-control bg-white text-black px-1 py-1"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-2/12">
                    <input
                      type="text"
                      className="w-full form-control bg-white text-black px-1 py-1"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Invoice part end */}
        {/* Payment part start */}
        <div className="w-3/12 rounded-lg">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="w-full text-lg text-center border-t-[2px] border-b-[1px]">
              Payment
            </h1>
            <div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Grand Total</label>
                <div className="w-9/12">
                  <input type="text" value={0} readOnly className="form-control w-full px-2 bg-gray-100" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base text-red-600 font-semibold">
                  Fixed Less
                </label>
                <div className="w-9/12">
                  <input type="text" value={0} readOnly className="form-control w-full bg-gray-100" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Grand Less</label>
                <div className="w-9/12">
                  <input type="text" className="form-control w-full" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Less</label>
                <div className="w-9/12 flex items-center gap-2">
                  <input type="text" className="text-base w-6/12 form-control" />
                  <select className="w-6/12 form-control">
                    <option value="%">%</option>
                    <option value="TK">TK</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Less From</label>
                <div className="w-9/12">
                  <select className="w-full form-control">
                    <option value="Select">Select</option>
                    <option value="Director">Director</option>
                    <option value="Asst. Director">Asst. Director</option>
                    <option value="General Manager">General Manager</option>
                    <option value="Asst. General Manager">Asst. General Manager</option>
                    <option value="Manager">Manager</option>
                    <option value="Asst. Manager">Asst. Manager</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Total Less</label>
                <div className="w-9/12">
                  <input type="text" value={0} readOnly className="form-control w-full bg-gray-100" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Extra Less</label>
                <div className="w-9/12">
                  <input type="text" className="form-control w-full" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Grand Less</label>
                <div className="w-9/12">
                  <input type="text" value={0} readOnly className="form-control w-full bg-gray-100" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-3/12 text-end text-base font-semibold">Payable</label>
                <div className="w-9/12">
                  <input type="text" value={0} readOnly className="form-control w-full bg-gray-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment part end */}
      </div>
    </>
  );
};

export default DiagnosisInvoice;
