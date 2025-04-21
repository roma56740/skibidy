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



let btnsEl = document.getElementsByClassName('btnsEl');
let imgElText = {
    0:'assets/image/banner/banner.png',
    1:'assets/image/block/image.png',
    2:'assets/image/slide_1.png',
    3:'assets/image/slide_2.png',
    4:'assets/image/slide_3.png',
};

let textEl = {
    0: "Hello hi hi hello lol just ideo and audio hi Hello !",
    1: "Preview any media type, including video and audio.",
    2: "Including video and audio, including video and audio.",
    3: "Hello any media type, Preview any media type",
    4: "Type, any media  including video and audio including video",
}
let imgEl = document.getElementsByClassName('imgEl')[0];

let txt = document.getElementsByClassName('txt1')[0];
let info = document.getElementsByClassName('info')[0];

for(let i = 0; i < btnsEl.length; i++){
    btnsEl[i].addEventListener('click', ()=>{
        imgEl.src = imgElText[i]
        txt.innerHTML = textEl[i]
        info.innerHTML = textEl[i]
    });
};
