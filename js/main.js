var answers = document.getElementsByClassName('answer');
var btns = document.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
  var btn = btns[i];
  btn.addEventListener('click', showHide)
};

function showHide() {
  var btn = this.value;
  for (i = 0; i < answers.length; i++) {
    var elem = 'answer' + i;
    var elemDisplay = document.getElementById(elem).style.display;
    if (btn === elem && (elemDisplay == false || elemDisplay === 'none')) {
      document.getElementById(elem).style.display = 'inline-block';
      return;
    };
    document.getElementById(elem).style.display = 'none';
  };
};
