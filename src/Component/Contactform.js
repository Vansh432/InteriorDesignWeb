import { FaUser,FaPen ,FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import './styles/Contactform.css'
function Contactform(){

    return<>
    <div className="contactForm mt-[20px] flex w-[1114px] m-auto flex-wrap">
        <div className="w-[50%] py-[30px] px-[40px] max-sm:w-[100%]" >
            <form>
            <div>
            <FaUser className='iconContact'/>
             <input type="text" name="name" placeholder="Your Name"/>
             </div>
             <div>
             <FaEnvelope className='iconContact'/>
             <input type="email" name="email" placeholder="Your Email"/>
             </div>
             <div>
             <FaPen  className='iconContact'/>
             <input type="text" name="subject" placeholder="Subject"/>
             </div>
             <div>
             <FaCommentAlt className='iconContact textareaIcon'/>
             <textarea name="message" placeholder="Your Message" rows={100} resize="none"/>
             </div>
             <button> Send Message</button>
            </form>
        </div>
        <div className="w-[50%]  max-sm:w-[100%]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28024.263735350105!2d77.32095495000002!3d28.598787799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723726972339!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    </>
}

export default Contactform;