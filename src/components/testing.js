 <div className="row justify-content-center d-none d-sm-flex ">
                    {data.map((item) => {
                        return (
                            <Card classname=" col-lg-5 col-md-6 col-8 mx-auto mx-md-5 m-4 p-3">
                                <div
                                    className="d-flex flex-column align-items-center"
                                >
                                    <div>
                                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pOXV26B_EI0" title="YouTube video player" frameborder="0" allow=" autoplay; " allowfullscreen></iframe> */}
                                        <img src={item.img} alt={item.comp} loading="lazy" className="col-12" />
                                    </div>
                                    <div className="text-secondary text-center mt-auto">
                                        <h3>{item.comp}</h3>
                                        <h4>{item.pos}</h4>
                                    </div>
                                    <p className="fs-5 text-dark text-center">{item.info}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
                