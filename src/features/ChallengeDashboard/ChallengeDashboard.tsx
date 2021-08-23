import React from "react"
import styles from "./ChallengeDashboard.module.scss"
import { Row, Col, Card, Button } from "react-bootstrap"
import { getColOptions } from "../../utility/layout"

const ChallengeDashboard: React.FC = () => {
    return (
        <Row className={styles.challengeDashboard}>
            <Col {...getColOptions(12, 4)}>
                <Card className={styles["challengeDashboard__card"]}>
                    <Card.Body>
                        <Card.Title>Ты выполняешь</Card.Title>
                        <Card.Text>Ты пока не выполняешь никаких испытаний</Card.Text>
                        <Button variant="outline-secondary" size="sm">
                            Выбрать испытание
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col {...getColOptions(12, 4)}>
                <Card>
                    <Card.Body>
                        <Card.Title>Друзья выполняют</Card.Title>
                        <Card.Text>У тебя нет испытаний для друзей</Card.Text>
                        <Button variant="outline-secondary" size="sm">
                            Создать испытание
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default ChallengeDashboard
