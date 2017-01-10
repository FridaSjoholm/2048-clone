var Game = function(board = '0000000202000000'){
  var prelBoard= _.map(_.toArray(board), function(num){
    return parseInt(num, 10)
  })
  var rows = []
  for (i = 0; i<16; i += 4) {
    rows.push(prelBoard.slice(i, (i+4)))
  }
  this.board = rows
}

Game.prototype.toString = function() {
  var string =[]
  for (i = 0; i<4; i++) {
    string.push(this.board[i].join(''))
  }
  return string.join('\n')
}

Game.prototype.move = function(direction){
  var movedFlag = false
  var oldBoard = this.board.toString()

  for (i = 0; i<4; i++) {
    var array = this.arrayCreator(direction, i)
    var workingArray = filterZeros(array);
    workingArray = combineLikes(workingArray);
    workingArray = addZeroes(workingArray);
    this.saveChanges(workingArray, direction, i)

  }
  if (oldBoard !== this.board.toString()) {
    this.addNum(direction)
  }
}

Game.prototype.arrayCreator = function(direction, i){
  if (direction === 'right'){
    return [this.board[i][0], this.board[i][1], this.board[i][2], this.board[i][3]]
  }else if (direction === 'left'){
    return [this.board[i][3], this.board[i][2], this.board[i][1], this.board[i][0]]
  }else if (direction === 'down'){
    return [this.board[0][i], this.board[1][i], this.board[2][i], this.board[3][i]]
  }else if (direction === 'up'){
    return [this.board[3][i], this.board[2][i], this.board[1][i], this.board[0][i]]
  }
}

Game.prototype.saveChanges = function(array, direction, i){
  if (direction === 'right'){
    for (j=0; j<=3; j++){
      this.board[i][j] = array[j];
    }

  }else if(direction === 'left'){
    var r=0
    for(j=3; j>=0; j--){
      this.board[i][j] = array[r];
      r++
    }
  }else if(direction === 'down'){
    for (j=0; j<=3; j++){
      this.board[j][i] = array[j];
    }
  }else if(direction === 'up'){
    var r=0
    for(j=3; j>=0; j--){
      this.board[j][i] = array[r];
      r++
    }
  }
}

Game.prototype.addNum = function(direction){
  var array
  var indarr = [0,1,2,3]
  shuffle(indarr)
  if (direction === 'right'){
    array = this.arrayCreator('down', 0);
    for(var i = 0; i < indarr.length; i++){
      var ind = indarr[i];
      if(array[ind] === 0){
        this.board[ind][0] = 2;
        break;
      }
    }
  }else if(direction === 'left'){
    array = this.arrayCreator('down', 3);
    for(var i = 0; i < indarr.length; i++){
      var ind = indarr[i];
      if(array[ind] === 0){
        this.board[ind][3] = 2;
        break;
      }
    }
  }else if(direction === 'down'){
    array = this.arrayCreator('right', 0);
    for(var i = 0; i < indarr.length; i++){
      var ind = indarr[i];
      if(array[ind] === 0){
        this.board[0][ind] = 2;
        break;
      }
    }
  }else if(direction === 'up'){
    array = this.arrayCreator('right', 3);
    for(var i = 0; i < indarr.length; i++){
      var ind = indarr[i];
      if(array[ind] === 0){
        this.board[3][ind] = 2;
        break;
      }
    }
  }
}


var insertNum = function(x, y){
}

var filterZeros = function(array){
  return _.without(array, 0)
}

var combineLikes = function(array){
  var newArray =[]
  for(k = array.length-1; k >= 0; k--){
    if(k === 0 ){
      newArray.unshift(array[0])
    } else{
      if (array[k] === array[k-1]){
        newArray.unshift(array[k] + array[k-1])
        k--
      }else{
        newArray.unshift(array[k])
      }
    }
  }
  return newArray
}

var addZeroes =function(array){
  while(array.length < 4){
    array.unshift(0)
  }
  return array
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// var actedUponArray =[]
//  = [board[y][0], board[y][1], board[y][2], board [y][3]]
