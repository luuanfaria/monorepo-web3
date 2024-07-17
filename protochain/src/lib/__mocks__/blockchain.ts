import Block from "./block"
import Validation from "../validation"

export default class Blockchain {
  blocks: Block[]
  nextIndex: number = 0

  constructor() {
    this.blocks = [new Block({
      index: 0, 
      previousHash: "abc",
      data: "Genesis Block" ,
      timestamp: Date.now()
    } as Block)]
    this.nextIndex++
  }

  getLastBlock(): Block {
    return this.blocks[this.blocks.length -1]
  }

  addBlock(block: Block): Validation {
    if (block.index < 0) return new Validation(false, 'Invalid mock block.')

    this.blocks.push(block)
    this.nextIndex++

    return new Validation()
  }

  getBlock(hash: string): Block | undefined {
    return this.blocks.find(block => block.hash === hash)
  }

  isValid(): Validation {    
    return new Validation()
  }
}