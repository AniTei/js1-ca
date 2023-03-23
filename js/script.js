const contentDiv = document.querySelector(".content-container");


// files successfully connected
// call API

const url = "https://randomuser.me/api/?results=12";

async function getSomeContent() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log(data);

        contentDiv.innerHTML = "Finding random users..."
        // how to empty loading
        
        contentDiv.innerHTML = "";
            //how to empty loading

        //loop needed for data.results[i]
        for (let i = 0; i < data.results.length; i++) {

            console.log(data.results[i])

            contentDiv.innerHTML += `<a href="details.html"> 
                                    <div class="user-item-index">
                                        <img class="user-img-index"src="${data.results[i].picture.large}" alt="user">
                                         <div class="username-index"> @${data.results[i].login.username}</div>
                                        <div class="fullname-index"> ${data.results[i].name.first} ${data.results[i].name.last}</div>
                                        <div> check for seed:${data.info.seed} </div> //+loop
                                    </div>
                                </a>`;
        }

        //displaying username, name and 
        //displayContent(data);

    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!!!", error);

        contentDiv.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;

    }
}
getSomeContent();

/* function createHtml (para) {
}
 */


/*
function displayContent(person) {
    contentDiv.innerHTML = `<div> my gender is: ${data.results[0].gender}</div>`;
}
 */

//got a user!!!

