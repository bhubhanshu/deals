import React from 'react'

function Footer() {
    return(
        <div className="footer mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center">
                            <h5>Socials</h5>
                            <a className="fa fa-facebook" href="https://www.facebook.com/bhubhanshu.gurjar"></a> &nbsp;
                            <a className="fa fa-linkedin" href="https://www.linkedin.com/in/bhubhanshu/"></a> &nbsp;
                            <a className="fa fa-github" href="https://www.github.com/bhubhanshu/"></a> &nbsp;
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <h5>© Copyright 2020 Bhubhanshu Gurjar</h5>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <h5>Built using ReactJS</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;