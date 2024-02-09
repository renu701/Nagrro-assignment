
function removeStructure(btn) {
    let parentDiv = btn.parentNode;
    while (parentDiv && !parentDiv.classList.contains('list-items')){
        parentDiv = parentDiv.parentNode;
    }
    if(parentDiv) {
        parentDiv.remove();
    }
    console.log("delete me",btn);
}

function toggle(event) {
    const inputContainer = document.getElementById('inputForm');
    console.log(event.textContent,inputContainer);
    if(event.textContent === 'Hide') {
        event.textContent = 'Show';
        inputContainer.style.display = 'none';
    }else {
        event.textContent = 'Hide';
        inputContainer.style.display = 'grid';
    }
}

function getValue(event) {
    console.log("dfghjkl",event.value);
    const modal = document.getElementById('statusModal');

    if(event.value === 'done'){
        modal.style.display='block';
    }
}

function hideModal(){
    const modal = document.getElementById('statusModal');
    modal.style.display='none';
}

function showLoader(){
    const loading = document.getElementById("loading");
    loading.style.display="block";
    setTimeout(hideLoader, 2000);
}
function hideLoader() {
    const loading = document.getElementById("loading");
    loading.style.display="none";
    window.location.href = '/thanks.html'

}
