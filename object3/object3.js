window.onload = function()
{
    let fizetes = {
        Anna : 2100,
        Cecil : 1890,
        Emil : 2050,
        Gerald : 2920
    }

    kiiras();

    function kiiras()
    {
        let sum = 0;

        for (const key in fizetes) {
            if (Object.hasOwnProperty.call(fizetes, key)) {
                const element = fizetes[key];
                
                sum += element;
                document.getElementById("lista").innerHTML += "<li>" + key + ": " + element;
            }
        }

        document.getElementById("lista").innerHTML += "<li>Sum: " + sum;
    }
}