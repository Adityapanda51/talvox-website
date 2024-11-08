import React from 'react';
import './CorporateGifting.css';
import mug from '../../../assets/CorporateGift/mug.avif';
import notebook from '../../../assets/CorporateGift/notebook.jpg';
import pen from '../../../assets/CorporateGift/pen.jpg';
import cap from '../../../assets/CorporateGift/cap.jpg';
import hoodie from '../../../assets/CorporateGift/hoodie.jpg';
import usb from '../../../assets/CorporateGift/usb.jpg';
import tshirt from '../../../assets/CorporateGift/tshirt.webp';
import mouse from '../../../assets/CorporateGift/mouse.jpg';
import watch from '../../../assets/CorporateGift/watch.jpg';
import bottle from '../../../assets/CorporateGift/bottle.jpg';
import sunglasses from '../../../assets/CorporateGift/sunglasses.jpg';
import wallets from '../../../assets/CorporateGift/wallet.jpg';
import perfumes from '../../../assets/CorporateGift/perfume.jpg';
import umbrella from '../../../assets/CorporateGift/umbrella.jpg';
import dairy from '../../../assets/CorporateGift/dairy.jpg';
import weddingCard from '../../../assets/CorporateGift/wedding card.jpg';
import businessCard from '../../../assets/CorporateGift/business card.jpg';
import visitingCard from '../../../assets/CorporateGift/visiting card.webp';
import partyCard from '../../../assets/CorporateGift/party card.jpg';
import corporateEvents from '../../../assets/CorporateGift/corporate events.jpg';
import brochures from '../../../assets/CorporateGift/brochure.jpg';


const CorporateGifting = () => {
  const items = [
    { id: 1, name: "Custom Mug", description: "Personalized corporate mugs.", img: mug },
    { id: 2, name: "Notebook", description: "Eco-friendly corporate notebooks.", img: notebook },
    { id: 3, name: "Pen", description: "Stylish corporate pens.", img: pen },
    { id: 4, name: "Cap", description: "Branded caps for corporate events.", img: cap },
    { id: 5, name: "Hoodies", description: "Comfortable branded hoodies.", img: hoodie },
    { id: 6, name: "USB", description: "Branded USB drives.", img: usb },
    { id: 7, name: "T-Shirt", description: "High-quality branded t-shirts.", img: tshirt },
    { id: 8, name: "Mouse", description: "Corporate branded mouse.", img: mouse },
    { id: 9, name: "Watch", description: "Branded watches for employees.", img: watch },
    { id: 10, name: "Bottle", description: "Reusable branded water bottles.", img: bottle },
    { id: 11, name: "Sunglasses", description: "Stylish branded sunglasses.", img: sunglasses },
    { id: 12, name: "Wallets", description: "Elegant corporate wallets.", img: wallets },
    { id: 13, name: "Perfume", description: "Exclusive corporate perfumes.", img: perfumes },
    { id: 14, name: "Umbrella", description: "Branded umbrellas for corporate gifts.", img: umbrella },
    { id: 15, name: "Dairy", description: "Customized corporate diaries.", img: dairy },
    { id: 16, name: "Wedding Card", description: "Customized wedding cards.", img: weddingCard },
    { id: 17, name: "Business Cards", description: "Professional business cards.", img: businessCard },
    { id: 18, name: "Visiting Cards", description: "High-quality visiting cards.", img: visitingCard },
    { id: 19, name: "Party Cards", description: "Custom-made party invitation cards.", img: partyCard },
    { id: 20, name: "Corporate Events", description: "Invitations for corporate events.", img: corporateEvents },
    { id: 21, name: "Brochure", description: "Professional corporate brochures.", img: brochures },
  ];

  const handleWhatsAppInquiry = (item) => {
    const message = `Hello, I am interested in the corporate gifting item: ${item.name}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919705412029?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="corporate-gifting">
      <h2>Corporate Gifting Items</h2>
      <p>Browse our collection of customizable corporate gifting items. Snap a picture and contact us directly via WhatsApp for more details.</p>
      <div className="item-list">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <img src={item.img} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleWhatsAppInquiry(item)}>
              Inquire on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateGifting;