$(document).ready(function () {
    $(".circle").on(
        "click",
        function () {
            // ----визначення рендомних змінних
            let left =
                Math.round(
                    Math.random() * document.documentElement.clientWidth
                ) - parseInt($(this).css("width"));
            let top =
                Math.round(
                    Math.random() * document.documentElement.clientHeight
                ) - parseInt($(this).css("height"));
            let width = Math.round(Math.random() * 100);
            let height = Math.round(Math.random() * 100);
            let r, g, b;
            r = Math.round(Math.random() * 255);
            g = Math.round(Math.random() * 255);
            b = Math.round(Math.random() * 255);
            let bgcolor = `rgb(${r}, ${g}, ${b})`;

            $(".circle").css({
                left: left,
                top: top,
                width: width,
                height: height,
                "background-color": bgcolor,
            });
        },
        1000
    );
});
