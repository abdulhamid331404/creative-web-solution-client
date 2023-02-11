import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import OurService from '../OurService/OurService';
import OurServices from '../OurServices/OurServices';
import OurTeam from '../OurTeam/OurTeam';
import Packages from '../Packages/Packages';
import ServicePreview from '../ServicePreview/ServicePreview';
import TeamMembers from '../TeamMembers/TeamMembers';
import TopBanner from '../TopBanner/TopBanner';
import WorkReview from '../WorkReview/WorkReview';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <AboutCompany></AboutCompany>
            <Packages></Packages>
            <ServicePreview></ServicePreview>
            <OurServices></OurServices>
            <OurService></OurService>
            <WorkReview></WorkReview>
            <OurTeam></OurTeam>
            <TeamMembers></TeamMembers>
        </div>
    );
};

export default Home;