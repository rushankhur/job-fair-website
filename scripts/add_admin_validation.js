window.addEventListener('load', main);

function main() {
    let alert = document.querySelector('#regErrors');

    if (alert) {
        setTimeout(hideAlert, 3000);
    }

    function hideAlert(){
        alert.style.display = "none";
    }

}