import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

export default {
	data() {
		return {
			name: null,
			email: null,
			password: null,
			confirmpwd: null,
			errName: null,
			errEmail: null,
			errPwd: null,
			errConfirmPwd: null,
			errMsg: null,
			parameter: {}
		}
	},
	watch: {
		result: function(val) {
			if (val) {
				this.$router.push('/login')
			}
		},
		err: function(val) {
			if (val.status === 404) {
				this.errMsg = val.data.error
				$('#error-msg').show()
			}
		}
	},
	computed: {
		...mapGetters('task', { result: 'register', err: 'regError' })
	},
	methods: {
		...mapActions('task', ['registerUser']),
		// User登録
		register() {
			$('#error-msg').hide()
			var flg = this.checkInput()
			if (flg) {
				this.parameter = {
					name: this.name,
					email: this.email,
					password: this.password,
					password_confirmation: this.confirmpwd
				}
				this.registerUser(this.parameter)
			}
		},
		// 入力データのチェック
		checkInput() {
			var flg = false

			if (this.name) {
				flg = true
				$('#error-name').hide()
			} else {
				flg = false
				this.errName = '氏名を入力して下さい。'
				$('#error-name').show()
			}

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

			if (this.confirmpwd) {
				flg = true
				$('#error-confirm-pwd').hide()
			} else {
				flg = false
				this.errConfirmPwd = '確認パスワードを入力して下さい。'
				$('#error-confirm-pwd').show()
			}

			if (!this.password && !this.confirmpwd) {
				if (this.password !== this.errConfirmPwd) {
					flg = false
					this.errConfirmPwd = 'パスワードと確認パスワードが一致しません。'
					$('#error-confirm-pwd').show()
				} else {
					flg = true
					$('#error-confirm-pwd').hide()
				}
			}

			return flg
		},
		validEmail: function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return re.test(email)
		}
	}
}
