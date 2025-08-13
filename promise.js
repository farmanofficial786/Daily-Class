// function prom(complete){
//     return new Promise(function(resolve, reject){
//      console.log("fetching data please wait"); 
//      setTimeout(()=>{
//         if(complete){
//             resolve("I am successful");
//         }else{
//             reject("I am failed")
//         };
//      }, 3000) 
//     });
// };



// ........................................................................................
// prom(false).then((result)=>{
//     console.log(result);
// }).catch((erro)=>{
//     console.log(erro);
// });

// function prom(a, b){
//     return new Promise(function(resolve, reject){
//      console.log("fetching data please wait"); 
//      var c = a + b;
//      setTimeout(()=>{
//         if(c){
//             resolve(`Your Answer ${c}`);
//         }else{
//             reject("I am failed")
//         };
//      }, 3000) 
//     });
// };

// prom(4,5).then((result)=>{
//     console.log(result);
// }).catch((erro)=>{
//     console.log(erro);
// });



//.........................................................................................
// function prom(){
//     return new Promise(function(resolve, reject){
//      console.log("fetching data please wait"); 

//      setTimeout(()=>{
//        $.get("https://jsonplaceholder.typicode.com/albums",function(data){
//         resolve(data);
//        }).fail(err => {
//         reject("fail to load json")
//        });
//      }, 2000) 
//     });
// };

// prom().then((result)=>{
//     console.log(result);
// }).catch((erro)=>{
//     console.log(erro);
// });