import { Nav } from "./Components/Nav";
import { CandidateCard } from "./Components/ui/CandidateCard";


export default function App() {


  return <div className="h-screen w-screen bg-[#242424] text-white flex flex-col justify-between  ">
    <Nav onClick={() => {}} />
    <div className="flex justify-center my-5 text-5xl ">
      Candidates
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-4 pl-3 hide-scrollbar ">
      {Array.from({ length: 10 }).map(() => (
        <CandidateCard name={"Nayan Suman"} />
      ))}
    </div>
  </div>
}