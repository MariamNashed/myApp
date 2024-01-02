

const logIn =  document.getElementById('logIn');//log in button 
const Name=document.getElementById('Name');//name
const Password= document.getElementById('Password')//password
const check =  document.getElementById('Check');//log in button 

//welcome function
function welcomeUserName()
{
 // console.log( document.getElementById('userName').value)
try {
 // alert(document.getElementById('error').value)
 window.onload = (event) => {
  console.log("page is fully loaded");
};
L
  // var userName = localStorage.getItem('userName',Name.value);

  // var inputName = localStorage['userName'];
  // var displayName = inputName;

  // document.getElementById('WelcomeUser').innerText="Welcome "+displayName;
    } 
    
    catch (error) {
}}

function checkInput()// function to check the text box input not empty
{
	
  try {

    document.getElementById('error').innerText="";//empty error message

    if(Name.value !="" && Password.value !="" )//mycondition
   {

    window.open("./CheckWeather.html");        //goto wether page

     //welcomeUserName();

     document.getElementById('Name').value='';//empty user name
     document.getElementById('Password').value='';//empty epassword

     
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
try{
logIn.addEventListener('click', checkInput);//click logIn button event
}catch
{}
check.addEventListener('click',welcomeUserName);


