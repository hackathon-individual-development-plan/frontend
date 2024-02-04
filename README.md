# ХАКАТОН+. Задача Альфа-Банка. Команда 11. Frontend
## &#129534; Оглавление <a id="contents"></a>
1. [О проектe](#about)
2. [Команда](#team)
3. [Ссылки на проект](#links)
4. [Инструкция по сборке и запуску](#setting)
5. [Cтэк технологий](#technology)
6. [Cсылки на сторонние библиотеки](#libraries)
   
## &#128173; О проекте <a id="about"></a>

**MVP "Альфа-Развитие"** - веб-приложение, предназначенное для формирования и отслеживания индивидуальных планов развития (ИПР) сотрудников Альфа-Банка. Продукт позволяет руководителям создавать, мониторить и валидировать ИПР, а сотрудникам – видеть свои задачи и прогресс по ним.  
Разрешение экрана: 1280 пикселей.

В приложении предусмотрены два роли: ***Сотрудник*** и ***Руководитель***.  
***Сотрудник*** - роль внутри веб-приложения ИПР свойственная всем сотрудникам компании вне зависимости от наличия подчиненных.  
***Руководитель*** - роль внутри веб-приложения ИПР несущая дополнительный функционал для сотрудников с подчиненными.  

Данный продукт должен в дальнейшем работать внутри приложения Alfa People, поэтому явная авторизация не предусмотрена.  

Для работы с приложением под разными ролями вам потребуются два токена, которые необходимо добавить вручную в Local Storage в Инструментах разработчика.  

Для этого необходимо выполнить следующие шаги:
* открыть браузер, открыть инструменты разработчика браузера, нажав клавиши Ctrl+Shift+I (Cmd+Option+I на MacOS) или правой кнопкой мыши на странице и выбрав "Исследовать"/"Инспектировать"
* перейти на вкладку "Application" или "Приложение" (в зависимости от используемого браузера)
* в левой панели выбрать "LocalStorage" или "Локальное хранилище"
* ввести ключ для токена в поле "Имя"/”Key” и значение токена в поле "Значение"/”Value”:
  
  Key:  
  ```
  AlfaIprProjectToken
  ```
  
  для просмотра в режиме ***Руководитель***:  
  Value:  
  ```
  Token 08c8b74340e79ea26fbb73a9cc398c79fd36d77c
  ```  
  для просмотра в режиме ***Сотрудник***:  
  Value:  
  ```
  Token ac83a1374ee39b726829e34d49ce15138704b737
  ```  
  
* нажать Enter или кликнуть где-то вне поля, чтобы сохранить введенные данные
* обновить страницу



## &#128101; Команда <a id="team"></a>
- ***Product manager***
  
  Никитин Валентин  

- ***Project manager***
  
  Кутицкий Владислав  

- ***Business analytics***
  
  Щетинина Наталья  
  Михненко Елена  

- ***System analytics***
  
  Богатков Павел  
  Бибикова Вера  

- ***Designers***
  
  Викулов Юрий  
  Конева Татьяна  
  Перадзе Мария  

- ***Frontend***
  
  [Александрова Светлана](https://github.com/SvetAlexa)  
  [Тихонова Ксения](https://github.com/TikhonovaKs)  
  [Фрикина София](https://github.com/SofiaFrikina)  

- ***Backend***
  
  [Ротбардт Ольга](https://github.com/esfiro4ka)  
  [Дунаева Клавдия](https://github.com/KlavaD)  
  [Ковалев Никита](https://github.com/NV-Kovalev)  
  [Лашков Павел](https://github.com/hutji)  

## &#128681; Ссылки на проект <a id="links"></a>

- [Веб-сайт](https://yahackathon.ddns.net)  
- [Figma проект](https://www.figma.com/file/eDPYMTY1sDdPajIjTIDeTU/MVP-Альфа-Развитие?type=design&node-id=119%3A2572&mode=design&t=MFzPf2WnRQRVF2BO-1)
- [Ссылка на репозиторий с бэкенд-частью ](https://github.com/hackathon-individual-development-plan/backend)  

  
## &#128214; Инструкция по сборке и запуску <a id="setting"></a>
1. Склонируйте репозиторий:
  ```
    git clone https://github.com/hackathon-individual-development-plan/frontend.git
  ```
2. Перейдите в папку проекта:
 ```
    cd frontend
 ```

2. Установите зависимости:
  ```
    npm install
  ```
3. Запустите приложение:
  ```
    npm run start
  ```

## &#128296; Cтэк технологий <a id="technology"></a>
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-orange?style=for-the-badge&logo=javascript&logoColor=white&labelColor=orange&color=orange)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React--Router-blue.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-%233B4D98.svg?style=for-the-badge&logo=GitHub&logoColor=white)

## &#128204; Cсылки на сторонние библиотеки <a id="libraries"></a>
[core-components](https://github.com/core-ds/core-components)   
[react-hook-form](https://www.npmjs.com/package/react-hook-form)  



