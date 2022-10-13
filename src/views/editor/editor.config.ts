import { editor } from 'monaco-editor';

export const READ_EDITOR_OPTIONS: editor.IEditorOptions = {
  readOnly: true,
  automaticLayout: false,
  minimap: {
    enabled: false,
  },
  renderFinalNewline: false,
  scrollbar: {
    vertical: 'visible',
    horizontal: 'visible',
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  cursorWidth: 0,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};

export const EDIT_EDITOR_OPTIONS: editor.IEditorOptions = {
  readOnly: false,
  automaticLayout: false,
  minimap: {
    enabled: false,
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: false,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};
