import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ServiceHeroFbarFatca from '@/components/services/ServiceHeroFbarFatca';
import ServiceHeroModern1040 from '@/components/services/ServiceHeroModern1040';
import React from 'react';
import ServiceHeroUnlimitedConsultations from '@/components/services/ServiceHeroUnlimitedConsultations';
import ServiceHeroForm4868 from '@/components/services/ServiceHeroForm4868';
import ServiceHeroAccurateTaxEstimates from '@/components/services/ServiceHeroAccurateTaxEstimates';
import ServiceHeroITINW7 from '@/components/services/ServiceHeroITINW7';
import ServiceHeroFICATaxWithdrawals from '@/components/services/ServiceHeroFICATaxWithdrawals';
import ServiceHeroTaxPlanning from '@/components/services/ServiceHeroTaxPlanning';
import ServiceHeroNoticesAuditsEnquiries from '@/components/services/ServiceHeroNoticesAuditsEnquiries';
import ServiceHeroFiledReturnsAssessment from '@/components/services/ServiceHeroFiledReturnsAssessment';
import ServiceHeroW4Assistance from '@/components/services/ServiceHeroW4Assistance';

const ServiceDetails = () => {
    const { slug } = useParams<{ slug: string }>();

    const renderServiceComponent = () => {
        switch (slug) {
            case 'fbar-fatca-filing':
                return <ServiceHeroFbarFatca />;
            case '1040-1040nr-tax-return-filing':
                return <ServiceHeroModern1040 />;
            case 'unlimited-tax-consultations':
                return <ServiceHeroUnlimitedConsultations />;
            case 'form-4868-extension-filing':
                return <ServiceHeroForm4868 />;
            case 'accurate-tax-estimates':
                return <ServiceHeroAccurateTaxEstimates />;
            case 'itin-guidance-and-support':
                return <ServiceHeroITINW7 />;
            case 'fica-taxes-withdrawals-guidance':
                return <ServiceHeroFICATaxWithdrawals />;
            case 'professional-tax-planning':
                return <ServiceHeroTaxPlanning />;
            case 'notices-audits-enquiries-support':
                return <ServiceHeroNoticesAuditsEnquiries />;
            case 'filed-tax-returns-assessment-examination':
                return <ServiceHeroFiledReturnsAssessment />;
            case 'w4-assistance':
                return <ServiceHeroW4Assistance />;
            default:
                return <div>Service not found</div>;
        }
    };

    return (
        <Layout>
            {renderServiceComponent()}
        </Layout>
    );
};

export default ServiceDetails;