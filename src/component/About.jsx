

const About = () => {
  return (
    <div name='about' className="pt-[300px] md:pt-0 w-full h-[400px] text-black ">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8">
                <div className="md:text-right pb-8 pl-4">
                    <h1 className=" font-bold text-4xl inline border-b-4 border-b-rose-800 ">About</h1>
                    
                </div>
            </div>
            <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8 pl-4">
                <div className="md:text-right font-bold text-4xl">
                    <p >FullStack Developer
                    </p>
                </div>
                <div className="md:mr-[70px] pr-[5px] ">
                    {/* <p>
                      I am a Frontend Developer using Javascript and React.js to build frontend applications. I study Software engineering at ALX Africa which is an online course that teaches software engineering for 12 months. ALX teaches basic of Python and C language to all its students so as to have an idea about how computer programming works before one can major in either frontend or backend language. My learning with ALX has built my grit about getting the job done through numerous projects given and completed and also taught me how to interact in the developers community when i am stuck on a problem. I also learn how to collaborate with other developers in getting output through projects that involve 2 or more people on the team for the tasks. 
                    </p> */}
                    <p>
                    I am Skilled MERN Stack Developer with expertise in creating dynamic and responsive web applications.
Proficient in utilizing modern JavaScript frameworks and libraries, including React for the front-end and
Node.js/Express for the back-end, to build efficient and scalable solutions. Strong understanding of React principles,
TypeScript, and best practices, along with a deep knowledge of HTML, CSS, and JavaScript. Experienced in integrating
MongoDB for robust data management and ensuring seamless full-stack development..
      </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About