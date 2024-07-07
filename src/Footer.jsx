export default function Footer(){
    return(
        <>
        <footer className="text-center">
            <div className="container pt-4">
            <section className="mb-4">
                <a data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="https://www.instagram.com/zandana.mk/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                ><img src="instagram.png" style={{maxWidth: '30px'}}></img></a>

                <a
                 data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="https://linktr.ee/zandana"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                ><img style={{maxWidth: '30px'}} src="linktree.png"></img></a>
            </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgb(25, 24, 24)', color: "white"}}>
                © 2024 Copyright: Zandana
            </div>
        </footer>
        </>
    )
}