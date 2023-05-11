import { Children } from 'react'
import { motion } from 'framer-motion'
// import { Logo } from '@pmndrs/branding'
import { useStore } from './store'
import { Center } from '@react-three/drei'
import React, { useState, useEffect } from 'react'

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul  initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const state = useStore()
/////////////////////////////////////////////////////
  const [filmData, setFilmData] = useState(null)

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {
        const films = data.results
        const latestFilm = films[films.length - 1]
        const { title, release_date } = latestFilm
        setFilmData({ title, releaseDate: new Date(release_date).toLocaleDateString() })
      })
  }, [])
/////////////////////////////////////////////////////


  return (
    <>
    {/* <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 40, left: 100, fontSize: '25px' }}>Click on the Film</div>
      </div>
      <div className="info">
        <List open={state.open}>
          <h3>Example</h3>
{/* ---------------------------------------------------- */}
        {filmData && (
        <>
          <p>Title: {filmData.title}</p>
          <p>Release Date: {filmData.releaseDate}</p>
        </>
      )}
{/* ---------------------------------------------------- */}
            <div id='app'>
                <h1>swapi</h1>
            </div>

            {/* <script>
            var app = new Vue({
                el: '#app',
                data: {
                    swapiData: {}
                },
                methods: {
                    fetchSWAPI() {
                    fetch('https://swapi.dev/api/people/1/')
                        .then(response => response.json())
                        .then(data => {
                        this.swapiData = data;
                        })
                        .catch(error => console.error(error));
                    }
                },
                created() {
                    this.fetchSWAPI();
                }
                });
            </script> */}
          {/* <h3>“ZOOM”</h3> */}
          {/* <h3> */}
            {/* <span className="accent">PEGASUS</span> */}
          {/* </h3> */}
          {/* <h4>Running Shoes</h4> */}
          {/* <p className="price">$98.97</p> */}
          <p>
            Year after year Pegasus has proven itself on the feet of runners everywhere. Now our most trusted style returns with new
            innovations that make it more itself than ever. Meet the reliable, comfortable, always ready-to-run Nike Air Zoom Pegasus.
          </p>
          <p>
            Year after year Pegasus has proven itself on the feet of runners everywhere. Now our most trusted style returns with new
            innovations that make it more itself than ever. Meet the reliable, comfortable, always ready-to-run Nike Air Zoom Pegasus.
          </p>
          
        </List>

      </div>
      
    </>
  )
}
