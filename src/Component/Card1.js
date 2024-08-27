import './styles/Card1.css';

function Card1(props){
    const {backgroundColor,color,url,image,width,imageBox}=props;
    const cardStyles={
      background: `linear-gradient(${backgroundColor},${backgroundColor}), url(${url})`,
      color:`${color}`,
       backgroundSize: 'cover',
    backgroundPosition: 'center'
    }
    return (
        <>
        <div className='p-[10px]'>
          <div className="card1 w-[400px] h-[400px] text-center py-[60px] px-[25px] flex justify-center items-center " style={cardStyles}>
            <div className="">
              <div className={`card1Image ${imageBox}`}>
                <img src={image} alt="loading..." width={width}/>
              </div>
              <h1 className="text-[27px] mb-[10px] font-medium ">
                Visualize your ideas
              </h1>
              <p className="tracking-[1px] mb-[30px] text-[#626262]">
                The best render of drawing by hand. The ease of super smart soft
                machines.
              </p>
              <a
                href="https://github.com"
                className="tracking-[2px] text-[16px] mt-[25px] flex justify-content items-center  w-fit m-auto"
              >
                LEARN MORE<span class="material-symbols-outlined mb-[1px] ml-[7px]">
arrow_right_alt
</span>
              </a>
            </div>
          </div>
          </div>
        </>
      );

}


export default Card1;