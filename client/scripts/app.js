/**
 * Created by lukedowell on 7/30/15.
 */
$(document).ready(function() {
    $("#genProjectBtn").on('click', function() {
        //Create a project with our inputted name and a random company name
        var projectName = $("#projectNameField").val();
        var companyName = COMPANY_NAMES[getRandomNum(0, COMPANY_NAMES.length-1)];
        var proj = new ClientProject(projectName, companyName);
        $('.project-wrapper').html(buildProjectElements(proj));
    });

    //Button - Get Staff - Ajax
});

//Constants
var COMPANY_NAMES = ["Prime Steakhouse", "Prime Emporium", "Prime Laundromat", "Prime Slosh 'n Wash", "Prime Real Estate", "Prime Ice Cream Shoppe"];

/**
 * Creates a new client project and randomly assigns
 * it's project requirements to itself
 * @constructor
 */
function ClientProject(name) {
    this.name = name;
    this.companyName = companyName;

    this.frontReq = getRandomNum(10, 60);
    this.clientReq = getRandomNum(10, 60);
    this.serverReq = getRandomNum(10, 60);
    console.log("Project created! ");
}

function buildProjectElements(clientProject) {
    var $projectDiv = $('<div/>', {

    });

    var $panelHead = $("<div/>", {
        class: "panel-heading",
        text: clientProject.name
    });

    return $projectDiv;
}

/**
 * Gets a random number
 * @param min
 * @param max
 */
function getRandomNum(min, max) {
    Math.floor(Math.random() * (max - min) + min);
}