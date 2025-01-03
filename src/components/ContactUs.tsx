const ContactUs = () => {
    return (
        <section className=" py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-blue-900 text-center py-3">Contact Us</h2>
                

                    <div className=" p-6 rounded-lg shadow-md bg-blue-50">
                        <form className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-grey-900">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-grey-900">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-grey-900">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    );
};

export default ContactUs;
