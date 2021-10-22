import { Container } from "react-bootstrap";
import badsearch from '../../images/badsearch.png'

const ErrorSearch = ({}) => {
    return (
        <Container>
            <div className='d-flex justify-content-center  m-5'>
                <h2>Данного товара не существует,попробуйте другой запрос</h2>
                {/* <img style={{width: '25%'}} src={badsearch}/> */}
            </div>
        </Container>
    )
}

export default ErrorSearch