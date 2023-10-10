import * as React from 'react';
import Grid from '@mui/material/Grid';
import './page.css';

export default function Introduction() {
    return (
        <>
            <div className='content'>
                <div className='box'>
                    <h3>Team Introduction</h3>
                    <ul>
                        <li>Thang Nguyen</li>
                        <li>Quoc Nguyen</li>
                        <li>Sang Diep</li>
                        <li>Sang Nguyen</li>
                    </ul>
                </div>
                <div className='aws'></div>
                <div className='box'>
                    <h3>Technical Usage</h3>
                    <ul>
                        <li>ReactJS</li>
                        <ul>
                            <li>MUI</li>
                        </ul>
                        <li>IAM User</li>
                        <ul>
                            <li>Roles</li>
                            <li>User Group</li>
                            <li>Permission</li>
                        </ul>
                        <li>S3</li>
                        <ul>
                            <li>Store image</li>
                        </ul>
                        <li>EC2 Instance</li>
                        <li>CodeDeploy</li>
                        <li>CI/CD Automation Deployment</li>
                        <li>{`ALB (Load Balancer)`}</li>
                    </ul>

                </div>
            </div>

        </>
    );
}