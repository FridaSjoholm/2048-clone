$(document).ready(function() {
  game = new Game()
  bindEventHandlers();
  renderBoard();

});

var bindEventHandlers = function(){
  move()
}

var move = function(){
  $(document).on('keyup', function(event){
    if (event.keyCode === 39){
      game.move('right')
      renderBoard();
    }else if(event.keyCode === 37){
      game.move('left')
      renderBoard();
    }else if(event.keyCode === 38){
      game.move('up')
      renderBoard();
    }else if(event.keyCode === 40){
      game.move('down')
      renderBoard();
    }
  })
}

var renderBoard = function(){
  for (var m = 0; m < 4; m++ ){
    for (var n = 0; n<4; n++ ){
      $('.row'+m+'.col'+n).html('<p>'+game.board[m][n]+'</p>');
    }
  }
}
