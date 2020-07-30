import express from 'express';

const router = express.Router();

let Todo = require('./models/todos');

// get all records in collection
router.get('/todos', (req, res) => {
	Todo.find((err, todos) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ todos });
		}
	});
});

// find by id
router.get('/todos/:id', (req, res) => {
	let id = req.params.id;
	if (!id) return res.json({ success: false, error: 'No to do id' });
	Todo.findById(id, (err, todo) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json(todo);
		}
    });
});

// add new record in collection
router.post('/todos/add', (req, res) => {
	if (!req.body.todo_description || !req.body.todo_responsible || !req.body.todo_priority) {
		return res.json({ success: false, data: 'You are missing a requirement' });
	}

	let todo = new Todo(req.body);
	todo.save(err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// update record with an id
router.post('/todos/update/:id', (req, res) => {
	let id = req.params.id;
	if (!id) return res.json({ success: false, error: 'No to do id' });

	if (!req.body.todo_description || !req.body.todo_responsible || !req.body.todo_priority) {
		return res.json({ success: false, data: 'You are missing a requirement' });
	}

	Todo.findById(id, (err, todo) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			todo.todo_description = req.body.todo_description;
			todo.todo_responsible = req.body.todo_responsible;
			todo.todo_priority = req.body.todo_priority;
			todo.todo_completed = req.body.todo_completed;

			todo.save(err => {
				if (err) return res.json({ success: false, error: err });
				return res.json({ success: true });
			});
		}
    });
});

// delete a record with an id
router.delete('/todos/delete/:id', (req, res) => {
	let id = req.params.id;
	if (!id) return res.json({ success: false, error: 'No to do id' });

	Todo.remove({ _id: id }, (error, todo) => {
		if (error) return res.json({ success: false, error });
		return res.json({ success: true });
	});
});

module.exports = router;