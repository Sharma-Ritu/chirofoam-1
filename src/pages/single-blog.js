import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import {Row, Col} from 'reactstrap'
import { graphql } from 'gatsby'
import blogs1 from "../assets/img/blogs5.jpg"
import girl from "../assets/img/girl.jpg"
import RecentPosts from "../components/Blogs/RecentPostsFooter"

export default ({data}) => {
  return (
	<>
		<Header />
		<section className="single-blog py-5">
	  	</section>
		<section className="single-blog py-5" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
			<div className="container-large">
				<h3 className="text-uppercase filson-pro-reg m-0" style={{fontSize:'22px'}}>{data.title}</h3>
			</div>
		</section>

		<section className="mb-0 py-5 position-relative">
			<div className="container-large">
				<Row>
					<Col sm="12" className="align-middle">

						<div className="featured-image position-relative overflow-hidden">
							<img src={blogs1} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out', width:'100%'}}/>
						</div>
						<h2 className="mb-3 color-primary text-uppercase erbaum-bold pt-4 space-1">4 12Benefits of Juicing and How it Helps Improve Sleep</h2>
						<Row>
							<Col sm="6">
								<p style={{fontSize:'12px'}}>By <span>Chirofoam</span> In <span>Sleep</span> Posted <span>June 15, 2019</span></p>
							</Col>
							<Col sm="6" className="text-right" style={{display:'ruby'}}>
								<div className="addthis_inline_share_toolbox"></div>
								<p style={{color:'rgba(0,0,0,0.4)'}} className="ml-4"><i className="fa fa-share-alt"></i><span className="pl-2">2</span></p>
								<p className="px-2 ml-4" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-envelope"></i><span className="pl-2">2</span></p>
								<p className="mb-0 ml-4" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-heart"></i><span className="pl-2">2</span></p>
							</Col>
						</Row>
						<Row className="mt-3">
							<Col sm="9">
								<p className="filson-pro-reg" style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}>
									Sleep; the blissful seven to eight hours we spend every night resting cut off from the world sets the tone for the next day. A good rest is a must for having a productive day as sleep helps you rejuvenate and heal. In the previous blog, we talked about the benefits of sleep tracking devices and how our scientifically designed mattress helps you sleep better. Our mattresses are designed especially to increase comfort while providing the support you need so you don’t have to count sheep. While our mattresses help enhance your sleep, this is not a sure shot solution to your insomnia.
								</p>
								<p className="filson-pro-reg" style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}>
									Food is an integral part of a healthy lifestyle and in order to eliminate sleep problems, it is important to improve food habits. A well balanced nutritious diet, rich in proteins, vitamins, minerals, and natural fiber, will help you stay physically fit and improve your sleep.
								</p>
								<p className="filson-pro-reg" style={{color:'rgba(0,0,0,0.5)', fontSize:'13px', lineHeight:'30px'}}>
									One of the best ways to include proteins, vitamins, and minerals in your diet is consuming fresh fruit and vegetable juices. Unlike canned juices, fresh fruit juices are loaded with essential vitamins and minerals that should be included in your diet.
								</p>
							</Col>
							<Col sm="3">
								<img src={girl} alt="" className="img-fluid" />
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</section>
		<section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
			<div className="container-large pb-0 pb-sm-5">
				<h3 className="text-center mb-4" style={{fontSize:'18px'}}>RECENT POSTS</h3>
				<RecentPosts />
			</div>
		</section>

		<Footer />
	</>
  );
};

export const query = graphql`
  {
    shopifyArticle(id: {eq: ""}) {
      id
      title
      image {
        src
      }
      publishedAt
      content
    }
  }
`
