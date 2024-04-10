export default function Footers() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer bottom-0 p-10 bg-secondary text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © {year} - All right reserved</p>
            </div>
        </footer>
    );
}
