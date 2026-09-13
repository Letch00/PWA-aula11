import { Row, Col, Container } from "reactstrap";
import LoginForm from "../LoginForm";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <Container>
      <Row className={styles.row}>
        <Col className={styles.col}>
          <LoginForm title="Admin" role="admin" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
