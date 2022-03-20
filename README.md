# Nwitter :bird:

Twitter clone project with React and Firebase.


## Getting started 🚀
</br>


### How to Run in local
Run below command in terminal window to run program

```shell
npm start
```

### How to Deploy
Run below command in terminal window to deploy
```shell
npm run deploy
```
</br>


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

### Navigate is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
As long as i know, in react-router v6 <Route> it's the only component that's able to be child of <Routes>

From: 
```javascript
<Navigate from="*" to="/" />

```

To: 
```javascript
<Route exact path="*" element={<Navigate to="/" />} />
```


### When Log in, Chrome browser prompt Warning message : Check your passwords
> Chrome found the password you just used in a data breach. To secure your accounts, we recomend checking your saved password.

This is comes from Chrome's Mange password service

[Link to Page](https://support.google.com/chrome/answer/95606?visit_id=637827380826233573-30611931&p=settings_password&rd=1#leak_detection_privacy) 


### "You need to enable JavaScript to run this app." reactjs
> When I am pull the project and start the project, and then I am getting error in console "You need to enable JavaScript to run this app." reactjs. 

This is because of I put .env file in wrong path, not in root PATH, but inside of src directory.

Before:
./src/.env

After: 
./.env


