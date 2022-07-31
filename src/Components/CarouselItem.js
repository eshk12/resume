import React from "react";
import Card from "react-bootstrap/Card";

const CarouselItem = () => {
    return (
        <Card className={"carouselItem"}>
            <div className={"carouselItem-media"} style={{backgroundImage: "url(https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"}}></div>
            <div className={"carouselItem-content"}>
                <div className="projectName">StudentTracker</div>
                <div className="builtWith">Technologies: React, Java, Spring boot, Hibernate, mySQL</div>
                <div className="creationDate">23-JUL-2020</div>

                <br />
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            </div>
        </Card>
    );
};

export default CarouselItem;
