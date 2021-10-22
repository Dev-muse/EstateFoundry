import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <section id="filter">
                    <div class="inside">
                        <h4>filter</h4>
                        <select name="neighbourhood" className="filters neighbourhood" >
                            <option value="Cederwood">Cederwood</option>
                            <option value="Camberwell">Camberwell</option>
                            <option value="Woodcrest">Woodcrest</option>
                        </select>
                        <select name="housetype" className="filters housetype">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select name="bedrooms"  className="filters bedrooms">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <div className="filters price">
                            <span className="title">Price</span>
                            <input type="text" name="min-price" placeholder="min" className="min-price"/>
                            <input type="text" name="max-price" placeholder="max" className="max-price"/>
                        </div>
                        <div className="filters floor-space">
                            <span className="title">Floor Space</span>
                            <input type="text" name="min-floor-space" placeholder="min"  className="min-floor-space"/>
                            <input type="text" name="max-floor-space" placeholder="max" className="max-floor-space"/>
                        </div>
                        <div className="filters extras">
                            <span className="title">Extras</span>
                            <label htmlFor="extras">
                                <span>Elevators</span>
                                <input name="extras" value="elevator" type="checkbox" />
                            </label>
                            <label htmlFor="extras">
                                <span>Swimming pool</span>
                                <input name="extras" value="swimming-pool" type="checkbox" />
                            </label>
                            <label htmlFor="extras">
                                <span>Finished basement</span>
                                <input name="extras" value="finished basement" type="checkbox" />
                            </label>
                            <label htmlFor="extras">
                                <span>Gym</span>
                                <input name="extras" value="gym" type="checkbox" />
                            </label>
                        </div>
                    </div>
            </section>


        )
    }
}
