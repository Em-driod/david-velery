

const Global = () => {
  return (
    <div className="bg-[#2f3746] w-full py-28 flex justify-center items-center font-body">
    
    <div className="flex flex-col items-center text-center px-4 max-w-4xl">
        
        <h1 className="font-display text-[#d6ccbc] text-4xl md:text-6xl font-normal leading-tight mb-7">
            Ready to love every inch of your home?
        </h1>
        
        <p className="text-[#d6ccbc] text-lg opacity-90 mb-12 tracking-wider">
            Schedule Your Complimentary Design Call
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
            
            <a href="tel:7654771251"
               className="
                  flex items-center justify-center 
                  px-8 py-4 w-64 sm:w-auto 
                  text-[#d6ccbc] text-base font-medium 
                  bg-transparent border-2 border-[#d6ccbc] 
                  rounded-full 
                  hover:bg-opacity-5 hover:bg-light-text transition
               ">
                <span className="mr-2 text-xl -mt-0.5">📞</span> 
                (765) 477-1251
            </a>
            
            <button className="
                       px-8 py-4 w-64 sm:w-auto 
                       bg-[#d6ccbc] text-alt-btn-text 
                       text-base font-medium 
                       rounded-full shadow-lg 
                       hover:bg-opacity-90 transition 
                       tracking-wide
                   ">
                Discover Your Alternatives
            </button>
            
        </div>
    </div>
</div>
  )
}

export default Global