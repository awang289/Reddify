
function dark() {
document.body.style.backgroundColor = "red";
};

document.getElementById("b").onclick = function() {
    dark();
};
document.getElementById("b2").onclick = function() {
    chrome.extension.sendMessage({
            type: "red"
        });
    

    
};