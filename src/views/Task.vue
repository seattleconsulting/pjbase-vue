<template>
	<div class="app">
		<div class="row">
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
					<tr v-for="task in tasks" :key="task.id">
						<td>{{ task.id }}</td>
						<td>{{ task.task_name }}</td>
						<div class="btn-group" role="group">
							<button class="btn btn-success" @click="editbtn(task.id)">編集</button>
							<button class="btn btn-danger" @click="removebtn(task.id)">削除</button>
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
<script src="../service/tasks/task.js">
</script>
