
    var width = window.innerWidth;

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    var header = document.getElementById("title");
    var title = document.getElementById("title");
    var link = document.getElementById("link");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var link4 = document.getElementById("link4");
    var link5 = document.getElementById("link5");
    var link6 = document.getElementById("link6");
    var link7 = document.getElementById("link7");

    if ( width > 768 ){
        navbar.classList.add("full");
        toggle.classList.add("none");
        title.classList.add("align-end");

        window.onscroll = function() {myFunction()};
    
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
                header.classList.add("hidden");
            } else {
                navbar.classList.remove("sticky");
                header.classList.remove("hidden");
            }
        }
    }

    else {
        navbar.classList.add("sidenav");
        title.classList.add("self-align-center");
        link.onclick = function(){closeNav()};
        link2.onclick = function(){closeNav()};
        link3.onclick = function(){closeNav()};
        link4.onclick = function(){closeNav()};
        link5.onclick = function(){closeNav()};
        link6.onclick = function(){closeNav()};
    }

function received() {
    alert("Comment Received");
}

function openNav() {
    document.getElementById("navbar").style.width = "250px";

    var link6 = document.getElementById("link6");
    link6.classList.remove("none");
    link6.classList.add("out");
}
  
function closeNav() {
    document.getElementById("navbar").style.width = "0";

    var link6 = document.getElementById("link6");
    link6.classList.add("none");
}


