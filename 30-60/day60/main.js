// let a = 10 ;
// let b = 20 ;

// let temp = a ;
// a = b ;
// b = temp ;

// console.log(a,b)

// var Person = function(name ,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }

// var Teacher = function(name ,age ,job,subject){
//     Person.call(this,name,age,job);
//     this.subject = subject;
// }

// var sumon = new Teacher('sariot hossain',"30","cse computer engieer" ,"Wev developer")

// console.log(sumon.name)

// for(i=2;i<=25;i++){
//     for(y=2; y<=i ; y++){
//         if(i % y == 0){
//             break;
//         }
//         if(i==y){
//             console.log(i)
//         }
//     }
// }
let i = 0;
let F0 = 0 ;
let F1 = 1;
for(let i=0;i<=10;i++){
    F = F0+F1 ;
    console.log(F)
    F1 = F0 ;
    F0 = F;

}