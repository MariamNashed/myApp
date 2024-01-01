

const logIn =  document.getElementById('logIn');//log in button 
const name=document.getElementById("Name").value;//name
const Password= document.getElementById("password").value//password

function checkInput()// function to check the text box input not empty
{
	
  try {
    document.getElementById('error').innerText="";//empty error message

    if(name !="" && Password !="" )//mycondition
     {
      document.getElementById('error').innerText=
      document.getElementById('Name').value
      +
       document.getElementById('Password').value;
    }
  else
  {
  document.getElementById('error').innerText="Plese inter your Name and Password";//error message
  } 
  } 
  catch (error) {
    
    document.getElementById('error').innerText="Plese check your Name and Password";//catch error message
 
  }
}

logIn.addEventListener('click', checkInput)//click logIn button event


