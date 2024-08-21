"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DataList() {
  const router = useRouter();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [router]);

  return (
    <div className="w-full mt-[80px]">
      <div className="w-full flex justify-center">
        <div className="mb-5 min-w-[0px] max-w-[200px]">
          <h2 className="text-4xl border-b">Data Table</h2>
        </div>
      </div>
      <div
        className="overflow-x-auto overflow-y-hidden w-full h-full"
        style={{ scrollbarWidth: "thin", zIndex: "-1" }}
      >
        <div className="min-w-[800px] max-w-full">
          <div className="h-[40px] w-full bg-gray-100 font-bold text-xs md:text-sm text-gray-500 flex flex-row pl-1 sm:pl-2.5 pr-4">
            <div className="w-[10%] h-full flex items-center pl-2">
              <h4>Id</h4>
            </div>

            <div className="w-[23%] h-full flex items-center pl-1">
              <h4>Name</h4>
            </div>

            <div className="w-[22%] h-full flex items-center pl-1">
              <h4>Phone</h4>
            </div>

            <div className="w-[25%] h-full flex items-center justify-center pl-1">
              <h4>Email</h4>
            </div>

            <div className="w-[20%] h-full flex items-center justify-center pl-1">
              <h4>City</h4>
            </div>
          </div>

          <div
            className="overflow-y-scroll overflow-x-hidden text-sm md:text-base w-full h-full bg-gray-100 pl-1 sm:pl-2.5"
            style={{ scrollbarWidth: "thin", zIndex: "-1" }}
          >
            <div className="w-full bg-white">
              {data != null && (
                <>
                  {data.length > 0 ? (
                    <div className="w-full h-full">
                      {data.map((item, index) => {
                        return (
                          <div
                            key={item.id}
                            className={`w-full h-full flex flex-row text-gray-500 ${
                              index % 2 === 1 ? "bg-gray-100" : "bg-white"
                            }`}
                          >
                            <div className="w-[10%] h-full flex my-1 items-center pl-2">
                              <h4>{item.id}</h4>
                            </div>

                            <div className="w-[23%] h-full flex my-1 items-center pl-1">
                              <h4>{item.name}</h4>
                            </div>

                            <div className="w-[22%] h-full flex my-1 items-center pl-1">
                              <h4>{item.phone}</h4>
                            </div>

                            <div className="w-[25%] h-full flex my-1 pl-1 justify-center">
                              <h4>{item.email}</h4>
                            </div>

                            <div className="w-[20%] h-full flex my-1 items-center justify-center pl-1">
                              <h4>{item.address.city}</h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-[200px]">
                      <h4 className="text-lg text-gray-500 font-semibold">
                        {error}
                      </h4>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
