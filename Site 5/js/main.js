$(function() {

  document.addEventListener('keydown', function(key) {
    if (key.keyCode == 90) {
      document.getElementById('jump').play();
    }
  });


  var pos = 0;
  document.addEventListener('keydown', function(key) {

    if (key.keyCode == 68 && pos < 250) {
      pos = pos + 10
      document.getElementById('mario').style.marginLeft = pos + "px";
    } else {}



    if (pos == 130) {
      $('.coin').hide();
      document.getElementById('getcoin').play();
    }

    if (pos == 160) {
      $('.coin2').hide();
      document.getElementById('getcoin').play();
    }
    if (pos == 190) {
      $('.coin3').hide();
      document.getElementById('getcoin').play();
    }


    if (pos > 3280) {
      $('#mario').hide();
      document.getElementById('clear').play();

    }


    console.log(pos);
  });

  document.addEventListener('keydown', function(key) {

    if (key.keyCode == 81) {
      pos = pos - 10
      document.getElementById('mario').style.marginLeft = pos + "px";
    }
  });




});