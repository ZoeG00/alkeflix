
function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="mx-4 text-white">© 2022 Zoe Guzman</span>
                </div>
                <ul class="w-25 justify-content-end list-unstyled d-flex col-md-4">
                    <a href="https://github.com/ZoeG00" target='_BLANK'><svg width="24" height="24"></svg><img className="col-2" src="https://img.icons8.com/glyph-neue/200/null/github.png" alt='github logo' /></a>
                    <a href="https://www.linkedin.com/in/zoeg00/" target='_BLANK'><svg width="24" height="24" ></svg><img className="col-2" src="https://img.icons8.com/glyph-neue/200/null/linkedin-circled.png" alt='linkedin logo' /></a>
                </ul>
            </footer>
        </>
    )
}

export default Footer;