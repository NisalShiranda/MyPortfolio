import "./ContactSection.css"
  import Contact from "../../components/Conact"
  

function ContactSection() {
  
  return (
    <>
        <div className="contact pt-8 px-[50px] pb-8" id="contact"  >
                <div>
                    <p className="text-[#F5D10D] text-[2rem] text-center font-bold">CONTACT ME</p>
                    <p className=" text-center font-light">Please Send me a Message.</p>
                </div>

                <div className="grid grid-cols-1 pt-3 md:grid-cols-2  ">
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-[#F5D10D] text-[1rem] font-normal text-center ">Name:</p>
                        <p className=" text-[1.5rem] font-medium text-center  ">D.G Nisal Shiranda Ranasinghe</p>
                        <p className="text-[#F5D10D] text-[1rem] font-normal text-center pt-6 ">Home Address:</p>
                        <p className=" text-[1.5rem] font-medium text-center  ">No: 359/6, Damminnagahwatta, Kimbulapitiya</p>
                        <p className="text-[#F5D10D] text-[1rem] font-normal text-center pt-6  ">Mail Me:</p>
                        <p className=" text-[1.5rem] font-medium text-center  ">nisalshiranda001@gmail.com</p>
                        <p className="text-[#F5D10D] text-[1rem] font-normal text-center pt-6  ">Call Me:</p>
                        <p className=" text-[1.5rem] font-medium text-center  ">+94 711543730</p>
                        

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