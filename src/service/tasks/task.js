import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			parameter: {},
			removeId: 0
		}
	},
	created() {
		this.getAllTasks()
	},
	watch: {
		removeRes: function(res) {
			if (res) {
				$('.confirm-popup').hide()
				this.getAllTasks()
			}
		}
	},
	computed: {
		...mapGetters('task', { tasks: 'list', removeRes: 'remove' })
	},
	methods: {
		...mapActions('task', ['getAllTasks', 'remove']),

		// 登録ボタンをクリック時
		add() {
			this.$router.push('/create')
		},
		// 編集ボタンクリック時
		editbtn(id) {
			this.$router.push('/edit/' + id)
		},
		removebtn(id) {
			this.removeId = id
			$('.confirm-popup').show()
		},
		cancel() {
			$('.confirm-popup').hide()
		},
		// タスク削除
		removeTask() {
			this.parameter = {
				id: this.removeId
			}
			this.remove(this.parameter)
		}
	}
}
