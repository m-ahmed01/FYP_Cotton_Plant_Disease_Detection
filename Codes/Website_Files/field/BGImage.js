import backgroundLogo from '../images/images_x.jpg'; 

function BackgroundImage() {
    return ( <>
    <img src={backgroundLogo}  alt='BgImage' style={{
          width: '100%',  
          height: '90.2vh', 
          objectFit: 'cover', 
          objectPosition: 'center', 
          opacity:0.7,
        }}/>
    </> );
}

export default BackgroundImage;