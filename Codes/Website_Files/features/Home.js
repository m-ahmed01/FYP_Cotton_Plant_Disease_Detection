import BackgroundImage from "../Components/field/BGImage";

import Fields from "../Components/field/Fields";

import SideBySideComponents from "../Components/field/SideBySideComponent";

import Navbar from "../Components/navbar/Navbar";

function Home() {
    return ( 
<div>
<Navbar></Navbar>
 <Fields></Fields>

   <BackgroundImage></BackgroundImage>
   <SideBySideComponents></SideBySideComponents>
</div>

     );
}

export default Home;