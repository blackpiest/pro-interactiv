const ADD_NEWS = 'ADD_NEWS';
const SET_DISPLAY = 'SET_DISPLAY';
const SET_PAGE = 'SET_PAGE';
const SET_INFO_MODAL = 'SET_INFO_MODAL';

let initialState = {
    data: [],
    sizeNews: 3,
    currentPage: 1,
    lastPage: 0,
    displayedNews: [],
    isShowNews: false,
    infoInModal: null
};

// Шаблон для тестовых новостей
let templateNews = {
    title: "Фотобудки, GIF стойка #",
    text: "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
    date: "20 Марта 2021",
    category: "Услуги",
    cover: "https://egor-redchenko.ru/test_pro_interactiv/photo_2.jpg"
};

// Создаем 20 новостей
const createInitialState = (length) => {
    for (let i=0; i< length; i++) {
        initialState.data.push(
            {
                id: i, 
                title: templateNews.title, 
                text: templateNews.text, 
                date: templateNews.date,
                category: templateNews.category,
                cover: templateNews.cover
            }
        )
    }

    initialState.lastPage = Math.ceil(initialState.data.length / initialState.sizeNews);
};

// Вызываем функцию создания
createInitialState(20);

// Редьюсер новостей
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: 
            return {
                ...state, 
                data: [...state.data, action.news]
            };
        case SET_DISPLAY:
            return {
                ...state,
                displayedNews: action.list
            };
        case SET_PAGE: 
            return {
                ...state,
                currentPage: action.page
            };
        default: 
            return state;
    }
}

export default newsReducer;