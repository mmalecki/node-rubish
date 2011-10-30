Number.prototype.times = function (iterator) {
  for (var i = 0; i < this; i++) {
    iterator(i);
  }
};

