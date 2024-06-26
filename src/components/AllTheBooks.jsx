import { Button, Card, Container } from "react-bootstrap"
import fantasy from "../data/fantasy.json"


const AllTheBooks = () => (
    <Container fluid>

        <Container className="d-flex flex-wrap justify-content-center">
            {fantasy.map(book => {
                return (
                    <Card key={book.asin} className="m-2" style={{ width: '300px', height: '400px' }}>
                        <Card.Img variant="top" src={book.img} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                <strong>{'Prezzo: ' + book.price + '€'}</strong>
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </Container>








    </Container>
)

export default AllTheBooks