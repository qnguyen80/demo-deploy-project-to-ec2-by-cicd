import * as React from 'react';
import Grid from '@mui/material/Grid';
import './page.css';

export default function Introduction() {
    return (
        <div className='content'>
            <div className='box'>
                <h3>Diagram</h3>
                <div className='diagram'>

                </div>
            </div>
            <div className='aws'></div>
            <div className='box'>
                <h3>Technical Usage</h3>
                <ul>
                    <li>React</li>
                    <li className='aws-txt'>IAM User</li>
                    <ul>
                        <li className='aws-txt'>Roles</li>
                        <li className='aws-txt'>User Group</li>
                        <li className='aws-txt'>Permission</li>
                    </ul>
                    <li className='aws-txt'>S3</li>
                    <ul className='aws-txt'>
                        <li className='aws-txt'>Store image</li>
                    </ul>
                    <li className='aws-txt'>EC2 Instance</li>
                    <li className='aws-txt'>CodeDeploy</li>
                    <li className='aws-txt'>{`ELB (Elastic Load Balancer)`}</li>
                    <li>CI/CD Automation Deployment</li>
                </ul>
            </div>
        </div>
    );
}