import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Row,Col} from 'react-bootstrap';

const SubSectionCard=(props)=>{
    const cardStyle={
        width:"12rem", 
        height:"7rem",
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        margin:'7px',
        backgroundImage:`url("https://us.123rf.com/450wm/tuk69tuk/tuk69tuk1909/tuk69tuk190900053/129969568-blue-gradient-defocused-abstract-photo-smooth-lines-pantone-color-background.jpg?ver=6")`
    }
    const linkStyle={
        color:'white',
        fontWeight:'bolder',
        textDecoration:'none'
    }
    return(
    <Row>
        {props.subSections.map((subSection, i)=>{
                return(
                    <Col lg={2} md={4} sm={6}>
                        <Card style={cardStyle}  key={subSection.id}>
                            <Link to={`/${props.section}/${subSection.name}`} style={linkStyle}>
                                {subSection.name}
                            </Link>
                        </Card>
                    </Col>
                )
            })}

    </Row>    
    )
}

export default SubSectionCard;