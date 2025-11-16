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
    document.getElementById("exp").innerHTML += `
                                                <form class="d-flex my-5 gap-2 flex-column" id="dd">
                                                <h4>exp</h4>
                                                    <lable>Company</lable> 
                                                    <input type="text" name="conpany" id="companyDInput" class="form-control test">
                                                    <lable>Role</lable> 
                                                    <input type="text" name="role" id ="roleDInput" class="form-control test2">
                                                    <lable>Duree</lable> 
                                                    <input type="number" name="duree" id ="dureeDInput" class="dureeDInput form-control test3">
                                                </form>
    `
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
                    <div class="worker p-2 d-flex gap-3 align-items-center justify-content-sm-evenly">
                        <div class="worker-img">
                            <img src="${data.img}" alt="photo-image " class="border rounded-circle " id="image" width="60px" height="60px">
                        </div>
                        <div class="worker-info d-flex flex-column pt-3 " >
                            <h6 class="fs-4 w-100 border">${data.name}</h6>
                            <p class="worker-position"> ${data.role} </p>
                        </div>
                        <button class="btn btn-outline-success border"><ion-icon name="create-sharp"></ion-icon></button>
                    </div> 
    `   
}












