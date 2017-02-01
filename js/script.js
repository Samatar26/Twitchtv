window.onload = function() {

    var xhr = new XMLHttpRequest();
    var section = document.getElementById("container");
    var article = document.createElement("article");
    var logo = document.createElement("img");
    var username = document.createElement("h2");

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){

            var json = JSON.parse(this.responseText);
            console.log(json);
            //esl_sc2
            //username
            var usernameText = document.createTextNode(json.stream.channel.display_name);
            username.appendChild(usernameText);
            article.appendChild(username);
            section.appendChild(article);
            //logo
            logo.setAttribute("src", json.stream.channel.logo);
            article.appendChild(logo);
            //Status output
            var statusOuput = document.createTextNode(json.stream.channel.status);
            username.


          }
    }

    xhr.open("GET", "https://wind-bow.gomix.me/twitch-api/streams/esl_sc2", false);
    xhr.send();








}
