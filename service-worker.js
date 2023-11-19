/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f90737726ea31da23f43c5298604f85d"
  },
  {
    "url": "assets/css/0.styles.1e9f105a.css",
    "revision": "2e3d7daa36d0161448d75d39b85ec590"
  },
  {
    "url": "assets/img/create-user-fail.2c326178.png",
    "revision": "2c3261789339ba30b22d04e8455ab40c"
  },
  {
    "url": "assets/img/create-user.2272b213.png",
    "revision": "2272b2138f8cdbb6e8eb002cf2d90fd4"
  },
  {
    "url": "assets/img/delete-user.5443792b.png",
    "revision": "5443792bba7bb5d65f8c6415719fb121"
  },
  {
    "url": "assets/img/get-all-users.ba062195.png",
    "revision": "ba062195303b9e5e097ef1cf90443871"
  },
  {
    "url": "assets/img/get-user-by-id.571def7d.png",
    "revision": "571def7db78ec15e5d033862f2d820b2"
  },
  {
    "url": "assets/img/logo.193df479.svg",
    "revision": "193df4790701299e797484019cd2a5a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-user-by-id-fail.d08d93b5.png",
    "revision": "d08d93b55fea8e5df8c34ab1cd8447fd"
  },
  {
    "url": "assets/img/update-user-by-id.2448b5db.png",
    "revision": "2448b5db26ff1e83d2a1a56a0016c77d"
  },
  {
    "url": "assets/img/working-system.7c69a4db.png",
    "revision": "7c69a4db3055e19b434aee408e5b919f"
  },
  {
    "url": "assets/js/1.041366b2.js",
    "revision": "64028af4a98e4e78a1166510c80d77bb"
  },
  {
    "url": "assets/js/10.791f99ad.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.3dc1c1c9.js",
    "revision": "649ae8e224325001713624c799ffb15d"
  },
  {
    "url": "assets/js/14.3e5eb836.js",
    "revision": "00ba53c49061d163593ec25330721735"
  },
  {
    "url": "assets/js/15.c5009151.js",
    "revision": "13498e0689bf92c21d4238955ff02267"
  },
  {
    "url": "assets/js/16.a160245e.js",
    "revision": "c79d4fb6b7186c0011328008c3219136"
  },
  {
    "url": "assets/js/17.a760175c.js",
    "revision": "690b43217931e04230291eba9d4464c6"
  },
  {
    "url": "assets/js/18.9e43421c.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.43dacfe2.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.b21c7b5b.js",
    "revision": "e293f1f61c3739eaeca67bdde45ad569"
  },
  {
    "url": "assets/js/20.0ce8e7df.js",
    "revision": "4c0411c8b94d5077a678ead76875c9f3"
  },
  {
    "url": "assets/js/21.3f80528b.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.4220f4fd.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.907c48e0.js",
    "revision": "d5bfb4dee0c1f265ff7234844c6e0830"
  },
  {
    "url": "assets/js/25.ea2f9b94.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.7fb1e77a.js",
    "revision": "9c0a5157d4cc30993acc627bcff79c74"
  },
  {
    "url": "assets/js/27.d7968f86.js",
    "revision": "9b3c3b1143d9f771d7a1b86be73c422e"
  },
  {
    "url": "assets/js/28.d7deef85.js",
    "revision": "2e53b2daae36d621384a2424babdf65d"
  },
  {
    "url": "assets/js/29.f96d31f3.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.5696e71d.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.53331f06.js",
    "revision": "537f3cb2027a82da888659e92209e202"
  },
  {
    "url": "assets/js/31.76a77a8b.js",
    "revision": "8973e5d9c618a0da48aef00914d0fc55"
  },
  {
    "url": "assets/js/32.a1449f8f.js",
    "revision": "45e8f03b9308f46716681fcd7baa0b59"
  },
  {
    "url": "assets/js/33.d4990458.js",
    "revision": "078e2ad50a388a3eec9edfa5129f6d93"
  },
  {
    "url": "assets/js/34.9d35527d.js",
    "revision": "ad3d4d11df787db375388942c1014316"
  },
  {
    "url": "assets/js/35.e487b485.js",
    "revision": "2e6698b118faa76cc277757f77bdc41c"
  },
  {
    "url": "assets/js/36.86e8fd8a.js",
    "revision": "65b0b43fa6fc0db9b51eef449405f002"
  },
  {
    "url": "assets/js/37.d17c5a4c.js",
    "revision": "1e1b4a9790c82f084ebeef9c0d9864e1"
  },
  {
    "url": "assets/js/38.2a1bb341.js",
    "revision": "3418459952d8b4df482d8ee3fdffddc8"
  },
  {
    "url": "assets/js/39.8f5f9b86.js",
    "revision": "7af8c5a4c7478489e6bf954623e579cf"
  },
  {
    "url": "assets/js/4.b4c90a88.js",
    "revision": "01437a03b1a44a95035ba49c00512ac4"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.c865847d.js",
    "revision": "7898e1a973b3c8511df8d21ede146efb"
  },
  {
    "url": "assets/js/6.90f32124.js",
    "revision": "abd5635d09c9d4fd2e18ae1359ef87b4"
  },
  {
    "url": "assets/js/7.7e0d0b51.js",
    "revision": "532f4d4a2a1ffe50c114568ab2f8ff62"
  },
  {
    "url": "assets/js/8.7181beb7.js",
    "revision": "07fee8c2647255cd1183a917d89cd4cf"
  },
  {
    "url": "assets/js/9.48d45ece.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.9099144e.js",
    "revision": "666a5c4534c19829187c98ac0c063309"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8cd70bb33daee654f1d870cdaa15e726"
  },
  {
    "url": "design/index.html",
    "revision": "336e11b418c941037bdf8e009e4ba7f2"
  },
  {
    "url": "index.html",
    "revision": "925d8167b03123fbbf7b1900c662e3d0"
  },
  {
    "url": "intro/index.html",
    "revision": "e85e4925ed6560a067d95c390e6b4f34"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "faae5b0ffda55996cb8c44fb6480d0f5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "14d18779bc07a470b3fb5e9fa00b4168"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "67077f61686766a26f6a36775087d180"
  },
  {
    "url": "software/index.html",
    "revision": "773d935f0406160eda4bdf2031de3f2a"
  },
  {
    "url": "test/index.html",
    "revision": "e3e8bae1ca9bb53c0d84f46b6000bcda"
  },
  {
    "url": "use cases/index.html",
    "revision": "74c51648fe0380d7b6a66dc790b23d80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
