let idGeneratorCounter = 1;
let employeList = [];

let mettingRomme = [];
let receptionRomme = [];
let srveurRomme = [];
let scurityRomme =[];
let employeRomme = [];
let archiveRomme = [];
let modalList = [];

window.addEventListener("load", () =>{
    employeList =  JSON.parse(localStorage.getItem('employelist')) || []
    randerWorker(workersPlaceHolder, employeList);
})
employeList =  JSON.parse(localStorage.getItem('employelist')) || []
    
   

const workersPlaceHolder = document.getElementById("workers");
const metting = document.getElementById("borde1");
const cardModalList = document.getElementById("cardslist");
const employee = document.querySelectorAll(".worker")
//=======================================================
const workerRome = document.getElementById("borde5")



modalAddBtn.addEventListener("click" , () => {
    const form = document.forms["modalForm"]
    
console.log(form.modalName.value)//the value are there

    const employer = {
        id : idGeneratorCounter,
        name : form.modalName.value,
        role : form.modalRole.value,
        email : form.modalEmail.value,
        tele : form.modalTele.value,
        exprience:[]
        }
    // console.log(employer)//the value are there

    employeList.push(employer)
    console.log(employeList)


    setToLocalStorage('employelist',employeList);
    
    randerWorker(workersPlaceHolder, [employer]);
    idGeneratorCounter++;
})

//that function is rerander the madal
document.querySelectorAll(".rerander").forEach(element => {
     element.addEventListener("click", ()=> {
         document.getElementById("exp").innerHTML = ""
    }) 
});
//a daymanic imput for Exp
document.getElementById("addExp").addEventListener("click", () => {
    let card = `
                                                <form class="d-flex my-5 gap-2 flex-column" id="dd" name="">
                                                <h4>exp</h4>
                                                    <lable>Company</lable> 
                                                    <input type="text" name="conpany" id="companyDInput" class="form-control test">
                                                    <lable>Role</lable> 
                                                    <input type="text" name="role" id ="roleDInput" class="form-control test2">
                                                    <lable>Duree</lable> 
                                                    <input type="number" name="duree" id ="dureeDInput" class="dureeDInput form-control test3">
                                                </form>
    `
    document.getElementById("exp").insertAdjacentHTML('beforeend',card) 
})

//function that get items to local storage NB I will add some of the condition if it empty or if someone doublecat 
function setToLocalStorage(keyName, obj) {
    if(localStorage.getItem('employelist')){
        employeList = JSON.parse(localStorage.getItem('employelist'))
    }
    localStorage.setItem(keyName, JSON.stringify(obj));
}
//function that getting the items from local storage
function getFromLocalStorage() {
    const dataString = localStorage.getItem(counter)
    const data = JSON.parse(dataString);
    return data;
}

function randerWorker(position, DataList) {
    DataList.forEach(element => {
    position.innerHTML +=`
                    <div class="worker bg-dfault p-2 d-flex gap-3 align-items-center justify-content-sm-evenly" id="${idGeneratorCounter}">
                        <div class="worker-img">
                            <img   src="https://avatar.iran.liara.run/public" alt="photo-image " class="border rounded-circle " id="image" width="60px" height="60px">
                        </div>
                        <div class="worker-info d-flex flex-column pt-3 " >
                            <h6 class="fs-4 w-100 border"  >${element.name}</h6>
                            <p class="worker-position Role" name ="para">${element.role}</p>
                        </div>
                        <button class="btn btn-danger border" id="testing" >X</button>
                    </div> 
    `   
    modalList = []
    });
    return position;
}
// remove()
// function remove () {
//     document.getElementById("").addEventListener("click", () =>{
//         console.log("test test mmmmmm")
// })
// }




// ==================================== function for eatch borde ==========

document.getElementById("btn1").addEventListener("click", meetingRome)
function meetingRome(){
    document.getElementById('thatisModal').style.display ="block";
    employeList.forEach(element => {
        if (element.role == "Manager") {
            let index = employeList.indexOf(element)
            modalList.push(element)
            employeList.splice(index, 1)
            employeList.pop()
            randerWorker(cardModalList, modalList)
        }
        cardModalList.addEventListener("click", ToMeeting)
    });






    //fuction that rander one element 
    // how can I wirthe to one element 



    //  const cardWorker = document.querySelectorAll('.worker')
    //  const place = document.getElementById("cardslist")
    //  const border = document.querySelector(".borde1")
    //  document.getElementById('thatisModal').style.display ="block"
    //  if(border.childElementCount > 1){
    //      BB.outerHTML = ``;
    //      document.getElementById('thatisModal').style.display ="none"
    //      returnAllworkerToWorkerPlace()
     
    //  cardWorker.forEach(element => {
    //  if( element.querySelector('.Role').innerHTML == "Manager" || element.querySelector('.Role').innerHTML == "Cleaning"){
    //      place.appendChild(element)
    //     } 
    //     }
    //  document.getElementById("cardslist").addEventListener('click', () =>{
    //      cardWorker.forEach(element => {
    //          element.addEventListener("click", ()=>{
    //              border.appendChild(element)
    //          })
    //      });      
    //  })
    //  )}
}

document.getElementById("btn5").addEventListener("click", workersRomme)
function workersRomme () {
    document.getElementById('thatisModal').style.display ="block";
    employeList.forEach(element => {
            modalList.push(element)
            let index = employeList.indexOf(element)
            randerWorker(cardModalList, modalList)
        cardModalList.addEventListener("click", toWorker)
    });
}
function archifRomme (){
    document.getElementById('thatisModal').style.display ="block"//that is show the modal
    const cardWorker = document.querySelectorAll(".worker");
    const place = document.getElementById("cardslist")
    cardWorker.forEach(element => {   //list of the array
        if(element.querySelector('#WorkeRole').innerHTML !== "Cleaning"){
            place.appendChild(element)
        }
    })
    document.getElementById("cardslist").addEventListener('click', addToBord)
    
    function addToBord () {
        const cardWorker = document.querySelectorAll(".worker");
        const border = document.querySelector(".borde6")
        cardWorker.forEach(element => {
            element.addEventListener("click", ()=>{
                border.appendChild(element)
            })
        });      
        if(border.childElementCount > 2){
            BB.outerHTML = ``;
            returnAllworkerToWorkerPlace()
        }
    }
}
function servuerRomme(){
    document.getElementById('thatisModal').style.display ="block"//that is show the modal
    const cardWorker = document.querySelectorAll(".worker");
    const place = document.getElementById("cardslist")
    cardWorker.forEach(element => {   //list of the array
        if(element.querySelector('#WorkeRole').innerHTML == "IT" ||element.querySelector('#WorkeRole').innerHTML == "Manager"){
            place.appendChild(element)
        }
    })
    document.getElementById("cardslist").addEventListener('click', addToBord)
    function addToBord () {
        const BB = document.getElementById("btn3");
        const cardWorker = document.querySelectorAll(".worker");
        const border = document.querySelector(".borde3")
        cardWorker.forEach(element => {
            element.addEventListener("click", ()=>{
                border.appendChild(element)
            })
        });      
        if(border.childElementCount > 2){
            BB.outerHTML = ``;
            returnAllworkerToWorkerPlace()
        }
    }
}
function secrityRomme() {
    document.getElementById('thatisModal').style.display ="block"//that is show the modal
    const cardWorker = document.querySelectorAll(".worker");
    const place = document.getElementById("cardslist")
    cardWorker.forEach(element => {   //list of the array
        if(element.querySelector('#WorkeRole').innerHTML == "secrity" ||element.querySelector('#WorkeRole').innerHTML == "Manager"){
            place.appendChild(element)
        }
    })
    document.getElementById("cardslist").addEventListener('click', addToBord)
    function addToBord () {
        const BB = document.getElementById("btn4");
        const cardWorker = document.querySelectorAll(".worker");
        const border = document.querySelector(".borde4")
        cardWorker.forEach(element => {
        element.addEventListener("click", ()=>{
            border.appendChild(element)
        })
    });      
    if(border.childElementCount > 2){
        BB.outerHTML = ``;
        returnAllworkerToWorkerPlace()
    }
}
}
function Receptionists() {
    document.getElementById('thatisModal').style.display ="block"//that is show the modal
    const cardWorker = document.querySelectorAll(".worker");
    const place = document.getElementById("cardslist")
    
    cardWorker.forEach(element => {   //list of the array
        if(element.querySelector('#WorkeRole').innerHTML == "Receptionists" ||element.querySelector('#WorkeRole').innerHTML == "Manager"){
            place.appendChild(element)
        }
    })
    document.getElementById("cardslist").addEventListener('click', addToBord)
    function addToBord () {
        const BB = document.getElementById("btn2");
        const cardWorker = document.querySelectorAll(".worker");
        const border = document.querySelector(".borde2")
        cardWorker.forEach(element => {
            element.addEventListener("click", ()=>{
                border.appendChild(element)
            })
        });      
        if(border.childElementCount > 3){
            BB.outerHTML = ``;
            returnAllworkerToWorkerPlace()
        }
    }
    
}

function returnAllworkerToWorkerPlace (){   
    document.getElementById('thatisModal').style.display ="none"
    const cardsss = document.getElementById('cardslist')
    cardsss.querySelectorAll(".worker").forEach(element => {
        document.getElementById("workers").appendChild(element)
    });
}


document.getElementById("colseBar").addEventListener("click", cleos)
function cleos () {
    document.getElementById('thatisModal').style.display ="none";
    // modalList.length = 0;
}
//mettingRomme
function ToMeeting(event) {
    const clickedElement = event.target;
    modalList.forEach(element => {
        if (clickedElement.id == element.id) {
            mettingRomme.push(element)
            randerOneEmploye(metting, element)
        }
    });
    
}
function toWorker (event) {
    const clickedElement = event.target;
    modalList.forEach(element => {
        if (clickedElement.id == element.id) {
            mettingRomme.push(element)
            randerOneEmploye(workerRome, element)
        }
    });
}




function randerOneEmploye(position, obj) {
    position.innerHTML +=`
    <div class="worker bg-dfault p-2 d-flex gap-3 align-items-center justify-content-sm-evenly" id="A-${idGeneratorCounter}">
    <div class="worker-img">
    <img   src="https://avatar.iran.liara.run/public" alt="photo-image " class="border rounded-circle " id="image" width="60px" height="60px">
    </div>
    <div class="worker-info d-flex flex-column pt-3 " >
    <h6 class="fs-4 w-100 border"  >${obj.name}</h6>
    <p class="worker-position Role" name ="para">${obj.role}</p>
    </div>
    <button class="btn btn-danger border" id="testing" >X</button>
    </div> 
    `   
}
