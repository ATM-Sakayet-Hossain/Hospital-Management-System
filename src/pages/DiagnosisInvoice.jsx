import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const DiagnosisInvoice = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [openMenus, setOpenMenus] = useState(false);
  const [Donar, setDonar] = useState(false);
  const [openCash, setOpenCash] = useState({ Cash: true });

  const toggleCash = (menu) => {
    if (menu === "Cash") {
      setOpenCash({ Cash: true });
    } else if (menu === "Card") {
      setOpenCash({ Card: true });
    } else if (menu === "Cheque") {
      setOpenCash({ Cheque: true });
    }
  };
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
                  <span className="w-2/12 text-base flex items-center gap-2">
                    <label className=" font-semibold">
                      Donar <input onChange={() => setDonar(!Donar)} checked={Donar} type="checkbox" />
                    </label>
                    <label className=" font-semibold">
                      Baby of
                      <input type="checkbox" />
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
                {/* Donar Name */}
                {Donar && (
                  <div onClick={()=> setDonar(true)} className="flex items-center gap-5 w-full pl-15 pt-2">
                    <div className="w-4/12 flex items-center gap-2">
                      <label className="w-4/12 text-base text-end font-semibold">
                        Donor Name
                      </label>
                      <input type="text" className="form-control w-8/12" />
                    </div>
                    <div className="w-4/12 flex items-center gap-2">
                      <label className="w-4/12 text-base text-end font-semibold">
                        Donor Age
                      </label>
                      <input type="text" className="form-control w-8/12" />
                    </div>
                    <div className="w-4/12 flex items-center gap-2">
                      <label className="text-base text-end w-4/12 font-semibold">
                        Gender
                      </label>
                      <select className="form-control w-8/12">
                        <option value="Select">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                )}
                {/* Donar Name */}
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
                          <button className="w-fit m-auto text-center text-base font-bold bg-white px-3 py-1 rounded-[4px] text-black">
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
        <div className="w-3/12 p-6 bg-white rounded-lg shadow-lg">
          <div>
            <h1 className="w-full text-lg text-center font-bold border-t-[2px] border-b-[1px]">
              Payment
            </h1>
            <div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Grand Total
                </label>
                <div className="w-9/12">
                  <input
                    type="text"
                    value={0}
                    readOnly
                    className="form-control w-full px-2 bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base text-red-600 font-semibold">
                  Fixed Less
                </label>
                <div className="w-9/12">
                  <input
                    type="text"
                    value={0}
                    readOnly
                    className="form-control w-full bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Grand Less
                </label>
                <div className="w-9/12">
                  <input
                    onClick={() => setOpenMenus(true)}
                    type="text"
                    className="form-control w-full"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Less
                </label>
                <div className="w-9/12 flex items-center gap-2">
                  <input
                    type="text"
                    className="text-base w-6/12 form-control"
                  />
                  <select className="w-6/12 form-control">
                    <option value="%">%</option>
                    <option value="TK">TK</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Less From
                </label>
                <div className="w-9/12">
                  <select className="w-full form-control">
                    <option value="Select">Select</option>
                    <option value="Director">Director</option>
                    <option value="Asst. Director">Asst. Director</option>
                    <option value="General Manager">General Manager</option>
                    <option value="Asst. General Manager">
                      Asst. General Manager
                    </option>
                    <option value="Manager">Manager</option>
                    <option value="Asst. Manager">Asst. Manager</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Total Less
                </label>
                <div className="w-9/12">
                  <input
                    type="text"
                    value={0}
                    readOnly
                    className="form-control w-full bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Extra Less
                </label>
                <div className="w-9/12">
                  <input type="text" className="form-control w-full" />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Grand Less
                </label>
                <div className="w-9/12">
                  <input
                    type="text"
                    value={0}
                    readOnly
                    className="form-control w-full bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 w-full pt-2">
                <label className="w-5/12 text-end text-base font-semibold">
                  Payable
                </label>
                <div className="w-9/12">
                  <input
                    type="text"
                    value={0}
                    readOnly
                    className="form-control w-full bg-gray-100"
                  />
                </div>
              </div>
            </div>
            <div className="w-full pt-2">
              <div className="flex justify-around w-full text-lg font-bold text-center border-t-[2px] border-b-[1px] px-10">
                <button
                  type="button"
                  onClick={() => toggleCash("Cash")}
                  className={openCash.Cash ? "active" : ""}
                >
                  Cash
                </button>
                <button
                  type="button"
                  onClick={() => toggleCash("Card")}
                  className={openCash.Card ? "active" : ""}
                >
                  Card
                </button>
                <button
                  type="button"
                  onClick={() => toggleCash("Cheque")}
                  className={openCash.Cheque ? "active" : ""}
                >
                  Cheque
                </button>
              </div>
              {openCash.Cash && (
                <div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Receive Amount
                    </label>
                    <input
                      type="number"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      placeholder="0"
                      min={0}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Cash Amount
                    </label>
                    <input
                      type="text"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Change Amount
                    </label>
                    <input
                      type="text"
                      className="form-control text-red-400 w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Total Amount
                    </label>
                    <input
                      type="text"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Due Amount
                    </label>
                    <input
                      type="text"
                      className="form-control text-red-400 w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                </div>
              )}
              {openCash.Card && (
                <div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Card Amount
                    </label>
                    <input
                      type="number"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      placeholder="0"
                      min={0}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Card No
                    </label>
                    <input
                      type="number"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      placeholder="0254 1234 5678 9012"
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Card Bank
                    </label>
                    <select className="form-control text-red-400 w-9/12 px-2 bg-gray-100">
                      <option value="Select">Select</option>
                      <option value="Bank A">Bank A</option>
                      <option value="Bank B">Bank B</option>
                      <option value="Bank C">Bank C</option>
                      <option value="Bank D">Bank D</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Total Receive
                    </label>
                    <input
                      type="text"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Due Amount
                    </label>
                    <input
                      type="text"
                      className="form-control text-red-400 w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                </div>
              )}
              {openCash.Cheque && (
                <div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Cheque Amount
                    </label>
                    <input
                      type="number"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      placeholder="0"
                      min={0}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Cheque No
                    </label>
                    <input
                      type="text"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      placeholder="1234567890"
                      min={0}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Cheque Bank
                    </label>
                    <select className="form-control text-red-400 w-9/12 px-2 bg-gray-100">
                      <option value="Select">Select</option>
                      <option value="Bank A">Bank A</option>
                      <option value="Bank B">Bank B</option>
                      <option value="Bank C">Bank C</option>
                      <option value="Bank D">Bank D</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Cheque Date
                    </label>
                    <input
                      type="Date"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-green-400 text-end w-5/12 font-semibold">
                      Total Receive
                    </label>
                    <input
                      type="text"
                      className="form-control w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4 w-full pt-2">
                    <label className="text-base text-red-400 text-end w-5/12 font-semibold">
                      Due Amount
                    </label>
                    <input
                      type="text"
                      className="form-control text-red-400 w-9/12 px-2 bg-gray-100"
                      value={0}
                      readOnly
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-around w-full pt-4">
            <button className="w-fit font-bold bg-blue-400 px-6 py-2 rounded-lg text-white">
              View
            </button>
            <button className="w-fit font-bold bg-blue-400 px-6 py-2 rounded-lg text-white">
              Save
            </button>
            <button className="w-fit font-bold bg-blue-400 px-6 py-2 rounded-lg text-white">
              List
            </button>
          </div>
        </div>
        {/* Payment part end */}
      </div>
      {openMenus && (
        <div>
          <div
            className="fixed inset-0 bg-[#ffffff79]"
            onClick={() => setOpenMenus(false)}
          ></div>
          <div className="fixed top-20 right-130 bg-white p-5 rounded-lg shadow-lg z-50">
            <div className="w-200 flex flex-col gap-2">
              <div className="w-full flex justify-between items-center relative">
                <h1 className="w-full text-lg text-center border-t-[2px] border-b-[1px]">
                  Less Information
                </h1>
                <button
                  onClick={() => setOpenMenus(false)}
                  className="absolute text-2xl font-bold bg-blue-400 px-2"
                >
                  X
                </button>
              </div>
              <div className="h-50 overflow-x-auto my-2">
                <table className="w-full max-w-full  text-sm text-left text-white">
                  <thead>
                    <tr className="text-base bg-blue-400">
                      <th className="py-2 px-5 text-center">Group</th>
                      <th className="py-2 px-5 text-center">Less</th>
                      <th className="py-2 px-5 text-center">%/TK</th>
                      <th className="py-2 px-5 text-center">From</th>
                      <th className="py-2 px-5 text-center">Amount</th>
                      <th className="py-2 px-5 text-center">Action</th>
                    </tr>
                    <tr className="text-base bg-blue-100">
                      <th className="pb-2 pl-2 w-2/12">
                        <select className="w-full bg-white text-base px-1 py-1 text-black">
                          <option value="select">select</option>
                        </select>
                      </th>
                      <th className="pb-2 pl-2 w-4/12">
                        <input
                          type="text"
                          className="w-full bg-white text-base px-1 py-1 text-black"
                        />
                      </th>
                      <th className="pb-2 pl-2 w-1/12">
                        <select className="w-full bg-white text-base px-1 py-1 text-black">
                          <option value="select">TK</option>
                          <option value="select">%</option>
                        </select>
                      </th>
                      <th className="pb-2 pl-2 w-2/12">
                        <select className="w-full bg-white text-base px-1 py-1 text-black">
                          <option value="select">Director</option>
                          <option value="select">Manager</option>
                        </select>
                      </th>
                      <th className="pb-2 pl-2 w-2/12">
                        <input
                          type="text"
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
                  <tbody>
                    <tr className="text-base">
                      <th className="pb-2 pl-2 w-2/12">
                        <h2 className="w-full text-base text-center px-1 py-1 text-black">
                          lab
                        </h2>
                      </th>
                      <th className="pb-2 pl-2 w-4/12">
                        <h2 className="w-full text-base text-center px-1 py-1 text-black">
                          Less %/TK
                        </h2>
                      </th>
                      <th className="pb-2 pl-2 w-1/12">
                        <h2 className="w-full text-base text-center px-1 py-1 text-black">
                          %/Tk
                        </h2>
                      </th>
                      <th className="pb-2 pl-2 w-2/12">
                        <h2 className="w-full text-base text-center px-1 py-1 text-black">
                          Less By
                        </h2>
                      </th>
                      <th className="pb-2 pl-2 w-2/12">
                        <h2 className="w-full text-base text-center px-1 py-1 text-black">
                          Amount
                        </h2>
                      </th>
                      <th className="pb-2 pl-2 text-center">
                        <MdDelete className="w-full text-3xl text-center px-1 py-1 text-black" />
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setOpenMenus(false)}
                className="w-fit m-auto text-center font-bold bg-blue-400 px-6 py-2 rounded-lg text-white"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DiagnosisInvoice;
