/*function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url,false)

    request.send()

    return request.responseText
}*/
function fazPost(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
}

function saveInfo() {
    //preventDefault()
    url = "http://localhost:3333/users"
    let newUserName = document.getElementById("newUserName").value;
    let newUserPassword = document.getElementById("newUserPassword").value;
    let newUserConfirmPassword = document.getElementById("newUserConfirmPassword").value;
    let newUserEmail = document.getElementById("newUserEmail").value;

    body = {
        "name": newUserName,
        "email": newUserEmail,
        "password": newUserPassword
    }

    fazPost(url, body)
}  