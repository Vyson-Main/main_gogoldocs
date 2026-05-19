import { searchNotes } from '/src/features/security/services/notesService.js';

const NOTE_SEARCH_INPUT_ID = 'note-search-keyword';
const NOTE_SEARCH_RESULTS_ID = 'note-search-results';

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

export function renderNoteSearch(container) {
  function render(keyword = '') {
    const normalized = String(keyword).trim();
    const notes = searchNotes(normalized);

    container.innerHTML = `
      <section class="note-search">
        <div class="note-search__header">
          <label class="note-search__label" for="${NOTE_SEARCH_INPUT_ID}">
            Search notes
          </label>
          <input
            class="input-base note-search__input"
            id="${NOTE_SEARCH_INPUT_ID}"
            type="search"
            placeholder="Enter a keyword"
            value="${escapeHtml(normalized)}"
            autocomplete="off"
          />
        </div>

        <div class="note-search__summary">
          ${notes.length === 0
            ? 'No matching notes were found.'
            : `${notes.length} matching note${notes.length !== 1 ? 's' : ''} displayed.`}
        </div>

        <div id="${NOTE_SEARCH_RESULTS_ID}" class="note-search__results"></div>
      </section>
    `;

    renderResults(notes);
    bindEvents();
  }

  function renderResults(notes) {
    const results = container.querySelector(`#${NOTE_SEARCH_RESULTS_ID}`);
    if (!results) return;

    if (notes.length === 0) {
      results.innerHTML = `
        <div class="note-search__empty">
          Try a different keyword to find notes.
        </div>
      `;
      return;
    }

    results.innerHTML = notes.map(note => `
      <article class="note-search__note">
        <h3 class="note-search__title">${escapeHtml(note.title)}</h3>
        <p class="note-search__content">${escapeHtml(note.content)}</p>
      </article>
    `).join('');
  }

  function updateResults(keyword) {
    const notes = searchNotes(keyword);
    const summary = container.querySelector('.note-search__summary');

    if (summary) {
      summary.textContent = notes.length === 0
        ? 'No matching notes were found.'
        : `${notes.length} matching note${notes.length !== 1 ? 's' : ''} displayed.`;
    }

    renderResults(notes);
  }

  function bindEvents() {
    const input = container.querySelector(`#${NOTE_SEARCH_INPUT_ID}`);
    input?.addEventListener('input', () => {
      updateResults(input.value);
    });
  }

  render();
}
