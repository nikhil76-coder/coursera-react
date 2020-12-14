import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,
    ListGroupItem
} from 'reactstrap';




   

   function  RenderDish({dish}) {
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



    const DishDetail =(props)=> {
       
       
        function RenderComments({comments}) {
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
               
           
                
            <div className="container">
                <div className="row">
                
                <RenderDish dish ={props.dish}/>
               
                <RenderComments comments={props.dish.comments} />
                
                </div>
            </div>
                   
              
              
              
               
        );
     



    }


export default DishDetail