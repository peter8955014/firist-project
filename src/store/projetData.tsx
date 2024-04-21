import { v4 as uuidv4 } from 'uuid';

import project_1 from '@/assets/img/project-1.jpg'
import project_2 from '@/assets/img/project-2.jpg'
import project_3 from '@/assets/img/project-3.jpg'
import project_4 from '@/assets/img/project-4.jpg'

import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSass, SiRedux, SiReactrouter } from "react-icons/si";

export const projectDataZh = [
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/Omnifood/',
    src: project_1,
    title: '練習作品- React Omnifood',
    content: '練習用 html css 做網頁架構,再使用 js 來綁定 id 名稱做頁面平滑移動的動畫,並且設定滑動超過視窗時會自動固定導航欄。',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><SiJavascript /></>
  },
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/TodoList/',
    src: project_2,
    title: '練習作品- React TodoList',
    content: '用 react-redux 做狀態管理,並且使用 react-router 作路由管理,可以進行增、刪、改的功能,並用 sass 做出較好維護的 css 樣式,本身也使用 ts 確保變數的聲明。',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><FaReact /><SiTypescript /><SiSass /><SiRedux /><SiReactrouter /></>
  },
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/tic-tac-toe/',
    src: project_3,
    title: '練習作品- React tic-tac-toe',
    content: '藉由 react 的內建 hook 做狀態管理,使用 props 進行組件之間的傳值,再使用 ts 確保變數的聲明。',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><FaReact /><SiTypescript /></>
  },
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/order-cart/',
    src: project_4,
    title: '練習作品- React-order-cart',
    content: '藉由 react 的內建 hook 做狀態管理，用 useContext 來傳遞組件的狀態，來達成價格與數量的增減計算。',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><FaReact /><SiJavascript /></>
  },
]

export const projectDataEn = [
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/Omnifood/',
    src: project_1,
    title: 'Practice Project- React Omnifood',
    content: 'Practice using html css as a web architecture, then using js to bind the id name to animate the smooth movement of the page, and set the navigation bar to automatically fix when sliding beyond the window.',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><SiJavascript /></>
  },
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/TodoList/',
    src: project_2,
    title: 'Practice Project- React TodoList',
    content: 'Using react-redux for state management and react-router for route management, you can add, delete, and modify functions, and use sass for better maintenance of CSS styles, and also use ts to ensure variable declarations.',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><FaReact /><SiTypescript /><SiSass /><SiRedux /><SiReactrouter /></>
  },
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/tic-tac-toe/',
    src: project_3,
    title: 'Practice Project- React tic-tac-toe',
    content: 'State management is done with react is built-in hook, using props to pass values between components, and then using ts to ensure the declaration of variables.',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><FaReact /><SiTypescript /></>
  },
  {
    id: uuidv4(),
    url: 'https://peter8955014.github.io/order-cart/',
    src: project_4,
    title: 'Practice Project- React-order-cart',
    content: 'By using react is built-in hook for state management, useContext to pass the state of the component, to achieve price and quantity increase or decrease calculation.',
    icon: <><IoLogoHtml5 /><IoLogoCss3 /><FaReact /><SiTypescript /></>
  },
]