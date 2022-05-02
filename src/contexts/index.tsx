import AuthContext from "./AuthContext";
import { GenericContextComponent } from "./Contexts";
import ProductsContext from "./ProductsContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Contexts({ children }: GenericContextComponent) {
  return <>
  <AuthContext>
    <ProductsContext>
      {children}
    </ProductsContext>
  </AuthContext>
  <ToastContainer />
  </>;
}

export default Contexts;
