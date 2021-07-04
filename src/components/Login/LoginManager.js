




// import firebase from "firebase/app";




// export const createUserWithEmailAndPassword = (name, email, password) => {
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((res) => {
//         const signInUser = {
//           isSignIn: true,
//           name: name,
//           email: email,
//           success: true,
//           error: "",
//         };
//         updateUser(name)
//         handleUserToken();
//         return signInUser;
//       })
//       .catch((error) => {
//         const newUserInfo = {};
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         return newUserInfo;
//       });
//   };

//   export const signInWithEmailAndPassword = (email, password) => {
//     return firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((res) => {
//         const { displayName, email, } = res.user;
//                    const signInUser ={
//                        isSignIn: true,
//                        name: displayName,
//                        email: email,
//                        success: true,
//                    };
//                    handleUserToken();
//                    return signInUser;
//       })
//       .catch((error) => {
//         const newUserInfo = {};
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         return newUserInfo;
//       });
//   };

//  const updateUser = (name) => {
//     const user = firebase.auth().currentUser;
//     user
//       .updateProfile({
//         displayName: name, 
//       })
//       .then((res) => {
//         console.log("user successfully updated");
//       })
//       .catch((error) => alert(error.message));
//   };

