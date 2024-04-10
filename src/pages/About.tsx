import Footers from '@/fragments/Footers';
import NavbarFlowbite from '@/fragments/Navbar';

export default function About() {
    return (
        <>
            <NavbarFlowbite />
            <header
                style={{ minHeight: '400px' }}
                className="jumbotron bg-info text-white rounded d-flex align-items-center jumbotron-fluid"
            >
                <div className="container ">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                        This is About page. It is under construction.
                        <br />
                    </p>
                </div>
            </header>
            <section className="mt-5 d-flex justify-content-around align-items-center">
                <img src="https://via.placeholder.com/300" alt="" />
                <div className="w-50">
                    <p>This is About page. It is under construction.</p>
                    <button className="btn btn-primary">Button</button>
                </div>
            </section>
            <section className="mt-5 d-flex justify-content-around align-items-center">
                <div className="d-flex align-items-end flex-column w-50 justify-content-end">
                    <p>This is About page. It is under construction.</p>
                    <button className="btn btn-primary">Button</button>
                </div>
                <img src="https://via.placeholder.com/300" alt="" />
            </section>
            <Footers />
        </>
    );
}
