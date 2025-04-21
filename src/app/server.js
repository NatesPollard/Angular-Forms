const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory task storage
const tasks = [
  {
    title: 'Task 1',
    description: 'Description for Task 1',
    date: '2025-04-14',
    time: '10:00',
    priority_level: 'High',
    category: 'Work',
    progress_level: 'In Progress'
  },
  {
    title: 'Task 2',
    description: 'Description for Task 2',
    date: '2025-04-15',
    time: '14:00',
    priority_level: 'Medium',
    category: 'Personal',
    progress_level: 'Not Started'
  }
];

// Get all tasks
app.get('/tasks/get_all', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks/add', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = 3000; // Change to a different port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});