import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="mb-5">
            <nav>
                <div className="d-inline me-5">
                    <span className="h1">Logo</span>
                </div>
                <div className="d-inline">
                    <Link to="/">Trang chủ</Link> |{" "}
                    <Link to="product">Sản phẩm</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;