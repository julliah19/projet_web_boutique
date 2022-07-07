import React, { useEffect, useState, useMemo } from 'react';
import { ClickableTile, Loading } from '@carbon/react';

const renderCartProduct = (loading) => {
    if(loading) {
        return(<div><Loading description='Chargement des logements...' withOverlay={false} style={{ display: 'block', position: 'fixed', top: '50%', left: '50%' }} /></div>)
    }

    const data = localStorage.getItem('userData');
    const parse = JSON.parse(data);
    console.log(parse.cart);
    
    const Panier = () => {
        console.log("YEAH");
        {parse.cart.map((p) => {
            return(<ClickableTile onClick={() => { setSelectedProduct(p.idProduit); setOpen(true); }} style={{ textAlign: "left", lineHeight: "24px", marginRight: "16px" }}>
            {p.img != "" ? <img src={require("../../assets/img/produits/" + p.img)} style={{ maxWidth: "250px", minWidth: "250px", minHeight: "40vh", maxHeight: "40vh", display: "flex", justifyContent: "center", margin: "auto" }} /> : <img src="../../assets/img/produits/no-image-found.jpg" />} <br></br>
            {"Nom du produit : " + p.nomProduit} <br></br>
            {"Description : " + p.description}  <br></br>
            {"Prix : " + p.prix + " €"}  <br></br>
            {"Disponibilité : "} {p.dispo == 1 ? "Oui" : "Non"} <br></br>
            {"Stock : " + p.stock + " unités"}  <br></br>
    
        </ClickableTile>);
        })}
    }

    return(<div>{Panier()}</div>)
}


export const Cart = () => {

    const [loading, setLoading] = useState(true);

    const CartContent = useMemo(() => renderCartProduct(loading), [loading]);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (<div>
        {CartContent}
    </div>);
}