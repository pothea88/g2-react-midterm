import React from 'react';

class ContactUs extends React.Component {
    render() {
        return(
            <React.Fragment>
                {/* <!--Section: Contact v.2--> */}
<section className="mb-4">

    {/* <!--Section heading--> */}
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    {/* <!--Section description--> */}
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-6 mb-md-0 mb-5">
            <div className='container'>
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control" />
                            
                        </div>
                    </div>
                    {/* <!--Grid column-->

                    <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control" />
                            
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control" />
                            
                        </div>
                    </div>
                </div>

                <div className="row">


                    <div className="col-md-12">

                        <div className="md-form">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>

                <div className="text-center">
                    <a className="btn btn-primary mt-5 form-control" onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
            </form>
            </div>
            
            <div className="status"></div>
        </div>

        <div className="col-md-6 col-sm-12 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
     

    </div>
    
</section>

            </React.Fragment>
        )
    }
}
export default ContactUs;