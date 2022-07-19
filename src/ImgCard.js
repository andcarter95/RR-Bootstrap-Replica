import Card from 'react-bootstrap/Card'

export default function BodyOverlay() {
    return(
        <Card className='text-black'>
            <Card.Img src="./pastel-green-color-solid-background.png" alt='Card Image'/>
            <Card.ImgOverlay justifyContent="space-evenly">
                <Card.Title>Order groceries for delivery or pickup today</Card.Title>
                <Card.Text>Whatever you want from local stores, brought right to your door.</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}