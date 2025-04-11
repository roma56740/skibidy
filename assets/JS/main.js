function myFunction(){
    document.getElementById('Dropdown').classList.toggle('show');
    document.getElementById('Dropdown').parentElement.getElementsByClassName('aarrow')[0].classList.toggle('aarrowRot')
}
function Function(){
    document.getElementById('myDropdown1').classList.toggle('show');
    document.getElementById('myDropdown1').parentElement.getElementsByClassName('aarrow')[0].classList.toggle('aarrowRot')
}

let accordion_items = document.getElementsByClassName('accordion_items')
let panel = document.getElementsByClassName('panel');

for(let i = 0; i<panel.length; i++){
    accordion_items[i].addEventListener('click', function(){
        panel[i].classList.toggle('panelOpen');
    })
}


let sliders = document.getElementsByClassName('slide');
let index = 0;

setInterval(()=>{
    if(index==0){
        sliders[0].style.left = '0'+"px";
        sliders[1].style.left = '500'+"px";
        sliders[2].style.left = '1000'+"px";
        index = index + 1
    }       
    else if(index==1){
        sliders[0].style.left = '500'+"px";
        sliders[1].style.left = '1000'+"px";
        sliders[2].style.left = '0'+"px";
        index = index + 1
    }    
    else if(index==2){
        sliders[0].style.left = '1000'+"px";
        sliders[1].style.left = '0'+"px";
        sliders[2].style.left = '500'+"px";
        index = index - 2
    }    


},1500);