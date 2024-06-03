import "./ContactSection.css"
  import Contact from "../../components/Conact"

function ContactSection() {
  return (
    <>
        <div className="contact pt-8 px-[50px] pb-8">
                <div>
                    <p className="text-[#F5D10D] text-[2rem] text-center font-bold">CONACT ME</p>
                    <p className="text-white text-center font-light">Please Send me a Message.</p>
                </div>

                <div className="grid grid-cols-1 pt-3 sm:grid-cols-2  ">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[#F5D10D] text-[1.5rem] font-normal text-start">Name:</p>
                        <p className="text-white text-[2rem] font-medium text-start ">D.G Nisal Shiranda Ranasinghe</p>
                        <p className="text-[#F5D10D] text-[1.5rem] font-medium text-start">Name:</p>
                        <p className="text-white text-[2rem] font-bold text-start ">D.G Nisal Shiranda Ranasinghe</p>
                        <p className="text-[#F5D10D] text-[1.5rem] font-medium text-start">Name:</p>
                        <p className="text-white text-[2rem] font-bold text-start ">D.G Nisal Shiranda Ranasinghe</p>

                    </div>
                    <div className="flex justify-center">
                          <Contact /> 
                    </div>
                </div>
        </div>
    </>
  )
}

export default ContactSection