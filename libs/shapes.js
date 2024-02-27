
class Shape {
    constructor(x, y, fill, border =false ){
        this.x = x;
        this.y =y;
        this.fill = fill;
        this.border = border;
        this.borderInput =this.borderStyle(border);

    }
    borderStyle (borderVal){
        if (borderVal){
            let style = `stroke:black;stroke-width:3`
            return style;
        }else{
            return "";
        }

    }
}

class Triangle {
    constructor(x, y, x2, y2, x3, y3, fill, border =false){
        Shape.call(x,y,fill, border);
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.line = `  <polygon points="${this.x},${this.y},${this.x2},${this.y2},${this.x3},${this.y3}," style="fill:${this.fill};${this.borderInput}" />`

    }
    
}
class Rectangle {
    constructor(x, y, width, height, fill, border = false){
        Shape.call(x,y,fill, border);
        this.width = width;
        this.height = height;
        this.line = `  <rect width="200" height="100" x="${this.x}" y="${this.y}" rx="0" ry="0" style="fill:${this.fill};${this.borderInput}" />`   
    }
}
class Circle {
    constructor(x, y, r, fill, border = false){
        Shape.call(x,y,fill, border);
        this.r = r;
        this.line = `<circle r="${this.r}" cx="${this.x}" cy="${this.y}" style ="fill:${this.fill};${this.borderInput}" />`
        
    }
}

module.exports = {
    Triangle,
    Rectangle,
    Circle,
}