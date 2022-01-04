class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    // adding the element as last element of the array
    this.length = this.items.push(item);
    // sorting the array in place by ascending order
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    // throwing an error if the position is not available
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    // returning the element at position in the array
    return this.items[pos];
  }

  max() {
    // thowing an error in case the array is empty
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    // returning the last element of the arrray since it is sorted by asc. order
    return this.items[this.length - 1];
  }
  
  min() {
    // thowing an error in case the array is empty
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    // returning the first element of the arrray since it is sorted by asc. order
    return this.items[0];
  }
  
  sum() {
    // accumulating all values in the array
    // the initial value (0) passed to the HOF reduce is the one used in case the array is empty
    return this.items.reduce((acc, value) => acc + value, 0);
  }
  
  avg() {
    // thowing an error in case the array is empty
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    // returning the average
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
