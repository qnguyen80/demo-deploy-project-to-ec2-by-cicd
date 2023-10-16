import * as React from 'react';
import sang from "../SangDiep.jpeg";
import quoc from "../QuocNguyen.png";
import thang from "../ThangNguyen.jpeg";
import snguyen from "../SangNguyen.png";

export default function Team() {
    const s3Url = "https://aws-s3-image.s3.ap-southeast-2.amazonaws.com/";
    const imgKey = "image-background-demo.jpg";
    return (
        <>
            <div className='content-team d-flex'>
                <div className='content-left'>
                    <h2>Meet Our Team</h2>
                    <div className='team-desc'>
                        <p><b>Team 4</b> is a group of people who have a diversified set of skills that are required to develop a complete software system. Team members apply their engineering and programming knowledge in software development achieving fantastic applications or websites. The efficiency and effectiveness of the developed software depend on the skills of the development team. Let us discuss the hierarchy of the software development team and understand their roles and responsibilities.</p>
                    </div>
                </div>
                <div className='content-right'>
                    <div className='box-member'>
                        <div className='avatar'>
                            <img src={thang} />
                        </div>
                        <h5>Thang Nguyen</h5>
                    </div>
                    <div className='box-member'>
                        <div className='avatar'>
                            <img src={quoc} />
                        </div>
                        <h5>Quoc Nguyen</h5>
                    </div>
                    <div className='box-member'>
                        <div className='avatar'>
                            <img src={sang} />
                        </div>
                        <h5>Sang Diep</h5>
                    </div>
                    <div className='box-member'>
                        <div className='avatar'>
                            <img src={snguyen} />
                        </div>
                        <h5>Sang Nguyen</h5>
                    </div>
                </div>
            </div>
        </>
    );
}