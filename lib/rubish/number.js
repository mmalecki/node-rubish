Number.prototype.times = function (iterator) {
  for (var i = 0; i < this; i++) {
    iterator(i);
  }
};

Number.prototype.upto = function (up, iterator) {
  for (var i = this.valueOf(); i <= up; i++) {
    iterator(i);
  }
  return this.valueOf();
};

