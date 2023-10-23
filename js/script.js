function fetchData() {
    var input = document.getElementById("input").value;
    var check = false;

    $.ajax({
        url: `https://api.rootnet.in/covid19-in/stats/latest`,
        method: "GET",
        success: function (res) {
            var inputValue = input.charAt(0).toUpperCase().concat(input.slice(1));
            res.data.regional.map((v, i) => {

                if (inputValue == res.data.regional[i].loc) {
                    document.getElementById("name").innerHTML = res.data.regional[i].loc;

                    var obj = res.data.regional[i];
                    var newHTML = "";
                    for(var key in obj)
                    {
                        if(key == "loc"){}
                        else if(key == "confirmedCasesIndian")
                        {
                            newHTML += `<div class="field d-flex">`;
                            newHTML += `<i class="fa-solid fa-bed"></i>`;
                            newHTML += `<h3>Confirmed Cases</h3>`;
                            newHTML += `<h3>:</h3>`;
                            newHTML += `<h3>${obj[key]}</h3>`;
                            newHTML += `</div>`;
                        }
                        else if(key == "confirmedCasesForeign")
                        {
                            newHTML += `<div class="field d-flex">`;
                            newHTML += `<i class="fa-solid fa-bed-pulse"></i>`;
                            newHTML += `<h3>Confirmed Cases from foreign</h3>`;
                            newHTML += `<h3>:</h3>`;
                            newHTML += `<h3>${obj[key]}</h3>`;
                            newHTML += `</div>`;
                        }
                        else if(key == "discharged")
                        {
                            newHTML += `<div class="field d-flex">`;
                            newHTML += `<i class="fa-solid fa-eject"></i>`;
                            newHTML += `<h3>Dischrged</h3>`;
                            newHTML += `<h3>:</h3>`;
                            newHTML += `<h3>${obj[key]}</h3>`;
                            newHTML += `</div>`;
                        }
                        else if(key == "totalConfirmed")
                        {
                            newHTML += `<div class="field d-flex">`;
                            newHTML += `<i class="fa-solid fa-hospital-user"></i>`;
                            newHTML += `<h3>Total Cases</h3>`;
                            newHTML += `<h3>:</h3>`;
                            newHTML += `<h3>${obj[key]}</h3>`;
                            newHTML += `</div>`;
                        }
                        else{
                            newHTML += `<div class="field d-flex">`;
                            newHTML += `<i class="fa-regular fa-snowflake"></i>`;
                            newHTML += `<h3>Deaths</h3>`;
                            newHTML += `<h3>:</h3>`;
                            newHTML += `<h3>${obj[key]}</h3>`;
                            newHTML += `</div>`;
                        }

                    }

                    document.getElementById("output").innerHTML = newHTML;
                    document.getElementById("error").innerHTML = "";
                    check = true;
                }
            })

            if(!check){
                document.getElementById("error").innerHTML = "Please enter valid input !"
            }
        }
    })
    input.value = "";
}