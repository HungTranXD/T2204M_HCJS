function displayTime(x){
    if(x < 10) return ("0" + x);
    return x;
};
var minute = 10, second = 0;
var countDown = setInterval(function (){
    console.log(displayTime(minute) + ":" + displayTime(second));
    second--;
    if(second < 0){
        second = 59;
        minute--;
    }
    if(minute < 0){
        clearInterval(countDown);
    }
}, 1000);