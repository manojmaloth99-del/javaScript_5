//1
let arr = ["Apple","Banana","Custard Apple","Orange","kiwi"];
arr.push("Pomogranate","carrot","pineApple");
console.log(arr);

//2
let arr2 = [1,2,3,4,5,6];
arr2.pop(arr2.length-1);
console.log(arr2);

//3
let arr3 = ["Manoj","Kishore","Venkatesh","Sagar","Akhil"];
arr3.shift(arr3[0]);
console.log(arr3);

//4
let arr4 = [10,20,30,40];
arr4.unshift(50,60);
console.log(arr4);

//5
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(0,2);
console.log(arr5);

//6
let arr6 = [1,2,3,4,5];
arr6.splice(2,1,100);
console.log(arr6);

//7
let arr7 = [1,2,3,4,5];
arr7.fill("Hello",2,4);
console.log(arr7);

//8 
let ar1 = [1,2,3,4];
let ar2 = [5,6,7,8];
let res = ar1.concat(ar2);
console.log(res);

//9
let ar3 = [10,20,30,40,50,60];
let result = ar3.slice(1,4);
console.log(result);

//10
let ar4 = [1,2,[3,4],[5,6,[7,8]],9];
let output = ar4.flat(Infinity);
console.log(output);

//11
let ar5 = [10, 20, 30, 40, 50];
let ress = ar5.includes(30);
console.log(ress);

//12
let ar6 = [5, 10, 15, 20, 25];
let re = ar6.indexOf(20);
console.log(re);

//13
let ar7 = [1, 2, 3, 2, 1, 2];
let ree = ar7.lastIndexOf(2);
console.log(ree);

//14
let a1 = [50,10,30,20,40];
let resss = a1.sort();
console.log(resss);

//15
let a2 = [10,20,30,40,50];
let outcome = a2.reverse();
console.log(outcome);

//16
let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let TotalArray = [...array1, ...array2];
console.log(TotalArray);

//17
let object1 = {
    name1 : "Manoj Kumar",
    name2 : "Venkatesh",
    name3 : "Kishore"
}
let object2 ={
    job1 : "Frontend Developer",
    job2 : "Backend Developer",
    job3 : "Java Developer"
}

let TotalObject = {...object1, ...object2};
console.log(TotalObject);

//18
function arr11(a,b,...c){
    console.log("First parameter",a);
    console.log("Second parameter",b);
    console.log("Remaining parameter",c);
}
arr11(2,3,4,5,6);

//19
function one(a,b,...c){
    let sum = a + b + c[0] + c[1];
    console.log(sum);
}
one(10,20,30,40,);

//20
let array3 = [1,2,3,4];
let array4 = [5,6,7,8];
let newArray = [...array3];
console.log(newArray);

//21
let rr = [10, 20, 30, 40];
let[a,b,c,d] = rr;
console.log("a: ",a);
console.log("b: ",b);
console.log("c: ",c);
console.log("d: ",d);

//22
let nested = [1, 2, [3, 4, [5, 6]]];
[a,b,[c,d,[e,f]]] = nested;
console.log(a,b,c,d,e,f);

//23
let aa = ["Manoj Kumar",29,7.5];
let [name,Age,CGPA] = aa;
console.log(name);
console.log(Age);
console.log(CGPA);

//24
let obj = {
    namee : "Manoj Kumar",
    role : "Frontend Developer",
    locationn : "Hyderabad"
};
let {namee,role,locationn} = obj;
console.log(namee);
console.log(role);
console.log(locationn);

//25
let obj3 = {
    studentName : "Manoj Kumar",
    Location : {
        City : "Hyderabad",
        State : "Telangana"
    }
};

let {studentName, Location : {City,State}} = obj3;
console.log(studentName);
console.log(City);
console.log(State);

//26
let obj7 = {
    name1 : "Manoj Kumar",
    role1 : "Developer",
    Location : {
        mainLocation : "Chennai",
        currentLocation : "Hyderabad"
    }
};

let {name1,role1,Location:{mainLocation,currentLocation}} = obj7;
console.log(name1);
console.log(role1);
console.log(mainLocation);
console.log(currentLocation);

//27
let Array10= [1,2,3,4,5,6,7,8,9,10];
Array10.shift();
Array10.pop();
Array10.unshift(12,13);
console.log(Array10);

//28
let i = [100,200,300,400,500,100];
let iRes = i.includes(200);
let iiRes = i.indexOf(400);
let iiiRes = i.lastIndexOf(100);

console.log(iRes);
console.log(iiRes);
console.log(iiiRes);

//29
let OBJ1 = {
    EmployeeName1 : "Manoj Kumar",
    EmployeeRole1 : "Developer",
    EmployeeLocation1 : "Vizag"
};
let OBJ2 = {
    EmployeeName2 : "Shiva",
    EmployeeRole2 : "Tester",
    EmployeeLocation2 : "Chennai"
};
let OBJtotal = {...OBJ1, ...OBJ2};
console.log(OBJtotal);
let {EmployeeName1,EmployeeRole1,EmployeeName2, EmployeeRole2} = OBJtotal;
console.log(EmployeeName1);
console.log(EmployeeRole1);
console.log(EmployeeName2);
console.log(EmployeeRole2);

//30
let Array9 = [1,2,[3,4,[5,6]],7,8,9];
let RES = Array9.flat(Infinity); 
let RES2 = RES.reverse();
console.log(RES2);