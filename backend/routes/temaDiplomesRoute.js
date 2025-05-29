const express = require('express');
const router = express.Router();
const { TemaDiplomes } = require('../models');  // importon modelin e instancuar

router.post('/', async (req, res) => {
  const { student_id, professor_id, title, description, deadline } = req.body;

  if (!student_id || !professor_id || !title) {
    return res.status(400).json({ error: 'student_id, professor_id dhe title janë të detyrueshme.' });
  }

  try {
    const newTopic = await TemaDiplomes.create({
      student_id,
      professor_id,
      title,
      description,
      deadline
    });
    res.status(201).json(newTopic);
  } catch (error) {
    console.error('Gabim në krijimin e temës:', error);
    res.status(500).json({ error: 'Gabim gjatë krijimit të temës së diplomës.' });
  }
});

module.exports = router;
