import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

function Info({link, buttonText}) {
    return (
        <section className="py-5">
            <div className="container">
							<Title title="our story"></Title>
	            <div className="row">
                  <div className="col-10 col-sm-8 mx-auto text-center">
                      <p className="lead text-muted mb-5">
												Lorem ipsum dolor sit amet consectetur adipisicingelit. Expedita vitae laborum, eaque quaerat delectusvoluptatibus dicta nisi officiis iure, adipisciaccusantium. Soluta, a! Quae nesciunt quis,praesentium aliquid aliquam repellat non veniambeatae, iusto omnis fugit animi necessitatibusofficia recusandae, odit nam! Laboriosam repellendusamet soluta molestiae totam modi ea!
                      </p>
											<Link to={link}>
												<button className="btn text-uppercase btn-yellow">
													{buttonText}
												</button>
											</Link>
                  </div>
              </div>
            </div>
        </section>
    )
}

export default Info
