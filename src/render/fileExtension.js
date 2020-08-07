const preview = {
  image: 'image',
  text: 'text',
  code: 'code',
  markdown: 'markdown'
}

const extensions = {
  gif: preview.image,
  jpeg: preview.image,
  jpg: preview.image,
  png: preview.image,

  md: preview.markdown,
  markdown: preview.markdown,
  mdown: preview.markdown,

  c: preview.code,
  cpp: preview.code,
  js: preview.code,
  py: preview.code,
  css: preview.code,
  html: preview.code,
  ts: preview.code,
  json: preview.code,
  yaml: preview.code,
  toml: preview.code,

  txt: preview.text
}

export { extensions, preview }
