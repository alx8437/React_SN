!!! Для Ajax запросов и работы с API !
Т.к. логинизация организована с помощью cookie нужно
залогинится на ресурсе https://social-network.samuraijs.com/

Email: free@samuraijs.com
Password: free

homepage: https://alx8437.github.io/React_SN



Проект Social Network. SPA.

Здесь реализованы следующие подходы к реализации стейт менеджмента и отображения UI:

Вся работа приложения основана на FLUX архитектуре.

1) Функциональные, презентационные компоненты  React. Работа только с props.
Правильная презентационная компонента должна быть чистой (работать только с входящими props)

2) Классовая компонента (грязная), нужны для взаимодействия с BLL и взятия у них нужных данных,
чтобы отдать их через пропсы в презентационную (чистую, функциональныю) компоненту.

2) Библиотека Redux: state managment посредством функции combineReducers, 
которая обрабатывает каждый редьюсер, отвечающий за свою часть state

3) HOC Provider для прокидывания store во все компоненты

4) HOC withRouter для получения данных с адресной строки браузера

5) Библиотека react-redux для того чтобы использовать consumer, забирать данные
из Provider и используя функцию высшего порядка connect доставать state и диспатчить actions в reduser

6) Функция dispatch и actionCreators для диспатча экшенов в Reduсers 

7) ThunkCreator организовывает общение BLL c DAL, т.к. UI не должен этим заниматься. Для правильной 
организации архитектуры приложения нужна такая реализация: UI - BLL - DAL - BLL - UI.
Выполняет асинхронные запросы и диспатчит action через Middleware в reduser

8) Работа с  API идет посредством библиотеки axios.



p.s. Без оформления, извините. Проект еще в работе. Т
Проект не окончен, могут быть изменения и не соответствия с текущим описанием
