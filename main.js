function showImage(imageNO){
    document.querySelector('#storeHTML').style.zIndex = 1;
    document.getElementById("storeHTML").innerHTML = `
    <div class="container-overlay d-flex align-items-center" id="container-overlay">
        <div id="carouselExampleControls" class="carousel slide h-75 position-relative" data-ride="carousel">
            <button onclick="hide()" type="button" class="btn-close position-absolute end-0 top-0 m-2 z-2" aria-label="Close"></button>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block h-100 z-1" src="images/${imageNO}.jpg" alt="First slide">
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span onclick="prev(${imageNO})" class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span onclick="next(${imageNO})" class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
    `
}

function hide(){
    document.getElementById("storeHTML").innerHTML = "";
    document.querySelector('#storeHTML').style.zIndex = -1;
}

function next(imageNO){
    if(imageNO != 6){
        hide()
        showImage(imageNO+1)
    } else {
        alert("No other images")
    }
}

function prev(imageNO){
    if(imageNO != 1){
        hide()
        showImage(imageNO-1)
    } else {
        alert("No other images")
    }
}