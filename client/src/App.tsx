import { useEffect, useState } from "react";
import { Nav } from "./Components/Nav";
import { CandidateCard } from "./Components/ui/CandidateCard";
import { connectToMetaMask } from "./Ethereum/connectToMetaMask";
import { ContractClass } from "./Ethereum/ContractClass";
import Voting from "./contracts/Voting.json";


export default function App() {

  const [contract, setContract] = useState<ContractClass>();
  const [isConnected, setIsConnected] = useState<boolean>();
  const [candidates, setCandidates] = useState<{name: String, votingCount: number}[]>();

  function metamask() {
    connectToMetaMask();
  }

  async function contracting() {
    if(!contract) return;
    setCandidates(await contract.getAllCandidates());
  }

  useEffect(() => {
    const c = new ContractClass("address", Voting.abi);
    setIsConnected(c.isConnected());
    setContract(c);
    contracting();
  }, []);

  function connected() {
    return contract?.isConnected();
  }

  return <div className="h-screen w-screen bg-[#242424] text-white flex flex-col justify-between  ">
    <Nav onClick={metamask} isConnected={isConnected || false} />
    <div className="flex justify-center my-5 text-5xl ">
      Candidates
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pt-3 pb-4 pl-3 hide-scrollbar ">
      {Array.from({ length: 10 }).map((_, index) => (
        <CandidateCard name={"Nayan Suman"} key={index} onClick={() => {
          contract?.vote(name);
        }} />
      ))}
    </div>
  </div>
}