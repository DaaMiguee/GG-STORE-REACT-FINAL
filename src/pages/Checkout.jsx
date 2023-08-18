import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { PaymentSuccess } from "../components/PaymentSuccess/PaymentSuccess";
import { Ring } from "@uiball/loaders";

const styles = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    h1: {
        fontSize:"2rem",
        textAlign: "center",
        fontWeight:"500",
        margin: "10px",
    },
    label: {
        fontSize: "0.9rem",
        fontWeight:"500",
    },
    input: {
        width: "100%",
    },
    div: {
        width: "330px",
        marginBottom: "10px",
    },
    paymentButton: {
        borderRadius: "12px",
        marginTop: "20px",
        fontSize: "1rem",
        backgroundColor:"#0b2739",
        padding:"10px 15px",
        fontWeight:"bold",
        border:"none",
        width:"207px",
    },
};

// Para pruebas pueden usar:
//Tarjeta: 4509953566233704
//Fecha de vencimiento: 11/25
//Codigo de seguridad: 123
//Estos son datos de prueba que brinda mercado pago para desarrolladores
//Mas info: https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/additional-content/test-cards

export const Checkout = () => {
    const [loading, setLoading] = React.useState(false);
    const [paymentSuccess, setPaymentSuccess] = React.useState(false);
    const [paymentId, setPaymentId] = React.useState("");

    const { count } = React.useContext(CartContext);
    const navigate = useNavigate();

    const location = useLocation();
    const total = location.state;
    const handleSubmit = (e) => {
        e.preventDefault();
        //Para ver los datos ingresados
        const name = e.target.name.value;
        const cardNumber = e.target.cardNumber.value;
        const expirationDate = e.target.expirationDate.value;
        const cvc = e.target.cvc.value;

        // Aquí puedes manejar el envío del formulario, como validar y procesar los datos
        console.log("Nombre en la tarjeta:", name);
        console.log("Número de tarjeta:", cardNumber);
        console.log("Fecha de vencimiento:", expirationDate);
        console.log("Código de seguridad (CVC):", cvc);
        console.log("Total a pagar:", total);

        setLoading(true);
        // Ojo en producción, no se suelen guardar datos de tarjetas y demás. Solo el metodo de pago (si fue tarjeta, efectivo, etc) y datos de compra en si
        // por ejemplo el id de los productos y cantidad. Además se suele guardar el estado de la transaccion, por ejemplo si fue aprobada o rechazada por la entidad.
        // puede ser mercadopago, visa, etc... Esto lo pueden ver en las APIs de cada entidad que quieran integrar

        const newProduct = {
            nombre: name,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            cvc: cvc,
            total: total,
            products: count, //Ids y cantidades
            status: "Aprobada", //Deberán modificar según corresponda
        };
        const db = getFirestore();
        const productCollection = collection(db, "sales");
        addDoc(productCollection, newProduct)
            .then(({ id }) => {
                setPaymentSuccess(true);
                setPaymentId(id);
            })
            .catch((err) => console.log(err))
            .then(() => setLoading(false));

        setTimeout(() => {
            navigate("/store");
        }, 3000);
    };
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 style={styles.h1}>Finalizar compra</h1>
                    <Form onSubmit={handleSubmit} className="form">
                        <Form.Group style={styles.div} controlId="name">
                            <Form.Label style={styles.label}>Nombre y Apellido como figura en la tarjeta</Form.Label>
                            <Form.Control
                                style={styles.input}
                                type="text"
                                required
                            />
                        </Form.Group>

                        <Form.Group style={styles.div} controlId="cardNumber">
                            <Form.Label style={styles.label}>Número de tarjeta</Form.Label>
                            <Form.Control
                                style={styles.input}
                                type="text"
                                pattern="[0-9]{16}"
                                required
                            />
                        </Form.Group>

                        <Form.Group style={styles.div} controlId="expirationDate">
                            <Form.Label style={styles.label}>Fecha de Vencimiento</Form.Label>
                            <Form.Control 
                                style={styles.input}
                                type="month" 
                                required />
                        </Form.Group>

                        <Form.Group style={styles.div} controlId="cvc">
                            <Form.Label style={styles.label}>Código de seguridad (CVC)</Form.Label>
                            <Form.Control
                                style={styles.input}
                                type="text"
                                pattern="[0-9]{3}"
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            style={styles.paymentButton}
                            className="button-form"
                        >
                            {loading ? (
                                <Ring size={20} lineWeight={5} speed={2} color="black" />
                            ) : (
                                `Pagar $${total.toLocaleString('es-AR')}`
                            )}
                        </Button>
                    </Form>
                </Col>
            </Row>
            {paymentSuccess && <PaymentSuccess paymentId={paymentId} />}
        </Container>
    );
};
