const express = require('express');
const app = express();
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// ---------------------------------------------------------------------
// In-memory store (FCC tests run within a single process/session)
// If you want persistence, swap this with MongoDB/Mongoose later.
// ---------------------------------------------------------------------

const users = new Map(); // id -> { username, exercises: [] }
const makeId = () => crypto.randomUUID().replace(/-/g, '');

// Create user
// POST /api/users { username }
app.post('/api/users', (req, res) => {
  const username = (req.body.username || '').trim();
  if (!username) return res.status(400).json({ error: 'username is required' });

  const _id = makeId();
  users.set(_id, { username, exercises: [] });
  res.json({ username, _id });
});

// List users
// GET /api/users
app.get('/api/users', (req, res) => {
  const list = Array.from(users.entries()).map(([id, u]) => ({ username: u.username, _id: id }));
  res.json(list);
});

// Add exercise
// POST /api/users/:_id/exercises { description, duration, date? }
app.post('/api/users/:_id/exercises', (req, res) => {
  const _id = req.params._id;
  const user = users.get(_id);
  if (!user) return res.status(404).json({ error: 'user not found' });

  const description = (req.body.description || '').trim();
  const duration = parseInt(req.body.duration, 10);
  const dateInput = (req.body.date || '').trim();

  if (!description) return res.status(400).json({ error: 'description is required' });
  if (!Number.isFinite(duration)) return res.status(400).json({ error: 'duration must be a number' });

  const date = dateInput ? new Date(dateInput) : new Date();
  if (Number.isNaN(date.getTime())) return res.status(400).json({ error: 'invalid date' });

  const exercise = {
    description,
    duration,
    date: date.toDateString(),
  };

  user.exercises.push(exercise);

  res.json({
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date,
    _id
  });
});

// Logs
// GET /api/users/:_id/logs?from&to&limit
app.get('/api/users/:_id/logs', (req, res) => {
  const _id = req.params._id;
  const user = users.get(_id);
  if (!user) return res.status(404).json({ error: 'user not found' });

  let log = user.exercises.slice();

  const from = req.query.from ? new Date(String(req.query.from)) : null;
  const to = req.query.to ? new Date(String(req.query.to)) : null;
  const limit = req.query.limit ? parseInt(String(req.query.limit), 10) : null;

  if (from && !Number.isNaN(from.getTime())) {
    log = log.filter(e => new Date(e.date).getTime() >= from.getTime());
  }
  if (to && !Number.isNaN(to.getTime())) {
    log = log.filter(e => new Date(e.date).getTime() <= to.getTime());
  }
  if (limit && Number.isFinite(limit)) {
    log = log.slice(0, limit);
  }

  res.json({
    username: user.username,
    count: log.length,
    _id,
    log
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;
