

var elform, elSelectPackage, elPackageHint, elTerms, termsHint;
elform= document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
eltermsHint = document.getElementById('termsHint');

function packageFun(){
	if (elSelectPackage.value == 'monthly'){
		elPackageHint.innerHTML = 'Save $10 if you pay for 1 year';
	}else{
		elPackageHint.innerHTML = 'Wise choice';
	}

}
function checkTerms(event){
	if(!elTerms.checked){
		eltermsHint.innerHTML = 'You must agree to the terms and condition'
       event.preventDefault();
	}
}
elSelectPackage.addEventListener('change', packageFun, false);
elform.addEventListener('submit',checkTerms,false);
