// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2 * this.radius
    }
    get circumference(){
        return Math.PI*this.radius*2
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }
    set area(area){
        this.radius = Math.sqrt(area / Math.PI)
    }
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    set circumference(circumference){
        this.radius = circumference / (2 * Math.PI);
    }

}