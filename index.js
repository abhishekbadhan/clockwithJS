update = () => {
    var t = new Date()
    var tm = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    document.getElementById('timeid').innerHTML = "<h1>" + tm + "</h1>";
}
tc = setInterval(update, 1000);


//START
let n = 0;
function start() {
    // prev = document.getElementById('btnid').innerHTML
    n += 1
    if (n % 2 != 0) {
        document.getElementById('btnid').style.backgroundColor = "#009926";
        document.getElementById('btnid').innerHTML = "START";
        // document.getElementById('btnid').style.color = "black";
        clearInterval(tc)
    }
    else {
        document.getElementById('btnid').style.backgroundColor = "	#d22d2d";
        document.getElementById('btnid').innerHTML = 'STOP';
        document.getElementById('btnid').style.color = "white";
        tc = setInterval(update, 1000)
    }
    console.log(n)
}
