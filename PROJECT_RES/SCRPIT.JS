function pub(event){
        event.preventDefault();
        const sc= document.querySelector('.main01');
        if (sc) {
            sc.scrollIntoView({behavior: 'smooth'});
        }
}
function res(event){
    event.preventDefault();
    const sc=document.querySelector('.main02');
    if(sc){
        sc.scrollIntoView({behavior: 'smooth'});
    }
}
function menu(event){
    event.preventDefault();
    const men=document.querySelector('.menu');
    if(men){
        men.scrollIntoView({behavior: 'smooth'});
    }
}
function time(event){
    event.preventDefault();
    const hr=document.querySelector('.timing');
    if(hr){
        hr.scrollIntoView({behavior:'smooth'});
    }
}
function gift(event){
    event.preventDefault();
    const gv=document.querySelector('.gift');
    if(gv){
        gv.scrollIntoView({behavior:'smooth'});
    }
}
function validEmail() {
    const email = document.querySelector(".email").value;
    const error = document.querySelector(".error");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      error.textContent = "Check your mail for invitation.";
      error.style.color = "green";
    } else {
      error.textContent = "Invalid email address.";
      error.style.color = "red";
    }
  }