

const logIn =  document.getElementById('logIn');//log in button 
const Name=document.getElementById('Name');//name
const Password= document.getElementById('Password')//password

function checkInput()// function to check the text box input not empty
{
	
  try {
    document.getElementById('error').innerText="";//empty error message

    if(Name.value !="" && Password.value !="" )//mycondition
    
    
   {
      document.getElementById('error').innerText=Name.value+Password.value;//goto wether page
     
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


