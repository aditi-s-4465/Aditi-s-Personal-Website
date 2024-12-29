import './Welcome.css';

function Welcome({scrollCallback}) {
    return (
      <div className="full-container">
        <div className="pixel-door">
          <div className='pixel-door-sign'>
            <b>
              Welcome to my cafe/personal website.
              <br/> <button className="welcome-color" onClick={scrollCallback}>  Scroll </button> on in!
            </b>
          </div>
        </div>
      </div>
      );
}
export default Welcome;