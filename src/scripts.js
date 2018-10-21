// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?q=technology&api-key=d1024855-161d-4619-9637-4a9dff8304de', true);

request.onload = function () {
  // Begin accessing the JSON data here
  var data = JSON.parse(this.response);

  for (var i = 0; i < data.response.results.length; i++) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(data.response.results[i].webTitle);
    var urlnode = document.createTextNode(data.response.results[i].webUrl);
    // urlnode.setAttribute('href', data.response.results[i].webUrl);
    node.appendChild(textnode);
    node.appendChild(urlnode);
    document.getElementById("headline_container").appendChild(node);

  }

}

// function myFunction() {
//   var str = "Click link";
//   var result = str.link(urlnode);
//   document.getElementById("headline_container").innerHTML = result;
// }


// Send request
request.send();




  //
  // var headline = data.response.results[6].webTitle;
  //
  // console.log(headline);
  //
  // document.getElementById("headline_container").innerHTML = headline;

  // var myJSON = JSON.stringify(data);
  // console.log(myJSON);

  // data.forEach(function(element) {
  //   // Log each webTitle
  //   console.log(element);
  // });
