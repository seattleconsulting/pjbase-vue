import { taskService } from '../../service'

/**
 * State of task
 */
function initialState() {
	return {
		list: {},
		listError: null,
		create: null,
		createError: null,
		task: null,
		taskError: null,
		edit: null,
		editError: null,
		remove: null,
		removeError: null
	}
}
/**
 * Getters of task
 */
const getters = {
	list: state => state.list,
	listError: state => state.listError,
	create: state => state.create,
	createError: state => state.createError,
	task: state => state.task,
	taskError: state => state.taskError,
	edit: state => state.edit,
	editError: state => state.editError,
	remove: state => state.remove,
	removeError: state => state.removeError
}
/**
 * Actions of task
 */
const actions = {
	getAllTasks({ commit }) {
		taskService.getAllTasks().then(
			result => {
				commit('getAllTaskSuccess', result.data)
			},
			error => {
				if (error.response) {
					commit('getAllTaskFail', error.response)
				}
			}
		)
	},
	create({ commit }, parameter) {
		taskService.create(parameter).then(
			result => {
				commit('createSuccess', result.data)
			},
			error => {
				if (error.response) {
					commit('createFail', error.response)
				}
			}
		)
	},
	getTaskById({ commit }, parameter) {
		taskService.getTaskById(parameter).then(
			result => {
				commit('getTaskByIdSuccess', result.data)
			},
			error => {
				if (error.response) {
					commit('getTaskByIdFail', error.response)
				}
			}
		)
	},
	edit({ commit }, parameter) {
		taskService.edit(parameter).then(
			result => {
				commit('editSuccess', result.data)
			},
			error => {
				if (error.response) {
					commit('editFail', error.response)
				}
			}
		)
	},
	remove({ commit }, parameter) {
		taskService.remove(parameter).then(
			result => {
				commit('removeSuccess', result.data)
			},
			error => {
				if (error.response) {
					commit('removeFail', error.response)
				}
			}
		)
	}
}
/**
 * Mutations of task
 */
const mutations = {
	getAllTaskSuccess(state, data) {
		state.list = data
	},
	getAllTaskFail(state, error) {
		state.listError = error
	},
	createSuccess(state, data) {
		state.create = data
	},
	createFail(state, error) {
		state.createError = error
	},
	getTaskByIdSuccess(state, data) {
		state.task = data
	},
	getTaskByIdFail(state, error) {
		state.taskError = error
	},
	editSuccess(state, data) {
		state.edit = data
	},
	editFail(state, error) {
		state.editError = error
	},
	removeSuccess(state, data) {
		state.remove = data
	},
	removeFail(state, error) {
		state.removeError = error
	}
}

export const task = {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
