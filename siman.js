let strtbtn=document.querySelector(".strtbtn");
let endbtn=document.querySelector(".endbtn");
let gamearr=[];
let userarr=[];
let score=[];
let key=false;
let lavel=0;
let p=document.querySelector("p");
let colors=["red","green","blue","yellow"];

if(!key){
    strtbtn.addEventListener("click",function(){
        gamearr=[];
        key=true;
        colorgen();
        lavel=0;
    })
}

endbtn.addEventListener("click",function(){
    p.innerHTML="you exit from this game";
    lavel=0;
    gamearr=[];
    userarr=[];
    key=false;
    let m=getmax();
    score=[];
    p.innerText="You exit from this game,";
    let br=document.createElement("br");
    
    let bold=document.createElement("b");
    bold.innerText="Your Heighest Score is : "
    p.append(br);
    p.append(bold);
    p.append(`${m}`);
})

function colorgen(){
    userarr=[];
    lavel++;
    p.innerText=`Lavel ${lavel}`;
    let randomIND=Math.floor(Math.random()*4);
    let randomcolor=colors[randomIND];
    gamearr.push(randomcolor);
    // console.log(`gamearray : ${gamearr}`);
    let randomcolorbox=document.querySelector(`#${randomcolor}`);
    randomcolorbox.style.backgroundColor="white";
    setTimeout(()=>{
        randomcolorbox.style.backgroundColor=randomcolor;
    },250);
}

    let listofcolors=document.querySelectorAll(".div");
    for(let i of listofcolors) {
        i.addEventListener("click",function(){
            if(key){
                let usercolor=i.getAttribute("id");
                userarr.push(usercolor);
                // console.log(`userarray: ${userarr}`);
                i.style.backgroundColor="white";
                setTimeout(()=>{
                    i.style.backgroundColor=usercolor;
                },250);
                chake();
            }
        })
    }

function chake(){
    let lastIND=userarr.length - 1 ;
    if(userarr[lastIND]===gamearr[lastIND]){
        if(userarr.length===gamearr.length){
            setTimeout(colorgen,600);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },100);
        score.push(lavel);
        lavel=0;
        gamearr=[];
        userarr=[];
        p.innerHTML='game is over <br> Pres Start key for restart game</>';
        key=false;
    }
}

function getmax(){
    let m=0;
    if(score.length>=0){
        for(i of score){
            if(i>m) m=i;
        }
    }
    return m;
}

let colorchange;
let discobtn=document.querySelector(".discobtn");
discobtn.addEventListener("click",()=>{
    let body=document.querySelector("body");
    if(discobtn.innerText=="Disco Mod"){
        discobtn.innerText="Stop Disco";
        colorchange=setInterval(()=>{
            let r=Math.floor(Math.random()*256);
            let g=Math.floor(Math.random()*256);
            let b=Math.floor(Math.random()*256);
            let newcolor=`rgb(${r},${g},${b})`;
            body.style.backgroundColor=newcolor;
        },150);
    }
    else{
        discobtn.innerText="Disco Mod";
        clearInterval(colorchange);
        body.style.backgroundColor="rgba(6, 5, 5, 0.753)";
    }
})