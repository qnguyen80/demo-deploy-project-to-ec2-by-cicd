import * as React from 'react';

export default function S3() {
    const s3Url = "https://aws-s3-image.s3.ap-southeast-2.amazonaws.com/";
    const imgKey = "image-background-demo.jpg";
    return (
        <>
            <h2 className='title'>Image data stored in S3</h2>
            <div className='tab-content'>
                <img src={s3Url + imgKey} />
            </div>
        </>
    );
}