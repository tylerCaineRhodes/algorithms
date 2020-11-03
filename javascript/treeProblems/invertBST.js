const invertTree = (root) => {
  if(root === null){
    return null;
  } 
  const left = invertTree(root.left), right = invertTree(root.right)
  root.left = right;
  root.right = left;

  return root;
};

module.exports = { invertTree }
