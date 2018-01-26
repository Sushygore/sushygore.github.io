var myLine = document.querySelectorAll('li');
var icone = '<i class="fa fa-gamepad"></i>';
myLine.forEach(element => {
    element.innerHTML = icone + element.innerHTML;
});