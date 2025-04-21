

export const Nav = ({ onClick }: { onClick: () => void }) => {


    return <div className="h-30 bg-[#383838] px-8 border-b border-[#484848] flex justify-between items-center ">
        <div>
            Decentralized Voting App
        </div>
        <div className="bg-[#5b5b5b] px-3 py-2 rounded-xl cursor-pointer hover:bg-[#484848] transition-colors duration-200 ease-in-out "
            onClick={onClick}
        >
            Connect Wallet
        </div>
    </div>
}