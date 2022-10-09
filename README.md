*Ruth González Estévez*


**Práctica introducción Backend con mongoDB**

 - NODE VERSION 16
 - run app => in nodepop => run in terminal: *npx live-server*


 
**API INFO**
 
 - Sparrets => run in terminal: *npm start*
  
  
  *EndPoints*
 - GET => http://localhost:8000/api/announcements/
 - POST => http://localhost:8000/auth/login/ , http://localhost:8000/auth/register/
 - DELETE => http://localhost:8000/api/anouncements/delete/_id



*Estructura proyecto

        |------wallapop
        |    |-----announcement-create
        |       |---announcement-create-provider.js
        |       |---announcement-create.js
        |       |---AnonuncementCreateController.js
        |    |-----announcement-details
        |       |---announcement-details-provider.js
        |       |---announcement-details-view.js
        |       |---AnonuncementDetailsController.js
        |       |---announcement-details.js
        |    |-----announcement-carousel
        |       |---announcement-carousel-provider.js
        |       |---announcement-carouse-view.js
        |       |---AnonuncementCarouselController.js
        |    |-----announcement-list
        |       |---announcement-list-provider.js
        |       |---announcement-list-view.js
        |       |---AnonuncementListController.js
        |    |-----login
        |       |---login-provider.js
        |       |---login-view.js
        |       |---LoginController.js
        |    |-----notifications
        |       |---notifications-view.js
        |       |---notificationsController.js
        |       |---PubSub.js
        |    |-----signup
        |       |---signup-provider.js
        |       |---sighup.js
        |       |---SignUpController.js
        |    |-----spinner
        |       |---spinner-view.js
        |       |---SpinnnerController.js
        |    |-----utils
        |       |---eventActions.js
        |       |---jwt.js
        |   |---app.js
        |   |---app.css
        |   |---index.html
        |   |---singup.html
        |   |---announcements-created.html 
        |   |---announcements-details.html 
        |   |---ApiProviders.js
        |   |---db.json          
        |   |---Readme.md
