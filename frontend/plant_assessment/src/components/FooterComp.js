import '../styles/FooterComp.css';
import footerImg from '../assets/succulant-close-up.jpg';

function FooterComp() {
  
  return ( 
    <footer className='mt-5'>
            <div className='footer-overlay'>
                {/* <img src={footerImg} alt='plant' className='footer-img'></img>   */}
                <h1 className="footer-title">PLANTOPIA</h1>
            </div> 
    </footer>
  );
}

export default FooterComp;