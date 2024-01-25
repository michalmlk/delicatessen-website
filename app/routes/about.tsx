import React from 'react'
import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
      { title: "O nas - Quchnia Bednarek" },
    ];
  };


const AboutPage: React.FC = () => {
  return (
    <div className="pageContentWrapper">
      <h1 className='heading'>O nas</h1>
    </div>
  )
}

export const links = () => []

export default AboutPage