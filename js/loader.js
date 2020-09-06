$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
   $('.carousel').carousel();
    $('myReviews').carousel({
        numVisible : 7,
        shift: 55           
    });
  
});

function toggleModal(){
    var ele  =document.querySelector('#modal3');
    var instance = M.Modal.init(ele);
    instance.open();

}
