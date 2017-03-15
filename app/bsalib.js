Array.prototype.toTwenty = function(){
    for(var i = 1; i <= 20; i += 1){
        this.push(i);
    }
  return this;
}

Array.prototype.toForty  = function(){
  for(var i = 2; i <= 40; i += 2){
    this.push(i)
  }
  return this;
};

Array.prototype.toOneThousand = function(){
  for(var i = 10; i <= 1000; i += 10){
    this.push(i)
  }
  return this;
};

Array.prototype.search = function(value){
  var position, count = -4;
  var obj = {};
  obj.index = -1;
  obj.length = this.length;
  var stop = this.length;
  var last, p = 0, delta = 0;
  do{
      last = p;
      if (this[p] > value) {
          stop = p + 1;
          p -= delta;
      } else if (this[p] === value) {
          obj.index = p;
          break;
      }
      delta = Math.floor((stop - p) / 2);
      p += delta; 
      count++;
    }while (last !== p);
  obj.count = count;
  return obj;
  
};

module.exports = Array.prototype;

//export {toTwenty, toForty, toOneThousand};
// var array = [];
//   var obj = {};
//   this.count = 0;
//   for(var i = 0; i < this.length; i++){
//     array[i] = this[i]
//   }
//   //console.log(array);
//   this.searchElement = function(myarray, myvalue){
//     var stop = myarray.length;
//     var last, p = 0, delta = 0;
//     var count = 0;
//     do {
//       last = p;
//       if (myarray[p] > value) {
//           stop = p + 1;
//           p -= delta;
//       } else if (myarray[p] === value) {
//           return p;
//           break;
//       }
//       delta = Math.floor((stop - p) / 2);
//       p += delta;
//       this.count++;
//       }while (last !== p);
//       return -1; 
//   }
  
//   obj.index = this.searchElement(array, value);
//   obj.count = this.count;
//   return obj;