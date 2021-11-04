import React, { Component } from 'react'

export default class Listings extends Component {
    constructor(){
        super()
        this.state= {
            name: "Joe"
        }
    }
    render() {
        return (
            <section id="listings">
                <section className="search-area">
                    <input type="text" placeholder="search" name="search"/>
                </section>
                <section className="sortby-area">
                    <div className="results">431 Properties found</div>
                    <div className="sort-options">
                        <select name="sortby" id="sortby" className="sortby">
                            <option value="price-asc">Highest Price</option>
                            <option value="price-dsc">Lowest Price</option>
                        </select>
                   
                        <div className="view">
                            <i class="fas fa-list"></i>
                            <i class="fas fa-th-large"></i>
                        </div>
                    </div>
                </section>
                <section className="listings-results">
                    <div className="listing">
                        <div className="listing-img">
                            <div className="address">7 Lavender drive</div>
                            <div className="details">                             
                                <div class="col-md-3">
                                    <div className="user-img"></div>
                                </div>
                                <div class="col-md-9">
                                    <div className="user-details">
                                            <span className="user-name">George Groves </span>
                                            <span className="user-date">05/10/2015</span>
                                    </div>
                                    <div className="listing-details">
                                        <div className="floor-space">
                                        <i class="fas fa-vector-square"></i> <span>1000 ft&sup2;</span>
                                        </div>
                                        <div class="bedrooms">
                                            <i class="fas fa-bed"></i>
                                            <span> Bedrooms</span>
                                        </div>
                                    </div>
                                    <div className="view-btn">
                                        View Listing
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-info">

                            <span>$1200 / month</span>
                            <span><i class="fas fa-map-marker-alt"></i> Woodcrest, OH</span>
                        </div>
                    </div>
                </section>
                <section className="pagination">

                    <ul className="pagination-nums">
                        <li>Prev</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>Next</li>
                    </ul>
                </section>
            </section>
        )
    }
}
