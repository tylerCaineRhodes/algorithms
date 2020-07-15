 function minHeightBst(array) {
   const construct = (array, bst, start, end) => {
     if (end < start) return;
     let mid = ~~((start + end) / 2);
     if (!bst) {
       bst = new BST(array[mid]);
     } else {
       bst.insert(array[mid]);
     }
     construct(array, bst, start, mid - 1);
     construct(array, bst, mid + 1, end);
     return bst;
   };
   return construct(array, null, 0, array.length - 1);
 }

 class BST {
   constructor(value) {
     this.value = value;
     this.left = null;
     this.right = null;
   }

   insert(value) {
     if (value < this.value) {
       if (this.left === null) {
         this.left = new BST(value);
       } else {
         this.left.insert(value);
       }
     } else {
       if (this.right === null) {
         this.right = new BST(value);
       } else {
         this.right.insert(value);
       }
     }
   }
 }

 minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]);