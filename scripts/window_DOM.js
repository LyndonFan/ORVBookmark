const prependString = `
<div class="blue windorv">
    <div class="white windorv">
        <div class="blue windorv">
            <div class="white windorv">
                <div class="blue windorv lastwin">
                    <p style="width:100%;">
                        <span>
                            <div class="icon">✕</div>
                            <div> </div>
                            <div class="icon">❐</div>
                            <div> </div>
                            <div class="icon">—</div>
                        </span>
                    </p>`;
// originally ✕, ❐, — from top to bottom
const appendString = `</div></div></div></div></div>`;

function updateWindows(){
    var body = document.getElementsByTagName("body");
    body[0].innerHTML = "<div class='userstuff'>\n"+body[0].innerHTML+"</div>";
    var windows = document.getElementsByClassName("orvwindow");
    console.log(windows.length+" window"+(windows.length==1?"":"s"));
    for (var i = 0; i < windows.length; i++){
        var oldStyle = windows[i].style;
        console.log(oldStyle);
        if (windows[i].classList.contains("yellow")){
            windows[i].classList.remove("yellow");
            windows[i].innerHTML = prependString.replaceAll("blue","yellow") + windows[i].innerHTML + appendString; 
        } else {
            windows[i].innerHTML = prependString + windows[i].innerHTML + appendString; 
        }
        windows[i].classList.add("windorv");
        windows[i].style.borderRadius = "0";
        if (windows[i].classList.contains("galaxy")){
            windows[i].classList.remove("galaxy");
            windows[i].style.backgroundImage = "url(../images/galaxy.png)";
            windows[i].style.backgroundSize = "cover";
        } else {
            if (!windows[i].style.maxWidth){
                windows[i].style.padding = "0";
                windows[i].style.maxWidth = "1000px";
            }
        }
    }
}