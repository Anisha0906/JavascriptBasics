/*function resolveAfter2Seconds(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolved");
    },2000);
    });
}
function resolveAfter1Seconds(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolved");
    },1000);
    });
}


async function asyncCall() {
    var abc = 8;
    console.log("calling");
    const result = await resolveAfter2Seconds();
    const a=await resolveAfter1Seconds();
    console.log("after resolve result",result);
    const FinalResult = result + abc;
    console.log("after resolve final result",FinalResult);
}
asyncCall();*/

function abc() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(" success");
      }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
  }
   
  async function display() {
    let data = await abc();
    console.log(data);
  }
   
  display();