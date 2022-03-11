# Nwitter :bird:

Twitter clone project with React and Firebase.


## Getting started 🚀
</br>

Run below command in terminal window to run program

```shell
npm start
```
  
## Troubleshooting 🎯

### sh: react-scripts: command not found

> Today I am trying to run my project in another system But I am facing following error while running npm start command sh: react-scripts: command not found in Reactjs. So Here I am Explain to you all the possible solutions here.  


- To Solve sh: react-scripts: command not found Error Just try to install react-scripts with this command: npm i react-scripts And then try to run your project with npm start command Your error should be fixed now.


### export 'default' (imported as 'firebase') was not found in 'firebase/app'

> I am using firebase in my react app But today I am facing following error export ‘default’ (imported as ‘firebase’) was not found in ‘firebase/app’ in react. So Here I am Explain to you all the possible solutions here.

- According to firebase documents: Update imports to v9 compat. In order to keep your code functioning after updating your dependency from v8 to v9 beta, change your import statements to use the “compat” version of each import. For example:

Before: version 8
``` javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
```

After: version 9 compat
``` javascript
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
```


### firebase storage permission deny error

- In order to write the file to Storage, change Storage Rules to allow the read, and write if authorized user. Fore example:


```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
<br/>  

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