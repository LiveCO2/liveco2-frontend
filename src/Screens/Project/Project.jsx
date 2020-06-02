import React from 'react';
import { Trans } from 'react-i18next';

import "./Project.scss"

import head1 from '../../images/headshot-1.jpg';
import head2 from '../../images/headshot-2.jpg';
import head3 from '../../images/headshot-3.jpg';
import head4 from '../../images/headshot-4.jpg';

const Project = () => (
    <div>
        <div className="projectVision">
        </div>
        <div className="projectPartners">
        </div>
        <div className="projectRelized">
        </div>
        <div className="projectTeam">
            <div className="projectTeamMember">
                <img className="projectTeamMemberPic" src={head1} alt="project member picture" />
                <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.1.name"/></h4>
                <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.1.title"/></h5>
                <p className="text-small"><Trans i18nKey="project.members.1.bio"/></p>
            </div>
            <div className="projectTeamMember">
                <img className="projectTeamMemberPic" src={head2} alt="project member picture" />
                <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.2.name"/></h4>
                <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.2.title"/></h5>
                <p className="text-small"><Trans i18nKey="project.members.2.bio"/></p>
            </div>
            <div className="projectTeamMember">
                <img className="projectTeamMemberPic" src={head3} alt="project member picture" />
                <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.3.name"/></h4>
                <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.3.title"/></h5>
                <p className="text-small"><Trans i18nKey="project.members.3.bio"/></p>
            </div>
            <div className="projectTeamMember">
                <img className="projectTeamMemberPic" src={head4} alt="project member picture" />
                <h4 className="projectTeamMemberName"><Trans i18nKey="project.members.4.name"/></h4>
                <h5 className="projectTeamMemberTitle"><Trans i18nKey="project.members.4.title"/></h5>
                <p className="text-small"><Trans i18nKey="project.members.4.bio"/></p>
            </div>
        </div>
    </div>
);

export default Project;
