// function buyacar (callback1,callback2,callback3){
//     setTimeout(() => {
//         console.log('buy a car')
//         callback1(callback2, callback3);
//     },10000)
// }
// function planATrip (callback1,callback2){
//     setTimeout(() => {
//         console.log('lets go to manali')
//         callback1(callback2);
//     },2000)
// }
// function reachmanali(callback){
//     setTimeout(() => {
//     console.log('reached manali')
//     callback();
//     }, 1000)
// }
// function famousPlaces(){
//     setTimeout(() =>{
//         console.log('reached mountains')
//     },2000)
// }
// buyacar(planATrip,reachmanali,famousPlaces);



function buyacar (){
    return new Promise((res,rej)=> {
        setTimeout(() => {
            res('buy a car')
        },5000)

    })
    
}
function planATrip (){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res('lets go to manali')
        },2000)
    })
   
}
function reachmanali(){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res('reached manali')
            }, 1000)

    })
    
}
function famousPlaces(){
    return new Promise((res,rej) =>{
    setTimeout(() =>{
        console.log('reached mountains')
    },2000)
})
}

// buyacar().then((msg) =>{
//     console.log(msg)
//     planATrip().then((msg2) =>{
//         console.log(msg2)
//         reachmanali().then((msg3) =>{
//             console.log(msg3)
//             famousPlaces().then((msg4) =>{
//                 console.log(msg4)
//             })
//         })
//     })
// })
async function fun1(){
    const msg = await buyacar();
    console.log(msg)
    const msg2 = await planATrip();
    console.log(msg2)
    const msg3 = await reachmanali();
    console.log(msg3)
    const msg4 = await famousPlaces();
    console.log(msg4)
}
fun1();


