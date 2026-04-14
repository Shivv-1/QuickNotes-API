import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readFileSync, writeFileSync } from 'fs';

const router = Router();

// Helper functions to read and write data.json
function readData() {
  const data = readFileSync('./data.json', 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

// GET /notes - Get all notes (with optional search)
router.get('/', (req, res) => {
  const { notes } = readData();
  const { search } = req.query;

  if (search) {
    const filtered = notes.filter(note =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
    return res.status(200).json({ notes: filtered });
  }

  res.status(200).json({ notes });
});

// GET /notes/:id - Get a single note
router.get('/:id', (req, res) => {
  const { notes } = readData();
  const note = notes.find(n => n.id === req.params.id);

  if (!note) return res.status(404).json({ error: 'Note not found' });

  res.status(200).json({ note });
});

// POST /notes - Create a note
router.post('/', (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const data = readData();
  const newNote = {
    id: uuidv4(),
    title,
    content,
    tags: tags || [],
    created_at: new Date().toISOString()
  };

  data.notes.push(newNote);
  writeData(data);

  res.status(201).json({ note: newNote });
});

// PUT /notes/:id - Update a note
router.put('/:id', (req, res) => {
  const { title, content, tags } = req.body;
  const data = readData();
  const index = data.notes.findIndex(n => n.id === req.params.id);

  if (index === -1) return res.status(404).json({ error: 'Note not found' });

  data.notes[index] = {
    ...data.notes[index],
    title: title || data.notes[index].title,
    content: content || data.notes[index].content,
    tags: tags || data.notes[index].tags,
    updated_at: new Date().toISOString()
  };

  writeData(data);
  res.status(200).json({ note: data.notes[index] });
});

// DELETE /notes/:id - Delete a note
router.delete('/:id', (req, res) => {
  const data = readData();
  const index = data.notes.findIndex(n => n.id === req.params.id);

  if (index === -1) return res.status(404).json({ error: 'Note not found' });

  data.notes.splice(index, 1);
  writeData(data);

  res.status(200).json({ message: 'Note deleted successfully' });
});

export default router;