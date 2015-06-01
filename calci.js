
calci = {
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

  clickpress: function(key){
    switch($(key).text()){
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
      $("#result").html(
        $("#result").html() + $(key).text()
        );
    }
  }

};


$(document).ready(function() {
	$(".key").click(function(event){
    calci.clickpress(this);
  });
});