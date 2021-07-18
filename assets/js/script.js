(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let timer = "Nov 26, 2021 00:00:00",
      countDown = new Date(timer).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        // if (distance < 0) {
        //   let countdown = document.getElementById("timer"),
        //       content = document.getElementById("content");

         

        //   clearInterval(x);
        // }
        // //seconds
      }, 0)
  }());


 
 function salvarEmail(){

   const email = document.getElementById('email')  

    if(email.value == "" || email.value == null || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1  ) {
 
      alert("Por favor, digite um e-mail válido.")
    }

    else {
      localStorage.setItem('Email: ', JSON.stringify(email.value))
      alert("Cadastro realizado com sucesso. Obrigado!")
    }    

 }

