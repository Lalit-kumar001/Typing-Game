// making text array 
var arr1=["hello", "hsbdhds" ,"jbjs","this","is","java","complete","the","game","a","hgfh","otherwise","gsjddh","joking"];
var arr2=["yoou","are","jsnjc","serious","yes","i","am","bjcbscn","jbsj","mnbv","goat","load","coding","bcvxxaa"];
var arr3=["rohan","rohit","lalit","kumar","boby","sanket","aman","kunal","ayush","jatin","gugun","shristhi","neha","mansi"];
var arr4=["delhi","mumbai","tokyo","rio","california","haryana","up","rajasthan","usa","japan","INDIA","russia","maxico","canada"];
// All parent div 
var parent1=document.getElementById("first");
var parent2=document.querySelector("#second");
var parent3=document.querySelector("#third");
var parent4=document.querySelector("#fourth");

// all indexes
var index1;
var index2;
var index3;
var index4;

// all initial
var initial;
var initial2;
var initial3;
var initial4;

//popup heading 
var heading=document.getElementById('score');


// create all inner element 
var inner1=document.createElement("h1");
var inner2=document.createElement("h1");
var inner3=document.createElement("h1");
var inner4=document.createElement("h1");


// add class name 

inner1.className="inner addclass";
// inner1.className="addclass";
inner2.className="inner addclass";
inner3.className="inner addclass";
inner4.className="inner addclass";




// for first div
appendit1();
function appendit1(){
 index1=Math.floor(Math.random()*15);
inner1.innerHTML=arr1[index1];
parent1.appendChild(inner1);
}


var id1=setInterval(move,9);
 initial=0;
function move(){
    initial+=1;
inner1.style.marginTop= initial+"px";
var bounding=inner1.getBoundingClientRect();
if(bounding.bottom>window.innerHeight){
    appendit1();
    initial=0;
}
}

// for second div

appendit2();
function appendit2(){
    index2=Math.floor(Math.random()*15);
inner2.innerHTML=arr2[index2];
parent2.appendChild(inner2);
}



var id2=setInterval(move2,10);
var initial2=0;
function move2(){
    initial2+=1;
inner2.style.marginTop= initial2+"px";
var bounding2=inner2.getBoundingClientRect();
if(bounding2.bottom>window.innerHeight){
    appendit2();
    initial2=0;
}
}

// for third div
appendit3();
function appendit3(){
    index3=Math.floor(Math.random()*15);
inner3.innerHTML=arr3[index3];
parent3.appendChild(inner3);
}



var id3=setInterval(move3,5);
var initial3=0;
function move3(){
    initial3+=1;
inner3.style.marginTop= initial3+"px";
var bounding3=inner3.getBoundingClientRect();
if(bounding3.bottom>window.innerHeight){
    appendit3();
    initial3=0;
}
}

// for fourth div
appendit4();
function appendit4(){
 index4=Math.floor(Math.random()*15);
inner4.innerHTML=arr4[index4];
parent4.appendChild(inner4);
}



var id4=setInterval(move4,8);
var initial4=0;
function move4(){
    initial4+=2;
inner4.style.marginTop= initial4+"px";
var bounding4=inner4.getBoundingClientRect();
if(bounding4.bottom>window.innerHeight){
    appendit4();
    initial4=0;
}
}


//score
var score=0;

// on entering text 
var input=document.getElementById('input');
document.addEventListener('keydown',function(event){
if(event.keyCode==13){

   var value=document.getElementById('input').value;
   if(value==arr1[index1]){
    score+=1;
    parent1.removeChild(inner1);
    initial=0;
    appendit1();
    input.value="";
   }
   else if(value==arr2[index2]){
    score+=1;
    parent2.removeChild(inner2);
    initial2=0;
    appendit2();
    input.value="";
}
else if(value==arr3[index3]){
    score+=1;
    parent3.removeChild(inner3);
    initial3=0;
    appendit3();
    input.value="";
}

else if(value==arr4[index4]){
    score+=1;
    parent4.removeChild(inner4);
    initial4=0;
    appendit4();
    input.value="";
}
else{
    input.value="";
}


}
})



setTimeout(stop,120000);

function stop(){
clearInterval(id1);
clearInterval(id2);
clearInterval(id3);
clearInterval(id4);
heading.innerHTML="Your Score Is <b>"+score+ " </b>Please Visit Again...";
document.getElementById('pop').style.display="block";
// alert("Your Score Is "+ score);
}


document.getElementById('reload').addEventListener('click',function(){
    location.reload();
})