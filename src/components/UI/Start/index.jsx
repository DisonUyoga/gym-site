import './index.scss'
import { Container } from 'reactstrap';
import trainerimg from '../../../assets/img/trainer.png'
import {Link} from 'react-router-dom'


const Start = () => {
  return <Container>
    <div className="start__wrapper" id="classes">
      <div className="start__img">
        <img src={trainerimg} alt=""
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
      <div className="start__content"
      data-aos="fade-right"
          data-aos-duration="1500"
      >
        <h2 className="section__title">
            Ready to make a <span className="highlights">Change</span>?
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officia ut reprehenderit soluta ipsum dolorum aliquid eveniet aspernatur nobis minus.
        </p>
        <Link to="/classes" className="register__btn">Get Started</Link>
      </div>
    </div>
  </Container>
}

export default Start;
