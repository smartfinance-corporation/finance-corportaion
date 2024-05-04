import '@/app/styles/footer.css'
import Link from 'next/link'
export default function Footer(){
    return(
        <div className="footer">
            <div className="div-footer">
                <h1 className='headers'>About Us</h1>
                <ul>
                <li><Link href="./">FCC leadership</Link></li>
                <li><Link href="./">Blogs</Link></li>
                <li><Link href="./">Gallery</Link></li>
                <li><Link href="./">Contact Us</Link></li>
                </ul>
            </div>
            <div className="div-footer">
            <h1 className='headers'>Useful Links</h1>
                <ul>
                <li><Link href="../components/Home">Home</Link></li>
                <li> <Link href="../components/Horizon">Horizon</Link></li>
                <li> <Link href="../components/Sponsors">Sponsors</Link></li>
                <li> <Link href="../components/Workshops">Workshops</Link></li>
                </ul>
            </div>
            <div className="div-footer">
              <h1 className='headers' >Socials</h1>
                <ul>
                <li> <Link href="./">Instagram</Link></li>
                <li> <Link href="./">LinkedIn</Link></li>
                <li> <Link href="./">Medium</Link></li>
                <li> <Link href="./">Youtube</Link></li>
                </ul>
            </div>
            <div className="div-footer">
              <h1 className='headers'>Socials</h1>
                <Link href="./">Contact Info</Link>
            </div>

            
        </div>
        
    )
}