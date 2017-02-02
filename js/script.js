window.onload = function() {

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
                      //check user exists - null
                      console.log(jsonTwo)
                      if(jsonTwo.mature===null){
                        var article = document.createElement("article");
                        var status = document.createElement("p");
                        status.innerText = "Account " + jsonTwo.display_name +  " does not exist";
                        status.id = "disbanded";
                        article.appendChild(status);
                        section.appendChild(article);




                      }
                      else {
                        //username

                        var usernameText = document.createTextNode(jsonTwo.display_name);
                        var username = document.createElement("h2");
                        username.appendChild(usernameText);
                        username.id = "username";
                        var article = document.createElement("article");
                        article.appendChild(username);
                        article.id = "esl";
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
            console.log(status);
            //Preview Image
            var previewImage = json.stream.preview.medium;
            var preview = document.createElement("img");
            preview.src=previewImage;
            preview.id = "preview";
            console.log(previewImage);
            article.appendChild(preview);
            //Viewers
            var viewersApi = document.createTextNode(json.stream.viewers+" viewers");
            var viewers = document.createElement("p");
            viewers.appendChild(viewersApi);
            viewers.id = "viewers";
            article.appendChild(viewers);
          }



          }
    }
    for (var i = 0; i<4; i++){
    var j = ["esl_sc2", "OgamingSC2", "freecodecamp", "ssssssssssssss"];
    xhr.open("GET", "https://wind-bow.gomix.me/twitch-api/streams/"+j[i], false);
    xhr.send();

  }







}
