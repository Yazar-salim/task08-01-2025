// display the count of each word
// const sentence= "js python js python" ;
// output={};
// sentence.split(' ').forEach((str)=>output.hasOwnProperty(str)?output[str]+=1:output[str])
// console.log(output);

// Use Object.entries() to iterate through an object and log each key-value pair.
// const objects={name:"yazar",
//                 age:26,
//                 place:"TVM"
// }
// let obj=Object.entries(objects);
// console.log(obj);


// Create an  object and disply its keys, values seperatly
// const objects={name:"yazar",
//     age:26,
//     place:"TVM"
// }

// console.log(Object.keys(objects));
// console.log(Object.values(objects));

// Write a program that takes an array of objects and a property name, and returns the first object where the property exists
// const arrayOfObjects=[{name:"yazar",age:26,place:"TVM"},
//     {name:"sahad",age:24,place:"KOLLAM"},
//     {name:"amal",age:22,place:"KOTTAYAM"}
// ]

// let a=22;
// arrayOfObjects.forEach(obj=>{
//     if(obj["age"]==a){
//         console.log(obj);
//     }
// })

// display the count of each word
// const sentence = "Hello world" ;
// output={}
// sentence.split(' ').forEach((word)=>word in output?output[word]+=1:output[word])
// console.log(output);

// const company = {
//   name: "TechCorp",
//   employees: [
//     { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
//     { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
//     { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
//     { id: 4, name: "Diana", department: "HR", salary: 60000 }
//   ],
//   location: "New York",
//   established: 2010
// };
// // How do you find the total salary of all employees in the "Engineering" department?

// let salary_sum=company["employees"].filter((employees)=>employees.department==="Engineering").reduce((total,emp)=>total+emp.salary,0);
// console.log(`Total salary of engineers = ${salary_sum}`);

// WAP to check if a specific key exists in the object using:
// The hasOwnProperty method

// const objects={name:"Yazar",
//                 age:26,
//                 place:"TVM"
// }

// console.log(objects.hasOwnProperty("age"));


//Count the number of properties in an object
// const objects={name:"Yazar",
//                 age:26,
//                 place:"TVM"
// }

// let count=Object.keys(objects);
// console.log(count.length);

// Double the values of an object
// const objects={num1:20,
//                 num2:26,
//                 num3:40
// }

// let square=Object.values(objects);
// console.log(square.map((a)=>a**2));
