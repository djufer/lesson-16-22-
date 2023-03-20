$(document).ready(function () {
    setInterval(
        () => {
            let width_height,
                r,
                g,
                b,
                r1,
                g1,
                b1,
                bgColor,
                borderColor,
                left,
                top;
            width_height = Math.round(Math.random() * 80 + 20);
            r = Math.round(Math.random() * 255);
            g = Math.round(Math.random() * 255);
            b = Math.round(Math.random() * 255);
            r1 = Math.round(Math.random() * 255);
            g1 = Math.round(Math.random() * 255);
            b1 = Math.round(Math.random() * 255);
            bgColor = `rgb(${r}, ${g}, ${b})`;
            borderColor = `rgb(${r1}, ${g1}, ${b1})`;
            left = Math.round(
                Math.random() *
                    (document.documentElement.clientWidth - width_height)
            );
            top = Math.round(
                Math.random() *
                    (document.documentElement.clientHeight - width_height)
            );
            $(".circle").animate(
                {
                    width: width_height,
                    height: width_height,
                    "background-color": bgColor,
                    "border-color": borderColor,
                    left: left,
                    top: top,
                }, 1000,
                "easeInOutBack"
            );
        },
        1000
    );
});
