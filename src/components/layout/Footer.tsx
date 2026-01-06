import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    BadgeHelp,
    ClipboardList,
    DollarSign,
    Scale,
    ShieldAlert,
    FileCheck2,
    Calculator,
    Receipt,
} from "lucide-react";

type ServiceItem = {
    title: string;
    desc: string;
    slug: string; // routes: /service/:slug
    icon: React.ReactNode;
};


const SERVICE_ITEMS: ServiceItem[] = [
    {
        title: "1040 & 1040 NR Tax Return Filing",
        desc: "Individual and nonresident tax return preparation",
        slug: "1040-1040nr-tax-return-filing",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Unlimited Tax Consultations",
        desc: "Get answers and guidance from tax professionals",
        slug: "unlimited-tax-consultations",
        icon: <BadgeHelp className="h-5 w-5" />,
    },
    {
        title: "Form 4868 Extension Filing",
        desc: "Tax filing deadline extension support",
        slug: "form-4868-extension-filing",
        icon: <ClipboardList className="h-5 w-5" />,
    },
    {
        title: "ITIN Guidance and Support (Form W-7)",
        desc: "Individual Taxpayer Identification Number applications",
        slug: "itin-guidance-and-support",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "FICA Taxes Withdrawals Guidance",
        desc: "Assistance for FICA-related withdrawals and compliance",
        slug: "fica-taxes-withdrawals-guidance",
        icon: <DollarSign className="h-5 w-5" />,
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">LEO Tax Filing</h3>
                        <p className="text-gray-300 text-sm">
                            From answering your questions to helping you claim all eligible deductions, Leo makes sure you maximize your tax benefits.
                        </p>

                        <a href="" className='mt-4 block'>
                            Terms And Conditions
                        </a>
                        <a href="" className='block'>
                            Privacy policy
                        </a>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
                            <li><Link to="/refund-status" className="text-gray-300 hover:text-white text-sm">Refund Status</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
                        <ul className="space-y-2">
                            {SERVICE_ITEMS.map((service) => (
                                <li key={service.slug}>
                                    <Link to={`/service/${service.slug}`} className="text-gray-300 hover:text-white text-sm cursor-pointer">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
                        <address className="not-italic text-gray-300 text-sm">
                            <p>200 Country Club Dr,Largo FL 33771</p>
                            <p className="mt-2">Email: contact@leotaxfiling.com</p>
                            <p>Phone: +1 239-319-2127</p>
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
