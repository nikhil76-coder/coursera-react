import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';





function RenderDish({ dish }) {
    if (dish !== null)
        return (

            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>


        );
    else
        return (
            <div></div>
        );
}




const DishDetail = (props) => {

    function RenderComments({ comments }) {
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        return (
            <div>

                <h4>Comments</h4>
                <ul className="unstyled list-group list-group-flush">
                    {
                        comments.map((comment, index) => {
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
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {/* <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1"> */}
                    {/* <RenderComments comments={props.comments} />
                    <div className="col-12 col-md-5 m-1"></div> */}
                     <RenderDish dish={props.dish} />
                     <RenderComments comments={props.comments} />
                {/* </div> */}
            </div>
        </div>
    );


}


export default DishDetail