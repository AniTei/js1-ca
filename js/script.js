const contentDiv = document.querySelector(".content-container");


// files successfully connected

// call API

const url = "https://randomuser.me/api/?results=12";

async function getSomeContent() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log(data.results);


        //loop needed for data.results[i]

        contentDiv.innerHTML =  `<a href="details.html"> <div class="user-item-index">
                                <img class="user-img-index"src="${data.results[5].picture.large}" alt="user">
                                <div class="username-index"> @${data.results[5].login.username}</div>
                                <div class="fullname-index"> ${data.results[5].name.first} ${data.results[5].name.last}</div> 
                                </div></a>

                                <a href="details.html"> <div class="user-item-index"> <p>test 2</p>
                                <img class="user-img-index"src="${data.results[5].picture.large}" alt="user">
                                <div class="username-index"> @${data.results[5].login.username}</div>
                                <div class="fullname-index"> ${data.results[5].name.first} ${data.results[5].name.last}</div> 
                                </div></a>

                                <a href="details.html"> <div class="user-item-index"> <p>test 3</p>
                                <img class="user-img-index"src="${data.results[5].picture.large}" alt="user">
                                <div class="username-index"> @${data.results[5].login.username}</div>
                                <div class="fullname-index"> ${data.results[5].name.first} ${data.results[5].name.last}</div> 
                                </div></a>
                                
                                `;
        //displaying username, name and 
        //displayContent(data);


    }
    catch (error) {
        console.log("OOOPSIE:", error);
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

