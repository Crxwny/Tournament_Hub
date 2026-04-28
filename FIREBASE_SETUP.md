# 🔥 Firebase Setup

This guide walks you through everything you need to do **manually in the Firebase console** so that the Tournament Hub frontend has a backend to talk to. No CLI is required — everything happens in the browser.

Estimated time: **~10 minutes**.

---

## 1. Create a Firebase project

1. Go to <https://console.firebase.google.com>.
2. Click **Add project** → give it a name (e.g. `tournament-hub`).
3. Disable Google Analytics if you don't want it (not needed).
4. Wait for the project to finish creating, then continue.

---

## 2. Register a Web App

1. In the project overview, click the **`</>` (Web)** icon to add a web app.
2. Give it a nickname (e.g. `tournament-hub-web`).
3. **Do NOT** enable Firebase Hosting at this step (you can add it later).
4. Firebase will display a code snippet that includes a `firebaseConfig` object that looks like this:

   ```js
   const firebaseConfig = {
     apiKey: "AIzaSyA...",
     authDomain: "tournament-hub.firebaseapp.com",
     projectId: "tournament-hub",
     storageBucket: "tournament-hub.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abcdef..."
   };
   ```

5. Keep this tab open — you'll need those values in step 5.

---


## 3. Enable Email/Password Authentication

1. In the left sidebar, open **Build → Authentication**.
2. Click **Get started**.
3. On the **Sign-in method** tab, click **Email/Password** → **Enable** → **Save**.

That's it for auth. You don't need to add any users manually — they'll be created when people register through the app.

---

## 4. Create the Firestore Database

1. In the left sidebar, open **Build → Firestore Database**.
2. Click **Create database**.
3. Choose **Start in test mode** while you're developing (this gives any signed-in user read/write access for 30 days). You can lock it down later with security rules.
4. Pick a location close to you (e.g. `eur3` for Europe).
5. Click **Enable**.

You don't need to create any collections manually — the app creates them on the fly when you register your first user, create a team, etc. The collections that will appear are:

- `users`
- `tournaments`
- `teams`
- `invites`

---

## 5. Paste the config into the app

Open `src/firebase.ts`. You will see something like:

```ts
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

Replace **every** `YOUR_*` value with the matching value from the config snippet you got in step 2. Save the file.

The yellow "Firebase is not configured" banner at the top of the app will disappear automatically.

---

## 6. Make yourself an admin

By default, every newly registered user has `role: "user"`. To get access to the **Admin** dashboard, the **Create tournament** button, and the global team controls, you need to manually promote at least one user.

1. Run the app (`npm run dev`) and **register an account**. Remember the email/username.
2. In the Firebase console, open **Firestore Database**.
3. Open the `users` collection.
4. Click on the document for your user (the document ID is the user's UID).
5. Edit the `role` field from `user` to `admin`.
6. Save. Reload the app — you should now see the **Admin** link in the navbar.

You can repeat this for any teammate that needs admin access.

---

## 7. (Optional) Lock down Firestore with security rules

The "test mode" rules you started with allow **any signed-in user to read and write any document for 30 days**. That's fine for the SWP class while you're hacking on the project, but before you ship anything publicly you should replace them with something stricter.

A reasonable starting point lives in **Firestore Database → Rules**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() {
      return request.auth != null;
    }
    function isAdmin() {
      return isSignedIn()
        && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    match /users/{uid} {
      allow read: if isSignedIn();
      allow create: if isSignedIn() && request.auth.uid == uid;
      allow update, delete: if isAdmin() || request.auth.uid == uid;
    }

    match /tournaments/{id} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /teams/{id} {
      allow read: if isSignedIn();
      allow create: if isSignedIn();
      allow update, delete: if isAdmin()
        || (isSignedIn() && resource.data.captainUid == request.auth.uid);
    }

    match /invites/{id} {
      allow read: if isSignedIn()
        && (request.auth.uid == resource.data.toUid
            || request.auth.uid == resource.data.fromUid
            || isAdmin());
      allow create, update, delete: if isSignedIn();
    }
  }
}
```

Click **Publish** when you're happy with them.

---

## ✅ You're done

If you can:

- Register a new account and immediately see your username in the navbar,
- Create a team, send an invite to another user, and have them accept it,
- Promote yourself to admin and create a tournament,

…then everything is wired up correctly. Have fun!

If something doesn't work, open the browser's DevTools console — Firebase prints very descriptive error messages that almost always point at the missing step (most often: forgot to enable Email/Password sign-in, or Firestore is still locked).
