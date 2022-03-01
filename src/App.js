import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header";
import Content from './Component/Content';
import 'antd/dist/antd.css';
import Route from './Component/Route';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './store';

function App() {
  /// có giá tri của bộ lọc
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Header name={"React"} />
          <Route />
          {/* Content */}
        </BrowserRouter>
      </Provider>
      {/* Xu li react */}
    </div>
  );
}

export default App;
