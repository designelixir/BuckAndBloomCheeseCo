
import Link from "next/link";
import "./components.css";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="basic-padding footer flex-center-center flex-column" >
        
        <Image src="/Buck&Bloom-Lettermark(cream).svg" className="basic-margin" alt="Buck and Bloom Lettermark" width={300} height={100}></Image>
        <h4 className="cream-text" style={{fontSize: '12px', fontWeight: '100'}}>Plant No. 08-98</h4>
        <h4 className="cream-text" style={{fontSize: '14px', fontWeight: '100'}}>31700 US Highway 24 North, Buena Vista, CO, 81211</h4>
        
        <div className="flex-center-center" style={{marginTop: '25px'}}>
            
            <Link href="mailto:buckandbloomcheese@gmail.com" target="_blank" className="no-link-styling"><p className="cream-text" style={{fontWeight: '100', marginLeft: '15px'}}>buckandbloomcheese@gmail.com</p></Link>
        </div>
        
        <div className="flex-center-center basic-padding">
            <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" className="no-link-styling" style={{marginRight:'15px'}}>
            <Image src="/ig.svg" alt="instagram icon" width={25} height={25}></Image>
            </Link>
            <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" className="no-link-styling">
            <Image src="/fb.svg" alt="facebook icon" width={25} height={25}></Image>
            </Link>
        </div>
        <Link href="https://designelixir.studio" target="_blank" className="hover no-link-styling">
                <h4 className="cream-text" style={{fontSize: '10px', opacity: 0.5, fontWeight: '100'}}>Made with &hearts; by Design Elixir Studio</h4>

        </Link>
        
    </footer>
    
    
    
  );
}
