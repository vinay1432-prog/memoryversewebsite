function startWedding() {

    document.getElementById("bgMusic").play();

    document
        .querySelector(".story")
        .scrollIntoView({
            behavior: "smooth"
        });

}

const weddingDate =
    new Date("Aug 23, 2026 09:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const days =
        Math.floor(gap / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (gap % (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (gap % (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (gap % (1000 * 60))
            /
            1000
        );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

function openImage(src){

    document
        .getElementById("imageModal")
        .style.display = "flex";

    document
        .getElementById("fullImage")
        .src = src;

}

function closeImage(){

    document
        .getElementById("imageModal")
        .style.display = "none";

}

function sendWish(){

    alert(
        "❤️ Thank you for your wishes!"
    );

}

function celebrateWedding(){

    for(let i=0;i<80;i++){

        let conf =
        document.createElement("div");

        conf.innerHTML="🎉";

        conf.style.position="fixed";

        conf.style.left=
        Math.random()*100+"vw";

        conf.style.top="-50px";

        conf.style.fontSize="30px";

        document.body.appendChild(conf);

        let duration=
        Math.random()*3000+2000;

        conf.animate(

            [
                {
                    transform:
                    "translateY(0)"
                },

                {
                    transform:
                    "translateY(110vh)"
                }
            ],

            {
                duration:duration
            }

        );

        setTimeout(()=>{
            conf.remove();
        },duration);

    }

}