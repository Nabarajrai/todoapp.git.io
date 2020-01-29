
const images=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
const img=document.querySelector('img');

const nextButton=document.querySelector('#nextButton');
nextButton.addEventListener('click',handleNextbutton);
let counter=0;
function handleNextbutton(){
    if(counter==images.length-1){
        counter=0;
    }
    counter++;
img.setAttribute('src',images[counter]);


}
const preButton=document.querySelector('#preButton');
preButton.addEventListener('click',handlePrebutton);


function handlePrebutton(){

    counter--;
    img.setAttribute('src',images[counter]);
    if(counter=images.length){
        counter=1;
    }

}