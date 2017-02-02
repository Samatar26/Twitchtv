window.onload = function() {

  var online = document.getElementById("online");
  var offlineButton = document.getElementById("offlineButton");
  var allArticles = document.getElementsByTagName("article");
  var all = document.getElementById("all");

  function offline() {

    for(var i = 0; i<allArticles.length; i++){
      if(allArticles[i].className==="offline" ||allArticles[i].className!=="online"){
      allArticles[i].style.display="block";}
      else{allArticles[i].style.display="none"}
}
  }

  function onlineTwo(){
    for(var i = 0; i<allArticles.length; i++){
      if(allArticles[i].className!=="online"){
      allArticles[i].style.display="none";}
  else{allArticles[i].style.display="block"}
}
}
  function allTwo() {
      for (var i = 0; i<allArticles.length; i++){
          allArticles[i].style.display="block";
      }
  }

  offlineButton.addEventListener("click", offline);
  online.addEventListener("click", onlineTwo);
  all.addEventListener("click", allTwo);

    var xhr = new XMLHttpRequest();
    var section = document.getElementById("container");

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){

            var json = JSON.parse(this.responseText);

            if(json.stream===null){
                var xhrTwo = new XMLHttpRequest();
                xhrTwo.onreadystatechange = function(){

                    if(this.readyState == 4 && this.status == 200) {
                      var jsonTwo = JSON.parse(xhrTwo.responseText);
                      //Blocked Channel
                      if(jsonTwo.mature!==false){
                        var article = document.createElement("article");

                        var status = document.createElement("p");
                        status.innerText = "Account " + j[i] +  " is disabled";
                        status.id = "disbanded";
                        article.appendChild(status);
                        article.style.background="white";
                        section.appendChild(article);

                      }

                      else {
                        //offline channel
                        //username

                        var usernameText = document.createTextNode(jsonTwo.display_name);
                        var username = document.createElement("h2");
                        username.appendChild(usernameText);
                        username.id = "username";
                        var article = document.createElement("article");
                        article.appendChild(username);
                        article.id = "esl";
                        article.style.backgroundColor="white";
                        section.appendChild(article);
                        //logo
                        var logo = document.createElement("img");
                        logo.src = jsonTwo.logo;
                        logo.id="logo";
                        article.appendChild(logo);
                        //status
                        var statusOuput = document.createTextNode("Offline");
                        var status = document.createElement("p");
                        var anchorLink = document.createElement("a");
                        anchorLink.href=jsonTwo.url;
                        status.appendChild(statusOuput);
                        anchorLink.appendChild(status);
                        status.id = "offline";
                        article.appendChild(anchorLink);
                        article.className="offline";

                      }
                    }
                }

                xhrTwo.open("GET", "https://wind-bow.gomix.me/twitch-api/channels" + "/" + j[i], false);
                xhrTwo.send();

            }
            else{
            //esl_sc2
            //username

            var usernameText = document.createTextNode(json.stream.channel.display_name);
            var username = document.createElement("h2");
            username.appendChild(usernameText);
            username.id = "username";
            var article = document.createElement("article");
            article.appendChild(username);
            article.id = "esl";
            section.appendChild(article);
            //logo
            var logo = document.createElement("img");
            logo.src = json.stream.channel.logo;
            logo.id="logo";
            article.appendChild(logo);
            //Status output
            var statusOuput = document.createTextNode(json.stream.channel.status);
            var status = document.createElement("p");
            var anchorLink = document.createElement("a");
            anchorLink.href=json.stream.channel.url;
            status.appendChild(statusOuput);
            anchorLink.appendChild(status);
            status.id = "status";
            article.appendChild(anchorLink);
            //Preview Image
            var previewImage = json.stream.preview.medium;
            var preview = document.createElement("img");
            preview.src=previewImage;
            preview.id = "preview";
            article.appendChild(preview);
            //Viewers
            var viewersApi = document.createTextNode(json.stream.viewers+" viewers");
            var viewers = document.createElement("p");
            viewers.appendChild(viewersApi);
            viewers.id = "viewers";
            article.appendChild(viewers);
            article.className="online";
          }



          }
    }
    for (var i = 0; i<5; i++){
    var j = ["esl_sc2", "OgamingSC2", "freecodecamp", "comster404", "brunofin"];
    xhr.open("GET", "https://wind-bow.gomix.me/twitch-api/streams/"+j[i], false);
    xhr.send();

  }


}
