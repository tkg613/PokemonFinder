import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='text-6xl mb-4 ml-8'>
        Pokemon Finder
        <p className='mt-3 mb-4 text-2xl font-light'>
          This is web app created to practice JavaScript and React.
          This uses the Pokemon API to retrieve data of Pokemon.
          Simply type in a name of a Pokemon in the home page and you will be able to view its information.
        </p>
      </h1>
    </div>
  )
}

export default About