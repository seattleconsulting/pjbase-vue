<template>
	<div class="app">
		<div class="row">
			<h3 class="row">ユーザー登録</h3>
			<div class="col-md-6">
				<div class="form-group">
					<p class="err-txt" id="error-msg">{{errMsg}}</p>
				</div>
				<div class="form-group">
					<label class="reg-txt">Name :</label>
					<input type="text" class="text" v-model="name">
					<p class="err-txt" id="error-name">{{errName}}</p>
				</div>
				<div class="form-group">
					<label class="reg-txt">Email :</label>
					<input type="email" class="text" v-model="email">
					<p class="err-txt" id="error-email">{{errEmail}}</p>
				</div>
				<div class="form-group">
					<label class="reg-txt">Password :</label>
					<input type="password" class="text" v-model="password">
					<p class="err-txt" id="error-password">{{errPwd}}</p>
				</div>
				<div class="form-group">
					<label class="reg-txt">Confirm Password :</label>
					<input type="password" class="text" v-model="confirmpwd">
					<p class="err-txt" id="error-confirm-pwd">{{errConfirmPwd}}</p>
				</div>
				<div class="form-btn-group">
					<button type="submit" class="btn btn-input" @click="register()">登録</button>
				</div>
				<div class="form-group">
					<label class="text-link" @click="gotoLogin()">ログイン画面へ</label>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../service/tasks/register.js">
</script>
