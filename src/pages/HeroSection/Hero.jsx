import "./Hero.css";



function Hero() {
  return (
    <div className="hero grid-cols-1 sm:grid sm:grid-cols-3">
        <div className="box1  flex  flex-col ">
            <div><p className="font-bold text-[2rem] text-center sm:text-start">NISAL SHIRANDA<span className="text-[#F5D10D]">.</span></p></div>
            <div className="box1-line"></div>
            <div className="box1-icons">
                <a href="#" className="fb"></a>
            </div>
        </div>
        <div className="box1 flex justify-center">
            2
        </div>
        <div className="box1 flex  justify-center sm:justify-end">
            3
        </div>

    </div>
  )
}

export default Hero