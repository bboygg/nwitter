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

### React Props

Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.


### Why import as { authService } not just authService?

파이어베이스와 같은 노드패키지에는 보ㅇ 여러가지 기능이 들어 있어 파일의 크가 큽니다. 그래서 패지 전체 내용을 임포트하면 프로그램이 무거워 지는 것은 물론, 사용하지 않을 기능까지 부르게 됩니다. 그래서 보통은 패지를 모듈단위로 나눠 필요한 모듈만 임포트하여 사용합니다. 만약 패키지 전체를 임포트한다면 크롭 브라우저에서 콘솔 경고로 패키지를 모듈단위로 임포트해 사용하라는 메시지를 보여줍니다.

### Why index.js have 'React.StrictMode' ??

CRA로 만든 리액트 프로젝트는 기본으로 index.js 파일에 React.StrictMode를 설정합니다. 이 설정을 지우지 않으면 console.log 함수가 2번 실행되는 현상이 일어납니다. 이는 버그가 아니라 개발 상황에서 의도적으로 console.log함수를 2번 호출하도록 만든 것입니다. 이를 통해 오류를 더 쉽게 포착할 수 있지요.

### What 'event.preventDefault()' works for?

form 엘리먼트는 input 엘리먼트 안에 내용을 모두 작성하고 `Enter` 나 <전송>을 누르면 submit 이벤트가 발생하며 페이지를 새로고침 합니다. 이 때문에 리액트 상태가 초기화되는 현상이 발생합니다. 이 현상을 막기 위해 onSubmit 함수에서 이벤트의 기본값을 막는 event.preventDefault() 를 사용했습니다. 이렇게 하면 submit 이벤트가 발생했을 때 onSubmit 함수에서 submit 이벤트를 가로채고 이벤트의 기본값을 event.preventDefault() 가 막아 새로고침이 발생하지 않습니다.


### What is default value of useState() function? 

> I am facing the issue that looks like useState returns false value even I haven't declare the useState value specifically.

Yes, the default value is false :) 

### How to persist Log in status with setPersistene
파이어베이스는 로그인 상태 지속을 3가지로 나눠 관리하는데 그게 바로 setPersistence야. setPersistence는 local, session, none 옵션을 가지고 있어. 

- local: 웹 브라우저를 종료해도 로그인 유지
- session: 웹 브라우저의 탭을 종료하면 로그아웃
- none: 새로고침하면 로그아웃

기본값은 local!


### what does useEffect function works for? 
useEffect 함수는 특정한 시점에 실행되는 함수야. 우리가 원하는 특정 시점은 파이어베이스  로그인 정보를 받게 되었을 때, 즉 파이어베이스가 초기화되는 시점이야. 이 시점을 
useEffect 함수로 잡아낸 다음 이때 로그인 완료 이후 보여줄 화면을 렌더링하면 되는거지. 파이어베이스는 이를 위한 함수도 미리 준비해 뒀어. authService에 포함된 함수 중 
onAuthSateChanged라는 친구지. 이름을 보면 인증 관련 상태가 바뀌는 것을 감지하는 함수인 것 같네. 이 함수와 useEffect 함수로 인증상태를 감지하도록 수정해 보자!