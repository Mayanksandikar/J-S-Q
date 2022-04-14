let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;

let ele1 = studentRecords.map( stu => stu.name.toUpperCase());
console.log(ele1);

let ele2 = studentRecords.filter(stu => stu.marks > 50);
console.log(ele2);

let ele3 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(ele3);

let totalMarks = 
      studentRecords.reduce( function(accumulator,curr_value){
          console.log(`accumulator: ${accumulator}, curr_value:$                                     curr_value.marks}`);
          return accumulator + curr_value.marks;}, 0)
console.log(totalMarks);

let ele4 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(ele4); 

let totalMarks2 = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks2);

let studentRecords2 = [ {name: 'John', id: 123, marks : 98 },
                  {name: 'Baba', id: 101, marks : 23 },
                  {name: 'John', id: 200, marks : 45 },
                  {name: 'Wick', id: 115, marks : 75 }, ]
let totalMarks3 = studentRecords2.map(function(stu){ 
            if(stu.marks < 50){
                stu.marks += 15;}
            return stu;
        }).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(totalMarks3); 

 function Student(name, sclass, rollno)
  {
     this.name = name;
     this.sclass = sclass;
     this.rollno = rollno;
   };

let    a = new Student("mayank", "A", 10); 
let    b = new Student("mayank", "A", 11); 
let    c = new Student("mayank", "A", 12); 
let    d = new Student("mayank", "A", 13); 
let    e = new Student("mayank", "A", 14); 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);










