
calci = {

    keypadCodes: {
    27: 'AC',
    42: '*',
    47: '/',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    13: '=',
    8: 'DEL',
    43: '+',
    45: '-',
    46: '.'
  },

  lastKeyOp : false,
  lastKeyDot : false,

  clearscreen: function(){
    $("#result").html("");
  },

  calcresult: function(){
    var input = eval($("#result").text());
    $("#result").html(input);
  },

  backspace: function() {
    var input = $("#result").html();
    $("#result").html(input.slice(0, input.length-1));
  },

  mousepress: function(key){
    switch(key){
      case "AC":
        calci.clearscreen();
        break;
      case "DEL":
        calci.backspace();
        break;
      case "=":
        calci.calcresult();
        break;
      default:
      if(key == "." && calci.lastKeyDot){

      } else{
        if(['+','-','*','/'].indexOf(key) !== -1 && calci.lastKeyOp){
          calci.backspace();
        }
          $("#result").html($("#result").html() + key);
      }
    }

    if(['+','-','*','/'].indexOf(key) == -1){
      calci.lastKeyOp = false;
    } else {
      calci.lastKeyOp = true;
    }

    if(key == "."){
      calci.lastKeyDot = true;
    } else {
      calci.lastKeyDot = false;
    }
  },

  keypadPress: function(){
    $(document).keypress(function(event){ 
      var keycode = event.keyCode || event.which;
      console.log(keycode);
      calci.mousepress(calci.keypadCodes[keycode]);
    });
  }
};

$(document).ready(function() {
	$(".key").click(function(event){
    calci.mousepress($(this).text());
  });
  calci.keypadPress();
});