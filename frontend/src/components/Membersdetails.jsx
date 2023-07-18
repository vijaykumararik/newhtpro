import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { FacebookShareButton, WhatsappShareButton } from 'react-share';


function Membersdetails() {
  let [userData,setUserData]=useState(null)
  let {id}=  useParams()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/members/${id}`);
            const { data } = response;
            setUserData(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
      const convertToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      };
      const handleInstagramShare = (item) => {
            const message = `Check out ${item.userName} from ${item.companyName} - ${item.businessDescription}`;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://www.instagram.com/?caption=${encodedMessage}`;
            window.open(url, '_blank');
          };
  return (
    <div>
      {
        userData && <div>
        <p className='my-0'>{userData.images.map((image, i) => (
                        <img
                          key={i}
                          className="ms-3 mb-3"
                          height="200px"
                          width="200px"
                          src={`data:image/jpeg;base64,${convertToBase64(image.image.data)}`}
                          alt=""
                        />
                      ))}
                   </p>
                  <p className='my-0'>{userData.userName}</p>
                  <p className='my-0'>{userData.companyName}</p>
                  <p className='my-0'>{userData.businessDescription}</p>
                  <p className="card-text">{userData.businessCategory}</p>
                <p className="card-text">{userData.businessDescription}</p>
                <div className="d-flex">
                  <FacebookShareButton
                    url={window.location.href}
                    quote={`${userData.userName} - ${userData.businessDescription}`}
                    className="mr-3"
                  >
                    Share on Facebook
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url={window.location.href}
                    title={`${userData.userName} - ${userData.businessDescription}`}
                    className="mr-3"
                  >
                    Share on WhatsApp
                  </WhatsappShareButton>
                  <button
                    className="btn btn-primary text-white mr-3"
                    onClick={() => handleInstagramShare(userData)}
                  >
                    Share on Instagram
                  </button> 
                  </div>
                 <div>
                 <button className="btn btn-secondary">Enquiry</button>  
                 </div>
                 <div>
                 <button className='btn btn-secondary '><Link className='text-light text-decoration-none' to="/members">Back to members</Link></button>

                 </div>
                  

                
        </div>}
      </div>
  )
}

export default Membersdetails




