"use client";

import * as React from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";

export default function CalendarTask() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const tasks = [
    { date: "23/07/2024", time: "8:00 PM", description: "Coding" },
    { date: "23/07/2024", time: "19:00 AM", description: "Watching Football" },
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="my-10 text-center text-2xl font-bold text-blue-400">
        Calendar
      </p>
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-x-20 lg:justify-center">
        <div className="flex justify-center w-full lg:w-auto">
          <div className="flex w-full max-w-sm items-center justify-center rounded-lg p-4 shadow">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center w-full lg:w-auto">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="mb-4 flex w-10/12 lg:w-full items-center justify-between rounded-lg bg-blue-50 p-4 shadow xl:w-[400px]"
            >
              <div>
                <p className="font-bold text-blue-500">{task.date}</p>
                <p className="text-gray-600">{task.time}</p>
                <p className="mt-2">{task.description}</p>
              </div>
              <button className="font-semibold text-red-500">Delete</button>
            </div>
          ))}

          <div className="flex justify-center">
            <Button className="bg-blue-400 hover:bg-blue-200">Add Task</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
