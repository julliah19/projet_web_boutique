import React from "react";
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink, HeaderContainer, Header, HeaderMenuButton, HeaderName } from '@carbon/react';
import { Fade, UserFollow, Hotel } from '@carbon/icons-react';


var route = [
    {
        href: "newuser",
        title: "Ajouter un Logement",
        renderIcon: UserFollow
    },
    {
        href: "consulthousing",
        title: "Consulter Logement",
        renderIcon: Hotel
    },
    {
        href: "consultvisit",
        title: "Consulter les Visites",
        renderIcon: Hotel
    }
]

const str = window.location.href;
var path = str.split("/");
var lastpath = path[(path.length - 1)];

export const SideNavigation = () => {

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
                            <bold>Projet BDD</bold>
                        </HeaderName>
                        <SideNav
                            aria-label="Side navigation"
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

