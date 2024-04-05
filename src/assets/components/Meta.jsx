import { Helmet } from "react-helmet"


export const Meta = ({title}) => {
  return (
    <Helmet> <title>{title}</title> 
    <link rel="shortcut icon" href="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png" type="image/x-icon"/>
   <div>Auth</div>
    </Helmet>
  )
}

export default Meta;