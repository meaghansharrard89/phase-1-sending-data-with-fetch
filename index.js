// Add your code here
function submitData(userName, userEmail) {

return fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    body: JSON.stringify({
        name: userName, 
        email: userEmail,
    })
})
    .then(res => res.json())
    .then(info => document.body.append(info.id))
    .catch(function (error) {
        alert("Unauthorized Access");
        document.body.append(error.message);
    });
}