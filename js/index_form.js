var formRef = firebase.database().ref().child("RegistrationForm");
  document.getElementById('newform').addEventListener('submit',submitForm);
  function submitForm(e)
  {
	e.preventDefault();
	var name = getInputVal('name');
	var email = getInputVal('email');
	var mobile = getInputVal('mobile');
	var clg_name = getInputVal('clg_name');
	var event = getInputVal('event');
	var pay = getInputVal('pay');
	
	saveForm(name,email,mobile,clg_name,event,pay);
	
	document.getElementById('newform').reset();
	
  }
  function getInputVal(id)
  {
	return document.getElementById(id).value;
  }
  function saveForm(name,email,mobile,clg_name,event,pay)
  {
	var newFormRef = formRef.push();
	newFormRef.set({
		name : name,
		email : email,
		mobile : mobile,
		clg_name : clg_name,
		event : event,
		pay : pay
	});
  }
  