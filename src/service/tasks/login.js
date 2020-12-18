import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

export default {
	data() {
		return {
			email: null,
			password: null,
			errEmail: null,
			errPwd: null,
			errMsg: null,
			parameter: {}
		}
	},
	watch: {
		result: function(val) {
			if (val) {
				localStorage.setItem('name', val.name)
				localStorage.setItem('token', val.token)
				this.$router.push('/task')
			}
		},
		err: function(val) {
			if (val) {
				if (val.status === 404) {
					this.errMsg = val.data.error
					$('#error-msg').show()
				}
			}
		}
	},
	computed: {
		...mapGetters('task', { result: 'login', err: 'loginError' })
	},
	methods: {
		...mapActions('task', ['loginUser']),
		// ユーザーログイン
		login() {
			$('#error-msg').hide()
			var flg = this.checkInput()
			if (flg) {
				this.parameter = {
					email: this.email,
					password: this.password
				}
				this.loginUser(this.parameter)
			}
		},
		// 入力データのチェック
		checkInput() {
			var flg = false

			if (this.email) {
				flg = true
				$('#error-email').hide()
			} else if (!this.validEmail(this.email)) {
				flg = false
				this.errEmail = 'メルアドラスを入力して下さい。'
				$('#error-email').show()
			} else {
				flg = false
				this.errEmail = 'メルアドラスを入力して下さい。'
				$('#error-email').show()
			}

			if (this.password) {
				flg = true
				$('#error-password').hide()
			} else {
				flg = false
				this.errPwd = 'パスワードを入力して下さい。'
				$('#error-password').show()
			}

			return flg
		},
		validEmail: function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return re.test(email)
		},
		register() {
			this.$router.push('/register')
		}
	}
}
