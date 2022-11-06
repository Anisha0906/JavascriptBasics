function resolveAfter2Seconds(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolved");
    },2000);
    });
}
async function asyncCall() {
    var abc = 8;
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log("after resolve result",result);
    const FinalResult = result + abc;
    console.log("after resolve final result",FinalResult);
}
asyncCall();