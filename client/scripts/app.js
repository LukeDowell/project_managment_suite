/**
 * Created by lukedowell on 7/30/15.
 */
$(document).ready(function() {
    $("#genProjectBtn").on('click', function() {
       var proj = ClientProject();
        $('.project-wrapper').html(proj);
    });
});

/**
 * Creates a new client project and randomly assigns
 * it's project requirements to itself
 * @constructor
 */
function ClientProject(name, companyName) {
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