import React from "react";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const CarouselItem = ({carouselItem}) => {
    return (
        <Card className={"carouselItem"}>
            <div className={"carouselItem-media"} style={{backgroundImage: "url("+carouselItem.image+")"}}></div>
            <div className={"carouselItem-content"}>
                <div className="projectName">{carouselItem.projectName}</div>
                <div className="builtWith">{ carouselItem.builtWith.map((item, key) => <Badge key={key} className={"me-1"} bg="secondary">{item}</Badge>)}</div>

                <div className="creationDate">{carouselItem.creationDate}</div>
                <br/>
                <p>{carouselItem.content}</p>
                <div className="links">
                    {
                        carouselItem.links.map((link, key) => <React.Fragment key={key}><Button className="me-1 mt-2 mt-md-0" ><a href={link.url} target="_blank" rel="noopener noreferrer">{link.linkName}</a></Button> {link.accessDetails && <span className="accessDetails">{link.accessDetails}</span>}</React.Fragment> )
                    }
                </div>
            </div>
        </Card>
    );
};

export default CarouselItem;
//