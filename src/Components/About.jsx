import React from 'react'

const About = () => {
  return (
    <>
        <section className="about_section layout_padding">
        <div className="container">
          <div className="custom_heading-container ">
            <h2>
              About Us
            </h2>
          </div>
          <div className="img-box">
            <img src="assets/images/about-medicine.png" alt="" />
          </div>
          <div className="detail-box">
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it
            </p>
            <div className="d-flex justify-content-center">
              <a href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About