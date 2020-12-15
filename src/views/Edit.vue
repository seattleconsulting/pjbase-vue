<template>
	<div class="app">
		<div class="row">
			<h3 class="row">タクス編集</h3>
			<div class="col-md-6">
				<div class="form-group">
					<label>Task :</label>
					<input type="text" class="text" v-model="editText">
					<p class="error-txt" id="error-edit">タスクを入力して下さい。</p>
				</div>
				<div class="btn-submit">
					<button type="submit" class="btn btn-back" @click="backBtn()">戻る</button>
					<button type="submit" class="btn btn-edit" @click="editTask()">編集</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="../service/tasks/edit.js">
</script>
