
// Business (or back-end) logic:
/* 1.hover effect*/
var port = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8'];
port.forEach(function (work) {
    
    if ($(window).width()<=1024) {
        $('.' + work). click(function () {
            var delani = $(this).attr('id');
            $('.' + delani).toggle(function(){
                $('.'+delani).click(function(){
                    $('.'+delani).hide();
                })
            });
        });
    } else {
        $('.' + work).hover(function () {
            var delani = $(this).attr('id');
            $('.' + delani).toggle();
        });
    }


})


/*2.icons toggle*/
$('#icon1').click(function () {
    $('.description1').show(function () {
        $('#icon1').hide();
    });
    $('.description1').click(function () {
        $('#icon1').show(function () {
            $('.description1').hide();
        })
    })
})

$('#icon2').click(function () {
    $('.description2').show(function () {
        $('#icon2').hide();
    });
    $('.description2').click(function () {
        $('#icon2').show(function () {
            $('.description2').hide();
        })
    })
})
$('#icon3').click(function () {
    $('.description3').show(function () {
        $('#icon3').hide();
    });
    $('.description3').click(function () {
        $('#icon3').show(function () {
            $('.description3').hide();
        })
    })
})



// User interface (or front-end) logic:/*message after button click*/
$('#btn').click(function (event) {
    var nameInput = $('input#name').val();
    var emailInput = $('input#email').val();
    var messageInput = $('textarea#message').val();
    if (nameInput == "") {
        // alert('enter your name');
        $("#boom").text('name');
        $("#alert").show(function () {
            $("#bo").click(function () {
                $("#alert").hide();
            })
        });
    }
    else if (emailInput == "") {
        // alert('enter your email');
        $("#boom").text('email');
        $("#alert").show(function () {
            $("#bo").click(function () {
                $("#alert").hide();
            })
        });
    }
    else if (messageInput == "") {
        // alert('please describe your message in the message box');
        $("#boom").text('message');
        $("#alert").show(function () {
            $("#bo").click(function () {
                $("#alert").hide();
            })
        });
    }
    else {
        $(".name").text(nameInput);
        $(".modal").show(function () {
            $('#close').click(function () {
                $(".modal").hide();
            })
        });
    }
    event.preventDefault()
})