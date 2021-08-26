import './Contact.sass'
import { useForm, ValidationError } from '@formspree/react';
import GoogleMapReact from 'google-map-react';
import map from '../../images/home_map.png'



function Contact() {
    const [state, handleSubmit] = useForm("xpzoboja");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="contact">
            {/* <div className="vertical-center"> */}
                <div className="contact-form">
                    <h1>Let's Chat!</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="name"  placeholder="Name"/>
                        <input type="text" className="email"  placeholder="Email"/>
                        <textarea className="message" placeholder="Message"></textarea>
                        <button type="submit" className="button" disabled={state.submitting}>Submit</button>
                    </form>
                </div>
                {/* <div className="map">
                    

                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Contact;