function meretez()
{
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    
    //console.log(width);
    //console.log(height);

    let parent = document.querySelector('.flex-container');
    let divs = parent.children;

    console.log(divs);

    for(let i = 0; i < divs.length; i++)
    {
        divs[i].style.width = width + "px";
        divs[i].style.height = height + "px";
        //console.log(divs);
    }

}
