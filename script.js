const fields = document.getElementsByTagName("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault()  // stop callback the defaults classes
    // loop to check every input field.
    for(let s of fields){
        // if value is empty
        if(s.value === ""){
           error(s)
        }
        // if email value not match email validation
        else if(fields['email'].value != "" && !fields['email'].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            fields['email'].classList.add("error");
            fields['email'].nextElementSibling.innerHTML = 'Looks like this is not an email';
        }
    }
})

// empty value error function
function error(field){
    field.classList.add("error");
    field.nextElementSibling.innerHTML = `${field.placeholder} cannot be empty`;
}