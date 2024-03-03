
const shapes = require(`./shapes.js`);

describe('shapes', () => {
    it('should make svg appropriate text', () => {

        const shape = shapes('triangle', 'blue', false);
        //didn't feel the need to make this a function. since any time an obj is made we can just use the input to fill it out.
        expect(shape.line).toEqual('<polygon points="0, 0, 150, 300, 300, 0" style="fill:blue;" />');
    });
});

describe('shapes', () => {
    it('should make svg appropriate text', () => {

        const shape = shapes('circle', '#040B46', false);
        //didn't feel the need to make this a function. since any time an obj is made we can just use the input to fill it out.
        expect(shape.line).toEqual('<circle r="140" cx="150" cy="150" style ="fill:#040B46;" />');
    });
});

describe('shapes', () => {
    it('should make svg appropriate text', () => {

        const shape = shapes('square', 'red', true);
        //didn't feel the need to make this a function. since any time an obj is made we can just use the input to fill it out.
        expect(shape.line).toEqual('<rect width="300" height="300" x="0" y="0" rx="0" ry="0" style="fill:red;stroke:black;stroke-width:3" />');
    });
});