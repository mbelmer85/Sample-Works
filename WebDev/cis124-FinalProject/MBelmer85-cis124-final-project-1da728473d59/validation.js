
/*
    Name: Mitch Belmer
    Date: Nov 4th
    Form Validation
*/

//Functions
document.getElementById('mainForm').onsubmit = function(e)
{
    var nameValue = document.getElementById('name').value;
    if (nameValue == null || nameValue == "")
        {
            e.preventDefault();
            document.getElementById('name').style.borderColor = '#FF0000';
        }
    
    var commentsValue = document.getElementById('comments').value;
    if (commentsValue == null || commentsValue == "")
        {
            e.preventDefault();
            document.getElementById('comments').style.borderColor = '#FF0000';
        }
}

document.getElementById('name').onchange = function(e)
{
    document.getElementById('name').style.removeProperty('border');
}

document.getElementById('comments').onchange = function(e)
{
    document.getElementById('comments').style.removeProperty('border');
}
