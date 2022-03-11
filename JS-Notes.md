# JS-Notes 𝒥𝓈 📚

Since I'm new to Java script language, this note has been created to summarize Java script syntax used during twitter clone project      
<br/>
### Const
- A const variable cannot be reassigned:
Example:
```javascript
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```

### Export default?
The export statement is used when creating JavaScript modules to export objects, functions, variables from the module so they can be used by other programs with the help of the import statements.
There are two types of exports. One is Named Exports and other is Default Exports.

- Named exports: Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

Example:
```javascript
//file math.js
function square(x) {
return x * x;
}
function cube(x) {
return x * x;
}
export { square, cube };


//while importing square function in test.js
import { square, cube } from './math;
console.log(square(8)) //64
console.log(cube(8)) //512

```

- Default exports: efault exports are useful to export only a single object, function, variable. During the import, we can use any name to import.

Example: 
```javascript
// file module.js
var x=4;
export default x;

// test.js
// while importing x in test.js
import y from './module';
// note that y is used import x instead of
// import x, because x was default export
console.log(y);		
// output will be 4
```
<br />

### Arrow function = () => 💘

Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:

```javascript
let myFunction = (a, b) => a * b;
```

### < span > Tag in HTML

```HTML
// A <span> element which is used to color a part of a text:
<p>My mother has <span style="color:blue">blue</span> eyes.</p>
```

### What is Components? 
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

- Class Components
```javascript
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
- Function Components  

Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
```javascript
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```
