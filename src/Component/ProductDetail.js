import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const ProductDetail = props => {
    const params = useParams();
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        axios.get(`https://621e2bf1849220b1fc91caa0.mockapi.io/product/${params.id}`)
            .then(res => setProductDetail(res.data));
    }, []);
    
    return <div className="row">
        <div className="col">
            <img src={productDetail.avatar}/>
        </div>
        <div className="col">
            <p>Tên sản phẩm: {productDetail.name}</p>
            <p>Mã sản phẩm: REACT-{productDetail.id}</p>
            <p>Giá: {productDetail.price}$</p>
            <p>Ngày tạo: {moment(productDetail.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    </div>
}

export default ProductDetail;