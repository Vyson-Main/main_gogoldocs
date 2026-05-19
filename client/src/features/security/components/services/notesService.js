const notes = [
  {
    id: '1',
    title: 'Project kickoff',
    content: 'Review roadmap, assign owners, and confirm release milestones.'
  },
  {
    id: '2',
    title: 'Daily journal',
    content: 'Write down progress, blockers, and ideas for the next sprint.'
  },
  {
    id: '3',
    title: 'Shopping list',
    content: 'Buy coffee, printer paper, sticky notes, and a new keyboard.'
  },
  {
    id: '4',
    title: 'Security reminder',
    content: 'Rotate passwords monthly and review access control settings.'
  },
  {
    id: '5',
    title: 'Release notes',
    content: 'Document new search functionality and publish the update.'
  }
];

export function getNotes() {
  return [...notes];
}

export function searchNotes(keyword = '') {
  const normalized = String(keyword).trim().toLowerCase();
  if (!normalized) {
    return getNotes();
  }

  return notes.filter(note => {
    const title = note.title.toLowerCase();
    const content = note.content.toLowerCase();
    return title.includes(normalized) || content.includes(normalized);
  });
}

export function saveNote({ title, content }) {
  const normalizedTitle = String(title ?? '').trim();
  const normalizedContent = String(content ?? '').trim();

  if (!normalizedTitle || !normalizedContent) {
    throw new Error('Title and content are required. Empty notes cannot be saved.');
  }

  const note = {
    id: String(Date.now()),
    title: normalizedTitle,
    content: normalizedContent
  };

  notes.unshift(note);
  return note;
}
