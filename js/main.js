function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);


	var age = prompt('How old are you?');
	age = parseInt(age);


	if (age >= 18) {
		console.log('User is an adult');
	} else if (age>=13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	/* if (age >= 18) {
		alert('User is an adult');
	} else if (age>=13) {
		$('h1').text('User is a teenager');
	} else {
		console.log('User is a child');
	}. */

	/* if the user's first name is 'General' and the last name is NOT 'Assembly', then greet the General! */
	if (firstName == 'General' && lastName !='Assembly') {
		console.log('Then greet the general!');
	}
}	
	/*
	if (firstName.toLowerCase == 'General')  {
		if(lastName.toLowerCase !='Assembly') {
		console.log('Then greet the general!');
		}
	}
	.toLowerCase pravi vs bykvi da sa malki
	*/

	/*
	if (firstName == 'General')  {
		if (lastName !='Assembly') {
		console.log('Then greet the general!');
		}
	}
	*/

















	// When the page has loaded
	$(function() {
	$('img').on('click', askQuestions);
	//when the user clicks on a H3
	$('h3').on('click', function(){
		/*.on kazva kogato h3 napravi edi kvo si, when this happens, do this between here and here between the function  curly breckets*/

	//Hide the next element
	//$(this).next().hide();
	//$(this).next().toggle();
	$(this).next().slideToggle(3000);

	//this oznachava specifichniq element koito sme posochili (h3)
	//.next is showing the next element after h3, for example (p) after h3
	//hide ill hide it (p)
		});

	});

	//v bracketsa moje da slagame extra instruction, for example next('p')
	// toggle is hiding and showing   $(this).next().toggle();
	//slidetoggle> slidva teksta, kato go zatvarq i otvarq. moje da slagame secundi v skobite kolko bavno da go pravi  $(this).next().slideToggle(3000);
	//api.jquery.com/toggle