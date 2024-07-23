"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import * as React from "react";
import { format } from "date-fns";

export default function AddTask() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-blue-400">Add task</h2>
        <Button className="bg-red-400 hover:bg-red-200">Cancel</Button>
      </div>

      <Input
        type="text"
        placeholder="Task name"
        className="w-full rounded-md border bg-blue-50 p-2"
      />

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-400">Category</h3>
        <Select>
          <SelectTrigger className="w-full bg-blue-50 text-gray-500">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Work">Work</SelectItem>
            <SelectItem value="Personal">Personal</SelectItem>
            <SelectItem value="Shopping">Shopping</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-400">Date</h3>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="gap-x-2 bg-transparent hover:bg-transparent">
                <Image
                  src="/calendar.svg"
                  alt="calendar"
                  width={20}
                  height={20}
                />
                {date ? (
                  <span className="text-lg text-black">
                    {format(date, "PPP")}
                  </span>
                ) : (
                  <span className="text-lg text-black">Set date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Button className="gap-x-2 bg-blue-600 bg-transparent hover:bg-blue-400 hover:bg-transparent">
            <Image src="/set-time.svg" alt="set time" width={20} height={20} />
            <p className="text-lg text-black">Set time</p>
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-400">Reminder</h3>
        <Button className="gap-x-2 bg-blue-600 bg-transparent hover:bg-blue-400 hover:bg-transparent">
          <Image
            src="/set-reminder.svg"
            alt="set time"
            width={20}
            height={20}
          />
          <p className="text-lg text-black">Set reminder</p>
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-blue-400">Notes</h3>
        <Textarea
          placeholder="Write notes here"
          className="w-full rounded-md border bg-blue-50 p-2"
        />
      </div>

      <div className="flex justify-end">
        <Button className="bg-blue-400 hover:bg-blue-200">Add Task</Button>
      </div>
    </div>
  );
}
