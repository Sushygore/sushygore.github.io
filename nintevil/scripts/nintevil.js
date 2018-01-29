var myLine = document.querySelectorAll('li > :first-child');
var icone = '<i class="fa fa-gamepad"></i>';
myLine.forEach(element => {
    element.innerHTML = icone + element.innerHTML;
});