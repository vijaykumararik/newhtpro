import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Membersdetails from './Membersdetails';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
// import { FacebookShareButton, WhatsappShareButton } from 'react-share';

const Members = () => {
  const [userData, setUserData] = useState([]);
 let navigate=useNavigate();
//  let id= useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/members');
        const { data } = response;
        setUserData(data);
        console.log(data);
        console.log(data[0].images[0].image.data);
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

//   const handleInstagramShare = (item) => {
//     const message = `Check out ${item.userName} from ${item.companyName} - ${item.businessDescription}`;
//     const encodedMessage = encodeURIComponent(message);
//     const url = `https://www.instagram.com/?caption=${encodedMessage}`;
//     window.open(url, '_blank');
//   };

  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-md-5">
          {userData.slice(0, 5).map((item) => (
            <img
              key={item._id}
              src={item.image}
              alt="Business"
              className="mb-3"
              style={{ maxWidth: '100%' }}
            />
          ))}
        </div>
        <div className=" d-flex flex-wrap">
          {/* {userData.map((item) => (
            <div className="card mb-4" key={item._id}>
              <div className="card-body">
                <h5 className="card-title">{item.userName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.companyName}</h6>
                <p className="card-text">{item.businessCategory}</p>
                <p className="card-text">{item.businessDescription}</p>
                <div className="d-flex">
                  <FacebookShareButton
                    url={window.location.href}
                    quote={`${item.userName} - ${item.businessDescription}`}
                    className="mr-3"
                  >
                    Share on Facebook
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url={window.location.href}
                    title={`${item.userName} - ${item.businessDescription}`}
                    className="mr-3"
                  >
                    Share on WhatsApp
                  </WhatsappShareButton>
                  <button
                    className="btn btn-link mr-3"
                    onClick={() => handleInstagramShare(item)}
                  >
                    Share on Instagram
                  </button>
                </div>
                <button className="btn btn-secondary">Enquiry</button>
              </div>
            </div>
          ))} */}
          
        {/* </div> */}
      {/* </div> */} 

       <div className='d-flex flex-row p-3 flex-wrap  '>
       {
            userData.map((m)=>( <div className='d-flex flex-column mx-5 border border-primary p-3 my-3 ' onClick={()=>{
             navigate(`/membersdetails/${m._id}`);
             <Navigate path />
            }} >
                <p className='my-0'>{m.images.map((image, i) => (
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
                <p className='my-0'>{m.userName}</p>
                <p className='my-0'>{m.companyName}</p>
                <p className='my-0'>{m.businessDescription}</p>
            </div> ))
          }
       </div>
    </div>
  );
};

export default Members;