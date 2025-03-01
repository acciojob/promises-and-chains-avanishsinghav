//your JS code here. If required.
document.getElementById("btn").addEventListener("click",()=>{
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;
	if(age === "" || name === ""){
		alert("Please enter valid details");
		return;
	}
	age = Number(age);
	let checkage = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age >= 18){
				resolve("Welcome,. You can vote.");
			}
			else{
				reject("Oh sorry. You aren't old enough.")
			}
		},4000)
	})
	checkage
	        .then(message=>alert(message));
	        .catch(error=>alert(error));
})