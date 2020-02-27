var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color,count)
{
    if(count>0)
    {
    for(var i=0;i<count;i++){
        chocolates.unshift(color);
    }
}
else
    return "Number cannot be zero/negative";
}


//Progression 2: Remove ___ chocolates from the top the dispenser

function  removeChocolates(chocolates, number){
    if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else if(number>0)
    {
    var removedChocolates = [];
    for(var i=0;i<number;i++){
        removedChocolates[i] = chocolates.shift();
    }
    return removedChocolates;
    }
    else
    return "Number cannot be zero/negative";
}


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number)
{
    if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else if(number>0)
    {
    var removedChocolates = [];
    for(var i=0;i<number;i++){
        removedChocolates[i] = chocolates.pop();
    }
    return removedChocolates;
    }
    else
    return "Number cannot be zero/negative";

}



//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color)
{
    if(number>chocolates.length)
    return "Insufficient chocolates in the dispenser";
    else if(number>0)
    {
    var favchoc = [];
    var count = 0;
    for(var i = chocolates.length;i>=0;i--)
    {
        if(chocolates[i]==color)
        favchoc[count++] = chocolates.pop();
    }
    return favchoc;
    }
    else
    return "Number cannot be zero/negative";
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates)
{
    var count = 0;
    var noofcandy=[];
    var a = 0;
    var b = 0;
    var candy = ["green","silver", "blue", "crimson", "purple", "red", "pink"];
    while(count < candy.length)
    {
    for(var i = 0; i<chocolates.length;i++)
    {
        if(chocolates[i]==candy[count])
        noofcandy[count] = ++a; 
    }
    count++;
    a = 0;
    }
    return noofcandy.filter(Number);
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates)
{
    let cho = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let Array = chocolates.sort((a, b) => {
        if (cho[b] > cho[a]) {
            return 1;
        }
        if (cho[b] < cho[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = Array;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, count, currentColor, finalColor)
{
    if(currentColor == finalColor)
    return "Can't replace the same chocolates";
    else if(count>0)
    {
    for(var i = chocolates.length;i>=0;i--)
    {
        if(chocolates[i]==currentColor)
        chocolates[i] = finalColor;
    }
    return chocolates;
    }
    else
    return "Number cannot be zero/negative";
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor)
{
    if(currentColor == finalColor)
    return "Can't replace the same chocolates";
    else
    for(var i = chocolates.length;i>=0;i--)
    {
        if(chocolates[i]==currentColor)
        chocolates[i] = finalColor;
    }
    var output = [chocolates.length,chocolates];
    return output;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
