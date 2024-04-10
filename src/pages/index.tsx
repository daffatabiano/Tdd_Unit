import { Inter } from 'next/font/google';
import NavbarFlowbite from '@/fragments/Navbar';
import Footers from '@/fragments/Footers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <NavbarFlowbite />
            <main role="main" className={`${inter.className}`}>
                <h1>Hello World</h1>

                <section role='content' className="mt-5 h-100">
                    <div
                        id="carouselExampleAutoplaying"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://source.unsplash.com/random/200x200?sig=1"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://source.unsplash.com/random/200x200?sig=2"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://source.unsplash.com/random/200x200?sig=3"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </main>

            <Footers />
        </>
    );
}
