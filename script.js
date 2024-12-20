function validateForm(name, age) {
  return new Promise((resolve, reject) => {
    
    if (!name || !age) {
      reject("All fields must be filled out!");
      return;
    }

  
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); 
  });
}


document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault();// Prevent form from submitting normally

  // Get input values
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  // Call the validateForm function and handle the promise result
  validateForm(name, age)
    .then(message => {
      alert(message); // If promise resolves, show success message
    })
    .catch(error => {
      alert(error); // If promise rejects, show error message
    });
});