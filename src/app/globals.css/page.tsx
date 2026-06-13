/* Mobile overflow fix */

.chip-row,
.tabs-row,
.category-row {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding: 0 28px 8px 0;
  scrollbar-width: none;
}

.chip-row::-webkit-scrollbar,
.tabs-row::-webkit-scrollbar,
.category-row::-webkit-scrollbar {
  display: none;
}

.chip-row > *,
.tabs-row > *,
.category-row > * {
  flex: 0 0 auto;
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
