import './index.scss'
import {Container} from 'reactstrap'
import lunges from '../../../assets/img/lunges.png'
import yoga from '../../../assets/img/yoga-pose.png'
import extended from '../../../assets/img/extended.png'

const Exercises = ({exercise_data}) => {
  return <Container>
    <div className="exercise__container" id="schedule">
      <div className="exercise__top">
        <h2>Exercise <span className="highlights">Benefits</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Eius dignissimos esse ea nulla id sunt!
        </p>
      </div>
      <div className="exercise__wrapper">

      {
        exercise_data?.map(item=>(
          <div key={item.id} className="exercise__item"
          data-aos="zoom-in"
          data-aos-duration="1500"
          >
          <span className="exercise__icon"
          
          >
            <img src={item.imgUrl} alt="" />
          </span>
          <div className="exercise__content">
            <h4>{item.title}</h4>
            <p>
             {item.benefit}
            </p>
          </div>
         </div>
        ))
      }
        
      </div>
    </div>
  </Container>
}

export default Exercises;
