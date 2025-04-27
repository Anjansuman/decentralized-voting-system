import { ethers, JsonRpcSigner } from "ethers";
import { connectToMetaMask } from "./connectToMetaMask";


export class ContractClass {

    private contractAddress: string;
    private contractABI: any;
    private provider: ethers.BrowserProvider | null = null;
    private signer: JsonRpcSigner | null = null;
    private contract: ethers.Contract | null = null;

    constructor(contractAddress: string, contractABI: any) {
        this.contractAddress = contractAddress;
        this.contractABI = contractABI;

        this.connectToMetaMask();
        this.getAllCandidates();
    }

    private async connectToMetaMask() {
        const { provider, signer }: { provider: ethers.BrowserProvider, signer: ethers.JsonRpcSigner } = await connectToMetaMask();
        
        this.provider = provider;
        this.signer = signer;

        this.setContract();
    }

    private setContract() {
        if(!this.signer) {
            throw new Error("Signer not initialized!");
        }

        this.contract = new ethers.Contract(
            this.contractAddress,
            this.contractABI,
            this.signer
        );
    }

    public async createCandidate(name: String) {
        if(!this.contract) throw new Error("MetaMask not connected!");

        const txn = await this.contract.newCandidate(name);
        await txn;
    }

    // this should not create a transaction, this should show all candidates without even connecting a wallet
    public async getAllCandidates() {
        if(!this.contract) {
            throw new Error("MetaMask not connected!");
        }

        const candidates: {
            name: String,
            votingCount: number
        }[] = await this.contract.getCandidates();

        return candidates;

    }

    public async vote(name: String) {
        if(!this.contract) throw new Error("MetaMask not connected!");

        const txn = await this.contract.vote(name);
        await txn;
    }

    public isConnected(): boolean {
        return this.contract !== null;
    }

}