import Link from 'next/link';

export default function ListNavbar() {
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" role="presentation">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        href={'/'}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={'/About'}>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href={''}
                        className="nav-link disabled"
                        aria-disabled="true"
                    >
                        Disabled
                    </Link>
                </li>
            </ul>
        </>
    );
}
