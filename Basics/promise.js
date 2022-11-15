/*function abc() {
    return new Promise((resolve,reject)=> {
        let flag =true;
        if (!flag) {
            resolve("promise resolved");
        } 
        else
        {
            reject("promise rejected");
        }
    });
};

abc()
.then((value) => console.log("after resolve----->",value))
.catch((erro) => console.log("after rejected----->",erro));*/

var promise = new Promise(function(resolve, reject) {
    const x = "hii";
    const y = "hello"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log("Success");
      }).
      catch(function () {
          console.log("Some error has occurred");
      });