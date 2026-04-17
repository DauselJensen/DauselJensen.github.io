function closeSubMenuGroups(nav){
    var groups = nav.querySelectorAll(".menu_group");
    for (var group of groups){
        group.classList.remove("open");
    }
}

function setupMenu(nav){
    var menuButton = nav.querySelector(".menu_toggle");
    var menuItems = nav.querySelector(".top_menu");
    var groups = nav.querySelectorAll(".menu_group");

    if (!menuButton || !menuItems){
        return;
    }

    menuButton.addEventListener("click", function(){
        nav.classList.toggle("menu_open");
        if (!nav.classList.contains("menu_open")){
            closeSubMenuGroups(nav);
        }
    });

    for (var group of groups){
        var menuLink = group.querySelector("a");
        if (!menuLink){
            continue;
        }

        menuLink.addEventListener("click", function(evt){
            if (window.innerWidth > 760){
                return;
            }

            var thisGroup = evt.currentTarget.parentElement;

            if (!nav.classList.contains("menu_open")){
                nav.classList.add("menu_open");
            }

            if (!thisGroup.classList.contains("open")){
                evt.preventDefault();
                closeSubMenuGroups(nav);
                thisGroup.classList.add("open");
            }
        });
    }

    document.addEventListener("click", function(evt){
        if (window.innerWidth > 760){
            return;
        }
        if (!nav.contains(evt.target)){
            nav.classList.remove("menu_open");
            closeSubMenuGroups(nav);
        }
    });

    document.addEventListener("keydown", function(evt){
        if (evt.key === "Escape"){
            nav.classList.remove("menu_open");
            closeSubMenuGroups(nav);
        }
    });

    window.addEventListener("resize", function(){
        if (window.innerWidth > 760){
            nav.classList.remove("menu_open");
            closeSubMenuGroups(nav);
        }
    });
}

var navBars = document.querySelectorAll(".top_nav");
for (var navBar of navBars){
    setupMenu(navBar);
}
