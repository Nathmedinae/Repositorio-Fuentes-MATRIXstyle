// import * as Realm from "realm-web";

// const app = new Realm.App({ id: "matrix-xlvch" });

// async function loginEmailPassword(email, password) {
//     // Create an anonymous credential
//     const credentials = Realm.Credentials.emailPassword(email, password);
//     try {
//       // Authenticate the user
//       const user = await app.logIn(credentials);
//       // `App.currentUser` updates to match the logged in user
//       assert(user.id === app.currentUser.id)
//       return user
//     } catch(err) {
//       console.error("Failed to log in", err);
//     }
//   }
//   loginEmailPassword("alveirobueno@gmail.com", "matrixstyle2021").then(user => {
//     console.log("Successfully logged in!", user)
//   })

// const mongoose = require("mongoose");

// mongoose.connect(app)
//     .then(db => console.log("DB está conectada"))
//     .catch(err => console.error(err));

// module.exports = mongoose;