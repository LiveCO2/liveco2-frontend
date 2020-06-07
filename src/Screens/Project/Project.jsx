import React from 'react';
import { Trans } from 'react-i18next';

import "./Project.scss"

import head1 from '../../images/headshot-1.jpg';
import head2 from '../../images/headshot-2.jpg';
import head3 from '../../images/headshot-3.jpg';
import head4 from '../../images/headshot-4.jpg';
import upm from '../../images/upm-montes-escudo.png';

const Project = () => (
    <div className="project">
        <div className="projectMission">
            <h2 className="projectTitle"><Trans i18nKey="project.mision.title"/></h2>
            <div className="projectMissionText">
                <p><Trans i18nKey="project.mision.mision"/></p>
            </div>
        </div>
        <div className="projectPartners">
            <h2 className="projectTitle"><Trans i18nKey="project.partners.title"/></h2>
            <img className="projectPartnerPic" src={upm} alt="Escudo Universidad Politecnica de Madrid"/>
            <h4><Trans i18nKey="project.partners.picTitle"/></h4>
            <p><Trans i18nKey="project.partners.picDescription"/></p>
        </div>
        <div className="projectTeam">
            <h2 className="projectTitle"><Trans i18nKey="project.members.title"/></h2>
            <div className="projectTeamMembers">
                <div className="projectTeamMember">
                    <img className="projectTeamMemberPic" src={head1} alt="project member"/>
                    <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.1.name"/></h4>
                    <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.1.title"/></h5>
                    <p className="text-small"><Trans i18nKey="project.members.1.bio"/></p>
                </div>
                <div className="projectTeamMember">
                    <img className="projectTeamMemberPic" src={head2} alt="project member" />
                    <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.2.name"/></h4>
                    <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.2.title"/></h5>
                    <p className="text-small"><Trans i18nKey="project.members.2.bio"/></p>
                </div>
                <div className="projectTeamMember">
                    <img className="projectTeamMemberPic" src={head3} alt="project member" />
                    <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.3.name"/></h4>
                    <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.3.title"/></h5>
                    <p className="text-small"><Trans i18nKey="project.members.3.bio"/></p>
                </div>
                <div className="projectTeamMember">
                    <img className="projectTeamMemberPic" src={head4} alt="project member" />
                    <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.4.name"/></h4>
                    <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.4.title"/></h5>
                    <p className="text-small"><Trans i18nKey="project.members.4.bio"/></p>
                </div>
            </div>
        </div>
        <div className="projectRelized">
            <h2 className="projectTitle"><Trans i18nKey="project.projects.title"/></h2>
        </div>
    </div>
);

export default Project;
