import {
	ethereum,
} from '@graphprotocol/graph-ts'

import {
    Block
}
from '../generated/schema'

export namespace blocks {
	export function log(block: ethereum.Block): Block {
		let bk = new Block(block.hash.toHex())
		bk.hash   = block.hash
        bk.number = block.number
        bk.gasUsed = block.gasUsed
        bk.gasLimit = block.gasLimit
        bk.timestamp = block.timestamp
        bk.difficulty = block.difficulty
        bk.size = block.size

		bk.save()
		return bk as Block
	}
	export type Bk = Block
}
