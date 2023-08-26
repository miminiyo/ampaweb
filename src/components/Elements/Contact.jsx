const Contact = () => {

    return(
        <section className="section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-md-10 col-12 mx-auto">
                        <h2 className="mb-4 text-center">Let's chat</h2>

                        <form className="custom-form" role="form" action="" method="post">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 my-2">
                                    <label className="mb-2" for="name">Full Name</label>

                                    <input type="text" name="name" id="name" className="form-control" required=""/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 my-2">
                                    <label className="mb-2" for="email">Email Address</label>
                                    
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" required=""/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 my-2">
                                    <label className="mb-2" for="subject">How did you know about us?</label>

                                    <select className="form-select form-control" name="subject" id="subject">
                                        <option selected="">Choose a subject</option>
                                        <option value="web+search">Website Searches</option>
                                        <option value="social+media">Social Media</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                                <div className="col-12 my-2">
                                    <label className="mb-2" for="message">Tell us about the project</label>

                                    <textarea className="form-control" rows="5" id="message" name="message"></textarea>
                                
                                    <button type="submit" className="form-control mt-4" id="submit">Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact