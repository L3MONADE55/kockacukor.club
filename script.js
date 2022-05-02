document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#cat').addEventListener('click', changeIframe.bind(null, "cat"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#csgo').addEventListener('click', changeIframe.bind(null, "csgo"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#mobilarena').addEventListener('click', changeIframe.bind(null, "mobilarena"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#eger').addEventListener('click', changeIframe.bind(null, "eger"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#retek').addEventListener('click', changeIframe.bind(null, "retek"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#tapioszecso').addEventListener('click', changeIframe.bind(null, "tapioszecso"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#lorem').addEventListener('click', changeIframe.bind(null, "lorem"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#orarend1').addEventListener('click', changeIframe.bind(null, "orarend1"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#orarend2').addEventListener('click', changeIframe.bind(null, "orarend2"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#vitya').addEventListener('click', changeIframe.bind(null, "vitya"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#zsiraf').addEventListener('click', changeIframe.bind(null, "zsiraf"))
});
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#uzenetform').addEventListener('click', changeIframe.bind(null, "uzenetform"))
});



function changeIframe(name) {
	console.log(name);
    console.log('calling');
	document.getElementById("iframe").setAttribute("src", "Projects/" + name + "/index.html");

}