$(document).ready(function () {
    $(".box").on("click", function () {
        // event.preventDefault();
        coords = $(this).position();
        console.log(coords);
        $(this).css("opacity", "0");
        console.log(this);
        $(".modal").css(coords);
        $(".modal").css({
            "background-color": $(this).css("background-color"),
            "z-index": "1",
        });
        $(".modal_container").css({
            "z-index": "0",
            opacity: "60%",
        });
        $(".modal_container").animate(
            {
                "background-color": "gray",
            },
            1000
        );
        $(".modal").animate(
            {
                width: 400,
                height: 400,
                top: 150,
                left: window.innerWidth / 2 - 200,
            },
            1000
        );

        // закриваємо модалку
    });
    $(".modal").on("click", function () {
        $(".modal_container").css({
            "z-index": "-1",
        });

        $(".modal_container").animate(
            {
                "background-color": "transparent",
                opacity: 0,
            },
            1000
        );

        $(".modal").animate(
            {
                width: 150,
                height: 150,
                top: coords.top,
                left: coords.left,
            },
            1000,
            function () {
                $(".modal").css({
                    "z-index": "-1",
                });
                $(".modal_container").css("z-index", "-1");
                console.log(this);
                $(`.box`).css({
                    opacity: "1",
                    "z-index": 0,
                });
            }
        );
    });
});
