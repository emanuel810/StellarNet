import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ServiciosCarta";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

export const Projects = () => {

  const llamadas = [
    {
      title: "Llamadas Internacionales Ilimitadas",
      description: "Saber mas...",
      imgUrl: projImg1,
    },
    {
      title: "Llamadas Nacionales sin Límites",
      description: "Saber mas...",
      imgUrl: projImg1,
    },
    {
      title: "Conecta Global: Habla sin Fronteras",
      description: "Saber mas...",
      imgUrl: projImg1,
    },
    {
      title: "Conecta Global: Habla sin Fronteras",
      description: "Saber mas...",
      imgUrl: projImg1,
    },
    {
      title: "Conecta Global: Habla sin Fronteras",
      description: "Saber mas...",
      imgUrl: projImg1,
    },
    {
      title: "Tarifas Especiales para Llamadas Internacionales",
      description: "Saber mas...",
      imgUrl: projImg1,
    },
  ];

  const mensajes = [
    {
      title: "Mensajes de Texto Ilimitados",
      description: "Saber mas...",
      imgUrl: projImg3,
    },
    {
      title: "Envía Mensajes a Todo el Mundo",
      description: "Saber mas...",
      imgUrl: projImg3,
    },
    {
      title: "Mensajes de Texto Globales Sin Restricciones",
      description: "Saber mas...",
      imgUrl: projImg3,
    },
    {
      title: "Paquetes de Mensajes Personalizados",
      description: "Saber mas...",
      imgUrl: projImg3,
    },
    {
      title: "Texto Libre: Mensajes Sin Límites",
      description: "Saber mas...",
      imgUrl: projImg3,
    },
    {
      title: "Mensajería Sin Fronteras: Comunica a tu Manera",
      description: "Saber mas...",
      imgUrl: projImg3,
    },
  ];


  const internet = [
    {
      title: "Internet de Alta Velocidad",
      description: "Saber mas...",
      imgUrl: projImg2,
    },
    {
      title: "Conexión Rápida y Confiable",
      description: "Saber mas...",
      imgUrl: projImg2,
    },
    {
      title: "Navegación Sin Interrupciones",
      description: "Saber mas...",
      imgUrl: projImg2,
    },
    {
      title: "Internet Ultra Veloz para tu Hogar",
      description: "Saber mas...",
      imgUrl: projImg2,
    },
    {
      title: "Explora la Web a Velocidades Imparables",
      description: "Saber mas...",
      imgUrl: projImg2,
    },
    {
      title: "Conéctate con la Mejor Red",
      description: "Saber mas...",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Servicios</h2>
            <p>StellarNet ofrece una amplia gama de servicios de comunicación, incluyendo llamadas nacionales e internacionales de alta calidad, mensajes de texto ilimitados y una conexión de internet rápida y estable. Con nuestra plataforma integral, los clientes disfrutan de una experiencia de comunicación completa y sin limitaciones, adaptada a sus necesidades cotidianas.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Llamadas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mensajes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Internet</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      llamadas.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {
                      mensajes.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {
                      internet.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
