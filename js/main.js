$(function () {
    $('.info_btn_m').click(function () {
        if (!$('.line_m').hasClass('active')) {
            $('.line_m').addClass('active');
            $("#panel_m").fadeIn(500);
        } else {
            $('.line_m').removeClass('active');
            $("#panel_m").fadeOut(500);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let dist = (document.body.clientWidth > 400) ? -100 : -200;
    console.log(dist)
    var options = {
        // Transition duration in milliseconds.
        duration: 200,
        // Perspective zoom. If 0, all items are the same size.
        dist: dist,
        // Set the spacing of the center item.
        shift: 0,
        // Set the padding between non center items.
        padding: 150,
        // Set the number of visible items.
        numVisible: 5,
        // Make the carousel a full width slider
        fullWidth: false,
        // Set to true to show indicators.
        indicators: false,
        // Don't wrap around and cycle through items.
        noWrap: false,
        // Callback for when a new slide is cycled to.
        // onCycleTo: kkk()
        onCycleTo: function (ele) {
            var index = $(ele).index();
            var name_arr = ["Nagoya <br> $1999", "Imabari Tsuruoka <br> $1799", "Dazaifu Tsuchiura <br> $1999", "Yanagawa <br> $1899", "Okayama Saitama <br> $2999"]
            var descr_arr = ["Overall Length: 41 3/8' Blade: 29'<br><br> A katana is a Japanese sword characterized by a" +
                "curved single-edged blade with a circular or squared guard and" +
                "long grip to accommodate two hands. It was used by the samurai of" +
                "ancient and feudal Japan. Contents. 1 Etymology and loanwords; 2 Description;",
                "Overall Length: 41 3/8' Blade: 43'<br><br> The red glint of paint sparkled under the sun. He had dreamed of owning this car since he was ten, and that dream had become a reality less than a year ago. It was his baby and he spent hours caring for it, pampering it, and fondling over it. She knew this all too well, and that's exactly why she had taken a sludge hammer to it",
                "Overall Length: 45 3/8' Blade: 40'<br><br> You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.",
                "Overall Length: 42 3/8' Blade: 45'<br><br> There was something special about this little creature. Donna couldn't quite pinpoint what it was, but she knew with all her heart that it was true. It wasn't a matter of if she was going to try and save it, but a matter of how she was going to save it. She went back to the car to get a blanket and when she returned the creature was gone.",
                "Overall Length: 46 3/8' Blade: 42'<br><br> It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was."
            ]
            $("#name_text").html(name_arr[index])
            $("#descr_box").html(descr_arr[index]);
        }
    }
    M.Carousel.init($("#carousel_container"), options);
});

function JumpContent(destination) {
    $("#panel_m").hide();
    $('.line_m').removeClass('active');
    $('html, body').animate({ scrollTop: $(destination).offset().top }, 500, function () {
    });
}