function menu(id) {
    var menu = document.getElementById('menu_1').style;
    if (menu.display == 'none') {
        menu.display = 'block';
    }
    else {
        menu.display = 'none';
    }
}
menu1.addEventListener('click', function() {menu ((menu_1))});

$(function() {
    $('#btn-submit').click(function(e) {
       e.preventDefault();
       $.ajax({
            url: "https://formspree.io/lozynska.anna@gmail.com", 
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
                clientPhonenumber: $('#client-phonenumber').val(),
                comment: $('#comment').val()
            },
            dataType: "json"
       })
         .done(function() {
             $('form').html('<h1>Thank you for contacting us!</h1>');
         });
    });    
});
