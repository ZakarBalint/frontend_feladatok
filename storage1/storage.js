window.onload = function()
{
    //console.log("loaded");

    document.getElementById("store").onclick = function()
    {
        console.log("Click");

        let key = JSON.stringify(document.getElementById("key").value);
        let value = JSON.stringify(document.getElementById("value").value);


        const select = document.getElementsByTagName("select")[0].value;

        if(select == "local")
        {
            console.log(key + value);
            localStorage.setItem(key, value);
            document.getElementById("ki").innerHTML = `Local Storage: ${localStorage.getItem(key)}`;
        }
        else if(select == "session")
        {
            console.log(key + value);
            sessionStorage.setItem(key, value);
            document.getElementById("ki").innerHTML = `Session Storage: ${sessionStorage.getItem(key)}`;
        }

        
    }

    showStorage();

    function showStorage()
    {
        let ki = "";
        let key = document.getElementById("key").value;
        ki += `Local Storage: ${localStorage.getItem(key)}<br>`;
        ki += `Session Storage: ${sessionStorage.getItem(key)}`;

        document.getElementById("ki").innerHTML = ki;
    }
}