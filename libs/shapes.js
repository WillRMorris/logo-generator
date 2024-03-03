//parent class shapes for all shared attributes of the shapes
class Shape {
    constructor(x, y, fill, border =false ){
        this.x = x;
        this.y =y;
        this.fill = fill;
        this.border = border;
        this.borderInput =this.borderStyle(border);

    }
    //uses border boolean input to generate a basic border if true.
    borderStyle (borderVal){
        if (borderVal){
            let style = `stroke:black;stroke-width:3`
            return style;
        }else{
            return "";
        }

    }
}
//Triangle obj that creates and holds the line needed to generate the svg
class Triangle extends Shape {
    constructor(x, y, x2, y2, x3, y3, fill, border =false){
        super(x,y,fill, border);
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.line = `<polygon points="${this.x}, ${this.y}, ${this.x2}, ${this.y2}, ${this.x3}, ${this.y3}" style="fill:${this.fill};${this.borderInput}" />`

    }
    
}

//Rectangle obj that creates and holds the line needed to generate the svg
class Rectangle extends Shape {
    constructor(x, y, width, height, fill, border = false){
        super(x,y,fill, border);
        this.width = width;
        this.height = height;
        this.line = `<rect width="${this.width}" height="${this.height}" x="${this.x}" y="${this.y}" rx="0" ry="0" style="fill:${this.fill};${this.borderInput}" />`   
    }
}

//Circle obj that creates and holds the line needed to generate the svg
class Circle extends Shape {
    constructor(x, y, r, fill, border = false){
        super(x,y,fill, border);
        this.r = r;
        this.line = `<circle r="${this.r}" cx="${this.x}" cy="${this.y}" style ="fill:${this.fill};${this.borderInput}" />`
        
    }
}

//based on the data.shape, returns the correct shape with a default of circle.
function makeShape (shapeInput,color, border){

    let shape;
    switch(shapeInput){
        case `triangle`:
        case `Triangle`:
            shape = new Triangle(0,0,150,300,300,0, color, border)
            break;
        case `rectangle`:
        case `Rectangle`:
        case `square`:
        case `Square`:
            shape = new Rectangle(0,0, 300, 300, color, border)
             break;
        case `circle`:
        case `Circle`:
            shape = new Circle(150, 150, 150, color, border)
            break;
        default: 
        shape = new Circle(150, 150, 140, color, border)
        break;
    }
    return shape;
}
module.exports = makeShape;
