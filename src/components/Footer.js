
function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Zoe Guzman</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-muted" href="https://github.com/ZoeG00" target='_BLANK'><svg class="bi" width="24" height="24"></svg><img className="col-1" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                            <a className="text-muted" href="https://www.linkedin.com/in/zoe-guzman-0449b9229/" target='_BLANK'><svg class="bi" width="24" height="24"></svg><img className="col-1" src="https://w7.pngwing.com/pngs/654/768/png-transparent-computer-icons-linkedin-social-media-social-network-blog-social-icons-text-trademark-logo.png" /></a>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    )
}


export default Footer;