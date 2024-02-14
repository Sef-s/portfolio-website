import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags fade-in">
          <strong>&lt;body&gt;</strong> {/* Making <body> tag bold and fade in */}
        </span>

        <Outlet />
        <span className="tags bottom-tags fade-in">
          <strong>&lt;/body&gt;</strong> {/* Making </body> tag bold and fade in */}
          <br />
          <span className="bottom-tag-html fade-in">
            <strong>&lt;/html&gt;</strong> {/* Making </html> tag bold and fade in */}
          </span>
        </span>
      </div>
    </div>
  )
}



export default Layout