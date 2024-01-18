

class Shape {
   private name: string | number;
    constructor( name: string|number) {
        this.name = name
    }
    getArea():string|number{
        return ` THE SIZE OF SHAPE IS  ${this.name}`
    }
}
class Circle extends Shape{
    
    radius:number;
    constructor(name:string|number,radius:number){
        super(name)
        
        this.radius=radius
    }
    CircleRadius(){
       return `THE RADIUS OF CIRCLE IS ${this.radius}`

    }

}
class rectangle extends Shape{
    length:number;
    breath:number
    constructor(name:string,length:number,breath:number){
        super(name)
        this.length=length
        this.breath=breath
    }
    getAreaRectangle():String{
        return ` THE TOTAL LENGTH AND BREATH OF RECTANGLE IS ${this.length * this.breath}`;
    }
}
let shapeData=new Circle(2,5)
// shapeData.CircleRadius()
console.log(shapeData.getArea())
console.log(shapeData.CircleRadius())
let myRectangle=new rectangle('rectangle',2,4)
console.log(myRectangle.getAreaRectangle())

