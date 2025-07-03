 let a;
 let date;
 let time;
 const option ={
weekday:'long', year:'numeric',month:'long',day:'numeric'
};
 

setInterval(() => {
a = new Date();
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById('head').innerHTML = time;
}, 1000); 