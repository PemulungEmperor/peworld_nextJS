# Peworld
Hello .. Peworld is a simple responsive website about job recruitment. This project create using NextJs as react framework, and using PostgreSQL together with as a help library to write and store data to database.In this project you can register an account, log in, edit your profile like photos, skills and so on. You can register as a talent/job seeker or as a company/talent seeker. And importan thing else this project is still in the development, and continous to improve.

![image](https://github.com/PemulungEmperor/peworld_nextJS/assets/76174871/e6aabeea-58ac-4fed-94fa-b86976bd1232)


## Demo this project
This repo deploy with Vercel very good cloud platform for you who want to deploy your React or NextJS project. 
- You can access vercel in here https://vercel.com/
- And this demo for this project : https://peworld-next-js.vercel.app/


## Technologies

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

[![AGPL License](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](http://www.gnu.org/licenses/agpl-3.0)

![AGPL License](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)


## Getting Started

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

First clone or fork or download this repo, make sure you have node in ur device and then install the dependecies

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## API Reference

#### Get all users 📄

```
  GET /api/employee
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| api_key| `string` | You can check all employee from ur DB |

Execution : https://peworld-next-js.vercel.app/api/employee

#### Login

```
  POST /api/employee/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |try login employee with valid credentials |

#### Register

```
  POST /api/employee/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `string` |try register employee to have an account |

#### PATCH specific employee's personal data

```
  PATCH /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Update Personal Data Employee |

#### PATCH specific employee's image

```
  PATCH /api/employee/photo/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |Update employee image <= 2Mb sizes |


#### POST specific employee's image

```
  POST /api/skill/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |Add employee new skill |

#### POST specific employee's image

```
  PUT /api/skill/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id | `string` |For delete a skill employee |


More API u can check in repo folder .app/api

# Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Author
[@PemulungEmperor](https://github.com/PemulungEmperor) 
