import  { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'TailwindCSS', level: '80%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'ReactJS', level: '75%' },
  { name: 'NodeJS', level: '70%' },
  { name: 'ExpressJS', level: '65%' },
  { name: 'MongoDB', level: '60%' },
  
];

const SkillsSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className=" py-10 text-white">
      <div className="container mx-auto px-10">
        {/* <h2 className="text-2xl font-bold mb-6">My <span className="text-orange-500">Skills</span></h2> */}
        {/* <p className="mb-8">Here are my skills to represent my expertise:</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                  className={`bg-[#F5D10D] h-2.5 rounded-full transition-all duration-[2000ms] ease-in-out`}
                  style={{ width: loaded ? skill.level : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
