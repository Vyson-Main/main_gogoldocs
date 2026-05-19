import { saveNote } from '/src/features/security/services/notesService.js';

const NOTE_TITLE_ID = 'note-input-title';
const NOTE_CONTENT_ID = 'note-input-content';
const NOTE_ERROR_ID = 'note-input-error';
const NOTE_SAVE_ID = 'note-input-save';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, tag => {
    const chars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return chars[tag] || tag;
  });
}

export function renderNoteEditor(container, onSaved) {
  function render(title = '', content = '') {
    container.innerHTML = `
      <section class="note-editor">
        <h2 class="note-editor__heading">Create a note</h2>

        <label class="note-editor__label" for="${NOTE_TITLE_ID}">
          Note title
        </label>
        <input
          id="${NOTE_TITLE_ID}"
          class="input-base note-editor__input"
          type="text"
          placeholder="Enter note title"
          value="${escapeHtml(title)}"
          autocomplete="off"
        />

        <label class="note-editor__label" for="${NOTE_CONTENT_ID}">
          Note content
        </label>
        <textarea
          id="${NOTE_CONTENT_ID}"
          class="input-base note-editor__textarea"
          placeholder="Enter note content"
          rows="5"
        >${escapeHtml(content)}</textarea>

        <div id="${NOTE_ERROR_ID}" class="note-editor__error" style="display:none"></div>

        <button class="btn btn--full note-editor__btn" id="${NOTE_SAVE_ID}">
          Save note
        </button>
      </section>
    `;

    bindEvents();
  }

  function bindEvents() {
    const titleInput = container.querySelector(`#${NOTE_TITLE_ID}`);
    const contentInput = container.querySelector(`#${NOTE_CONTENT_ID}`);
    const saveButton = container.querySelector(`#${NOTE_SAVE_ID}`);
    const errorEl = container.querySelector(`#${NOTE_ERROR_ID}`);

    titleInput?.focus();

    function handleSave() {
      const noteTitle = titleInput?.value ?? '';
      const noteContent = contentInput?.value ?? '';

      try {
        const savedNote = saveNote({ title: noteTitle, content: noteContent });
        errorEl.style.display = 'none';
        errorEl.textContent = '';
        if (typeof onSaved === 'function') {
          onSaved(savedNote);
        }
        render('', '');
      } catch (err) {
        errorEl.textContent = err.message || 'Empty notes cannot be saved.';
        errorEl.style.display = '';
      }
    }

    saveButton?.addEventListener('click', handleSave);
    contentInput?.addEventListener('keydown', e => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleSave();
      }
    });
  }

  render();
}
