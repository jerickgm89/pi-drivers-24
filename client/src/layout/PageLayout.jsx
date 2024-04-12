import { Footer, NavBar } from "../components"


export const PageLayout = ({children, numberContainer}) => {
  return (
    <>
      <NavBar />
        <div className={`container-${numberContainer}xl mx-auto pt-16`}>
            {children}
        </div>
      <Footer />
    </>
  )
}
