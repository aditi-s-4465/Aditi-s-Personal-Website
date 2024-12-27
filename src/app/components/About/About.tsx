import './About.css';
import Image from 'next/image';
import aditi from './aditi.png';

function About() {
    return (
    <div className='full-container'>
      <div className='outer-container'>
        <div className="window-container">
          <div className="horizontal-container">
            <div className='align-left'>
              <div className='pixel-coffee-container'>
                <div className='pixel-title'>
                    <b>Meet the owner (me!)</b>
                </div>
              </div>
              <div className='pixel-coffee-container'>
                <div className='pixel-body'>
                  Hi! My name is Aditi and I'm currently a junior at the University of Illinois studying Computer Science & Anthropology with a minor in Game Studies and Design. I'm passionate about the intersection of technology, creativity, humans and fun! This means I have a lot of fields I'm interested in but currently I'm exploring front-end development, HCI, UX Design, Game Development and working with people in any way. Feel free to check out the cafe or learn more about me ^-^
                </div>
              </div>
            </div>
            <div className='image-container'></div>
          </div>
        </div>
      </div>
    </div>
    
      );  
}
export default About;