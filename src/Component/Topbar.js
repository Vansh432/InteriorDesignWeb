function Topbar()
{

  return <>
   <div className="flex justify-center items-center    py-[5px] bg-[#1C1918] text-[#d8d4d4]">
    <div className="mx-5 flex justify-center items-center   ms-center">
    <ion-icon name="call-outline" style={{color:"var(--color-theme)"}}></ion-icon>
    <a href="tel:7906837086" className="text-[15px] font-[Poppins, sans-serif] ml-[5px] font-medium">7906837086</a>
    </div>
    <div className="mx-5 flex justify-center items-center">
    <ion-icon name="mail-outline"></ion-icon>
    <a href="mailto:vansharya703@gmail.com" className="text-[15px] font-[Poppins, sans-serif] ml-[5px] font-medium">abc@gmail.com</a>
    </div>
    <div className="flex justify-center items-center mx-5">
    <ion-icon name="time-outline"></ion-icon>
    <h4  className="text-[15px] font-[Poppins, sans-serif] ml-[5px] font-medium">24*7</h4>
    </div>
   </div>

  </>
}

export default  Topbar;