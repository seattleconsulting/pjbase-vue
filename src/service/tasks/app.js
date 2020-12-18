import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			name: null,
			current: null
		}
	},
	watch: {
		result: function(val) {
			if (val.status === 200) {
				localStorage.removeItem('name')
				localStorage.removeItem('token')
				this.$router.push('/login')
			}
		}
	},
	computed: {
		...mapGetters('task', { result: 'logout' })
	},
	methods: {
		...mapActions('task', ['logoutUser']),
		logout() {
			this.logoutUser()
		},
		showMenu() {
			this.current = this.$route.name
			if (this.current === 'Login') {
				return false
			} else if (this.current === 'Register') {
				return false
			} else {
				this.name = localStorage.getItem('name')
				return true
			}
		}
	}
}
