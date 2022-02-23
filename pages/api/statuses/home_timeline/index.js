const timeline = [
  {
    avatar:
      'https://avatars.githubusercontent.com/u/79520423?s=96&v=4',
    username: 'hola mundo',
    message: 'Twitter web app runs es6+ for modern browsers, reducing the polyfill bundle size by 83%'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/79521033?s=96&v=4',
    username: 'hola mundo',
    name: 'el mio',
    message: 'devter, es lo maximo del mundo, funciona de una manera'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/15933?s=96&v=4',
    username: 'hola casa',
    name: 'Diego f',
    message: 'otro mensaje de prueba,para devter, para probar que funciona '
  }
]

export default function handler (req, res) {
  res.status(200).json(timeline)
}
