import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			registerText: null
		}
	},
	watch: {
		registerText: function(val) {
			if (val) {
				$('#error-register').hide()
			}
		},
		createRes: function(res) {
			if (res) {
				this.$router.push('/')
			}
		}
	},
	computed: {
		...mapGetters('task', { createRes: 'create' })
	},
	methods: {
		...mapActions('task', ['create']),
		// タスク登録
		registerTask() {
			if (this.registerText) {
				this.parameter = {
					task_name: this.registerText
				}
				this.create(this.parameter)
			} else {
				$('#error-register').show()
			}
		}
	}
}
