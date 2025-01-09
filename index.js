function counter_update(){
    var counter = document.getElementById("counter");
    var count = 0;
    count = parseInt(counter.innerHTML);
    count = count + 1;
    counter.innerHTML = count;
    fetch("https://c1b950zpkg.execute-api.us-east-1.amazonaws.com/default/visitor-counter");
}
window.onload = counter_update;
