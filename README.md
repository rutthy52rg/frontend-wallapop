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

        |------_BBDD
        |------_SHELL
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
        |       |---announcement-details.js
        |    |-----models
        |       |---Anouncement.js
        |    |-----routes
        |       |---api
        |           |---anouncements.js
        |       |---index.js
        |    |-----views
        |       |---index.js
        |   |---app.js
        |   |---initDB.js
        |   |---- Readme.md
