const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback){
  const request = new XMLHttpRequest();
  request.open("GET", this.url);
  request.addEventListener("load", function(){
    if(this.status !== 200){
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });
  request.send();
};

Request.prototype.post = function (callback, body) {
  const request = new XMLHttpRequest();
  request.open("POST", this.url);
  // tell it thats its sending json needs key and value
  // if you forget this part you will get an undefined
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener("load", function(){
    if(this.status !== 201){
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });

// relates to above psuedo converts JSON to a string
  request.send(JSON.stringify(body));
};

module.exports = Request;
