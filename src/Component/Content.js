import React, { useEffect, useState } from "react";
import { Button, Card, List, message, Select } from "antd"
import { Outlet } from "react-router-dom";
import store from "../store";
import counterAction from "../state/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Content(props) {
    const [productList, setProductList] = useState([]);
    const [filterOption, setFilterOption] = useState([]);
    const navigate = useNavigate();

    const { Option } = Select;

    useEffect(() => {
        axios.get("https://621e2bf1849220b1fc91caa0.mockapi.io/product").then(res => {
            setProductList([...productList, ...res.data]);
            setFilterOption([...filterOption, ...res.data]);
        })
    }, []);

    const onSelectChange = value => {
        // console.log(value);
        // value là cái id
        // gọi api lọc sản phẩm theo id
        axios.get("https://621e2bf1849220b1fc91caa0.mockapi.io/product?id=" + value).then(res => {
            setProductList(res.data);
            message.success("Lọc sản phẩm thành công")
        })
    }

    return <div className="row">
        <div className="m-5">
            <Select onChange={value => onSelectChange(value)} className="w-25" placeholder="Lọc theo mã sản phẩm">
                {
                   filterOption.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>) 
                }
            </Select>
        </div>
        <List
            grid={{ gutter: 30, column: 4 }}
            dataSource={productList}
            renderItem={item => (
                <List.Item>
                    <Card
                        onClick={() => navigate("/product/" + item.id)}
                        className="col-4 w-100"
                        hoverable
                        cover={<img alt="example" src={item.avatar} />}
                    >
                        <Card.Meta title={item.name} description={item.price} />
                    </Card>
                </List.Item>
            )}
        />
    </div>
}

export default Content;