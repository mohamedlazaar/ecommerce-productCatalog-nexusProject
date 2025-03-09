const About = ()=>{
    return(
        <div>
                        <div className="min-h-screen bg-gray-100">
                <div className="w-full h-[200px] flex justify-center items-center p-2 bg-gray-700 mb-10">
                    <h1 className="text-[32px] font-extrabold text-white capitalize">About Us</h1>
                </div>

                <div className="container mx-auto px-6 py-10">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Nexus Projec Ecommerce ALX — your go-to destination for high-quality products across categories like **Clothes**, **Shoes**, **Electronics**, **Accessories**, and more!  
                            We are passionate about curating products that add value to your life, blending style, functionality, and affordability.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is simple: **Empower people with products they love**.  
                            We aim to provide a seamless shopping experience, featuring a wide range of products that cater to your everyday needs — all while delivering exceptional customer service.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li><strong>Curated Selection:</strong> Every product is carefully chosen to ensure top-notch quality.</li>
                            <li><strong>Customer-Centric Approach:</strong> We prioritize customer satisfaction, with easy returns and fast support.</li>
                            <li><strong>Secure Payments:</strong> Shop with confidence using our encrypted, secure checkout process.</li>
                            <li><strong>Fast & Reliable Shipping:</strong> Get your products delivered on time, every time.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We’re a team of developers, designers, and product enthusiasts who are passionate about building a modern, customer-first shopping platform. Whether it’s crafting an intuitive user interface or sourcing the latest trends, we work tirelessly to ensure your shopping experience is nothing short of amazing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Got questions, feedback, or just want to say hi? We’d love to hear from you!  
                            Reach out to us via email at **support@yourecommerce.com**, or follow us on our social media channels.
                        </p>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default About;