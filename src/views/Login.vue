<template>
	<div class="app">
		<div class="row">
			<h3 class="row">ユーザーログイン</h3>
			<div class="col-md-6">
				<div class="form-group">
					<p class="err-txt" id="error-msg">{{errMsg}}</p>
				</div>
				<div class="form-group">
					<label class="reg-txt">Email :</label>
					<input type="text" class="text" v-model="email">
					<p class="err-txt" id="error-email">{{errEmail}}</p>
				</div>
				<div class="form-group">
					<label class="reg-txt">Password :</label>
					<input type="password" class="text" v-model="password">
					<p class="err-txt" id="error-password">{{errPwd}}</p>
				</div>
				<div class="form-btn-group">
					<button type="submit" class="btn btn-login" @click="login()">ログイン</button>
				</div>
				<div class="form-group">
					<label class="text-link"><a href="/register">新しいアカウントを作成する</a></label>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../service/tasks/login.js">
</script>
