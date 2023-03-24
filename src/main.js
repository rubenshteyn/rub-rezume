import {createApp} from 'vue'
import App from '@/App.vue'
import {createI18n} from 'vue-i18n'
import VueCookies from 'vue-cookies'
const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            "common": {
              "fullname": "Rubenstein Ilya",
              "jobTitle": "FRONT-END DEVELOPER"
            },
            "titles": {
                "about": "ABOUT",
                "experience": "EXPERIENCE",
                "contacts": "CONTACTS"
            },
            "aboutInfo": {
                "hello": "Greetings! My name is Ilya, I'm a Frontend developer.",
                "skills": "I can work in conjunction with other developers (backend, fullstack, etc).",
                "code": "It is not a problem for me to understand what is written in the code in another language (Golang, Python, etc)",
                "experience": "The total experience of commercial development is six months."
            },
            "experienceInfo": {
                "work": "WORK EXPERIENCE",
                "2020": "Getting started learning the front-end",
                "description2020": "Layout and basics of JavaScript.",
                "2021": "Working as a layout designer at Afonico MD",
                "description2021": "Layout landings on Bootstrap and upload them to WordPress.",
                "20211": "Work as a system administrator in the KTB Group of Companies",
                "description20211": "Change of activity in the direction - system administration.",
                "2022": "Junior front-end developer job at Infinitium Media",
                "description2022": "Participated in the development of a web application on Vue3. He was engaged in the design, layout and integration of the application with the server part."
            },
            "contactInfo": {
                "relocate": "Moscow, m. Rostokino (ready to move, ready for occasional business trips)",
                "work": "WORK TOGETHER"
            }
        },
        ru: {
            "common": {
              "fullname": "Рубенштейн Илья",
              "jobTitle": "FRONT-END РАЗРАБОТЧИК"
            },
            "titles": {
                "about": "ОБО МНЕ",
                "experience": "ОПЫТ",
                "contacts": "КОНТАКТЫ"
            },
            "aboutInfo": {
                "hello": "Приветствую! Меня зовут Илья, я Frontend - разработчик.",
                "skills": "Умею работать в связке с другими разработчиками(backend, fullstack, etc).",
                "code": "Для меня не проблема понять что написано в коде на другом языке(Golang, Python, etc)",
                "experience": "Суммарный опыт коммерческой разработки - полгода."
            },
            "experienceInfo": {
                "work": "ОПЫТ РАБОТЫ",
                "2020": "Начало изучения front-end",
                "description2020": "Верстка и основы JavaScript.",
                "2021": "Работа верстальщиком в Afonico MD",
                "description2021": "Верстка лендингов на Bootstrap и загрузка их на WordPress.",
                "20211": "Работа системным администратором в Группе компаний КТБ",
                "description20211": "Смена деятельности в направлении - системное администрирование.",
                "2022": "Работа Junior front-end developer в Infinitium Media",
                "description2022": "Участвовал в разработке веб-приложения на Vue3. Занимался оформлением, версткой и интеграцией приложения с серверной частью.",
            },
            "contactInfo": {
                "relocate": "Москва, м. Ростокино (готов к переезду, готов к редким командировкам)",
                "work": "РАБОТАТЬ ВМЕСТЕ"
            }
        }
    }
})
createApp(App)
    .use(i18n)
    .use(VueCookies)
    .mount('#app')