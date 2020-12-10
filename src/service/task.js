import taskList from '../json/tasks.json'
import $ from 'jquery'

export default {
	data() {
		return {
			list: [],
			registerID: 0,
			registerText: null,
			editID: 0,
			edtiText: null,
			objIndex: 0,
			removeId: 0,
			register: false,
			update: false,
			taskList: true
		}
	},
	created() {
		this.list = taskList
	},
	watch: {
		registerText: function(val) {
			if (val) {
				$('#error-register').hide()
			}
		},
		edtiText: function(val) {
			if (val) {
				$('#error-edit').hide()
			}
		}
	},
	methods: {
		// 登録ボタンをクリック時
		add() {
			this.taskList = false
			this.register = true
			this.registerText = ''
		},
		// タスク登録
		registerTask() {
			if (this.registerText) {
				this.registerID = this.list[this.list.length - 1].id + 1
				this.list.push({ id: this.registerID, text: this.registerText })
				this.register = false
				this.taskList = true
			} else {
				$('#error-register').show()
			}
		},
		// 編集ボタンクリック時
		edit(id) {
			this.editID = id
			this.edtiText = this.list.filter(x => x.id === id).map(x => x.text)
			this.taskList = false
			this.update = true
		},
		// タスク編集
		editTask() {
			if (this.edtiText) {
				// Find index of specific object using findIndex method.    
				this.objIndex = this.list.findIndex(obj => obj.id === this.editID)
				// Update object's name property.
				this.list[this.objIndex].text = this.edtiText.toString()
				this.taskList = true
				this.update = false
			} else {
				$('#error-edit').show()
			}
		},
		remove(id) {
			this.removeId = id
			$('.confirm-popup').show()
		},
		cancel() {
			$('.confirm-popup').hide()
		},
		// タスク削除
		removeTask() {
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].id === this.removeId) {
					this.list.splice(i, 1)
					$('.confirm-popup').hide()
				}
			}
		}
	}
}
