<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> | -->
			<router-link to="/task">Vue CRUD</router-link>
		</div>
		<div id="menu" v-if="showMenu()">
			<label class="menu-txt-name">{{name}}</label>
			<label class="menu-txt-logout" @click="logout()">ログアウト</label>
		</div>
		<router-view />
	</div>
</template>

<script src="./service/tasks/app.js">
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	#menu {
		width: 70%;
		margin: 0 auto;
		display: inline-block;
		border-bottom: 3px solid #5d5d99;
	}

	.menu-txt-name {
		float: left;
	}

	.menu-txt-logout {
		float: right;
		color: #5d5d99;
	}
</style>
