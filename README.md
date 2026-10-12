# Vanir control-plane UI kit

A dependency-free, dark, information-dense HTML/CSS design system for Vanir. Inspired by compact early developer PaaS interfaces, Unix conventions, and full-stack systems engineering. **Web UI, not a TUI.**

## Preview

Open `index.html` in a browser, or serve this directory with `python3 -m http.server 8080`.

## Files

- `vanir.css`: reusable tokens, shell, navigation, tables, panes, stats, forms, status, logs, and responsive behavior.
- `index.html`: semantic, accessible application-list and release-detail example.
- `vanir.js`: optional keyboard enhancement and demo-only interactions. Replace demo handlers with real routes and backend operations.
- `AGENTS.md`: binding design rules for agents creating new views.

## Page skeleton

```html
<link rel="stylesheet" href="/assets/vanir.css">
<div class="v-shell">
  <header class="v-topbar">...</header>
  <div class="v-layout">
    <aside class="v-sidebar" aria-label="Section navigation">...</aside>
    <main class="v-main">
      <div class="v-heading"><h1>Releases</h1></div>
      <section class="v-section">
        <div class="v-section-head"><h2>Recent releases</h2></div>
        <div class="v-table-wrap"><table class="v-table">...</table></div>
      </section>
    </main>
  </div>
  <footer class="v-statusbar">...</footer>
</div>
```

## Integration

Works with server-rendered HTML, Go templates, React, Vue, or HTMX. Prefer native links/forms and progressive enhancement. Use actual API-backed state; the demo contains illustrative data only. CSS variables in `:root` are the theme API. No dependencies or build step.

## Accessibility

Native Tab and links remain available. Keep semantic headings, table headers, accessible labels, visible focus, textual state (not color alone), and reduced-motion preferences. Do not hijack keyboard shortcuts while typing. For production, make keyboard navigation optional/configurable and ensure route changes, errors and live updates are announced appropriately.

## License

MIT; see LICENSE.
