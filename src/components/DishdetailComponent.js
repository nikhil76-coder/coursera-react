import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,
    ListGroupItem
} from 'reactstrap';




class DishDetail extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         selectedDish: null
    //     }
    // }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }

    renderDish(dish) {
        if (dish !== null)
            return (
              
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>

                    </CardBody>
                </Card>
                </div>

              
            );
        else
            return (
                <div></div>
            );
    }



    render() {
        const dishDetail = (comments) => {
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            return (
                <div>
                   
                    <h4>Comments</h4>
                    <ul className="unstyled list-group list-group-flush">
                        {
                            comments.map((comment , index) => {
                                return (
                                    <li key={index} className="list-group-item">
                                        {comment.comment}
                                        <br />
                                        -- {comment.author} ,  {new Date(comment.date).toLocaleDateString("en-US", options)}
                                    </li>
                                )
                            })

                        }
                    </ul>
                    
                </div>
            );

        };

        return (
               
            // <div className="col-6 col-md-5 m-1">
            //     {this.renderDish(this.props.dish)}  {dishDetail(this.props.dish.comments)}
              
            //      </div>
            //      <div>
                
            <div className="container">
                <div className="row">
                
                {this.renderDish(this.props.dish)}
               
                {dishDetail(this.props.dish.comments)}
                
                </div>
                </div>
                   
              
              
              
               
        );
     



    }

}
export default DishDetail