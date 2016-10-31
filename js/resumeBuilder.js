/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Gilvanna Sato",
	"role" : "Tester",
	"contacts" : {
		"mobile" : "34 998295695",
		"email" : "gilvanna@gmail.com",
		"github" : "gilvanna",
		"twitter" : "@gilvanna", 
		"location" : "Uberlândia/MG"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills": [
		"hard working", "always seaking my best", "fast learning"
	],
	"bioPic" :  "http://imgur.com/a/XWtzD"
};
var education = {
	"schools": [
	{
		"name": "University at Albany",
		"city": "Albany, NY, US", 
		"dates": 2015,
		"url": "http://http://www.albany.edu/ielp/"
	}, 
	{
		"name": "Universidade Federal de Viçosa",
		"city": "Rio Paranaiba, MG, BR",
		"degree": "BA",
		"major": "Information Systems", 
		"dates": 2014,
		"url": "http://http://www.ufv.br/"
	}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"School": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegre = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegre);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedCity);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
};

var work = {
	"jobs" : [
	{
		"position" : "Test Analyst",
		"employer" : "Softbox", 
		"dates" : "10/2016 - now",
		"city" : "Uberlândia",
		"description": "Manually testing products; Developing automatizaded tests using Behat"		
	},
	{
		"position" : "Quality Analyst Jr.",
		"employer" : "Vitta", 
		"dates" : "03/2016 - 10/2016",
		"city" : "Uberlândia", 
		"description": "Manually testing the product Vitta Gestão; Developing automatizaded tests using Behat; Reporting bugs found using BugSmart"			
	}
	]	
};
var projects = {
	"projects" : [
	{
		"title": "meninas++",
		"dates": "2014", 
		"description": "A project to attract more girls to IT"
	}
	]
};
projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);	
		$(".project-entry:last").append(formattedDate);	
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);	
	}
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatterMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatterTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var internationalizeButton = '<button>Internationalize</button>';

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formatterMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formatterTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedBiopic);
$("#topContacts").append(formattedWelcomeMessage);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkills);
$("#mapDiv").append(googleMap);

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);	
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		$(".work-entry:last").append(formattedLocation);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};
var name = bio.name;
function inName(name){
	var name = name;
	var sep = name.split(" ");
	var last = sep[1];
	last = last.toUpperCase();
	var finalName = sep[0] +" "+ last;
	return finalName;
}

displayWork();
projects.display();
education.display();



//$("#main").append(internationalizeButton);
