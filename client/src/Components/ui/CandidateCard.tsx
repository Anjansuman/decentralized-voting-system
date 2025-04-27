
interface CandidateCardProps {
    name: String,
    onClick: () => void
}

export const CandidateCard = ({ name, onClick }: CandidateCardProps) => {


    return <div className="h-90 w-80 p-3 bg-[#383838] rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out ">
        <div className="h-[80%] rounded-xl border border-[#484848] shadow flex justify-center items-center text-3xl text-[#484848] font-semibold ">
            <div className="px-4 py-2 border rounded-xl shadow-lg bg-[#545454] text-white active:translate-y-1 transition-transform duration-200 ease-in-out "
                onClick={onClick}
            >
                Vote
            </div>
        </div>
        <div className="h-[20%] flex justify-center items-center text-xl">
            {name}
        </div>
    </div>
}