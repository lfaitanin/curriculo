import React from 'react'

const Site = props =>{
return (
  <div>
  <nav className='navbar navbar-default navbar-fixed-top'>
  <div className='container'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>                        
      </button>
      <a className='navbar-brand' href='#myPage'>Logo</a>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='#about'>SKILLS</a></li>
        <li><a href='#portfolio'>PORTFOLIO</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className='jumbotron text-center'>
  <h1>CV digital</h1> 
</div>

{/* Container (About Section) */}
<div id='about' className='container-fluid'>
  <div className='row'>
    <div className='col-sm-8'>
      <h2>Sobre mim</h2><br/>
      <h4>Programador apaixonado e entusiasta;</h4><br/>

      <br/><button className='btn btn-default btn-lg'>Get in Touch</button>
    </div>
    <div className='col-sm-4'>
      <img src="/download.png"></img>
      </div>
  </div>
</div>

<div className='container-fluid bg-grey'>
  <div className='row'>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-globe logo '></span>
    </div>
    <div className='col-sm-8'>
      <h2>Our Values</h2><br/>
      <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
      <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

{/* Container (Portfolio Section) */}
<div id='portfolio' className='container-fluid text-center bg-grey'>
  <h2>Portfolio</h2><br/>
  <h4>What we have created</h4>
  <div className='row text-center '>
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src='paris.jpg' alt='Paris' width='400' height='300' required/>
        <p><strong>Paris</strong></p>
        <p>Yes, we built Paris</p>
      </div>
    </div>
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src='newyork.jpg' alt='New York' width='400' height='300' required/>
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src='sanfran.jpg' alt='San Francisco' width='400' height='300' required/>
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
  </div><br/>
  
  <h2>What our customers say</h2>
  <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
    {/* Indicators */}
    <ol className='carousel-indicators'>
      <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
      <li data-target='#myCarousel' data-slide-to='1'></li>
      <li data-target='#myCarousel' data-slide-to='2'></li>
    </ol>

    {/* Wrapper for slides */}
    <div className='carousel-inner' role='listbox'>
      <div className='item active'>
        <h4>'This company is the best. I am so happy with the result!'<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
      </div>
      <div className='item'>
        <h4>'One word... WOW!!'<br/><span>John Doe, Salesman, Rep Inc</span></h4>
      </div>
      <div className='item'>
        <h4>'Could I... BE any more happy with this company?'<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
      </div>
    </div>

    {/* Left and right controls */}
    <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
      <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
      <span className='sr-only'>Previous</span>
    </a>
    <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
      <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
      <span className='sr-only'>Next</span>
    </a>
  </div>
</div>

{/* Container (Contact Section) */}
<div id='contact' className='container-fluid bg-grey'>
  <h2 className='text-center'>CONTACT</h2>
  <div className='row'>
    <div className='col-sm-5'>
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span className='glyphicon glyphicon-map-marker'></span> Chicago, US</p>
      <p><span className='glyphicon glyphicon-phone'></span> +00 1515151515</p>
      <p><span className='glyphicon glyphicon-envelope'></span> myemail@something.com</p>
    </div>
    <div className='col-sm-7 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='name' name='name' placeholder='Name' type='text' required/>
        </div>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='email' name='email' placeholder='Email' type='email' required/>
        </div>
      </div>
      <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5'></textarea><br/>
      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit'>Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    
    )
}

export default Site