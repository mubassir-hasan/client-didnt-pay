document.addEventListener("DOMContentLoaded", function(){
    const startDate = '2020-10-25';
const currentDate = new Date();

const diffInMs = new Date(currentDate) - new Date(startDate)
const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
var rotate=0;
if(diffInDays>0){
    rotate=diffInDays*2;
    if(diffInDays>15){
        rotate=30;
        
    }
}
document.getElementsByTagName('body')[0].style  = `transform: skewY(${rotate}deg)`
  });