var Game = function(board = '00200000000000000020'){
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
  if (direction === 'right'){
    for (y = 0; y<4; y++) {
      for (x = 0, x <4, x++){})

      })
    }
  }

}
