import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

const activities = [
  { task: "Finish Report", time: "10:00 am" },
  { task: "Gym Workout", time: "12:00 pm" },
  { task: "Project Meeting", time: "2:00 pm" },
  { task: "Read Chapter 3", time: "4:00 pm" },
  { task: "Call with Client", time: "6:00 pm" },
  { task: "Dinner with Family", time: "7:00 pm" },
  { task: "Yoga Session", time: "8:00 pm" },
  { task: "Plan Next Week", time: "9:00 pm" },
  { task: "Meditation", time: "10:00 pm" },
  { task: "Write Journal", time: "11:00 pm" },
  { task: "Morning Run", time: "6:00 am" },
  { task: "Team Standup", time: "9:00 am" },
  { task: "Code Review", time: "11:00 am" },
  { task: "Lunch Break", time: "1:00 pm" },
  { task: "Client Presentation", time: "3:00 pm" },
  { task: "Brainstorm Session", time: "5:00 pm" },
  { task: "Grocery Shopping", time: "6:30 pm" },
  { task: "Watch Movie", time: "8:00 pm" },
  { task: "Evening Walk", time: "9:30 pm" },
  { task: "Sleep", time: "11:00 pm" },
];

export default function TaskList() {
  return (
    <main className="space-y-4 p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row gap-x-2">
          <input
            type="text"
            placeholder="Search for Tasks"
            className="w-full rounded-md border p-2 bg-[#2196F3] bg-opacity-10"
          />
          <Image src="/search-bar.svg" alt="search-bar" width={20} height={20}/>
        </div>
        <div>
          <p className="font-semibold">Categories</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button className="flex flex-col items-center w-[100px] flex-grow-0 border-[#2196F3] flex-shrink-0 rounded-md border p-10 bg-transparent hover:bg-blue-200">
              <Image src="/work-icon.svg" alt="work" width={20} height={20} />
              <p className="text-[#2196F3]">Work</p>
            </Button>
            <Button className="flex flex-col items-center w-[100px] flex-grow-0 flex-shrink-0 border-[#2196F3] rounded-md border p-10 bg-transparent hover:bg-blue-200">
              <Image
                src="/personal-icon.svg"
                alt="personal"
                width={20}
                height={20}
              />
              <p className="text-[#FF5722]">Personal</p>
            </Button>
            <Button className="flex flex-col items-center w-[100px] border-[#2196F3] flex-grow-0 flex-shrink-0 rounded-md border p-10 bg-transparent hover:bg-blue-200">
              <Image
                src="/shop-icon.svg"
                alt="shopping"
                width={20}
                height={20}
              />
              <p className="text-[#FFC107]">Shopping</p>
            </Button>
            <Button className="flex flex-col items-center w-[100px] border-[#2196F3] flex-grow-0 flex-shrink-0 rounded-md border p-10 bg-transparent hover:bg-blue-200">
              <Image
                src="/health-icon.svg"
                alt="health"
                width={20}
                height={20}
              />
              <p className="text-[#FFA3A3]">Health</p>
            </Button>
          </div>
        </div>
      </div>
      <div>
          <p className="font-semibold">Today's tasks</p>
        <div className="mt-2 space-y-2">
        {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-2 rounded-md border p-2 bg-[#2196F3] bg-opacity-10">
              <Checkbox />
              <div className="flex w-full justify-between">
                <p>{activity.task}</p>
                <p className="text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
