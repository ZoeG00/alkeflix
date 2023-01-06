
function Footer() {
    return (
        <>
            <div className="container position-absolute bottom-0 start-50 translate-middle-x">
                <footer className='border-top'>
                    <div className="d-flex">
                        <span className="mb-3 mb-md-0 text-white">© 2022 Zoe Guzman</span>
                    </div>
                    <div className='position-absolute start-10'>
                        <a href="https://github.com/ZoeG00" target='_BLANK'><svg width="24" height="24"></svg><img className="col-1" src="https://img.icons8.com/glyph-neue/200/null/github.png" /></a>
                        <a href="https://www.linkedin.com/in/zoeg00/" target='_BLANK'><svg width="24" height="24" ></svg><img className="col-1" src="https://img.icons8.com/glyph-neue/200/null/linkedin-circled.png" /></a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;