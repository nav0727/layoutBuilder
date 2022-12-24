import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="main-container">
          <div className="body-container">
            {showLeftNavbar && (
              <div className="left-nav">
                <h1 className="heading">Left Navbar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            )}

            {showContent && (
              <div className="content-container">
                <h1 className="heading">Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
            {showRightNavbar && (
              <div className="right-nav">
                <h1 className="heading">Right navbar</h1>
                <div className="container">
                  <h1 className="heading">Ad 1</h1>
                </div>

                <div className="container">
                  <h1 className="heading">Ad 2</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
