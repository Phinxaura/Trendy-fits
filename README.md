<h1> Trendy Fits </h1>
<b> Steps to To configure your Vite project as a Progressive Web App (PWA) using the vite-plugin-pwa, follow these steps in your vite.config.ts file : </b>

<pre>
  Step 1 : 
  
  1. Install the vite-plugin-pwa
  2. Run the following command in your project directory :
  <b>Command : npm install vite-plugin-pwa</b>  
  Step 2 : 
  
  1. Import and Configure the Plugin in vite.config.ts
  2. import { VitePWA } from 'vite-plugin-pwa'; in your file .
  3. then use VitePWA inside the plugins : [React(),VitePWA()].
  4. The vite-plugin-pwa plugin automatically registers the service worker 
  5. add properties like include regisytertype ,includeAssets ,manifest 
  
  Step 3: ( implement manifest inside vite config file ) : 
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Full name of your application, displayed to users and on install screens</td>
    </tr>
    <tr>
      <td>short_name</td>
      <td>String</td>
      <td>Shorter version of the app name, used where space is limited</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td>Brief explanation of what the app does</td>
    </tr>
    <tr>
      <td>theme_color</td>
      <td>String</td>
      <td>Theme color for the browser UI and splash screen</td>
    </tr>
    <tr>
      <td>background_color</td>
      <td>String</td>
      <td>Background color for the splash screen when launching the app</td>
    </tr>
    <tr>
      <td>display</td>
      <td>String</td>
      <td>Display mode for the app (e.g., standalone, fullscreen, minimal-ui, browser)</td>
    </tr>
    <tr>
      <td>start_url</td>
      <td>String</td>
      <td>URL to load when the app is launched from the home screen</td>
    </tr>
    <tr>
      <td>icons</td>
      <td>Array</td>
      <td>Array of icon objects specifying images to represent the app</td>
    </tr>
    
  </tbody>
</table>
  Step 4: Create account on firebase 
  Account Creation Phase
   1. Click "Add Project" or "Create Project".
   2. Enter your project name (e.g., "My Shopping Website Trendy Fits") and agree to the terms.
   3. You can enable or disable Google Analytics for your project as needed.
   4. Click "Create Project" and wait for setup to complete, then click "Continue" to access your project dashboard
  Register Your App With FireBase
   1. In the Firebase Console, click the web icon ("</>") to register a web app.
   2. Enter an app nickname and (optionally) set up Firebase Hosting.
   3. Click "Register app" to proceed
  
  Step 5 : Create firebase-messaging-sw.js   
  1. This file must be in your project’s public root 
  2. It enables background message handling for FCM.
  3. Make sure to replace the config values with your actual Firebase project settings
  4. for this service worker we can also create our manifest.json.

  Step 6 : Create firebase.ts to Get the FCM Token.
    In your TypeScript code, initialize Firebase, request notification permission, and get the FCM token.
  
  <b> Conclusion :  </b>
     1. The browser loads /firebase-messaging-sw.js to handle background push events
     2. Your app (firebase.ts) registers the service worker, requests notification permission, and retrieves the FCM token.
     3. You can send the token to your server for push targeting.
     4. The service worker displays notifications when messages arrive in the background.
</pre>
<br>
<h1>Project Demo</h1>
<p>project on mobile phone </p>
![1000186785](https://github.com/user-attachments/assets/946eeec2-1ec0-4838-a004-4e397df4c0eb)
<p>Install App on mobile phone</p>
![1000186788](https://github.com/user-attachments/assets/0e65d6bd-caca-489d-9117-21f019695e24)
<p>Splash Screen</p>
![1000186790](https://github.com/user-attachments/assets/95c7e53d-cd5f-43f8-8391-0b5c22e5b9e5)
<br>
<p>Project on desktop</p>
<p>Asking for permission </p>
![Screenshot from 2025-04-24 18-47-20](https://github.com/user-attachments/assets/77c29793-e4b2-4c91-86d9-1e8144e101a6)
<p>Install App</p>
![Screenshot from 2025-04-24 18-49-31](https://github.com/user-attachments/assets/dbb7d12c-d1b8-4f39-9e15-ca1e9426c72a)
<p>token generated on console.log</p>
![Screenshot from 2025-04-24 18-47-47](https://github.com/user-attachments/assets/345e32d6-e452-45cc-b2ce-102a676e7c82)
<p>Notifications message </p>
![1000186793](https://github.com/user-attachments/assets/73b587e0-372f-463e-9929-6d5f5484d47a)







