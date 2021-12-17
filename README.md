
# Introduction

**Skrate Assignment**

## [API Live Demo](https://satvik-skrate.herokuapp.com/)

## 🚧 Technology Stack

- **Server Enviornment** - NodeJS
- **Framework** - ExpressJS
- **Database** - MongoDB
- **Cloud database service** - MongoDB Atlas
- **Deployment** - Heroku.
- **Documentation** - Swagger UI

## Steps to View the Hosted Api

1. Open the Host Link
2. Follow through this [Demo Video](https://drive.google.com/file/d/16Dhaqf5ZmVV_OebKviDPku2htcI5LWDU/view?usp=sharing)

## Steps to Run On Local Machine

1. Clone the repository to your local machine.
2. Move to the directory in your terminal.
3. Install all the relevant npm depenedncies using  `npm install`.
4. Make sure to edit the `config/config_sample.env` with your credentials.  
5. Start the application in develpoment mode using `npm run dev` or production mode using `npm start`.
6. Just visit localhost:3000 in your browser.

## API Endpoints

| Method   | URL                                      | Description of data to be sent                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/users/new`                             | Username as the Name of user                      |
| `GET`   | `/users/all`                             | -                       |
| `DELETE`    | `/users/delete/{id}`                          | The corresponding UID of the  user you want to delete                      |
| `POST`  | `/meetings/new`                          | UID1 as the uid existing user, UID2 as the uid of another existing user, Date                 |
| `GET`   | `/meetings/all`                 | -                 |
| `DELETE`    | `/meetings/delete/{id}` | The corresponsing UID of the meeting to be deleted |




