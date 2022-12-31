import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Nike1 from '../images/nike1.jpg'
import '../App.css';

function TopSelling() {
  return (
    <>
      <Container>
        <Row>
          <Card style={{ width: '25%', border: 'none'}}>
            <Card.Img className="noBorder" src={Nike1} />
            <Card.Body>
              <Card.Text>
              Nike x Timberland Browns
              </Card.Text>
              <Card.Text>
              £119.00
              </Card.Text>
            </Card.Body>
            <a href="#" className="stretched-link"></a>
          </Card>

          <Card style={{ width: '25%', border: 'none'}}>
            <Card.Img src={Nike1} />
            <Card.Body>
              <Card.Text>
              Nike x Timberland Browns
              </Card.Text>
              <Card.Text>
              £119.00
              </Card.Text>
            </Card.Body>
            <a href="#" className="stretched-link"></a>
          </Card>

          <Card style={{ width: '25%', border: 'none'}}>
            <Card.Img src={Nike1} />
            <Card.Body>
              <Card.Text>
              Nike x Timberland Browns
              </Card.Text>
              <Card.Text>
              £119.00
              </Card.Text>
            </Card.Body>
            <a href="#" className="stretched-link"></a>
          </Card>

          <Card style={{ width: '25%', border: 'none'}}>
            <Card.Img src={Nike1} />
            <Card.Body>
              <Card.Text>
              Nike x Timberland Browns
              </Card.Text>
              <Card.Text>
              £119.00
              </Card.Text>
            </Card.Body>
            <a href="#" className="stretched-link"></a>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default TopSelling;
