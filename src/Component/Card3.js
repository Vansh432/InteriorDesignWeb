
function Card3({ icon, title, subtitle1, subtitle2 }) {
    const arr={
        "Call Us":[`tel:${subtitle1}`,`tel:${subtitle2}`],
        "Email Us":[`mailto:${subtitle1}`,`mailto:${subtitle2}`]
    }
    const locations="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28024.263735350105!2d77.32095495000002!3d28.598787799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723726972339!5m2!1sen!2sin"
    console.log()
    return <>
        <div className='contactBox p-[25px] w-[350px] m-[15px]   shadow-[0_0_5px_rgba(0,0,0,0.2)]'>
            <div className='text-[2.2rem] text-[#3bc0d1] w-fit m-auto '>
                {icon}
            </div>
            <h2 className='text-[1.5rem] my-[20px]'>{title}</h2>
            <a  href={title==="Address"?{locations}:arr[title][0]}
            target="_blank" className='tracking-[1px] text-[.9rem] text-[#737373] cursor-pointer'>
                {subtitle1}
            </a>
            <br />
            <a href={title==="Address"?{locations}:arr[title][1]}  target="_blank" className='tracking-[1px] text-[.9rem] text-[#737373] cursor-pointer'>
                {subtitle2}
            </a>
        </div>
    </>
}

export default Card3;