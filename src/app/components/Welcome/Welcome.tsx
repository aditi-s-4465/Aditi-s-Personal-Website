import './Welcome.css';

interface WelcomeProps {
  scrollCallback: () => void;
}

function Welcome({ scrollCallback }: WelcomeProps) {
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