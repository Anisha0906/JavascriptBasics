function abc() {
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
.catch((erro) => console.log("after rejected----->",erro));