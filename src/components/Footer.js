
function Footer() {
    return (
        <>
            <div className="container">
                <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top'>
                    <div className="col-md-4 d-flex">
                        <span className="mb-3 mb-md-0 text-black">© 2022 Zoe Guzman</span>
                    </div>
                    <div>
                        <ul className="nav list-unstyled d-flex">
                            <li>
                                <a href="https://github.com/ZoeG00" target='_BLANK'><svg class="bi" width="24" height="24"></svg><img className="col-1" src="https://img.icons8.com/glyph-neue/200/null/github.png"/></a>
                                <a href="https://www.linkedin.com/in/zoeg00/" target='_BLANK'><svg class="bi" width="24" height="24" ></svg><img className="col-1" src="https://img.icons8.com/glyph-neue/200/null/linkedin-circled.png"/></a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}


export default Footer;