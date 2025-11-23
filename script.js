const empunsigeZone = document.getElementById("workers")
const modalList = document.getElementById("cardslist")
//zones
const zone = document.querySelectorAll(".zone")
const zone1 = document.getElementById("borde1")
const zone2 = document.getElementById("borde2")
const zone3 = document.getElementById("borde3")
const zone4 = document.getElementById("borde4")
const zone5 = document.getElementById("borde5")
const zone6 = document.getElementById("borde6")
//variables
let listEmp = [];
let zoneMeeting = [];
let zoneResiption = [];
let zoneServer = [];
let zoneScuirty = [];
let zoneEmp = [];
let zoneArchiff = [];
let empCardId = 1;

window.addEventListener('load', () => {
    listEmp = JSON.parse(localStorage.getItem('employer')) || []
    randerList(empunsigeZone, listEmp)
})

document.getElementById("modalAddBtn").addEventListener("click", ()=>{
    addEmp()

})
function addEmp() {
    const form = document.forms["modalForm"];
    let emp = {
        id: empCardId,
        name :form.modalName.value,
        role :form.modalRole.value,
        email :form.modalEmail.value,
        exp: []
    }
    const formEXP = document.querySelectorAll('.formExp')
    getExpdata(formEXP, emp.exp)
    listEmp.push(emp)
    empCardId++;
    empunsigeZone.innerHTML = "",
    randerList(empunsigeZone, listEmp)
    setToLocalStorage("employer", listEmp)
    getItmesFromLocalStorange("employer")
}

function setToLocalStorage(keyname, Array){
    if (localStorage.getItem("employer")) {
        listEmp = JSON.parse(localStorage.getItem('employer'))
    }
    localStorage.setItem(keyname, JSON.stringify(Array))
}
function getItmesFromLocalStorange(keyname) {
    const dataString = localStorage.getItem(keyname)
    listEmp = JSON.parse(dataString)
}

document.getElementById("addExp").addEventListener("click", expAddInHTML)
function expAddInHTML (){
    const expAddInHTMLContext = `
         <form name="formExp" id="formExp" class="formExp">
            <input type="text" class="form-control" name="company">
            <input type="text" class="form-control" name="role">
            <input type="number" class="form-control" name="duree">
         </form>
    
    `
    document.getElementById("exp").insertAdjacentHTML("beforeend", expAddInHTMLContext)
}

function getExpdata(form, arr){
  form.forEach(element => {
      let obj ={
            company: element.company.value,
            role: element.role.value,
            duree: element.duree.value
        }
        arr.push(obj)
    });
    console.log(arr)
}

function randerList(position, array) {
    array.forEach(element => {
        position.innerHTML+= `
                        <div class="worker bg-dfault p-2 d-flex gap-3 align-items-center justify-content-sm-evenly" id="${element.id}">
                            <div class="worker-img">
                                <img src="https://avatar.iran.liara.run/public" alt="photo-image " class="border rounded-circle " id="image" width="60px" height="60px">
                            </div>
                            <div class="worker-info d-flex flex-column pt-3 " >
                                <h6 class="fs-4 w-100 border"  >${element.name}</h6>
                                <p class="worker-position Role" name ="para">${element.role}</p>
                            </div>
                            <button class="btn btn-danger border btnZones">X</button>
                        </div>
                            `
    });
}

zone1.addEventListener("click", ()=>{
    modalList.innerHTML ="" 
    document.getElementById("thatisModal").style.display="block"
    let empFilter = listEmp.filter(element => element.role == "Manager" || element.role == "IT")
    randerList(modalList, empFilter)
    addToZone(zone1, empFilter)
})
zone2.addEventListener("click", ()=>{
    modalList.innerHTML ="" 
    document.getElementById("thatisModal").style.display="block"
    let empFilter = listEmp.filter(element => element.role == "Receptionists" || element.role == "IT"|| element.role == "Manager")
    randerList(modalList, empFilter)
    addToZone(zone2, empFilter)
})
zone3.addEventListener("click", ()=>{
    modalList.innerHTML ="" 
    document.getElementById("thatisModal").style.display="block"
    let empFilter = listEmp.filter(element => element.role == "Manager" || element.role == "IT"|| element.role == "Cleaning")
    randerList(modalList, empFilter)
    addToZone(zone3, empFilter)
})
zone4.addEventListener("click", ()=>{
    modalList.innerHTML ="" 
    document.getElementById("thatisModal").style.display="block"
    let empFilter = listEmp.filter(element => element.role == "Manager" || element.role == "IT"|| element.role == "security")
    randerList(modalList, empFilter)
    addToZone(zone4, empFilter)
})
zone5.addEventListener("click", ()=>{
    modalList.innerHTML ="" 
    document.getElementById("thatisModal").style.display="block"
    randerList(modalList, listEmp)
    addToZone(zone5, listEmp)
})
zone6.addEventListener("click", ()=>{
    modalList.innerHTML ="" 
    document.getElementById("thatisModal").style.display="block"
    let empFilter = listEmp.filter(element => element.role !== "Cleaning")
    randerList(modalList, empFilter)
    addToZone(zone6, listEmp)
})


document.getElementById("colseBar").addEventListener("click", close)
function close(){
        document.getElementById("thatisModal").style.display="none"

}
function addToZone(zoneNum, EmpFilter) {
        modalList.addEventListener("click", (e)=>{
            let targetedElement = e.target
            let findIdOfEmp = EmpFilter.filter(element => element.id == targetedElement.id)
            delete listEmp[targetedElement.id -1]
            empunsigeZone.innerHTML =" "
            randerList(empunsigeZone,listEmp)
            randerList(zoneNum, findIdOfEmp)
            close()
        })
}
removeToSideBar()
function removeToSideBar () {
    btnRemove = document.querySelectorAll(".btnZones")
    console.log(btnRemove)
}