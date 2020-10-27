// Event handling
document.addEventListener("DOMContentLoaded",
        function (event) {
            var i = 0;
            var k = 0;
            // Unobtrusive event binding
            document.querySelector(".button1")
                    .addEventListener("click", function () {


                        k++;
                        if (i > 12) {
                            i = 1;
                        } else {
                            i++;
                        }// Call server to get the name
                        if (k % 5) {
                            getName(i);
                        } else {
                            getMyName();
                        }

                    });
        }
);

function getMyFotoString(foto){
    return `<img class=\"foto\" src=\"${foto}\" >`
}

function getName(i) {
    $ajaxUtils
            .sendGetRequest("https://reqres.in/api/users/" + i,
                    function (request) {
                        console.log(request.responseText);
                        var personObject = JSON.parse(request.responseText);
                            insertData('#content', personObject.data['first_name']
                                + ' ' + personObject.data['last_name']);
                            insertData('#content1', personObject.data['email']);
                            let image_code = `<img class=\"foto\" src=\"${personObject.data['avatar']}\" >`;
                            insertData('#content2', image_code);
                    });
}

function getMyName() {
    insertData('#content', " Kateryna Shmat");
    insertData('#content1', "katushkashmat@gmail.com");
    insertData('#content2', getMyFotoString("img/Kate.jpg"));
}


function insertData(selector, text){
     document.querySelector(selector)
             .innerHTML=text;
}