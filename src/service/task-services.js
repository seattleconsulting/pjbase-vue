import Axios from 'axios'
import AxiosPlugin from 'vue-axios-cors'
import Vue from 'vue'

Vue.use(AxiosPlugin)

export const taskService = {
	getAllTasks,
	create,
	getTaskById,
	edit,
	remove
}

/**
 * タスク一覧を取得
 *
 * @returns {objectArray}
*/
function getAllTasks() {
	const result = Axios({
		method: 'GET',
		url: process.env.VUE_APP_ROOT_API + '/api/task/list'
	})
	return result
}

/**
 * タスクを作成
 *
 * @param parameter
 * @returns 
*/
function create(parameter) {
	const result = Axios({
		method: 'POST',
		url: process.env.VUE_APP_ROOT_API + '/api/task/create',
		data: {
			task_name: parameter.task_name
		}
	})
	return result
}

/**
 * IDでタスクを取得
 *
 * @param parameter
 * @returns 
*/
function getTaskById(parameter) {
	const result = Axios({
		method: 'GET',
		url: process.env.VUE_APP_ROOT_API + '/api/task/getTask/' + parameter.id
	})
	return result
}

/**
 * タスクを編集
 *
 * @param parameter
 * @returns 
*/
function edit(parameter) {
	const result = Axios({
		method: 'GET',
		url: process.env.VUE_APP_ROOT_API + '/api/task/edit',
		params: {
			id: parameter.id,
			task_name: parameter.task_name
		}
	})
	return result
}

/**
 * タスクを削除
 *
 * @param parameter
 * @returns 
*/
function remove(parameter) {
	const result = Axios({
		method: 'GET',
		url: process.env.VUE_APP_ROOT_API + '/api/task/delete/' + parameter.id
	})
	return result
}
