import React,{useState} from 'react'
import Headings  from './container/heading.jsx';
import './Contactg.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    type: 'Say Hi', // Default type
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://sheetdb.io/api/v1/r0r71wvf9ldu1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData]),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        // Add any success handling here
      } else {
        console.error('Failed to send data');
        // Add any error handling here
      }
    } catch (error) {
      console.error('Error:', error);
      // Add any error handling here
    }
  };

  return (
    <div className="section-padding">
      <Headings title="Contact Us" text="Connect with Us: Let's Discuss Your Web Development Needs" />

      <div className="contact" id="quote">
        <div className="row">
          <div className="col-md-6 col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="inlineRadio1"
                  value="Say Hi"
                  checked={formData.type === 'Say Hi'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Say Hi
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="inlineRadio2"
                  value="Get a Quote"
                  checked={formData.type === 'Get a Quote'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Get a Quote
                </label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message*</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-positivus w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
