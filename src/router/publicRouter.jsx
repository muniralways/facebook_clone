


//create public router

import Auth from "../pages/Auth";
import { Home } from "../pages/home/Home";



const publicRouter = [
 
 {
  path:"/",
  element:<Home/>
 },
 {
  path:"/auth",
  element:<Auth/>
 }



];

// export
export default publicRouter;