# Express

* Ajax flow (Asynchronous JavaScript and XML)
  * make request to server (1)
  * server responds with HTML
  * browser loads HTML
  * make request for other assets (CSS, images, JS) (2+)
  * browser interprets JS and makes API requests (3+)
  * load data from API and update page
* SSR (JAMStack - Next.js, Gatsby, static site generators)
  * make request to server (1)
  * server retrieves all data and constructs/responds with a complete HTML page
  * browser loads HTML
* YouTube front-end
  * use pug engine
  * create layout
  * create videos page
    * ul of video lis
  * create player page
    * video with play src
  * create upload page
    * start button
    * stop button
    * video
    * getUserMedia
    * start recorder
    * show stream in video
    * ondataavailable push data to chunks
    * on stop clicked stop recorder
    * on recorder stopping
      * create blob
      * show blob in video
      * send blob to server
