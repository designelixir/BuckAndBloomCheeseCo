
import Link from "next/link";
import "./components.css";
import Image from "next/image";

export default function VisitUs() {

  return (
    <div className="basic-padding " style={{marginTop: '700px'}}>
        <div className="flex-center-center">
                    <Image src="flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
                    <h1 className="centered-text about-title">Visit Us</h1>
                    <Image src="flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
                </div>
        <h3 className="centered-text">You can now come for a visit! Come and shop our cheeses at the Jumpin&apos; Good Country Store, also offering local salami, crackers, goat fudge, gifts, horse tack, and more. Meet our baby goats (hopefully future milk producers!) who were born this spring and are eager to meet you.</h3>
        <div className="flex-center-center basic-padding">
            <Link target="_blank" href="https://www.google.com/maps/place/Jumpin%E2%80%99+Good+Country+Store+%26+Buck+n%E2%80%99+Bloom+Cheese+Shop/data=!4m2!3m1!1s0x0:0xfa6afe646a042e2a?sa=X&ved=1t:2428&ictx=111">
            <button>Jumpin' Good Country Store Hours</button>
            </Link>
            
        </div>
        <div className="flex-center-center">
        <Image src="/windmill.svg" height={100} width={50} alt="windmill graphic"></Image>
        <h4>31700 US-24, Buena Vista, CO 81211</h4>
        </div>
        
    </div>
    
    
    
  );
}
