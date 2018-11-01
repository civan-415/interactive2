var counter = 0;
var classes = ['box1', 'box2', 'box3', 'box4', 'box5'];

$(document).ready(function ()
{
    // Create the parent div of all divs that will be generated.
    // Add this div to the body.

    $('<div id"parent_div"></div>').appendTo('body');

    // Start recursive creation of more divs.

    makeDiv();
});

function makeDiv()
{
    var numRand = Math.floor(Math.random() * 501);
    var divsize = 5;
    var posx = (Math.random() * ($('body').width() - divsize)).toFixed();
    var posy = (Math.random() * ($('body').height() - divsize)).toFixed();

    var newdiv = $('<div class="' + classes[counter] + '"></div>').css({
        'left': posx + 'px',
        'top': posy + 'px',
        'display': 'none' // Since you want they to fadeIn.
    });

    // FIX: can't set counter to 63 because will cause indexing error on array classes.
    //counter = counter < divsize -1 ? counter + 1 : 63;
    counter = counter < (divsize - 1) ? counter + 1 : 0;

    newdiv.appendTo($("#parent_div")).delay(20).fadeIn(100, function ()
    {
        makeDiv();
    });
}
