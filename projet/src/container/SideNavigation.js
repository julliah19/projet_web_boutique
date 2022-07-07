import React, { useContext, useState } from "react";
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink, HeaderContainer, Header, HeaderMenuButton, HeaderName, HeaderGlobalAction, HeaderGlobalBar, Modal } from '@carbon/react';
import { Fade, UserFollow, Hotel, Purchase, ShoppingCart, Login, Logout } from '@carbon/icons-react';
import UserContext from "../context/UserContext";


var route = [
    {
        href: "signup",
        title: "S'inscrire",
        renderIcon: UserFollow
    },
    {
        href: "consultproduct",
        title: "Consulter Produits",
        renderIcon: Purchase
    },
    {
        href: "cart",
        title: "Panier",
        renderIcon: ShoppingCart
    }
]

const str = window.location.href;
var path = str.split("/");
var lastpath = path[(path.length - 1)];

const HeaderTools = (isAuthenticated, name) => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
        return (<div style={{display:"flex"}}>
            <div style={{display:"flex", margin:"auto", paddingRight:"16px"}}>{name}</div>
            <HeaderGlobalAction aria-label="Déconnexion" href="/" onClick={() => { SignOut() }}>
                <Logout size={20} />
            </HeaderGlobalAction>
        </div>);
    }
    else {
        return (<HeaderGlobalAction aria-label="Connexion" href="/signin">
            <Login size={20} />
        </HeaderGlobalAction>);
    }
}


const SignOut = () => {
    alert("Vous avez été déconnecté ! ");
    localStorage.setItem('userData', JSON.stringify({ isAuthenticated: false, name: ""}));
}



export const SideNavigation = () => {

    const { isAuthenticated, name } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <>
                    <Header aria-label="Retour à l'accueil">
                        <HeaderMenuButton
                            aria-label="Ouvrir le menu"
                            isCollapsible
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="/" prefix="">
                        
                            <img src={window.location.origin+ "/images/logo.png"} alt="placeholder" width="90%"/>
                            
                        </HeaderName>
                        <HeaderGlobalBar>
                            {HeaderTools(isAuthenticated, name, open, setOpen)}
                        </HeaderGlobalBar>
                        <SideNav
                            aria-label="Brocante"
                            isRail
                            expanded={isSideNavExpanded}
                            onOverlayClick={onClickSideNavExpand}>
                            <SideNavItems>
                                {route.map((item) => {
                                    if (lastpath == item.href)
                                        return (<SideNavLink href={"/" + item.href} title={item.title} renderIcon={item.renderIcon} aria-current="page"> {item.title} </SideNavLink>);
                                    else
                                        return (<SideNavLink href={"/" + item.href} title={item.title} renderIcon={item.renderIcon}> {item.title} </SideNavLink>);
                                })}
                                {/* <SideNavMenu renderIcon={Fade} title="Category title">
                                    <SideNavMenuItem href="/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem
                                        href="/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="/">
                                        Link
                                    </SideNavMenuItem>
                                </SideNavMenu> */}
                            </SideNavItems>
                        </SideNav>
                    </Header>
                </>
            )}
        />
    );
}

