# Vanir UI instructions for coding agents

## Product and aesthetic

Build a **web control plane**, not a terminal UI. Audience: Linux/i3/sway keyboard-heavy hackers who own their platform. The platform is open-source, self-deploying, microkernel-based, blue-green by default, AI-first, and inspectable down to low-level system components.

## Hard constraints

1. Reuse `vanir.css` classes and CSS variables. Do not invent a separate design language per page.
2. Dense tables before card grids; compact 29px rows; minimal padding; monospace for operational data.
3. No modal dialogs, popovers, command palettes, toast stacks, hover-only actions, or floating overlays. Use routes, inline forms, persistent panes and in-flow notices.
4. Keyboard-first **web** behavior: native Tab/Enter, visible focus, `/` for search where appropriate, `j/k` for table navigation when not editing. Always support pointer interaction and browser shortcuts.
5. Do not build a TUI or render a terminal facsimile as the primary UI. A `<pre>` for logs is appropriate.
6. State is textual plus semantic color. Healthy green, warning amber, failed red, active selection blue. Do not rely on color alone.
7. Make views work in narrow tiled browser windows. Tables may scroll horizontally; detail panes stack below 720px. No arbitrary large min-width.
8. For destructive actions, use a dedicated confirmation view or inline confirmation with explicit target and consequences. Do not auto-run on keyboard selection.
9. Never fake live status in production. Show timestamps, source, version, and errors; expose release IDs and immutable artifact identifiers.
10. Favor server-rendered HTML and progressive enhancement. Avoid framework lock-in and heavy client dependencies.

## Common page patterns

- Listing: `v-heading` + `v-toolbar` + `v-table-wrap` / `v-table`.
- List/detail: `v-split`, `v-pane`, `v-dl`.
- Operational overview: small `v-grid` of `v-stat` followed by dense tables.
- Diagnostics: `v-section` + `v-log` with timestamps and text severity.
- Forms: labeled `v-input`, `v-button`, inline validation, native submit.
- Status: `v-good`, `v-warn`, `v-bad` with words/symbols.

## Definition of done for each new view

- Usable entirely with keyboard, without blocking browser shortcuts.
- No modal/popover and no hidden critical information.
- Dense at 1440px and functional in a 650px-wide browser tile.
- Semantic HTML, labeled controls, clear focus, screen-reader-friendly states.
- Real routes and real data interfaces; no placeholder success messages in shipped code.
- Loading, empty, partial-failure, and permission-denied states.
- Clear operation provenance: who/what, target, time, release, result.
