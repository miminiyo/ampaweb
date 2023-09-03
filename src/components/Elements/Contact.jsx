const Contact = () => {

    return(
        <section className="section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-md-10 col-12 mx-auto">
                        <h2 className="mb-4 text-center">Let's chat</h2>

                        <form className="custom-form" role="form" action="" method="post">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 my-2">
                                    <label className="mb-2" for="name">Nombre</label>

                                    <input type="text" name="name" id="name" className="form-control" required=""/>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 my-2">
                                    <label className="mb-2" for="email">Email</label>
                                    
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" required=""/>
                                </div>

                                <div className="col-12 my-2">
                                    <label className="mb-2" for="message">¿En qué podemos ayudarte?</label>

                                    <textarea className="form-control" rows="5" id="message" name="message"></textarea>
                                
                                    <button type="submit" className="form-control mt-4" id="submit">Enviar</button>
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