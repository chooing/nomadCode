import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timesTamp: number;

  static calculateBlockHash = (
    index: number,
    prevHash: string,
    data: string,
    timesTamp: number
  ): string => CryptoJS.SHA256(index + prevHash + timesTamp + data).toString();

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timesTamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timesTamp = timesTamp;
  }
}

const genesisBlok: Block = new Block(0, "202020", "", "hello", 123456);
let blockChain: Block[] = [genesisBlok];
console.log(blockChain);

const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
