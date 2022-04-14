function collapseAside() {
    const blockArray = ["asideMenu", "responsiveBody"]
    for(let block of blockArray){
        var x = document.getElementById(block);
        if (x.className === block) {
            x.className += " responsive";
        } else {
            x.className = block;
        }
    }
}

const page = location.pathname.replace("/","");
if(page=='index.html'){
    document.getElementById('mainPage').style.color = "black";
    document.getElementById('mainPage').style.href = "";
}
else if(page=='about.html'){
    document.getElementById('aboutPage').style.color = "black";
    document.getElementById('aboutPage').style.href = "";
}

function readMur(murId=''){
    //依照id render page
    window.location.href = document.location.origin + "/murmur.html"
}

var goTopBtn = document.getElementById("btn-go-top");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function guessWhat(){
    var guess = window.prompt('猜猜看R~');
    if(guess == null || ""){
        alert("嗚嗚嗚~~~")
    }
    else{
        var confirm = window.confirm(`你確定是${guess}?`);
        if(confirm){
            if(guess == "皮卡丘"){
                window.location.href = document.location.origin + "/post.html"
            }
            else{
                alert("哇~不是呢!")
            }
        }
        else{
            alert("擱想看覓~")
        }
    }
}