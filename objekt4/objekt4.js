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

                document.getElementById("content").innerHTML += `<div class="kartya"><h3>${element.firstName} ${element.lastName}
                </h3><div class="kep"><img src="" alt="Kép a hősről"></div><p class="szoveg">Job: ${element.job}</p></div>`;
            }
        }

    }

    megjelenit(heroes);
}    