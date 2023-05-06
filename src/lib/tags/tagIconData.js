const TAG_TYPE_CSS_CLASSES = Object.freeze({
  artist: 'codicon codicon-edit',
  character: 'codicon codicon-person',
  copyright: 'codicon codicon-folder',
  metadata: 'codicon codicon-info',
  rating: 'codicon codicon-unverified',
  source: 'codicon codicon-link',
  supertag: 'codicon codicon-star-full',
})

/** @param {string} type */
export const getClassForTagType = (type) => {
  return TAG_TYPE_CSS_CLASSES[type] ?? ''
}
