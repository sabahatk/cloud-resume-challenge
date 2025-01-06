function counter_update(){
    var counter = document.getElementById("counter");
    var count = 0;
    count = parseInt(counter.innerHTML);
    count = count + 1;
    counter.innerHTML = count;
}
window.onload = counter_update;