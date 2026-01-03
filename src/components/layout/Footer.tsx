import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">LEO Tax Filing</h3>
                        <p className="text-gray-300 text-sm">
                            Professional tax filing services to help you maximize your returns and minimize your stress.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Personal Tax</span></li>
                            <li><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Business Tax</span></li>
                            <li><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Tax Planning</span></li>
                            <li><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Consultation</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
                        <address className="not-italic text-gray-300 text-sm">
                            <p>123 Tax Street</p>
                            <p>Financial District, NY 10001</p>
                            <p className="mt-2">Email: info@leotaxfiling.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </address>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; {currentYear} LEO Tax Filing. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
