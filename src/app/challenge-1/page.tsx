"use client";

import React, { ChangeEvent, useState } from "react";

interface iForm {
  firstNumber: number;
  secondNumber: number;
  total: number;
}

export default function Page() {
  const [form, setForm] = useState<iForm>({
    firstNumber: 0,
    secondNumber: 0,
    total: 0,
  });

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm((prev) => ({
      ...prev,
      [name]: +value,
    }));
  };

  const getTotal = () => {
    setForm((prev) => ({
      ...prev,
      total: Number(prev.firstNumber) + Number(prev.secondNumber),
    }));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <p className="text-[40px] text-center text-[#171953] font-semibold font-outfit">
        Adding Two Numbers
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        <div className="lg:col-start-2 bg-[#ED81A3] p-[20px] rounded-lg">
          <input
            type="number"
            value={form.firstNumber}
            onChange={handleNumberChange}
            name="firstNumber"
            className="text-white bg-transparent text-center w-full text-3xl focus:outline-none font-outfit font-semibold"
            pattern="^-?[0-9]\d*(\.\d+)?$"
          />
        </div>

        <div className=" bg-[#ED81A3] p-[20px] rounded-lg">
          <input
            type="number"
            value={form.secondNumber}
            onChange={handleNumberChange}
            name="secondNumber"
            className="text-white bg-transparent text-center w-full text-3xl focus:outline-none font-outfit font-semibold"
            pattern="^-?[0-9]\d*(\.\d+)?$"
          />
        </div>
        <div className="lg:col-start-2 col-span-2 text-center">
          <button
            onClick={() => getTotal()}
            className="bg-[#EF24B8] rounded-full text-white text-xl px-8 py-2 font-outfit"
          >
            Add two numbers
          </button>
        </div>
        <div className="bg-[#AEA8E9] lg:col-start-2 col-span-2 rounded-lg text-center p-[20px]">
          <p className="text-white text-2xl font-outfit font-semibold">Total</p>
          <span className="text-white text-5xl font-outfit font-bold">
            {form.total}
          </span>
        </div>
      </div>
    </div>
  );
}
