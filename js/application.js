$(document).ready(function() {
  bindEventHandlers();
  game = new Game()
});

var bindEventHandlers = function(){
  move()
}

var move = function(){
  $(document).on('keyup', function(event){
    if (event.keyCode === 39){
      console.log('right')
      game.move('right')
      console.log(game.toString())
    }else if(event.keyCode === 37){
      game.move('left')
      console.log('left')
      console.log(game.toString())
    }else if(event.keyCode === 38){
      game.move('up')
      console.log('up')
      console.log(game.toString())
    }else if(event.keyCode === 40){
      game.move('down')
      console.log('down')
      console.log(game.toString())
    }
  })
}
