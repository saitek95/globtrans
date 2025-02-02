$(document).on('click', '[href="#phone"]', function () {
    $('.overlay').fadeIn(300);
    $('.popup').fadeIn(300);
    $('.modal').fadeIn(300);
    $('body').css('overflow', 'hidden');
})

$(document).on('click', '.close_form', function () {
    $('.overlay').fadeOut(300);
    $('.popup').fadeOut(300);
    $('.modal').fadeOut(300);
    $('body').css('overflow', '');
})

$(document).on('click', '.overlay', function () {
    $('.overlay').fadeOut(300);
    $('.popup').fadeOut(300);
    $('.modal').fadeOut(300);
    $('body').css('overflow', '');
})

var addServicesSwiper = new Swiper(".add-services .swiper", {
    slidesPerView: 2.8,
    spaceBetween: 30,

});

var stockSwiper = new Swiper(".stock .swiper", {
    slidesPerView: 2,
    spaceBetween: 23,
    navigation: {
        nextEl: ".stock .next_slider",
        prevEl: ".stock .prev_slider",
    },
});

var reviewsSwiper = new Swiper(".reviews .swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.phone'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___)-___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});

$('.svg').each(function(){
    const $img = $(this);
    const imgClass = $img.attr('class');
    const imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
        let $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});