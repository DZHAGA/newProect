// function generateArray(array){
//     for(var i = 0; i < 20; i++) {
//         array[i] = i;
//     }

//     console.log(array)
// }  



// var arr = [];


// generateArray(arr)

// function randomArray(arr){
//     for(var i = 0; i < 20; i++){
//         array[i] = Math.floor(Math.random() * 20);
//     }

//     console.log(array)
// }

// var arr = [];

// randomArray(arr)

// var students = [
//     {
//       name:"Alex",
//       age:15
//     },
//     {
//       name:"Alisa",
//       age:25
//     },
//     {
//       name:"AJar",
//       age:36
//     },
//     {
//       name:"Rex",
//       age:78
//     },
//     {
//       name:"Katy",
//       age:32
//     },
//     {
//       name:"Tilek",
//       age:105
//     },
//     {
//       name:"Josh",
//       age:13
//     },
//     {
//       name:"Aynana",
//       age:65
//     },
//   ]

//   var newArray = []

//   for(var i = 0; i < students.length; i++){
    //       if(students[i].age > 50) {
        //         newArray[newArray.length] = students[i]
        
        //   }
        // }
        
        // console.log(students[i])
        
        //   for(var i = 0; i < students.length; i++)
        //   if(students[i].age > 50) {
            //     console.log(students[i])
            //   }

    var students = [

        {
            name:"Alex",
            age:15,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"Alisa",
            age:25,
            isDiplom: false,
            sex: "women"
        },
        {
            name:"AJar",
            age:36,
            isDiplom: true,
            sex: "women"
        },
        {
            name:"Rex",
            age:78,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"Katy",
            age:32,
            isDiplom: true,
            sex: "women"
        },
        {
            name:"Tilek",
            age:105,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"Josh",
            age:13,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"Aynana",
            age:65,
            isDiplom: true,
            sex: "women"
        },
        ]

    var pupils = [
        {
            name:"Alex",
            age:15,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"Alisa",
            age:25,
            isDiplom: false,
            sex: "women"
        },
        {
            name:"AJar",
            age:36,
            isDiplom: true,
            sex: "women"
        },
        {
            name:"ARex",
            age:78,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"AKaty",
            age:32,
            isDiplom: true,
            sex: "women"
        },
        {
            name:"AkTilek",
            age:105,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"AJosh",
            age:13,
            isDiplom: false,
            sex: "man"
        },
        {
            name:"Aynana",
            age:65,
            isDiplom: true,
            sex: "women"
        },

    ]
        var age =  array[i].age;
        var name = array[i].name;
        var sex = array[i].sex;
        var diplom = array[i].diplom;


        function generateStudents(array){
            if(age > 30 && name[0] === "a")
            for(i = 0; students.length; i++);
            if(diplom){
                if(students[i].sex === "man"){
                    console.log(`The ${name} ${age} years old, and he has a diplom`)
                } else if (students[i].sex === "women") {
                    console.log(`The ${name} ${age} years old, and she has a diplom`)
                }
            } else{
                if(students[i].sex === "man"){
                    console.log(`The ${name} ${age} years old, and he hasnt a diplom`)
                } else if (sex === "women") {
                    console.log(`The ${name} ${age} years old, and she hasnt a diplom`)
                }
            }
        }

        generateStudents(students)
