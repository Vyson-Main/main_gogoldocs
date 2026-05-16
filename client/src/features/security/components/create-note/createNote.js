import { notesStore } from '/src/utils/store.js';
import { toastService } from '/src/components/toast/toastService.js';

export function createNote(title = '', content = '') {

  if (!title.trim() && !content.trim()) {
    toastService.show('Add a title or content first');
    return null;
  }

  const notes = notesStore.get();

  const newNote = {
    id: Date.now().toString(),
    title: title.trim() || 'Untitled',
    content: content.trim(),
    created: Date.now(),
    updated: Date.now()
  };

  notes.unshift(newNote);

  notesStore.set(notes);

  toastService.show('Note created successfully');

  return newNote;
}