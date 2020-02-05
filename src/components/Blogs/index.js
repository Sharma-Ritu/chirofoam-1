import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Col, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import StoreContext from '~/context/StoreContext'
import blogs1 from "~/assets/img/blogs5.jpg"

const Blogs = ({ id }) => {
  const { allShopifyArticle } = useStaticQuery(
    graphql`
      {
        allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 10, skip: 0) {
          edges {
            node {
              id
              title
              excerpt
              url
              publishedAt(formatString: "MMM DD, YYYY")
              image {
                src
              }
              author {
                name
              }
              blog {
                title
              }
            }
          }
          pageInfo {
            perPage
            pageCount
            itemCount
            hasPreviousPage
            hasNextPage
            currentPage
          }
          totalCount
        }
      }
    `
  )

  return (
          <Col sm="8" className="align-middle">
            {allShopifyArticle.edges
            ? allShopifyArticle.edges.map(({node: { id, url, title, content, excerpt, publishedAt, image, author, blog}}, index) => (
            <div className="blogs-section mb-4" key={id}>
              <div className="featured-image position-relative overflow-hidden">
                <Link to={`/article/${id}/`} state={{ fromFeed: true }}>
                  <img src={image.src} className="img-fluid" alt="Blog" style={{transition:'all 0.15s ease-in-out'}}/>
                  <div className="card-layer">
                    <div className="img-icon position-absolute" style={{top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                      <i className="fa fa-image" style={{fontSize:'50px', color:'#fff'}}></i>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="blogs-content d-flex mt-4">
                <Col sm="1" className="blog-icon text-center border-right pr-0 d-table">
                  <p style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-share-alt"></i><span className="d-block">2</span></p>
                  <p className="border-top border-bottom py-2" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-envelope"></i><span className="d-block">2</span></p>
                  <p className="mb-0" style={{color:'rgba(0,0,0,0.4)'}}><i className="fa fa-heart"></i><span className="d-block">2</span></p>
                </Col>
                <Col sm="11" className="pl-4">
                  <p style={{fontSize:'12px'}}>By <span>{author.name}</span> In <span>{blog.title}</span> Posted <span> {publishedAt}</span></p>
                  <h3 className="mb-3"><Link to={`/article/${id}/`} state={{ fromFeed: true }} className="text-uppercase erbaum space-1" style={{color:'#000', fontSize:'24px'}}>{title}</Link></h3>
                  <p className="filson-pro-reg" style={{fontSize:'14px'}}>{excerpt}</p>
                  <p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
                    <Link to={`/article/${id}/`} state={{ fromFeed: true }} className="btn-cta color-primary erbaum-bold space-1">READ MORE</Link>
                  </p>
                </Col>
              </div>
            </div>
             ))
        : <p>No Products found!</p>}
            {allShopifyArticle.pageInfo.hasNextPage &&
              <Pagination aria-label="Page navigation">
                <PaginationItem disabled={props.pageInfo.hasPreviousPage}>
                  <PaginationLink first href="javascript:void(0);" />
                </PaginationItem>
                <PaginationItem disabled={props.pageInfo.hasPreviousPage}>
                  <PaginationLink previous href="javascript:void(0);" />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="javascript:void(0);">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="javascript:void(0);">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next href="javascript:void(0);" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink last href="javascript:void(0);" />
                </PaginationItem>
              </Pagination>
            }
          </Col>
  )
}

export default Blogs
