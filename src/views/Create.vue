<template>
	<div class="app">
		<div class="row">
			<h3 class="row">タクス登録</h3>
			<div class="col-md-6">
				<div class="form-group">
					<label>Task :</label>
					<input type="text" class="text" v-model="registerText">
					<p class="error-txt" id="error-register">タスクを入力して下さい。</p>
				</div>
				<div class="btn-submit">
					<button type="submit" class="btn btn-primary" @click="registerTask()">登録</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../service/tasks/create.js">
</script>
