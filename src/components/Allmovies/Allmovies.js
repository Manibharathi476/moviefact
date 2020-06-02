import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import IndexHeader from 'components/Headers/IndexHeader';
import DemoFooter from 'components/Footers/DemoFooter';
import { Button } from 'reactstrap';

class Allmovies extends Component {
    constructor() {
        super();
    }


    render() {
        return(
            <Fragment>
                <IndexNavbar/>
                <IndexHeader/>
                <NavLink to="/popular"><Button className="btn-round mr-1" color="info" outline>Popular Movies</Button></NavLink>
                <NavLink to="/top"><Button className="btn-round mr-1" color="danger" outline>Top Rated</Button></NavLink>
                <Button className="btn-round mr-1" color="success" outline>Action</Button>
                <Button className="btn-round mr-1" color="warning" outline>Comedy</Button>
                <Button className="btn-round mr-1" color="default" outline>Romance</Button>
                <DemoFooter/>

            </Fragment>

        )
    }
}

export default Allmovies;