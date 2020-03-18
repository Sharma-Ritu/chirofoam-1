import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import {Jumbotron, Row} from 'reactstrap'
import SEO from '~/components/seo'
import {Link} from "gatsby"
import Cart from "../components/Cart"

const cartPage = (props) => {
  return (<> <SEO title="Cart" /> <Header/>
  <section>
    <div className="container-large">
      <Row>
        <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
          <h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">CART</h2>
        </Jumbotron>
      </Row>
    </div>
  </section>
  <Cart/>
  <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
    <div className="container-large pb-0 pb-sm-5">
      <Row>
        <p className="text-center w-100 star">
          <i className="fa fa-star star-small"></i>
          <i className="fa fa-star star-medium ml-2"></i>
          <i className="fa fa-star star-large mx-2"></i>
          <i className="fa fa-star star-medium mr-2"></i>
          <i className="fa fa-star star-small"></i>
        </p>
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>“A great quality mattress I enjoy waking up on every day…”
          <br/>
          -Mark F. from Toronto, Ontario</p>
        <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
          <Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</Link>
        </p>
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p>
      </Row>
    </div>
  </section>
  <Footer/> </>)
}
export default cartPage
