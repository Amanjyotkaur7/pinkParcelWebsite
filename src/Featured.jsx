import React, { useEffect, useState } from 'react';
import './Featured.css';
import './Global.css';

function Featured() {
    const [bgColor, setBgColor] = useState('lightblue'); // Initial background color
    const [trackerBgColor, setTrackerBgColor] = useState('lightpink'); // Tracker section color

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight; // Height of the viewport

            // Change background color based on scroll position
            if (scrollY < windowHeight) {
                const percentage = scrollY / windowHeight;
                // Light pastel pink
                setBgColor(`rgba(255, 192, 203, ${percentage})`); 
                // Change color while scrolling down
            } else if (scrollY < windowHeight * 2) {
                setBgColor('#fbcbc9'); // Full pink color when scrolled past the first section
                setTrackerBgColor('#dacfd0'); // Soft pastel green for tracker section
            } else {
                setTrackerBgColor('#dfbbda'); // Soft pastel lavender for further scrolling
            }
            
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cardData = [
        {
          heading: "Why Pink Parcel ?",
          text: "At Pink Parcel, we believe in more than just providing products – we're here to embrace you with warmth and support, just like a second mother away from home."
        },
        {
          heading: "Family First",
          text: "Become a cherished member of our Pink Parcel family, where care transcends beyond packages. From the moment you join us, your well-being becomes our top priority."
        },
        {
          heading: "Tailored to You",
          text: "Choose from a vast array of menstrual care products, pre-built packages, or craft your own customized parcel. Whatever your needs, Pink Parcel ensures you're equipped with exactly what you require."
        },
        {
          heading: " Swift Delivery, Anywhere",
          text: "Experience the convenience of receiving your Pink Parcel within a maximum of just one hour, delivered straight to your hostel, academic blocks, or any corner of the university you reside."
        },
        {
          heading: " Seamless Subscription",
          text: "Never worry about running out of essentials again. With our subscription model, your period care products arrive punctually every month, without you lifting a finger"
        },
        {
          heading: " Personal Touch",
          text: "Each Pink Parcel comes with a heartfelt note, a thank-you call post-order, and the assurance that we're tracking your periods to anticipate your needs"
        },
        {
          heading: "Always Here for You",
          text: "Need someone to talk to? We're not just a service; we're a supportive friend. Whether it's a chat, professional advice for a Gynecologist a homeopath, or home remedies and delivering it to you, Pink Parcel has your back."
        },
        {
          heading: "Beyond Boundaries",
          text: "Where others stop, we begin. Pink Parcel isn't just about convenience; it's about creating a haven of comfort and empowerment for every university girl."
        },
        {
          heading: "Experience Pink Parcel – it's not just a service, it's a nurturing journey. ",
          // text: "Here lies the content of the ninth container."
        },
      ];

    return (
        <>
            {/* Full Height Section */}
            <div className='section' style={{ backgroundColor: bgColor }}>
                <div className='Tag'>
                    <div className='Tagimg'>
                        <img
                            src="https://pinkparcel.in/cdn/shop/files/Watercolor_floral_frame_wedding_planner_logo_20231031_203150_0000_page-0001.jpg?v=1708453489&width=750"
                            alt="Pink Parcel Logo"
                        />
                    </div>
                    <div className='t'>
                        <h1 className='t1'>Get your monthly supply of</h1>
                        <h1 className='t1'>menstrual care products</h1>
                        <button className='shop'>Shop now</button>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className='section' style={{ backgroundColor: bgColor }}>
    <div className='featuring'>
        <h1 className='Fheading'>Featured Packages</h1>
        <div className='product-slider'>
            <div className='package basic'>
                <img src="https://pinkparcel.in/cdn/shop/files/1.png?v=1711734029&width=360" alt="basic" />
                <h1 className='typePackage rating'>Basic Packaging (<i className="bi bi-star-fill"></i> 5.0)</h1>
                <span className='price'>From <i className="bi bi-currency-rupee"></i> 128.00</span>
            </div>

            <div className='package standard'>
                <img src="https://pinkparcel.in/cdn/shop/files/2.png?v=1711734137&width=360" alt="standard" />
                <h1 className='typePackage rating'>Standard Packaging (<i className="bi bi-star-fill"></i> 5.0)</h1>
                <span className='price'>$15.00</span>
            </div>

            <div className='package premium'>
                <img src="https://pinkparcel.in/cdn/shop/files/2.png?v=1711734137&width=360" alt="premium" />
                <h1 className='typePackage'>Premium Packaging</h1>
                <h2 className='rating'><i className="bi bi-star-fill"></i> 5.0</h2>
            </div>
            
        </div>
    </div>
</div>


            {/* Tracker Section */}
            <div className={`tracker`} style={{ backgroundColor: trackerBgColor }}>
                <h1>Create Your Own Package</h1>
                <div className='container'>
                    <div className='c'> <img src="/img/choc.jpg" alt="" />
                    <h1>HERSHEY’S Dark Bar | Deliciously Dark Cocoa Rich Chocolate| 40g</h1></div>
                    <div className='c'><img src="/img/w.jpg" alt="" />
                    <h1>Pack of Pocket tissues</h1></div>
                    <div className='c'><img src="/img/razor.webp" alt="" />
                    <h1>Gillette Venus Razor - (Pack of 1, Pink) - Razor for Women</h1></div>
                    <div className='c'><img src="/img/pads.webp" alt="" />
                    <h1>Whisper Choice Ultra XL 6 Pads</h1></div>
                </div>
                
            </div>

            <div className="Calender">
                <img src="/img/track.jpg" alt="period tracker" />
                <h1>Track Your Periods</h1>
                
            </div>
            
            <div className='intro'><h1><i class="bi bi-flower1"></i>  Introducing Pink Parcel: Your Ultimate Care Companion  <i class="bi bi-flower1"></i></h1></div>
            <div className="container">
        {cardData.map((card, index) => (
        <div className="card" key={index}>
          <h2 className="card-heading">{card.heading}</h2>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>

    <div className='sub'><h1>Subscribe to our emails</h1>
    <h3>Join our email list for exclusive offers and the latest news.</h3>
    <div className="email-input-container">
          <input type="email" placeholder="Email" className="email-input" />
          <button className="arrow-button">→</button>
        </div>
        
         </div>

         <div className="footer-section">
        <p className="company-name">PinkParcel Services LLP</p>
        <p className="contact-number">+91 98778 29376</p>
        <p className="contact-email">getpinkparcelindia@gmail.com</p>
        </div>
        <div className="policies">
          <span>© 2024, Pink Parcel Powered by Shopify · </span>
          <a href="#refund-policy" className="policy-link">Refund policy</a> · 
          <a href="#privacy-policy" className="policy-link">Privacy policy</a> · 
          <a href="#terms-service" className="policy-link">Terms of service</a> · 
          <a href="#shipping-policy" className="policy-link">Shipping policy</a>
        </div>
     


        </>
    );
}

export default Featured;
