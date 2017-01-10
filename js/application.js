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
      if(game.board[m][n] === 0){
        $('.row'+m+'.col'+n).removeClass("n2 n4 n8 n16 n32 n64 n128 n256 n512 n1024 n2048 n4096 n8192 n16384");
        $('.row'+m+'.col'+n).html('');
      }else{
        $('.row'+m+'.col'+n).removeClass("n2 n4 n8 n16 n32 n64 n128 n256 n512 n1024 n2048 n4096 n8192 n16384");
        $('.row'+m+'.col'+n).addClass('n'+game.board[m][n]);
        $('.row'+m+'.col'+n).html('<p>'+game.board[m][n]+'</p>');
      }
    }
  }
}
