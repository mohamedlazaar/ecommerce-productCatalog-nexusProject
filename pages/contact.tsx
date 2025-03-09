"use client";

import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate form submission
        console.log("Form submitted:", formData);
        setFormStatus("success");

        // Clear the form after submission
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div >
           <div className="w-full h-[200px] flex justify-center items-center p-2 bg-gray-700 mb-10">
                    <h1 className="text-[32px] font-extrabold text-white capitalize">Contact Us</h1>
           </div>
          
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {formStatus === "success" && (
                        <p className="mt-4 text-green-600">Your message has been sent successfully!</p>
                    )}
                    {formStatus === "error" && (
                        <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
                    )}
                </div>

                {/* Contact Info */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

                    <p className="mb-4">Feel free to reach out to us through any of the following channels:</p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold">Email</h3>
                            <p className="text-gray-700">support@nexusecommerce.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Phone</h3>
                            <p className="text-gray-700">+1 (123) 456-7890</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Address</h3>
                            <p className="text-gray-700">
                                123 Nexus Street, Tech City, <br />
                                San Francisco, CA 94107
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
