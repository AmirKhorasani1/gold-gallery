export function serializeDoc<T extends Record<string, any>>(doc: T) {
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

export function serializeDocs<T extends Record<string, any>>(docs: T[]) {
  return docs.map(serializeDoc);
}