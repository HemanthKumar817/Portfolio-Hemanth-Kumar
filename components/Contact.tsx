import React from 'react';
import './Contact.css';
import StarBorder from './StarBorder';

const Contact: React.FC = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Portfolio Inquiry from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:hemanthtangudu817@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="contact-section">
            <div className="w-full flex justify-center">
                <StarBorder as="div" className="w-full max-w-2xl mx-auto" color="var(--theme-color)" speed="4s">
                    <div className="contact-container w-full bg-transparent border-none shadow-none !p-8 !max-w-none">
                        <div className="contact-header">
                            <span className="contact-subtitle">Get in Touch</span>
                            <h2 className="contact-title">Contact Us</h2>
                        </div>

                        <form className="contact-form" onSubmit={handleSend}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    className="form-textarea"
                                    placeholder="How can we help?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button type="submit" className="submit-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </StarBorder>
            </div>
        </section>
    );
};

export default Contact;
