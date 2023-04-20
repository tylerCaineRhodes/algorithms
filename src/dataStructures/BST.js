export class BST {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.insert(value)
      } else {
        this.left = new BST(value)
      }
    } else {
      if (this.right !== null) {
        this.right.insert(value)
      } else {
        this.right = new BST(value);
      }
    }
  }

  getMinValue() {
    if (this.left !== null) {
      return this.left.getMinValue()
    } else {
      return this.value;
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left !== null) {
        return this.left.contains(value)
      } else {
        return false;
      }
    } else {
      if (this.right !== null) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  }

  remove(value, parent = null) {
    if (value < this.value) {
      this.left.remove(value, this);
    } else if (value > this.value) {
      this.right.remove(value, this)
    }

    if (value === this.value) {
      if (this.left && this.right) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this)
        return this;
      }
      if (!parent) {
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
        return this;
      }

      if (parent.left === this) {
        parent.left = this.left ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right
      }
    }
    return this;
  }
}
