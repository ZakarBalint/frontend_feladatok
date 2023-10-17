window.onload = function()
{
    let heroes = [ 
        {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
        {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
        {firstName: "Han", lastName: "Solo", job: "csempész"},
        {firstName: "Leia", lastName: "Organa", job: "szenátor"},
        {firstName: "asd", lastName: "Osadana", job: "szeqwtor"},
        {firstName: "Ledsia", lastName: "Ordsagana", job: "szedsanátor"} ]

    function megjelenit(obj)
    {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                
                let line = `<p>Firstname: ${element.firstName}<br> Lastname: ${element.lastName}<br> Job: ${element.job}</p>`;

                document.getElementById("content").innerHTML += `<div>${line}</div>`;
            }
        }

    }

    megjelenit(heroes);
}    