import './Menu.css';

const menuItems = [
    ["Rhythmic React", "Play the perfect music for your workout. Lead a team to develop, design and implement an app that chooses music to play based on real time user movement speeds."],
    ["Spaced Out", "Check up on and find study spots on campus. I worked with a team to develop, design, prototype and implement a mobile-friendly web app which takes real time data about campus to help students find the perfect place to study."],
    ["Ethicash", "Find the perfect stocks for you to invest in based on causes you care about. I designed and implemented the frontend for a web-app that let users find and create investment portfolios that aligned with causes they care about. "],
    ["Melodic Eyes", "Adding another dimension to art by playing chords based on where a user is looking. I designed and helped implement a frontend that would work with a mouse as well as an eyetracker"],
    ["JAAMS - Sweet Tunes for you", "A quiz to choose the perfect playlist for you to wake up to. I worked on integration with the Spotipy API, development of quiz logic and creation of front-end"],
    ["Cheffin", "Use up what's in your fridge by finding the perfect recipes. I developed and integrated a front end which allowed for advanced filtering and searching of recipes."]
]

function Menu() {
    return (
      <div className="brick-container">
        <div className='beam-container'>
            <div className='transparent-title '>
                <div className='pixel-title'><b>A Curated Menu</b> <p>(Some Projects I've Worked On)</p></div>
            </div>
            <div className='transparent-container'>
            {menuItems.map(([title, description], index) => (
                            <div className="menu-item" key={index}>
                            <h3 className="menu-title">{title}</h3>
                            <p className="menu-description">{description}</p>
                        </div>
                        
                        
                        ))}
            </div>
        </div>
      </div>
      );
}
export default Menu;