import React from "react";
import Card from "react-bootstrap/Card"
import MyPicture from './MyPicture.jpeg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "20rem"}}>
                <Card.Img variant="info" src={MyPicture} />
                <Card.Body>
                    <Card.Title>VincentS972</Card.Title>
                    <Card.Text>
                         This is my GitHub username and picture.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard