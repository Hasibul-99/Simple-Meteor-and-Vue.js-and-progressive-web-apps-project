Progressive web app: To create a progressive web app you need have a manifest.json file.  Manifest file is a file which is read by browser supported at list. This file helps browser to give extra information about your page something like icon, name description about your page. Think like this it allow your page display currently and very importantly it allow your page install your page currently with our own icon, and name. This is the idea behind the manifest file.
For more information https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json 
In there you can see the browser compatibly. This application service from the public folder. In the end of the main.html file this 
<link rel="manifest" href="./manifest.json">
Link needed to add. Also  <meta charset="utf-8"> link needed to add.

Manifest.json
{
  "name": "A basic Progressive Web App",   //This name will used some pleases like under the logo of the app
  "short_name": "Basic PWA",   // this will used bellow the icon shortly 
  "start_url": ".",   // this is not a native app so when you click the app you it need to go to a link. You can add main.html or .to locate the folder 
  "display": "standalone", // with this we can control the app we can also use  full screen
  "orientation": "portrait", // This use how our user view our app. Portrait mean this app always open in a portrait mood 
  "background_color": "#ccc",
  "theme_color": "#5FAAE5",
  "version": "0.1",
  "manifest_version": 2,
  "icons": [
    {
      "src": "icons/android-chrome-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icons/icon-android-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
Most important icon, without this chrome will show some error
    {
      "src": "icons/icon-android-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/icon-android-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "icons/icon-android-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}


serviceWorker: 
serviceWorker.js also registered  to your pages this could added in any pages. This run on background in separate threat. This meaning in android this will run when your app is closed. This is amazing to get the push messages. 
This serviceWorker file need to have in the public folder also. In my project sw.js show the serviceWorker file.
First of all we need to register the sw.js file. This is done in javaScript and also in normal js because you have to told the browser that there is a serviceWorker file related to my page or sub sate of my pages please register it.
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
  .then(function() {
    console.log('SW registered')
  })
}


https://jakearchibald.github.io/isserviceworkerready/ for more information on serviseWorke. Here you can see which browser support the serviseWorker.
ServiseWorke mainly used for the cash. This not mean your browser cash not the our mashing cash this mean your default browser cash when the asset should be severed.   
