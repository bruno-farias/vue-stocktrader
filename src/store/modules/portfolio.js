const state = {
	funds: 10000,
	stocks: []
}

const mutations = {
	'BUY_STOCK'(state, {stockId, stockName, quantity, stockPrice}) {
		const record = state.stocks.find(element => element.id === stockId)
		if (record) {
			record.quantity += quantity
		} else {
			state.stocks.push({
				id: stockId,
				name: stockName,
				quantity: quantity,
				price: stockPrice
			})
		}
		state.funds -= stockPrice * quantity
	},
	'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
		const record = state.stocks.find(element => element.id === stockId)
		if (record.quantity > quantity) {
			record.quantity -= quantity
		} else {
			state.record.splice(state.stocks.indexOf(record), 1)
		}
		state.funds += stockPrice * quantity
	}
}

const actions = {
	sellStock({commit}, order) {
		commit('SELL_STOCK', order)
	}
}

const getters = {
	stockPortfolio(state, getters) {
		return state.stocks.map(stock => {
			console.log(stock)
			const record = getters.stocks.find(element => element.id === stock.id)
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: stock.name,
				price: stock.price
			}
		})
	},
	funds(state) {
		return state.funds
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}