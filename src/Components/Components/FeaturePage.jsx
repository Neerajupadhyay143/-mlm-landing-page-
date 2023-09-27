import React from 'react'

function FeaturePage() {
  return (
    <>
      <section className="who_are_section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 who_we_img_col wow slideInLeft animated" style={{ visibility: 'visible' }}>
              <img style={{ maxWidth: '50%', borderRadius: '100%' }} className="img-fluid" src="../images/OkDreamer25.jpg" alt />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 who_we_content_col mt-5 wow slideInRight  animated" style={{ visibility: 'visible' }}>
              <h5 className>Who We are</h5>
              <h1 className>The World’s <span className="color_span"> Believe Trading</span> Platform That Offers Rewards</h1>
              <p className="para" style={{ marginBottom: 61 }}>The World’s 1st Trading Platform with Rewards, designed to facilitate seamless token trading, making it easier for investors to buy and sell their tokens.</p>
              <a className="btns header_btn_hover" target="_blank" href="https://hammertradex.com/signup">New Registration <i className="fa fa-angle-right" /></a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FeaturePage;