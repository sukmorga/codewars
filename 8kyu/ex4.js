String.prototype.isUpperCase = function() {
    let x = this;
    if (x == x.toUpperCase()) {
      console.log(true)
      return true
    }
    console.log(false)
    return false;
  }