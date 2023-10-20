window.onload = function()
{

    document.getElementById("store").onclick = function()
    {

        let key = JSON.stringify(document.getElementById("key").value);
        let value = JSON.stringify(document.getElementById("value").value);

        const select = document.getElementsByTagName("select")[0].value;

        if(select == "local")
        {
            console.log(key + value);
            localStorage.setItem(key, value);
        }
        else if(select == "session")
        {
            console.log(key + value);
            sessionStorage.setItem(key, value);
        }

        showStorage();
    }

    showStorage();

    function showStorage()
    {
        let ki = "";
        let key = JSON.stringify(document.getElementById("key").value);

        if(localStorage.getItem(key) != null)
        {
            ki += `Local Storage: Key: ${key}, Value: ${localStorage.getItem(key)}<br>`;
        }
        else
        {
            ki += `Local Storage: Key: ${key}, Adat nem érhető el<br>`;
        }

        if(sessionStorage.getItem(key) != null)
        {
            ki += `Session Storage: Key: ${key}, Value: ${sessionStorage.getItem(key)}<br>`;
        }
        else
        {
            ki += `Session Storage: Key: ${key}, Adat nem érhető el<br>`;
        }

        document.getElementById("ki").innerHTML += ki;
    }

    document.getElementById("clear").onclick = function()
    {
        localStorage.clear();
        sessionStorage.clear();

        showStorage();
    }
}