import React from "react";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';


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
            </div>
        </Card>
    );
};

export default CarouselItem;
//