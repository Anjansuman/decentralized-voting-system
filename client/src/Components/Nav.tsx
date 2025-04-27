
interface NavProps {
    onClick: () => void,
    isConnected: boolean
}

export const Nav = ({ onClick, isConnected }: NavProps) => {


    return <div className="h-30 bg-[#383838] px-8 border-b border-[#484848] flex justify-between items-center ">
        <div className="border-y border-[#5b5b5b] rounded-lg px-3 py-2  ">
            Decentralized Voting App
        </div>
        <div className="px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ease-in-out "
            style={{
                backgroundColor: isConnected ? "#00bc7d" : "#484848"
            }}
            onClick={onClick}
        >
            {isConnected ? "Wallet connected!" : "Connect Wallet!"}
        </div>
    </div>
}