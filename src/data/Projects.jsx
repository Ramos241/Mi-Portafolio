import ecomerce from '../assets/projects/e-comerce.png'
import ListaTareas from '../assets/projects/Lista-Tareas.png'
import calculadora from '../assets/projects/calculadora.png'
import pokeapii from '../assets/projects/pokeapii.png'
import templetelogin from '../assets/projects/templete-login.png'
export const PROJECTS_DATA = [
  {
    title: 'E-comerce',
    description: 'Simple aplicación simulando el carrito de compras.',
    gh: 'https://github.com/Ramos241/e-comerce',
    url: 'https://e-comerce-nine.vercel.app/',
    image: ecomerce,
    tags: ['HTML', 'JavaScript', 'SCSS']
  },
  {
    title: 'Lista de Tareas',
    description: 'Aplicacion para poder organizar tus tareas, podras editar cualquier tarea guardada o borrarla si deseas',
    gh: 'https://github.com/Ramos241/List-Tareas',
    url: 'https://list-tareas.vercel.app/#/inicio',
    image: ListaTareas,
    tags: ['React', 'JavaScript', 'CSS', 'HTML' ]
  },
  {
    title: 'PokeApi',
    description: 'Aplicacion donde se hace uso de la Api de pokemon, puedes buscar el pokemon que quieras y alli encontraras toda la informacion relacionada con ese pokemon.',
    gh: 'https://github.com/Ramos241/PokeApi',
    url: 'https://poke-api-sooty.vercel.app',
    image: pokeapii,
    tags: ['React', 'JavaScript', 'CSS',  'React.js']
  },
  {
    title: 'Calculadora',
    description: 'Pequeña simulacion de una calculadora',
    gh: 'https://github.com/Ramos241/Calculadora',
    url: 'https://calculadora-ramos241.vercel.app/',
    image: calculadora,
    tags: ['React', 'JavaScript', 'TailwindCSS']
  },
  {
  title: 'Templete-login',
  description: 'Templete login totalmente responsivo, es solo el lado del frontend no tiene agregado BD',
   gh: 'https://github.com/Ramos241/Templete-Login',
  url: 'https://templete-login.vercel.app/',
  image: templetelogin,
  tags: ['React', 'TypeScript', 'TailwindCSS']
},
]
