import Axios from 'axios'
import AxiosPlugin from 'vue-axios-cors'
import Vue from 'vue'

Vue.use(AxiosPlugin)

export const taskService = {
	registerUser,
	loginUser,
	logoutUser,
	getAllTasks,
	create,
	getTaskById,
	edit,
	remove
}

/**
 * ユーザー登録
 *
 * @param parameter
 * @returns 
*/
function registerUser(parameter) {
	const result = Axios({
		method: 'POST',
		url: process.env.VUE_APP_ROOT_API + '/api/register',
		data: {
			name: parameter.name,
			email: parameter.email,
			password: parameter.password,
			password_confirmation: parameter.password_confirmation
		}
	})
	return result
}

/**
 * ユーザーログイン
 *
 * @param parameter
 * @returns 
*/
function loginUser(parameter) {
	const result = Axios({
		method: 'POST',
		url: process.env.VUE_APP_ROOT_API + '/api/login',
		data: {
			email: parameter.email,
			password: parameter.password
		}
	})
	return result
}

/**
 * ユーザーログアウト
 *
 * @returns 
*/
function logoutUser() {
	const result = Axios({
		method: 'GET',
		url: process.env.VUE_APP_ROOT_API + '/api/logout'
	})
	return result
}

/**
 * タスク一覧を取得
 *
 * @returns {objectArray}
*/
function getAllTasks() {
	const result = Axios({
		method: 'GET',
		url: process.env.VUE_APP_ROOT_API + '/api/tasks'
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
		url: process.env.VUE_APP_ROOT_API + '/api/tasks',
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
		url: process.env.VUE_APP_ROOT_API + '/api/tasks/' + parameter.id
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
		method: 'PUT',
		url: process.env.VUE_APP_ROOT_API + '/api/tasks',
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
		method: 'DELETE',
		url: process.env.VUE_APP_ROOT_API + '/api/tasks/' + parameter.id
	})
	return result
}
