const ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

export const convertHTMLEntities = (string) => string.replace(/[&<>"']/g, (char) => ENTITIES[char]);
