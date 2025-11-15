//element that selecte for image in the modal
const photo = document.getElementById('photo-pic');//that now are selected
const photoinput = document.getElementById('input-file');//that now are selected 

//function that change the user
photoinput.onchange = function (){
    photo.src = URL.createObjectURL(photoinput.files[0]);
}
















//afich in html id done;
const workersPlaceHolder = document.getElementById("workers");//the  selection are good
workersPlaceHolder.innerHTML=`
                <div class="worker p-2 d-flex gap-3 align-items-center justify-content-sm-evenly">
                    <div class="worker-img">
                        <img src="img/1.jfif" alt="photo-image " width="70px" height="70px">
                    </div>
                    <div class="worker-info d-flex flex-column pt-3 " >
                        <h6 class="fs-3">Younes Raji</h6>
                        <p class="worker-position">Techniciens</p>
                    </div>
                    <button class="btn btn-outline-success"><ion-icon name="create-sharp"></ion-icon></button>
                </div> 
`