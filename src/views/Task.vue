<template>
	<div class="app">
		<div class="row" v-if="register">
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
		<div class="row" v-if="update">
			<h3 class="row">タクス編集</h3>
			<div class="col-md-6">
				<div class="form-group">
					<label>Task :</label>
					<input type="text" class="text" v-model="edtiText">
					<p class="error-txt" id="error-edit">タスクを入力して下さい。</p>
				</div>
				<div class="btn-submit">
					<button type="submit" class="btn btn-primary" @click="editTask()">編集</button>
				</div>
			</div>
		</div>
		<div class="row" v-if="taskList">
			<h3 class="row">タクス一覧</h3>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Tasks</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="task in list" :key="task.id">
						<td>{{ task.id }}</td>
						<td>{{ task.text }}</td>
						<div class="btn-group" role="group">
							<button class="btn btn-success" @click="edit(task.id)">編集</button>
							<button class="btn btn-danger" @click="remove(task.id)">削除</button>
						</div>
					</tr>
				</tbody>
			</table>
			<div class="btn-submit">
				<button type="submit" class="btn btn-primary" @click="add()">登録</button>
			</div>
		</div>
		<div class="confirm-popup" role="alert">
			<div class="confirm-popup-container">
				<p>本当に削除しますか？</p>
				<ul class="confirm-buttons">
					<li><a @click="cancel()" class="cancel">いいえ</a></li>
					<li><a @click="removeTask()" class="ok">はい</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script src="../service/task.js">
</script>
