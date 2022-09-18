import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-15'>
            I'm SanjeevKumar Kukanur, Interested in the entire frontend spectrum and working on ambitious projects with positive people, I have a serious passion for UI effects and creating intuitive, dynamic user experiences.
            </p>
            <br />
            <p className='text-xl'>
            Experienced as Web Developer in analysis, design, development, and management of web on windows based software application. Well-versed in numerous programming languages including HTML5, PHP, JavaScript, CSS, MySQL. Strong background in project management and customer relations.
            </p>
            
        </div>
    </div>
  )
}

export default About