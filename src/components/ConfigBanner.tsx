import { isFirebaseConfigured } from "../firebase";

export function ConfigBanner() {
  if (isFirebaseConfigured) return null;

  return (
    <div className="config-banner">
      <div className="container">
        <strong>Firebase is not configured yet.</strong> Open{" "}
        <code>src/firebase.ts</code> and replace the placeholder values. See{" "}
        <code>FIREBASE_SETUP.md</code> for step-by-step instructions. The app
        will not be able to log in or save data until this is done.
      </div>
    </div>
  );
}
