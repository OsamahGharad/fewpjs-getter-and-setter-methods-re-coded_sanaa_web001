// Add your Circle class here
class Circle {
  constructor(radius) {
    this.raduis=raduis;
    this.pi=Math.PI;
  }
set diameter(diameter){
  this.radius =diameter / 2;
}
  get diameter(){
    return this.radius * 2 ;
  }
  set circumference(circumference){
    this.radius = 2(circumference / pi);
  }
  get circumference (){
    return pi * diameter;
  }

  get area(){
    return pi * Math.sqrt(radius);
  }

}//end class circle
