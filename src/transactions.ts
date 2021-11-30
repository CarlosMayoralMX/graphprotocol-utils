import {
	ethereum,
} from '@graphprotocol/graph-ts'

import {
	Transaction,
} from '../generated/schema'

import {
	constants
} from './constants'

export namespace transactions {
	export function log(event: ethereum.Event): Transaction {
		let tx = new Transaction(event.transaction.hash.toHex())
		tx.timestamp   = event.block.timestamp
		tx.blockNumber = event.block.number
		tx.gasLimit=  event.transaction.gasLimit
		tx.gasPrice= event.transaction.gasPrice
		tx.input = event.transaction.input != null ? event.transaction.input : constants.BYTE_ZERO
		tx.nonce= event.transaction.nonce != null ? event.transaction.nonce : constants.BIGINT_ONE
		tx.logIndex= event.logIndex != null ? event.logIndex : constants.BIGINT_ONE
		tx.save()
		return tx as Transaction
	}
	export type Tx = Transaction
}
