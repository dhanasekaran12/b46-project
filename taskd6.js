//person class
class Person {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
    detail()
    {
        return "Name  :"+ this.name+"   Age  :"+this.age;

    }

  
}  
  const per1 = new Person("Dhana",19);
console.log (per1.detail());
  

 //calculate uberprice
 class Uberprice{
     constructor(distance,time)
 {
     this.distance=distance;
     this.time=time;
     this.fare=3;
     this.minfare=0.5;
     this.kmfare=2;

 }
 calculation()
 {
     let timecost =   this.time * this.minfare ;
     let distcost = this.distance * this.kmfare ;
     let uberfare=this.fare+timecost+distcost;
     return uberfare;
 }

 }
 let ride= new Uberprice(10,120);
console.log(ride.calculation());
