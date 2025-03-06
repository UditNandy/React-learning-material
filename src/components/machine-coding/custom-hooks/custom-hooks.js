export const useAddFolder = () => {
  const insertNode = (tree, name, isFolder) => {
    let newNode = {
      name: name,
      isFolder: isFolder,
      items: [],
      id: Math.random(0, 3),
    };
    if (isFolder) tree.items.unshift(newNode);
    else tree.items.push(newNode);
    return tree;
  };
  return { insertNode };
};
