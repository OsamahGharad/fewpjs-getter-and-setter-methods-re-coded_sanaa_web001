// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius=radius;
    this.pi=Math.PI;
  }
set diameter(diameter){
  this.radius =diameter / 2;
}
  get diameter(){
    return this.radius * 2 ;
  }
  set circumference(circumference){
    this.radius =  (circumference / Math.PI) / 2;
  }
  get circumference (){
    let diameter;
    return this.pi * diameter;
  }

  get area(){
    return pi * Math.sqrt(radius);
  }

}//end class circle
