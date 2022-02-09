import React from "react";
import {ReactComponent as BehanceIcon} from '../svgs/behance.svg'
import {ReactComponent as FacebookIcon} from '../svgs/facebook.svg'
import {ReactComponent as LinkedinIcon} from '../svgs/linkedin.svg'
import {ReactComponent as TwitterIcon} from '../svgs/twitter.svg'
import {ReactComponent as HomeIcon} from '../svgs/home.svg'
import {ReactComponent as TeamIcon} from '../svgs/team.svg'
import {ReactComponent as ProjectIcon} from '../svgs/project.svg'
import {ReactComponent as CalendarIcon} from '../svgs/calendar.svg'
import {ReactComponent as DocumentIcon} from '../svgs/document.svg'

    


export const Links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: <HomeIcon />,
    },
    {
      id: 2,
      url: '/team',
      text: 'team',
      icon: <TeamIcon />,
    },
    {
      id: 3,
      url: '/projects',
      text: 'projects',
      icon: <ProjectIcon />,
    },
    {
      id: 4,
      url: '/calendar',
      text: 'calendar',
      icon: <CalendarIcon />,
    },
    {
      id: 5,
      url: '/documents',
      text: 'documents',
      icon: <DocumentIcon />,
    },
  ];
  
  export const Social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FacebookIcon />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <TwitterIcon />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <LinkedinIcon />,
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: <BehanceIcon />,
    },
  ];