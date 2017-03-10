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
                $('form').html('<h2 id="style">Дякую!</h2>');
            });
    });
});
