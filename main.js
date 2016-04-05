
function newwind() {
    windop = window.open("http://www.liverpoolfc.ru", "LFC", "height=200,width=500");
}
function url() {
    alert(location.href);
}
function chgBGclr() {
    if (document.body.style.background.valueOf() === new String("orange").valueOf()) {
        document.body.style.background = "";
    } else {
        document.body.style.background = "orange";
    }
}
