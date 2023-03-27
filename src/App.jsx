import {
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Box,
  SimpleGrid,
  Input,
  Button,
  Textarea,
  Img,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./App.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
// /////////////////////////////////////////// //
import foto from "./assets/image.png";
import nombre from "./assets/image2.png";
import about from "./assets/image3.png";
import Fondovioleta from "./assets/image4.png";
import footer from "./assets/image5.png";
import fot1 from "./assets/fot1.png";
import fot2 from "./assets/fot2.png";
import fot3 from "./assets/fot3.png";
import fot4 from "./assets/fot 4.png";
import proy1 from "./assets/proy1.jpg";
import proy2 from "./assets/proy2.png";
import proy3 from "./assets/proy3.png";
import proy4 from "./assets/proy4.png";
import Te1 from "./assets/Te1.png";
import Te2 from "./assets/Te2.png";
import Te3 from "./assets/Te3.png";
import Te4 from "./assets/Te4.png";
import Te5 from "./assets/Te5.png";
import Te6 from "./assets/Te6.png";
import Te7 from "./assets/Te7.png";
import Te8 from "./assets/Te8.png";
import Te9 from "./assets/Te9.png";
import Te10 from "./assets/Te10.png";
import Te11 from "./assets/Te11.png";
import Te12 from "./assets/Te12.png";
import Te13 from "./assets/Te13.png";
import Te14 from "./assets/Te14.png";
import Te15 from "./assets/Te15.png";
import Te16 from "./assets/Te16.png";
import Te17 from "./assets/Te17.png";
import Te18 from "./assets/Te18.png";

import Exp1 from "./assets/exp1.jpg";
import Exp2 from "./assets/exp2.png";
import Exp3 from "./assets/exp3.jpg";
import cert1 from "./assets/Cert1.png";
import cert2 from "./assets/Cert2.png";
import cert3 from "./assets/Cert3.png";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 160) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Objeto con propiedades de efecto scroll
  var propScroll = {
    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName("scroll-suave"),
    volver_arriba: document.getElementsByClassName("volver-arriba"),
    destino: null,
    seccion_distancia: null,
    intervalo: null,
  };

  // Objeto con métodos de efecto scroll
  var metScroll = {
    inicio: function () {
      for (var i = 0; i < propScroll.scroll_suave.length; i++) {
        propScroll.scroll_suave[i].addEventListener("click", metScroll.moverse);
      }

      for (var i = 0; i < propScroll.volver_arriba.length; i++) {
        propScroll.volver_arriba[i].addEventListener("click", metScroll.subir);
      }
    },

    moverse: function (e) {
      e.preventDefault();
      clearInterval(propScroll.intervalo);
      propScroll.destino = this.getAttribute("href");
      propScroll.seccion_distancia =
        document.querySelector(propScroll.destino).offsetTop - 94;

      propScroll.posicion = window.pageYOffset;
      propScroll.intervalo = setInterval(function () {
        if (propScroll.posicion < propScroll.seccion_distancia) {
          propScroll.posicion += 30;

          if (propScroll.posicion >= propScroll.seccion_distancia) {
            clearInterval(propScroll.intervalo);
          }
        } else {
          propScroll.posicion -= 30;

          if (propScroll.posicion <= propScroll.seccion_distancia) {
            clearInterval(propScroll.intervalo);
          }
        }

        window.scrollTo(0, propScroll.posicion);
      }, 15);
    },

    subir: function (e) {
      e.preventDefault();
      clearInterval(propScroll.intervalo);
      propScroll.posicion = window.pageYOffset;
      propScroll.intervalo = setInterval(function () {
        if (propScroll.posicion > 0) {
          propScroll.posicion -= 30;

          if (propScroll.posicion <= 0) {
            clearInterval(propScroll.intervalo);
          }
        } else {
          return;
        }

        window.scrollTo(0, propScroll.posicion);
      }, 15);
    },
  };

  metScroll.inicio();

  return (
    // FONDO
    <VStack style={{ height: "5120px" }}>
      <HStack
        pt="40px"
        pb="20px"
        top={0}
        w="100%"
        justifyContent="center"
        gap="100px"
        id="nav"
        className={isScrolled ? "scrolled" : ""}
        zIndex="10"
        position="fixed"
      >
        <a id="link" className="volver-arriba" href="#">
          Abel Moreno
        </a>
        <a id="link" className="scroll-suave" href="#sec2">
          PROYECTOS
        </a>
        <a id="link" className="scroll-suave" href="#sec3">
          SKILLS
        </a>
        <a id="link" className="scroll-suave" href="#sec4">
          EXPERIENCIA
        </a>
        <a id="link" className="scroll-suave" href="#sec5">
          CONTACTO
        </a>
      </HStack>
      <Box w="100%">
        <Image
          top={0}
          src={foto}
          alt="My Image"
          height="600px"
          width="100%"
          position="absolute"
          zIndex="-2"
          objectFit="cover"
        />

        <Image
          top="1045px"
          src={Fondovioleta}
          alt="My Image"
          height="1030px"
          width="100%"
          position="absolute"
          zIndex="-2"
          objectFit="cover"
        />
        <Heading
          id="sec2"
          top="1140px"
          width="100%"
          position="absolute"
          zIndex="-3"
        ></Heading>
        <Heading
          id="sec3"
          top="2180px"
          width="100%"
          position="absolute"
          zIndex="-3"
        ></Heading>
        <Heading
          id="sec4"
          top="3200px"
          width="100%"
          position="absolute"
          zIndex="-3"
        ></Heading>
        <Heading
          id="sec5"
          top="4250px"
          width="100%"
          position="absolute"
          zIndex="-3"
        ></Heading>
        <Image
          top="3110px"
          src={Fondovioleta}
          alt="My Image"
          height="1030px"
          width="100%"
          position="absolute"
          zIndex="-2"
          objectFit="cover"
        />
        <Image
          top="3530px"
          src={Fondovioleta}
          alt="My Image"
          height="1030px"
          width="100%"
          position="absolute"
          zIndex="-2"
          objectFit="cover"
        />
        <Image
          top="5020px"
          src={footer}
          alt="My Image"
          height="150px"
          width="100%"
          position="absolute"
          zIndex="-2"
          objectFit="cover"
        />
      </Box>

      {/* FRENTE */}
      <VStack id="section-1" zIndex="1" h="1024px" w="1000px">
        <Image src={nombre} w="488px" h="192px" mt="204px" mb="80px"></Image>
        <Image src={about} w="237px" h="237px"></Image>
        <Text textAlign="center" width="830px" fontSize="20px">
          Full Stack Developer con background en administración contable y
          técnico en automotores que me ayudaron a tomar decisiones estratégicas
          y relacionarme en un entorno empresarial. Conocimientos en
          metodologías ágiles, GIT, estructura de datos, algoritmos y frameworks
          CSS. Tengo experiencia en desarrollo de Front End y Back End con SQL,
          HTML, CSS, ChakraUI como framework favorito, Javascript, Typescript,
          NodeJS, EXPRESS, React, React-Native, Redux, entre otros. Con
          creatividad para resolver problemas, iniciativa y compromiso con mi
          trabajo. Nivel de Inglés: A2 (elementary).
        </Text>
      </VStack>
      <VStack id="section-2" gap="10px" zIndex="1" h="1024px" w="1000px">
        <Heading fontSize="40px" color="white" mt="90px" mb="10px">
          PROYECTOS
        </Heading>
        <HStack justifyContent="space-between" width="830px">
          <a target="_blank" href="https://foods.up.railway.app/">
          <VStack
            borderRadius="20px"
            _hover={{
              backgroundColor: "whiteAlpha.500",
              transform: "scale(1.20)",
              transition: "all 0.3s ease",
            }}
          >
            <Box w="320px" h="290px">
              <Img
                borderRadius="20px"
                width="100%"
                height="100%"
                src={proy1}
              ></Img>
            </Box>
            <Text textAlign="center" w="343px">
              "FoodsApp" PI de henry, aplicacion para obtener recetas desde la
              API de Spoonacular.
            </Text>
          </VStack>
          </a>
            <a target="_blank" href="https://henry-pf-front.vercel.app/">
          <VStack
            borderRadius="20px"
            _hover={{
              backgroundColor: "whiteAlpha.500",
              transform: "scale(1.20)",
              transition: "all 0.3s ease",
            }}
          >
            <Box w="320px" h="290px">
              {" "}
              <Img
                borderRadius="20px"
                width="100%"
                height="100%"
                src={proy2}
              ></Img>
            </Box>
            <Text textAlign="center" w="343px">
              "HenryGameON" PF de henry, aplicacion plataforma de jugos
              educativos de programacion y documentacion social.
            </Text>
          </VStack>
            </a>
        </HStack>
        <HStack justifyContent="space-between" width="830px">
          <a target="_blank" href="https://www.figma.com/file/iuyz0eXd9MVXr03tHYsVTP/Portfolio-Nicole?node-id=2-2&t=xXia3H3UIHrubmAt-0">
          <VStack
            borderRadius="20px"
            _hover={{
              backgroundColor: "whiteAlpha.500",
              transform: "scale(1.20)",
              transition: "all 0.3s ease",
            }}
          >
            <Box w="320px" h="290px">
              <Img
                borderRadius="20px"
                width="100%"
                height="100%"
                src={proy3}
              ></Img>
            </Box>
            <Text textAlign="center" w="343px">
              Portfolio de Nicole. colaboramos en equipo para realizar nuestros
              portfolio y ambos cumplimos roles de owner y proveedor. Conmigo en
              frontend con React y ella en UX/UI con Figma.
            </Text>
          </VStack>
          </a>
          <a target="_blank" href="https://www.figma.com/file/HaHM7NwaJeSCB5kDn11yM2/Portfolio-Abel?node-id=1-2&t=6x7RsMFQjVr1Bd7D-0">
          <VStack
            borderRadius="20px"
            _hover={{
              backgroundColor: "whiteAlpha.500",
              transform: "scale(1.20)",
              transition: "all 0.3s ease",
            }}
          >
            <Box w="320px" h="290px">
              <Img
                borderRadius="20px"
                width="100%"
                height="100%"
                src={proy4}
              ></Img>
            </Box>
            <Text textAlign="center" w="343px">
              Portfolio de Abel. colaboramos en equipo para realizar nuestros
              portfolio y ambos cumplimos roles de owner y proveedor. Conmigo en
              frontend con React y ella en UX/UI con Figma.
            </Text>
          </VStack>
          </a>
        </HStack>
        <HStack color="#FFFFFF" gap="70px">
          <ArrowLeftIcon _hover={{
              transform: "scale(1.65)",
              transition: "all 0.3s ease",
            }} boxSize={8} /> <Text  _hover={{
              transform: "scale(1.65)",
              transition: "all 0.3s ease",
            }} fontSize="40px">1</Text>{" "}
          <ArrowRightIcon  _hover={{
              transform: "scale(1.65)",
              transition: "all 0.3s ease",
            }} boxSize={8} />{" "}
        </HStack>
      </VStack>
      <VStack zIndex="1" gap="15px" h="1024px" w="1000px">
        <Heading mt="110px" mb="10px" color="#9C6FB7" fontSize="40px">
          SKILLS
        </Heading>
        <Heading mb="20px" fontSize="35px" fontWeight="normal">
          TECH SKILLS
        </Heading>

        <SimpleGrid columns={6} spacing={19}>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te1}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te2}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te3}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te4}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te5}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te6}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te7}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te8}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img borderRadius="15px" width="100%" height="100%" src={Te9}></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te10}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te11}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te12}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te13}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te14}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te15}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te16}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te17}
            ></Img>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="140px"
            width="150px"
          >
            <Img
              borderRadius="15px"
              width="100%"
              height="100%"
              src={Te18}
            ></Img>
          </Box>
        </SimpleGrid>
        <Heading mb="20px" fontSize="35px" fontWeight="normal">
          SOFT SKILLS
        </Heading>

        <SimpleGrid columns={4} spacing={19}>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            bg="#D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            {" "}
            <Text fontSize="25px">INGENIO</Text>{" "}
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            bg="#D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">CREATIVIDAD</Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            border="2px solid #D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">COMPROMISO</Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            border="2px solid #D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">DETERMINACIÓN</Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            border="2px solid #D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">LIDERAZGO</Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            border="2px solid #D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">EMPATIA</Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            bg="#D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">HUMILDAD</Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.15)", transition: "all 0.3s ease" }}
            textAlign="center"
            p="13px"
            bg="#D0A2ED"
            borderRadius="15px"
            height="65px"
            width="235px"
          >
            <Text fontSize="25px">AMBICIÓN</Text>
          </Box>
        </SimpleGrid>
      </VStack>
      <VStack gap="20px" zIndex="1" h="1024px" w="1000px">
        <Heading
          mt="110px"
          mb="10px"
          color="#FFFFFF"
          fontSize="40px"
          fontWeight="normal"
        >
          EXPERIENCIAS PREVIAS
        </Heading>
        <SimpleGrid columns={3} spacing={10}>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="335px"
            width="235px"
          >
            <Img
              marginLeft="15px"
              borderRadius="15px"
              width="205px"
              height="235px"
              src={Exp1}
            ></Img>
            <Text textAlign="center">
              administrador y asesor de finanzas. <br></br> *coliderar equipo{" "}
              <br></br> *balances <br></br>
              *presupuestos <br></br> *toma de decisiones
            </Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="335px"
            width="235px"
          >
            <Img
              marginLeft="15px"
              borderRadius="15px"
              width="205px"
              height="235px"
              src={Exp2}
            ></Img>
            <Text textAlign="center">
              Inspector técnico automotriz.<br></br> *atencion al cliente.
              <br></br> *Inspeccion en base a la ley de transito.
            </Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="335px"
            width="235px"
          >
            <Img
              marginLeft="15px"
              borderRadius="15px"
              width="205px"
              height="235px"
              src={Exp3}
            ></Img>
            <Text textAlign="center">
              Operario de producción en máquinas CNC.<br></br> *Calidad/Cantidad
              <br></br>
              *Adaptacion "horarios rotativos"
            </Text>
          </Box>
        </SimpleGrid>
        <Heading
          mt="110px"
          mb="10px"
          color="#FFFFFF"
          fontSize="40px"
          fontWeight="normal"
        >
          CERTIFICADOS
        </Heading>
        <SimpleGrid columns={4} spacing={5}>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="260px"
            width="235px"
          >
            <Img
              marginLeft="47px"
              borderRadius="15px"
              width="60%"
              height="60%"
              src={cert1}
            ></Img>
            <Text textAlign="center">
            Full Stack Web Developer. Henry Bootcamp. 700 horas de cursado teórico-práctico.
            </Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="260px"
            width="235px"
          >
            <Img
              marginLeft="47px"
              borderRadius="15px"
              width="60%"
              height="60%"
              src={cert2}
            ></Img>
            <Text textAlign="center">
            EF SET English Certificate 39/100 (A2 Elementary)
            </Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="260px"
            width="235px"
          >
            <Img
              marginLeft="47px"
              borderRadius="15px"
              width="60%"
              height="60%"
              src={cert3}
            ></Img>{" "}
            <Text textAlign="center">
            Curso “Diseño de paginas web con HTML y CSS” (10hs) Crehana
            </Text>
          </Box>
          <Box
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
            height="260px"
            width="235px"
          >
            <Img
              marginLeft="47px"
              borderRadius="15px"
              width="60%"
              height="60%"
              src={cert3}
            ></Img>
            <Text textAlign="center">
            Curso “jira para empresas” (2hs) Crehana
            </Text>
          </Box>
        </SimpleGrid>
        <HStack gap="70px" color="#FFFFFF">
          <ArrowLeftIcon  _hover={{
              transform: "scale(1.65)",
              transition: "all 0.3s ease",
            }} boxSize={8} /> <Text  _hover={{
              transform: "scale(1.65)",
              transition: "all 0.3s ease",
            }} fontSize="40px">1</Text>{" "}
          <ArrowRightIcon  _hover={{
              transform: "scale(1.65)",
              transition: "all 0.3s ease",
            }} boxSize={8} />{" "}
        </HStack>
      </VStack>
      <VStack gap="15px" zIndex="1" h="874px" w="1000px">
        <Heading mt="110px" mb="10px" color="#FFFFFF" fontSize="40px">
          OTROS DATOS DE INTERES
        </Heading>
        <Text color="#FFFFFF" width="810px" fontSize="25px">
          * Idiomas: Español (Nativo) // Inglés (A2).<br></br>* Secundario
          técnico completo cursado en “IPEM 247 ing. Carlos A. Cassaffousth”
          Orientación: Técnico en automotores.<br></br>* Disponibilidad
          Presencial, remoto o híbrido (Ciudad de Córdoba, Córdoba, ARG) //
          Movilidad propia (moto) <br></br>* En constante capacitacion y
          actualizacion de soft y tech skills
        </Text>
        <Heading color="#9C6FB7" fontSize="40px">
          CONTACTO
        </Heading>
        <iframe style={{border:'2px solid #9C6FB7', borderRadius:'10px'}} src="https://docs.google.com/forms/d/e/1FAIpQLSfIGuUmD_xMwo2dDO_yq6-NgG18cFgE3QiEOzC08MZ88CktoA/viewform?embedded=true" width="640" height="844" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        {/* <VStack width="660px">
          <HStack width="100%">
            <Input placeholder="Nombre"></Input>{" "}
            <Input placeholder="Email"></Input>{" "}
          </HStack>
          <Input placeholder="Asunto"></Input>
          <Textarea
            maxHeight="200px"
            minHeight="200px"
            placeholder="Mensaje..."
          />
          <Button
            _hover={{ transform: "scale(1.20)", transition: "all 0.3s ease" }}
          >
            enviar
          </Button>
        </VStack> */}
      </VStack>
      <SimpleGrid pt="30px" columns={4} spacing={50}>
        <a href="https://wa.me/543513851480">
        <Box 
          _hover={{ transform: "scale(1.3)", transition: "all 0.3s ease" }}
          borderRadius="15px"
          height="70px"
          width="80px"
        >
          <Image src={fot1} w="100%" h="100%"></Image>
        </Box>
        </a>

        <Popover>
  <PopoverTrigger>
    <Button bg="#D0A2ED"
    p="0px"
     _hover={{ transform: "scale(1.3)", transition: "all 0.3s ease" }}
          borderRadius="15px"
          height="70px"
          width="80px"><Image src={fot2} w="100%" h="100%"></Image></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Contacto via E-mail</PopoverHeader>
    <PopoverBody>abelyamilmorenomp@gmail.com</PopoverBody>
  </PopoverContent>
</Popover>

        <a href="https://www.linkedin.com/in/abelmoreno97/">
        <Box
          _hover={{ transform: "scale(1.3)", transition: "all 0.3s ease" }}
          borderRadius="15px"
          height="70px"
          width="80px"
        >
          <Image src={fot3} w="100%" h="100%"></Image>
        </Box>
        </a>
        <a href="https://github.com/Abelmoreno97">
        <Box
          _hover={{ transform: "scale(1.3)", transition: "all 0.3s ease" }}
          borderRadius="15px"
          height="70px"
          width="80px"
        >
          <Image src={fot4} w="100%" h="100%"></Image>
        </Box>
        </a>
      </SimpleGrid>
    </VStack>
  );
}

export default App;
