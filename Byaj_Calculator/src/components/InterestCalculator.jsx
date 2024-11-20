import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState(""); // Monthly interest rate in %
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [simpleInterest, setSimpleInterest] = useState(null);
  const [compoundInterest, setCompoundInterest] = useState(null);
  const [timePeriod, setTimePeriod] = useState({ years: 0, months: 0, days: 0 });

  const calculateTimePeriod = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeInMilliseconds = end - start; // Time in milliseconds
    const timeInDays = timeInMilliseconds / (1000 * 3600 * 24); // Convert milliseconds to days
    const timeInMonths = timeInDays / 30.4375; // Convert days to months (approximate average month length)
    const timeInYears = timeInMonths / 12; // Convert months to years

    const years = Math.floor(timeInYears);
    const months = Math.floor(timeInMonths - years * 12);
    const days = Math.floor(timeInDays - years * 365.25 - months * 30.4375);

    setTimePeriod({ years, months, days });

    return timeInMonths; // Return time in months for CI calculation
  };

  const calculateInterests = () => {
    const timeInMonths = calculateTimePeriod(); // Get the time in months

    // Calculate Simple Interest (SI) for monthly rate
    const SI = (principal * rate * timeInMonths) / 100;

    // Calculate Compound Interest (CI) for monthly rate
    const CI = principal * Math.pow(1 + rate / 100, timeInMonths) - principal;

    setSimpleInterest(SI);
    setCompoundInterest(CI);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Interest Calculator
        </h2>

        {/* Principal Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Principal Amount (P)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
          />
        </div>

        {/* Rate of Interest Input (monthly rate) */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Monthly Rate of Interest (R)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter monthly rate of interest"
          />
        </div>

        {/* Start Date Picker */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        {/* End Date Picker */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateInterests}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
        >
          Calculate
        </button>

        {/* Results */}
        {simpleInterest !== null && compoundInterest !== null && (
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 font-semibold">
              Time Period: {timePeriod.years} years, {timePeriod.months} months,{" "}
              {timePeriod.days} days
            </p>
            <p className="text-gray-700 font-semibold">
              Simple Interest: ₹{simpleInterest.toFixed(2)}
            </p>
            <p className="text-gray-700 font-semibold">
              Compound Interest: ₹{compoundInterest.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestCalculator;
