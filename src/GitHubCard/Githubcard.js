import React from "react";
import Card from "react-bootstrap/Card"
import MyPicture from './MyPicture.jpeg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "20rem"}}>
                <Card.Img variant="info" src={MyPicture} />
                <Card.Body>
                    <Card.Title>My Profil Picture</Card.Title>
                    <Card.Text>
                        VincentS972. This is my GitHub username.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard