//element that selecte for image in the modal
const photo = document.getElementById('photo-pic');//that now are selected
const photoinput = document.getElementById('input-file');//that now are selected 
//selecting the element in modal:

//select model:
const modalAddBtn = document.getElementById('modalAddBtn');//selected
//varaibles:
    let counter = 0;
//function that change the user
photoinput.onchange = function (){
     photo.src = URL.createObjectURL(photoinput.files[0]);
}
//event for the modal-input
modalAddBtn.addEventListener("click" , () => {
    const modaRole = document.getElementById('modalRole').value;//selected
    const modalName = document.getElementById('modalName').value;//selected
    const modalEmail = document.getElementById('modalEmail').value;//selected
    const modalTele = document.getElementById('modalTele').value;//selected
    const modalExpCompany = document.getElementsByClassName('test').value;//selacted
    const modalExpRole = document.getElementsByClassName('test2').value//selected
    const modalExpDuree = document.querySelectorAll('#test3').value//selected
    const modalform = document.getElementById('dd')
     let arr = []


    
    const infoWorker = {
        name : modalName,
        role : modaRole,
        img : photo.src,
        email : modalEmail,
        tele : modalTele,
        exprience:
                [{
                company :modalExpCompany,
                role: modalExpRole,
                duree: modalExpDuree
                        }]
        }


    
    //function store data 
    setToLocalStorage(counter, infoWorker);
    //function that get data 
    const data = getFromLocalStorage(counter)
    //function for rander workers
    randerWorker(data);
    // function that restatrt input 
   
    counter++;
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
    localStorage.setItem(keyName, JSON.stringify(obj));
}
//function that getting the items from local storage
function getFromLocalStorage(keyName) {
    const dataString = localStorage.getItem(keyName)
    const data = JSON.parse(dataString);
    return data;
}

//function that rander worker 
function randerWorker(data) {
    //afich in html id done;
    const workersPlaceHolder = document.getElementById("workers");//the  selection are good
    workersPlaceHolder.innerHTML +=`
                    <div class="worker p-2 d-flex gap-3 align-items-center justify-content-sm-evenly" id="A-${counter}">
                        <div class="worker-img">
                            <img   src="${data.img}" alt="photo-image " class="border rounded-circle " id="image" width="60px" height="60px">
                        </div>
                        <div class="worker-info d-flex flex-column pt-3 " >
                            <h6 class="fs-4 w-100 border"  >${data.name}</h6>
                            <p class="worker-position Role" name ="para" id="WorkeRole">${data.role}</p>
                        </div>
                        <button class="btn btn-danger border btnRemove" >X</button>
                    </div> 
    `   
}
// =====================================  container  =====================================
// ===================================== modalper    =====================================

// function test(e){
//     document.getElementById('thatisModal').style.display ="block"//that is show the modal
//      const cardWorker = document.querySelectorAll(".worker");
//     const place = document.getElementById("cardslist")
    
//     cardWorker.forEach(element => {   //list of the array
//         if( element.querySelector('#WorkeRole').innerHTML == e.target.textContent){
//             place.appendChild(element)
//         }
// })
// }


// ==================================== function for eatch borde ==========
function meetingRome(){//only for cleaner and mangers
    document.getElementById('thatisModal').style.display ="block"//that is show the modal
    const cardWorker = document.querySelectorAll(".worker");
    const place = document.getElementById("cardslist")
    
    cardWorker.forEach(element => {   //list of the array
        if( element.querySelector('#WorkeRole').innerHTML == "Manager" || element.querySelector('#WorkeRole').innerHTML == "Cleaning"){
            place.appendChild(element)
        }
        
    })
    document.getElementById("cardslist").addEventListener('click', addToBord)
    
        function addToBord () {
        const cardWorker = document.querySelectorAll(".worker");
        const border = document.querySelector(".borde1")
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
function workersRomme () {//you can place evreyOne
    document.getElementById('thatisModal').style.display ="block"//that is show the modal
    const cardWorker = document.querySelectorAll(".worker");
    const place = document.getElementById("cardslist")
    cardWorker.forEach(element => {   //list of the array
        place.appendChild(element)
    })
    document.getElementById("cardslist").addEventListener('click', addToBord)
    
    function addToBord () {
        const cardWorker = document.querySelectorAll(".worker");
        const border = document.querySelector(".borde5")
        cardWorker.forEach(element => {
            element.addEventListener("click", ()=>{
                border.appendChild(element)
                element.innerHTML = +`<button>X</button>`
                
            })
        });      
        if(border.childElementCount > 2){
            BB.outerHTML = ``;
            returnAllworkerToWorkerPlace()
        }
    }
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

document.getElementById("colseBar").addEventListener("click", returnAllworkerToWorkerPlace)
function returnAllworkerToWorkerPlace (){   
    document.getElementById('thatisModal').style.display ="none"
    const cardsss = document.getElementById('cardslist')
    cardsss.querySelectorAll(".worker").forEach(element => {
        document.getElementById("workers").appendChild(element)
    });
}

        
        

// document.getElementById("cardslist").addEventListener('click', addToBord)
// function addToBord () {
//     const cardWorker = document.querySelectorAll(".worker");
//     const border = document.querySelector(".borde1")
//     cardWorker.forEach(element => {
//         element.addEventListener("click", ()=>{
//             border.appendChild(element)
//         })
//     });      
//     if(border.childElementCount == 2){
//         BB.outerHTML = ``;
//         returnAllworkerToWorkerPlace()
//     }
// }

        