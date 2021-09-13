import { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        names:'',
        email:'',
        mobile:'',
        address:'',
        message:''
    });
    const inputEvent = (event)=>{
        const {name, value} = event.target;
        
        setData((prevData)=>{
            return{
                ...prevData,
                [name]: value,
                
            }
        });
    }
    const formSubmit= (e)=>{
        e.preventDefault();
        alert(`name is ${data.names}, and email is ${data.email} and phone is ${data.mobile}, and message is ${data.message}`)
    }
  return (
    <>
      <div className="text-center my-5">
        <h1>This is contact page. </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="names"
                  value={data.names}
                  onChange={inputEvent}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  required
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="mobile" className="form-label">
                  Mobile:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  onChange={inputEvent}
                  value={data.mobile}
                  required
                  placeholder="9847535604"
                />
              </div>
              <div className="mb-3">
                <label for="address" class="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  onChange={inputEvent}
                  value={data.address}
                  name="address"
                  required
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  value={data.message}
                  name="message"
                  onChange={inputEvent}
                  required
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
