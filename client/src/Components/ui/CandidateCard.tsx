
interface CandidateCardProps {
    name: String;
}

export const CandidateCard = ({name}: CandidateCardProps) => {


    return <div className="h-80 w-70 p-3 bg-[#383838] rounded-2xl cursor-pointer shadow-2xl ">
        <div className="h-[80%] rounded-xl border border-[#484848] shadow flex justify-center items-center text-3xl text-[#484848] font-semibold ">
            Logo
        </div>
        <div className="h-[20%] flex justify-center items-center text-xl">
            {name}
        </div>
    </div>
}