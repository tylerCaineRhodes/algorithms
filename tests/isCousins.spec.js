const { isCousins } = require('../javascript/algorithms/isCousins.js');

   class TreeNode {
    constructor(val, left, right) {
      this.val = (val===undefined ? 0 : val);
      this.left = (left===undefined ? null : left);
      this.right = (right===undefined ? null : right);
    };
  };

  class Tree {
    constructor(val){
      this.root = val || null;
      this.left = null;
      this.right = null;
    };

    insertLevelOrder = (arr, root, index) => {
      //base case
      if(index < arr.length){
        let temp = new TreeNode(arr[index]);
        root = temp;
        //insert left child
        root.left = this.insertLevelOrder(arr, root.left, (2 * index + 1));
        //insert right child
        root.left = this.insertLevelOrder(arr, root.right, (2 * index + 2));
      };
      return root;
    };
  };

  let testTree1 = new Tree();
  let populated1 = testTree1.insertLevelOrder([1, 2, 3, 4], testTree1.root, 0);

  let testTree2 = new Tree();
  let populated2 = testTree2.insertLevelOrder([1, 2, 3, null, 4, null, 5], testTree2.root, 0);

  let testTree3 = new Tree();
  let populated3 = testTree3.insertLevelOrder([1, 2, 3, null, 4], testTree3.root, 0);



  describe('isCousins', () => {
    it('case: root = [1,2,3,4], x = 4, y = 3, ouput: false', () => {
      expect(isCousins(populated1, 4, 3)).toBe(false);
    });

    it('case: root = [1,2,3, null, 4, null, 5], x = 5, y = 4, ouput: true', () => {
      expect(isCousins(populated2, 5, 4)).toBe(true);
    });

    it('case: root = [1, 2, 3, null, 4], x = 2, y = 3, ouput: false', () => {
      expect(isCousins(populated3, 2, 3)).toBe(false);
    });
  });