import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);




class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
            <div>
           <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                         <label htmlFor="rating">Rating</label>
                                <Control.select className="browser-default custom-select" model="rating" id="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>
                    <Row className="form-group">
                        <Label htmlFor="name" >Your Name</Label>
                             <Control.text model=".name" id="name" name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />

                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" >Comment</Label>

                                <Control.textarea model=".comment" id="comment" name="message"
                                    rows="6"
                                    className="form-control" />

                            </Row>



                            <Button type="submit" value="submit" color="primary">Submit</Button>

                        </LocalForm>


                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderDish({ dish }) {
    if (dish !== null)
        return (
            
         
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>


        );
    else
        return (
            <div></div>
        );
}




const DishDetail = (props) => {

   
   
    function RenderComments({ comments, postComment, dishId }) {
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        return (
            
            <div>

                <h4>Comments</h4>
                <ul className="unstyled list-group list-group-flush">
                <Stagger in>
                    {
                        
                        comments.map((comment, index) => {
                            return (
                                <Fade in>
                                <li key={index} className="list-group-item">
                                    {comment.comment}
                                    <br />
                                        -- {comment.author} ,  {new Date(comment.date).toLocaleDateString("en-US", options)}
                                </li>
                                </Fade>
                            )
                        })

                         

                    }
                   </Stagger>
                      
                   
                </ul>
                <br  />
                <br />
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );

    };

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 

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
                <RenderComments comments={props.comments}
                  postComment={props.postComment}
                            
                    dishId={props.dish.id}
                />

                {/* </div> */}
            </div>
        </div>
    );


}


export default DishDetail