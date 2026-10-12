/* Optional progressive enhancement. Native links, focus and controls remain usable without JS. */
(() => {
  const table = document.querySelector('#apps-table');
  const filter = document.querySelector('#app-filter');
  const notice = document.querySelector('#notice');
  const rows = () => [...table.tBodies[0].rows].filter(r => !r.hidden);
  let selected = table.querySelector('[aria-selected="true"]');
  function choose(row, focus = false) {
    if (!row) return;
    table.querySelectorAll('tbody tr').forEach(r => r.setAttribute('aria-selected', String(r === row)));
    selected = row;
    document.querySelector('#detail-title').textContent = `${row.dataset.app} / release`;
    document.querySelector('#detail-release').textContent = row.dataset.release;
    document.querySelector('#detail-env').textContent = row.dataset.target;
    document.querySelector('#detail-health').textContent = `● ${row.dataset.state}`;
    if (focus) row.focus();
  }
  function show(message) { notice.textContent = message; notice.hidden = false; }
  table.addEventListener('click', e => { const row = e.target.closest('tbody tr'); if (row) choose(row); });
  table.addEventListener('focusin', e => { const row = e.target.closest('tbody tr'); if (row) choose(row); });
  filter.addEventListener('input', () => {
    const query = filter.value.trim().toLowerCase();
    [...table.tBodies[0].rows].forEach(row => row.hidden = !row.dataset.app.includes(query));
    if (!rows().includes(selected)) choose(rows()[0]);
  });
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.isComposing) return;
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if (e.key === 'Escape' && typing) { document.activeElement.blur(); return; }
    if (typing) return;
    if (e.key === '/') { e.preventDefault(); filter.focus(); filter.select(); }
    if (e.key === 'j' || e.key === 'k') { e.preventDefault(); const visible = rows(); const i = visible.indexOf(selected); choose(visible[Math.max(0, Math.min(visible.length - 1, i + (e.key === 'j' ? 1 : -1)))], true); }
    if (e.key === 'Enter' && document.activeElement === selected) { e.preventDefault(); show(`Inspect ${selected.dataset.app}: route to the release detail page in the real application.`); }
    if (e.key === '?') show('Keyboard: j/k select · / filter · Enter inspect · Escape leave input. Native Tab navigation remains available.');
    if (e.key === 'n') show('Create application: navigate to a dedicated /applications/new page. No modal required.');
  });
  document.querySelector('#new-app').addEventListener('click', () => show('Create application: link this action to /applications/new.'));
  document.querySelector('#inspect').addEventListener('click', () => show(`Inspect ${selected.dataset.app}: link to /applications/${encodeURIComponent(selected.dataset.app)}/releases.`));
})();
