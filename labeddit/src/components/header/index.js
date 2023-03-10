import { Entrar, HeaderStyled, LogoLabenu, Logout } from "./styled"
import { Button, Link } from '@chakra-ui/react'
import { goToSignup } from "../../routes/coordinator"
import logoLabenu from "../../assets/Group 3.png"
import { useLocation, useNavigate } from "react-router-dom"

export const Header = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const renderizaHeader = () => {

        switch (location.pathname) {
            case "/signup":
                return (
                    <>
                        <div className="sender-profile">
                            <LogoLabenu src={logoLabenu} alt="logoLabeddit" />
                        </div>

                        <div className="action-menu">
                            <Link
                                //   onClick={() => goToSignup(navigate)}
                                color={"blue.400"}
                            >
                                <Entrar>
                                    Entrar
                                </Entrar>
                            </Link>
                        </div>
                    </>
                )

            case "/post":
                return (
                    <>
                        <div className="sender-profile">
                            <LogoLabenu src={logoLabenu} alt="logoLabeddit" />
                        </div>

                        <div className="action-menu">
                            <Link
                                //   onClick={() => goToSignup(navigate)}
                                color={"blue.400"}
                            >

                                <Logout>
                                    Logout
                                </Logout>

                            </Link>
                        </div>
                    </>
                )
            case "/comentario/:id":
                return (
                    <>
                        <div className="sender-profile">
                            <LogoLabenu src={logoLabenu} alt="logoLabeddit" />
                        </div>

                        <div className="action-menu">
                            <Link
                                //   onClick={() => goToSignup(navigate)}
                                color={"blue.400"}
                            >
                                <Logout>
                                    Logout
                                </Logout>
                            </Link>
                        </div>
                    </>
                )
        }
    }
    return (
        <>
            <HeaderStyled>{renderizaHeader()}</HeaderStyled>
        </>
    )
}
