function myFunction() {
  var x;
  var d = new Date().getDay();
  switch (d) {
    case 0:
      x = '今天是星期日';
      break;
    case 1:
      x = '今天是星期一';
      break;
    case 2:
      x = '今天是星期二';
      break;
    case 3:
      x = '今天是星期三';
      break;
    case 4:
      x = '今天是星期四';
      break;
    case 5:
      x = '今天是星期五';
      break;
    case 6:
      x = '今天是星期六';
      break;
    default:
      x = 'happy new year';
  }
  document.getElementById('demo').innerHTML = x;
}

function testFor01() {
  document.write('<br>');
  var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
  for (var i = 0; i < cars.length; i++) {
    document.write(cars[i] + '<br>');
  }
}

function testFor02(){
  var person = {
    firstName = "Bill",
    secondName = "Gates",
    age = 56,
    salary = 90000
  }
    for(x in person){
      txt = txt + person[x];
      window.alert(txt)
    }
    document.write(txt)
}

testFor01()
// testFor02();
