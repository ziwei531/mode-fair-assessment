export default function Navbar() {
    const styleLi = "font-semibold text-3xl m-2";
    return (
        <>
            <nav>
                <ul className="p-10 m">
                    <li className={styleLi}>Store</li>
                    <li className={styleLi}>Mac</li>
                    <li className={styleLi}>iPad</li>
                    <li className={styleLi}>iPhone</li>
                    <li className={styleLi}>Watch</li>
                    <li className={styleLi}>AirPods</li>
                    <li className={styleLi}>TV & Home</li>
                    <li className={styleLi}>Entertainment</li>
                    <li className={styleLi}>Accessories</li>
                    <li className={styleLi}>Support</li>
                </ul>
            </nav>
        </>
    );
}
