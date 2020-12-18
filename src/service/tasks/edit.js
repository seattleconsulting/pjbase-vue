import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			parameter: {},
			editText: null
		}
	},
	created() {
		this.parameter = {
			id: this.$route.params.id
		}
		this.getTaskById(this.parameter)
	},
	watch: {
		editText: function(val) {
			if (val) {
				$('#error-edit').hide()
			}
		},
		editRes: function(res) {
			if (res) {
				this.$router.push('/task')
			}
		},
		task: function(res) {
			if (res) {
				this.editText = res.task_name
			}
		}
	},
	computed: {
		...mapGetters('task', { editRes: 'edit', task: 'task' })
	},
	methods: {
		...mapActions('task', ['getTaskById', 'edit']),
		backBtn() {
			this.$router.push('/task')
		},
		// タスク編集
		editTask() {
			if (this.editText) {
				this.parameter = {
					id: this.$route.params.id,
					task_name: this.editText.toString()
				}
				this.edit(this.parameter)
			} else {
				$('#error-edit').show()
			}
		}
	}
}
