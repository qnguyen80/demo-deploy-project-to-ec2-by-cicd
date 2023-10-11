import * as React from 'react';
import sang from "../SangDiep.jpeg";
import quoc from "../QuocNguyen.png";
import thang from "../ThangNguyen.jpeg";

export default function Team() {
    const s3Url = "https://aws-s3-image.s3.ap-southeast-2.amazonaws.com/";
    const imgKey = "image-background-demo.jpg";
    return (
        <>
            <h2 className='title'>Team Members</h2>
            <div className='team-content'>
                <div className='team-box'>
                    <div>
                    <img src={thang} />
                    </div>
                    <div className='name'>
                        <h4>Thang Nguyen</h4>
                    </div>
                </div>
                <div className='line'></div>
                <div className='team-box'>
                    <div>
                    <img src={quoc} />
                    </div>
                    <div className='name'>
                        <h4>Quoc Nguyen</h4>
                    </div>
                </div>
                <div className='line'></div>
                <div className='team-box'>
                    <div>
                        <img src={sang} />
                    </div>
                    <div className='name'>
                        <h4>Sang Diep</h4>
                    </div>
                </div>
                <div className='line'></div>
                <div className='team-box'>
                    <div>
                        <img src={''} />
                    </div>
                    <div className='name'>
                        <h4>Sang Nguyen</h4>
                    </div>
                </div>
            </div>
        </>
    );
}