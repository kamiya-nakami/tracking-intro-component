import IllustrationDevices from "./img/illustration-devices.svg"
import Image from "next/image";
import Navber from "./components/Nevber/Navber";

export default function Home() {
  return (
    <main >
      <div className=" px-14  my-8 md:px-14 md:shadow-[40rem_0_0_64px_rgba(237,242,246,1)] ">
        <Navber /> 
      </div>
      <div className="    grid grid-rows-4 gap-5 md:gap-10 md:grid-rows-none md:grid-cols-2 mt-16 overflow-clip">
          <div className=" grid rounded-3xl shadow-[-8px_-100px_0_64px_rgba(237,242,246,1)] bg-[#EDF2F6] md:col-start-2  my-16  md:bg-[right_top_20rem]  md:w-[50rem]    ">
            <Image  className="  rounded-3xl w-20rem ml-16 h-auto  " src={IllustrationDevices} alt="/illustration-devices" />
          </div>
        <div className="grid  md:col-start-1  md:row-start-1  px-14  ">
          <div className=" grid items-center ">
            <div className="flex text-center">
            <h3 className=" bg-[#242742] text-white w-16 h-8 rounded-3xl font-black ">NEW</h3>
            <p className="text-[#9294a0] mx-6 text-[1.5rem] " >MONOGRAPH DASHBOARD</p>
            </div>
          </div>
          <div className="  ">
            <h1 className=" text-[#242742]  text-[2.5rem] font-black "  >POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p  className="text-[#36384e]  text-[1.5rem] "   >Project planning and time tracking for agile teams</p>
          </div>
          <div className=" grid  grid-cols-2  text-center  items-center   ">
                <button  className=" bg-[#ff6257] text-white w-[15rem] h-14  rounded-lg ">
                          SCHEDULE A DEMO
                </button>
            <p className="text-[#9294a0] " >TO SEE A PREVIEW</p>
          </div>
        </div>
      </div>
    </main>
  );
}
