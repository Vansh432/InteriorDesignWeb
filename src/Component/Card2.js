
import './styles/Card2.css';


const ServiceCard = ({ icon, title, description,backgroundImage,classId }) => {
  const styles = {
    card: {
      position:"relative",
      flex: 1,
      width:"fit-content",
      height:"420px",
      width:"370px",
      padding: '30px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '0 8px',
      textAlign: 'center',
      backgroundSize:"cover"
    },
    icon: {
      fontSize: '40px',
      marginBottom: '10px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#d2a64a',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };
    return (
      <div style={styles.card} className={`card2 ${classId} flex justify-center items-center`}>
      <div className='addIcon z-10'>
      <ion-icon name="add-outline"></ion-icon>
      </div>

      <div className="innerBox border-2 h-full w-full p-[30px] bg-[rgba(255,255,255,0.8)] z-20">
        <div style={styles.icon}>{icon}</div>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <button style={styles.button}>Show More</button>
        </div>
        <button className="hoverButton" style={styles.button}>Show More</button>
      </div>
      
    );
  };
  
  
  
  export default ServiceCard;