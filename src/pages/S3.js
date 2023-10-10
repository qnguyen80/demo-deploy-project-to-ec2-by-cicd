import * as React from 'react';

export default function S3() {
    const s3Url = "https://aws-s3-image.s3.ap-southeast-2.amazonaws.com/";
    const imgKey = "image-background-demo.jpg";
    return (
        <>
            <h4>Image data store in S3</h4>
            <img src={s3Url+imgKey} />
        </>
    );
}