import React from 'react'
import Title from '../Globals/Title'

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us"></Title>
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form>
          {/* name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              id="name" 
              placeholder="john smith"
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              id="email" 
              placeholder="email@email.com"
            />
          </div>
          {/* description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              name="description" 
              id="description" 
              className="form-control" 
              rows="5" placeholder="Your description here..."
            />
          </div>
          {/* submit */}
          <button 
            type="submit"
            className="btn btn-yellow btn-block text-capitalize mt-5"  
          >
            submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
