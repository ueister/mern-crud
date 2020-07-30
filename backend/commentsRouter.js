import express from 'express';

const router = express.Router();

let Comment = require('./models/comments');

// get all records in collection
router.get('/comments', (req, res) => {
	Comment.find((err, comments) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ comments });
		}
	});
});

// find by id
router.get('/comments/:id', (req, res) => {
	let id = req.params.id;
	if (!id) return res.json({ success: false, error: 'No comment id' });
	Comment.findById(id, (err, comment) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json(comment);
		}
    });
});

// add new record in collection
router.post('/comments/add', (req, res) => {
	if (!req.body.author || !req.body.text) {
		return res.json({ success: false, data: 'You are missing a requirement' });
	}

	let comment = new Comment(req.body);
	comment.save(err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// update record with an id
router.post('/comments/update/:id', (req, res) => {
	let id = req.params.id;
	if (!id) return res.json({ success: false, error: 'No to do id' });

	if (!req.body.author || !req.body.text) {
		return res.json({ success: false, data: 'You are missing a requirement' });
	}

	Comment.findById(id, (err, comment) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			comment.author = req.body.author;
			comment.text = req.body.text;

			comment.save(err => {
				if (err) return res.json({ success: false, error: err });
				return res.json({ success: true });
			});
		}
    });
});

// delete a record with an id
router.delete('/comments/delete/:id', (req, res) => {
	let id = req.params.id;
	if (!id) return res.json({ success: false, error: 'No to do id' });

	Comment.remove({ _id: id }, (error, comment) => {
		if (error) return res.json({ success: false, error });
		return res.json({ success: true });
	});
});

module.exports = router;