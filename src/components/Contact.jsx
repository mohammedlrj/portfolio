import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "../widgets/Toast";
import Social from "./Social";
import styles from "../style";

const Contact = () => {
    const [emailData, setEmailData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showToast, setShowToast] = useState(false); // State to show/hide the toast
    const [toastMessage, setToastMessage] = useState(""); // State for the toast message
    const [toastType, setToastType] = useState(""); // State for toast type

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_4deiwyn', 'template_u5mlm8u', emailData, 'qTH9zjVceHXb7d7ej')
            .then((result) => {
                console.log('E-mail envoyé avec succès', result.text);
                setEmailData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                setToastMessage("Email sent successfully!"); // Success message
                setToastType('success'); // Set toast type to success
                setShowToast(true);
                setTimeout(() => setShowToast(false), 5000);
            }, (error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error.text);
                setToastMessage("Error sending email."); // Error message
                setToastType('error'); // Set toast type to error
                setShowToast(true);
                setTimeout(() => setShowToast(false), 5000);
            });
    };

    return (
        <section id="contact" className="relative">
            <div className="absolute z-[0] w-[30%] h-[30%] -right-[25%] rounded-full blue__gradient top-[-12%]"/>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm z-30">
                <h2 className={`${styles.heading2Center}`}>Collaborate with Me</h2>
                <p className={`${styles.paragraphCenter}`}>
                If you're interested in what you see, I would love to work together. 
                I offer swift and effective solutions designed to simplify your life and meet your needs.
                Should you have any questions, please don't hesitate to reach out through the contact form 
                below. I will respond promptly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-md font-medium font-poppins text-gray-300">Name</label>
                        <input type="text" id="name" value={emailData.name} onChange={handleChange}
                               className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="Your name" required/>
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-md font-medium font-poppins text-gray-300">Email</label>
                        <input type="email" id="email" value={emailData.email} onChange={handleChange}
                               className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="name@example.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-md font-medium font-poppins text-gray-300">Subject</label>
                        <input type="text" id="subject" value={emailData.subject} onChange={handleChange}
                               className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="Let me know how I can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-md font-medium font-poppins text-gray-300">Your
                            message</label>
                        <textarea id="message" rows="6" value={emailData.message} onChange={handleChange}
                                  className="shadow-sm bg-black-gradient border border-gray-400 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className={`py-3 px-4 font-poppins font-medium hover:scale-[0.99] text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>Send
                        message
                    </button>
                </form>

                {showToast && <Toast message={toastMessage} type={toastType} />}

                <Social/>
            </div>
        </section>
    );
};

export default Contact;
