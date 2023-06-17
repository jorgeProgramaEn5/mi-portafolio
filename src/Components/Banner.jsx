import '../Style/Banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { header720x720 } from '../Assets';
import { useState, useEffect } from 'react';
import { FaReact, FaBootstrap, FaPlus } from 'react-icons/fa'
import { BsArrowRightCircle } from 'react-icons/bs';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';

const Banner = ()=>{

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);  //- Math.random() * 100
  const period = 1000

  useEffect(() => {

    const toRotate = ['Web Developer', 'Web Designer', 'Electrical Engineer'];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((loopNum) => loopNum + 1);
        setDelta(80);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, setText, text.length]);

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1 className='text-rotate'>{`I'm `}<span className='wrap'>{text}</span></h1>
            <p className='p-text text-hidden-cell'>
              I'm an electrician who decided to quit my job to follow the dream of becoming a good 
              app developer.
            </p>
            <p className='p-text'>
              More than just writing code, what I like is creating new and clever 
              solutions. I think my biggest strengths are my desire to keep learning and my determination 
              to try new things, even if they're outside of my comfort zone.
            </p>
            <button className='btn-connect'><span><a href='https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios'>WhatsApp me</a> <BsArrowRightCircle size={25} /></span></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className='imgHeader'>
              <img src={header720x720} alt="Headder" loading="lazy"/>
            </div>
            <div className='target'>
              <div className='target-container'>
                <div><FaReact size={30} /></div>
                <div><TbBrandNextjs size={30} /></div>
                <div><TbBrandTailwind size={30} /></div>
                <div><FaBootstrap size={30} /></div>
                <div><SiJavascript size={30} /></div>
                <div><FaPlus size={35} /></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;