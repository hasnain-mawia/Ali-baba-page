import React ,{useState} from 'react';
import './App.css';
import Chip from '@mui/material/Chip';
import data from './data';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import img8 from './images/8.png'
import imgw01 from './images/01.webp'
import imgw02 from './images/02.webp'
import imgw03 from './images/03.webp'
import imgw04 from './images/04.webp'
import imgw1 from './images/1.webp'
import imgw2 from './images/2.webp'
import imgw3 from './images/3.webp'
import img1a1 from './images/1.1.png'
import img1a2 from './images/1.2.jpg'
import img1a3 from './images/1.3.jpg'
import img2a1 from './images/2.1.jpg';
import img2a2 from './images/2.2.jpg';
import img2a3 from './images/2.3.jpg';
import img3a1 from './images/3.1.png';
import img3a2 from './images/3.2.jpg';
import img3a3 from './images/3.3.jpg';
import img4a1 from './images/4.1.webp';
import img4a2 from './images/4.2.webp';
import img4a3 from './images/4.3.webp';
import img5a1 from './images/5.1.jpg';
import img5a2 from './images/5.2.jpg';
import img5a3 from './images/5.3.webp';
import img6a1 from './images/6.1.jpg';
import img6a2 from './images/6.2.jpg';
import img6a3 from './images/6.3.webp';
import imgS1 from './images/sec1.webp';
import imgS2 from './images/sec2.webp';
import imgS3 from './images/sec3.webp';
import imgS4 from './images/sec4.webp';
import imgS5 from './images/sec5.webp';
import imgS6 from './images/sec6.webp';
import imgS7 from './images/sec7.webp';
import imgS8 from './images/sec8.webp';
import imgS9 from './images/sec9.webp';
import imgS10 from './images/10.webp';
import imgS11 from './images/sec11.webp';
import imgS12 from './images/12.webp';
import imgS13 from './images/logo.png';
import { width } from '@mui/system';


const Search = () =>{
    const[items, setItem] = useState(data);

    const filterItem = (categItem) =>{
        const updatedItem = data.filter((currElem)=>{
         return currElem.title === categItem;    
        });
        setItem(updatedItem);
    }

return (
     <>
     <Chip label="Samsung" onClick ={()=> filterItem('Samsung')} variant="outlined"/>
     <Chip label="I Phone" onClick ={()=> filterItem('I Phone')} variant="outlined" />
     <Chip label="Infinix" onClick ={()=> filterItem('Infinx')} variant="outlined" />
     <Chip label="Tecno" onClick ={()=> filterItem('Tecno')} variant="outlined" />
     <Chip label="Honda" onClick ={()=> filterItem('Honda')} variant="outlined" />
     <Chip label="Suzuki" onClick ={()=> filterItem('Suzuki')} variant="outlined" />
     <Chip label="Kawasaki" onClick ={()=> filterItem('Kawaski')} variant="outlined" />
     <Chip label="Super Power" onClick ={()=> filterItem('Super Power')} variant="outlined" />
     <Chip label="Civic" onClick ={()=> filterItem('Civic')} variant="outlined" />
     <Chip label="Audi" onClick ={()=> filterItem('Audi')} variant="outlined" />
     <Chip label="Sport" onClick ={()=> filterItem('Mercedes')} variant="outlined" />
     <Chip label="Mercedes" onClick ={()=> filterItem('Mercedes')} variant="outlined" />
     <Chip label="All" onClick ={()=> setItem(data)} variant="outlined" />
     <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid m-0 p-0">
            <a className="navbar-brand" href="#">
              <img src={imgS13}style={{width:250}} />
               </a>
            <div className="me-auto ms-5">
              <form className="d-flex" role="search">
                <input className="form-control w-5 rounded-4 me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline rounded-5 ms-1 btun" type="submit">Search</button>
              </form>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"><i className="fa-regular fa-user d-flex mt-3 fs-3">
                    </i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  </a><p className="fs-6 "><a className="nav-link" href="#"> <i className="fa-solid fa-message fs-3" />
                    </a>
                  </p></li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa-solid fa-cart-arrow-down fs-3 mt-3" /></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* section1end */}
        {/* section2start */}
        <div>
          <ul className="d-inline">
            <li> <i className="fa-solid fa-align-justify"/> Category</li>
            <li>Ready to Ship</li>
            <li>personal Protective</li>
            <li>Buyer Central</li>
            <li>Sell on Ali Baba</li>
            <li>Help</li>
          </ul>
          <ul className="d-inline">
            <li className="halp">English-USD</li>
            <li className="help">Ship to <i className="fa-solid fa-flag" /></li>
          </ul>
        </div>
        {/* section2end */}
        {/* section3start */}
        <div className="container-fluid p-0 pt-4 h-4 ">
          <div className="row">
            <div className="col">
              <p className="ms-5">Mid Year Sale</p>
            </div>
            <div className="col">
              <p> <i className="fa-solid fa-percent" />
                Excellent Discount</p>
            </div>
            <div className="col">
              <p> <i className="fa-solid fa-star" />
                Lowest price in the <br /> last days</p>
            </div>
            <div className="col">
              <p><i className="fa-solid fa-bolt" />
                on-the delivery guaranty</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger rounded-5">Sources</button>
            </div>
          </div>
        </div>
        {/* section3 end*/}
        {/* section4start */}
        <div className="container ms-5 w-100 m-2 mt-2 m-0 p-0 border-5 ">
          <div className="row">
            <div className="col-md-3">
              <h6> My markets</h6>
              <ul className="p-0">
                <li><img src={img1} width="20%" />Consumer Electronic</li>
                <li><img src={img2} width="30%" />Aparel</li>
                <li><img src={img3} width="20%" />Vehical pats and accesorise</li>
                <li><img src={img4} width="15%" />Sport and Entertainment</li>
                <li><img src={img5} width="22%" />Machinery</li>
                <li><img src={img6} width="20%" />Home and Garden</li>
                <li><img src={img7} width="18%" />beuty and personal</li>
                <li><img src={img8} width="15%" /> All cetagory</li>
              </ul>
            </div>
            <div className="col-md-6 ">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner  ">
                  <div className="carousel-item active">
                    <img src={imgw01} className="d-block w-100" height={380} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgw02} className="d-block w-100" height={380} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgw03} className="d-block w-100" height={380} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgw04} className="d-block w-100" height={380} alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="p-0">
                <li>Buyer Club <br /> US $10 Of with A New Suppleir</li>
              </ul>
              <button type="button" id="btt" className="btn btn-dark rounded-5  btn-sm ms-5">View More</button>
              <button type="button" className="btn btn-danger btn-sm m-4 col-md-12 ">Mid Year Sale</button>
              <p className="fw-bold ms-3">Hot Sallers<img className="ms-5" src={imgw1} width="20%" /></p>
              <hr />
              <p className="fw-bold ms-3">New trends release<img className="ms-2" src={imgw2} width="20%" /></p>
              <hr />
              <p className="fw-bold ms-3">10% off or More<img className="ms-2" src={imgw3} width="20%" /></p>
            </div>
          </div>
        </div>
        {/* section4end */}
        <div>
         <section className="py-4 container">
         <div className="row justify-content-center">
            {
           items.map((elem)=>{
                const { img, title, desc} = elem;
                return (
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4">
                       <div className="card p-0 overflow-hidden h-100 shadow">
                          <img src={img} className="card-img-top img-fluid" />
                          <h5 className="card_title text-center">{title}</h5>
                          <p className="card_text text-center">{desc}</p>
                       </div>
                    </div>
                 );
            })
            }
            </div>
         </section>
        </div>
        {/* section5start */}
        <div className="countainer ps-5 p-2">
          <div className="row bg-light">
            <div className="col-md-4">
              <p className="fw-bold">New Arrival</p>
              <img className="rounded-4 border border-2" src={img1a1} width="100px" />
              <img className="rounded-4 border border-2" src={img1a2} width="100px" />
              <img className="rounded-4 border border-2" src={img1a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold">Top-ranked Products</p>
              <img className="rounded-4 border border-2" src={img2a1} width="100px" />
              <img className="rounded-4 border border-2" src={img2a2} width="100px" />
              <img className="rounded-4 border border-2" src={img2a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold">Personal Protective Equipment </p>
              <img className="rounded-4 border border-2" src={img3a1} width="100px" />
              <img className="rounded-4 border border-2"  src={img3a2} width="100px" />
              <img className="rounded-4 border border-2"  src={img3a3} width="100px" />
            </div>
          </div>
        </div>
        <div className="countainer ps-5 pt-4 p-2">
          <div className="row bg-light">
            <div className="col-md-4">
              <p className="fw-bold">Dropshipping</p>
              <img className="rounded-4 border border-2" src={img4a1} width="100px" />
              <img className="rounded-4 border border-2" src={img4a2} width="100px" />
              <img className="rounded-4 border border-2" src={img4a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold"> Global Original Sources</p>
              <img className="rounded-4 border border-2" src={img5a1} width="100px" />
              <img className="rounded-4 border border-2" src={img5a2} width="100px" />
              <img className="rounded-4 border border-2" src={img5a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold"> True View </p>
              <img className="rounded-4 border border-2"  src={img6a1} width="100px" />
              <img className="rounded-4 border border-2"  src={img6a2} width="100px" />
              <img className="rounded-4 border border-2"  src={img6a3} width="100px" />
            </div>
          </div>
        </div>
        {/* section5end */}
        {/* section6start */}
        <div className="container">
          <h3 className="pt-3">JUST FOR YOU</h3>
          <div className="row">
            <div className="col-md-2 p-0">
              <img src={imgS1} width="170px " />
              <li>2021 Summer Fashion Women's Casual XL 4XL. <br />
                <b> $15.70 - $16.70 </b><br />
                5 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS2} width="170px " />
              <li>Santa Claus outside snow music box crystal ball girl gift. <br />
                <b> $6.40 </b><br />
                90 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS3} width="170px " />
              <li>Chakela Crystal Jade Chakra Combination Set Pink Crystal. <br />
                <b> $0.10 - $6.90</b> <br />
                1.0 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS4} width="170px " />
              <li>2022 Amazon Summer European And American Girls. <br />
                <b>$3.60 - $3.90</b> <br />
                20 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS5} width="170px " />
              <li>High Precision Quality Gas Station Garage Prefab Frame. <br />
                <b>$1,799.00 - $2,999.00</b> <br />
                1.0 Sets (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS6} width="170px " />
              <li>2022 New Matching Cheap Swimwear Designer. <br />
                <b> $12.20 - $19.90</b><br />
                5 Pieces (Min. Order)
              </li>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 p-0">
              <img src={imgS7} width="170px " />
              <li>Fashion Women Bohemian Dresses Spring Summer <br />
                <b> $4.98 - $6.19</b> <br />
                1 Piece (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS8} width="170px " />
              <li>Exquisite steel structure perfab house container. <br />
                <b>$1,300.00 - $2,500.00</b> <br />
                1.0 Units (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS9} width="170px " />
              <li>Portable beachwear thin girls bathing suit swimwear. <br />
                <b>$7.44 - $8.49</b><br />
                2 Sets (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS10} width="170px " />
              <li>Cold Kettle Glass Household Large Capacity Pot Heat. <br />
                <b>$4.90 - $19.00</b> <br />
                2 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS11} width="170px " />
              <li>Harbour Luxury Linen Fabric Folding Small Pet Dog Cat. <br />
                <b> $8.80 - $16.00</b> <br />
                2 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS12} width="170px " />
              <li>Statue of liberty souvenirs home furnishings. <br />
                <b> $2.27 - $5.72</b> <br />
                12 Pieces (Min. Order)
              </li>
            </div>
          </div>
        </div>
        {/* section6end */}
        {/* footerstart */}
        <footer>
          <div className="main text- bg-footer p-3">
            <div className="text-center">
              <li>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</li>
              <br />
              <input className="rounded-0" type="email" placeholder="Your Email" id="my" name="email" />
              <button type="button" className="btn btn-outline-light btn-sm m-1 p-1 ">Subscribe</button>
            </div>
            <div className="countainer pt-4">
              <div className="row ps-5 m-4 ms-5 ">
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Customer Services</p>
                  <ul className="p-1">
                    <li>Help Center</li> <br />
                    <li>Report Abuse</li> <br />
                    <li>Submit a Dispute</li> <br />
                    <li>Policies &amp; Rules</li> <br />
                    <li>Get Paid for Your Feedback</li> <br />
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">About Us</p>
                  <ul className="p-1">
                    <li>About Alibaba.com</li> <br />
                    <li>About Alibaba Group</li> <br />
                    <li>Sitemap</li> <br />
                    <li>Alibaba.com Blog</li> <br />
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Source Alibaba.com</p >
                    <ul className="p-1">
                      <li>Resources</li> <br />
                      <li>All Categories</li> <br />
                      <li>Request for Quotation</li> <br />
                      <li>Ready to Ship</li> <br />
                      <li>Buyer Partners</li> <br />
                    </ul>
                  <p className="m-0"/></div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Sell Alibaba.com</p>
                  <ul className="p-1">
                    <li>Supplier Memberships</li> <br />
                    <li>Learning Center</li> <br />
                    <li>Partner Program</li> <br />
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Trade Services</p>
                  <ul className="p-1">
                    <li>Trade Assurance</li> <br />
                    <li>Business Identity</li> <br />
                    <li>Logistics Service</li> <br />
                    <li>Production Monitoring</li> <br />
                    <li>Letter of Credit</li> <br />
                  </ul>
                </div>
                <hr />
              </div>
            </div>
            <div className="text-center">
              <h3>Follow Us</h3>
              <i className="fa-brands p-2 fs-1 fa-facebook" />
              <i className="fa-brands p-2 fs-1 fa-instagram" />
              <i className="fa-brands p-2 fs-1 fa-tiktok" />
              <i className="fa-brands p-2 fs-1 fa-linkedin-in" />
              <i className="fa-brands p-2 fs-1 fa-twitter-square" />
              <i className="fa-brands p-2 fs-1 fa-youtube" />
            </div>
            <div>
              <li className="text-center pt-1 p-5 ">Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress |
                Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World
                Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba
                Security
                <br /> Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate <br />
                Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information
                Legal Enquiry Guide
              </li>
            </div>
          </div>
        </footer>
   
      </div>
   </> 
    );
        }  
  


export default Search;
