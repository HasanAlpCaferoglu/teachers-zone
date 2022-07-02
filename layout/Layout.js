import Footer from "../components/Footer"

function Layout(props) {
  return (
    <div>
        <Footer/>
        <main>{props.children}</main>
    </div>
  )
}

export default Layout