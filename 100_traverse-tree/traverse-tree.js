export const traverseTree = (tree, cb) => {
  if (!tree) return false;

  cb(tree);
  tree?.children.forEach((child) => traverseTree(child, cb));
};
