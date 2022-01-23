const btn=document.querySelectorAll(".button-x");
const chip=document.querySelectorAll(".main-chip");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
    chip[i].style.display="none"
  })
}

// Input chips code
const inputChip=document.querySelector(".input-chips");
const outputChip=document.querySelector(".output");
const addChip=document.querySelector(".Add-chip")
let arr=[]

addChip.addEventListener("click",AddChipHandler,false);
// outputChip.style.display="none"
function AddChipHandler(){
    const chipValue=inputChip.value;
    if(chipValue!=""){
        arr.push(chipValue)
        // outputChip.style.display=""
        Additems();
    }
}
function Additems(){
    outputChip.innerHTML='';
    arr.map((item,index) => 
            outputChip.innerHTML+=`
                                 <div class="output-chips"> 
                                  <div class="output-text">${item}</div>
                                  <span class="button-x" onclick="deleteItem(${index})">&times;</span>
                                 </div>`)
}

let deleteItem = index => {
    arr.splice(index,1);
    Additems();
}