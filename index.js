function submitData(name,email) {
  const contacts = {
      name: "",
      email: ""
    };

  contacts.name = name
  contacts.email = email
  
  const configurationObject = {
     method: "POST",
     headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
     },
     body: JSON.stringify(contacts),
    };
  
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
        // const id = document.createElement('div')
        // id.innerHTML = `${users.id}`
        document.body.innerHTML = users.id
    })
    .catch(function (error) {
      console.log(error.message)
    //   const info = document.createElement('div');
    //   info.innerHTML = `${replyWithError.message}`
      
      document.body.innerHTML = error.message
    });
};
