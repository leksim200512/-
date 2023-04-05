// Дата

function timeS(){
    let time = new Date();
    let h = time.getDate().toString();
    var m = time.getMonth().toString();

    if(h.length < 2){
        h = "0" + h ;
    }
    if(m.length < 2){
        m++;
        m = "0" + m ;
    }

    var clockStringMinusMinus = h - 2 + "-" + m;
    var clockStringMinus = h - 1 + "-" + m;
    var clockString = h + "-" + m;
    var clockStringPlus = h -(-1) + "-" + m;
    var clockStringPlusPlus = h -(-2) + "-" + m;
 
    document.getElementById('time-minus-minus').innerHTML = clockStringMinusMinus;
    document.getElementById('time-minus').innerHTML = clockStringMinus;
    document.getElementById('time').innerHTML = clockString;
    document.getElementById('time-plus').innerHTML = clockStringPlus;
    document.getElementById('time-plus-plus').innerHTML = clockStringPlusPlus;
    

}
setInterval(timeS , 1000);

// Дата

// проверка телефона
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel2'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});


//bot

const TOKEN = "5925024487:AAGJbb0_ubuZwEbhV2oLtwb_LNXfLVXZLyw";
const CHAT_ID = "-1001979347671";
const EUR_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg1").addEventListener("submit", function (event) {
  event.preventDefault();

  let message = "<b>Заявка с сайта!</b>\n";
  message += `<b>Имя : </b>${this.name.value}\n`;
  message += `<b>Город : </b>${this.city.value}\n`;
  message += `<b>Телефон : </b>${this.tel.value}`;

  axios.post(EUR_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});

document.getElementById("tg2").addEventListener("submit", function (event) {
  event.preventDefault();

  let message = "<b>Заявка с сайта!</b>\n";
  message += `<b>Имя : </b>${this.name.value}\n`;
  message += `<b>Город : </b>${this.city.value}\n`;
  message += `<b>Телефон : </b>${this.tel.value}`;

  axios.post(EUR_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});

const form = document.getElementById('tg1');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
const modal = document.getElementById('exampleModal');
const form2 = document.getElementById('tg2');
form2.addEventListener('submit', (event) => {
  event.preventDefault();
  form2.reset();
});

