window.onload = function()
{
    function isEmpty(obj)
    {
        if(Object.keys(obj).length == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    console.log(isEmpty({}));
    console.log(isEmpty({name: "John" }));
}