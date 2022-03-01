import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Child from "./Child";
import Content from "./Content";
import ProductDetail from "./ProductDetail";
// import your route components too

const RouteComponent = props => {
    return <Routes>
        <Route path="/" element={<>Trang chủ</>}/>
        <Route path="/product" element={<Content />}>
            {/* <Route path=":child" element={<Child/>} /> */}
        </Route>
        <Route path="/product/:id" element={<ProductDetail/>}>
            {/* <Route path=":child" element={<Child/>} /> */}
        </Route>
        <Route path="*" element={<>not found</>}>

        </Route>
    </Routes>
}

export default RouteComponent;