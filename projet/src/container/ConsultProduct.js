import { Loading } from "@carbon/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { FetchAPI } from "./FetchAPI";
import { ClickableTile, Modal } from "@carbon/react";
import UserContext from "../context/UserContext";

const renderConsultProduct = (loading, productResponse, selectedProduct, setSelectedProduct, open, setOpen, cart, setCart, isAuthenticated, name) => {
    if (loading, !productResponse) {
        return (<div><Loading description='Chargement des logements...' withOverlay={false} style={{ display: 'block', position: 'fixed', top: '50%', left: '50%' }} /></div>)
    }

    const ProductModal = () => {
        return (<Modal
            open={open}
            modalHeading={"Voulez vous ajouter ce produit à votre panier ?"}
            primaryButtonText="Ajouter au panier"
            secondaryButtonText="Fermer"
            onRequestSubmit={() => { AddToCart(selectedProduct); }}
            onRequestClose={() => { setOpen(false); }}
        >
            {productResponse.map((p) => {
                if (p.idProduit == selectedProduct) {
                    return (<div style={{ display: "flex", textAlign: "left", fontSize:"24px", lineHeight:"40px"}}>
                        {p.img != "" ?
                        <img src={require("../../assets/img/produits/" + p.img)} style={{ maxWidth: "350px", minWidth: "350px", minHeight: "50vh", maxHeight: "50vh", marginRight:"18px" }} />
                        : <img src="../../assets/img/produits/no-image-found.jpg" />}
                        {"Nom du produit : " + p.nomProduit} <br></br>
                        {"Description : " + p.description}  <br></br>
                        {"Prix : " + p.prix + " €"}  <br></br>
                        {"Disponibilité : "} {p.dispo == 1 ? "Oui" : "Non"} <br></br>
                        {"Stock : " + p.stock + " unités"}  <br></br>

                    </div>)
                }
            })}
        </Modal>)
    }

    console.log(productResponse);
    console.log(cart);
    const temp = cart;
    console.log(temp);

    const AddToCart = (selectedProduct) => {
        
        productResponse.map((p) => {
            if (p.idProduit == selectedProduct){
                temp.push(p);
            }
        });
        setCart(temp);
        localStorage.setItem('userData', JSON.stringify({isAuthenticated:isAuthenticated, name:name, cart:cart}));
    }

    return (
        <div style={{ display: "flex" }}>
            {ProductModal()}
            {productResponse.map((p) => {

                return (<ClickableTile onClick={() => { setSelectedProduct(p.idProduit); setOpen(true); }} style={{ textAlign: "left", lineHeight: "24px", marginRight: "16px" }}>
                    {p.img != "" ? <img src={require("../../assets/img/produits/" + p.img)} style={{ maxWidth: "250px", minWidth: "250px", minHeight: "40vh", maxHeight: "40vh", display: "flex", justifyContent: "center", margin: "auto" }} /> : <img src="../../assets/img/produits/no-image-found.jpg" />} <br></br>
                    {"Nom du produit : " + p.nomProduit} <br></br>
                    {"Description : " + p.description}  <br></br>
                    {"Prix : " + p.prix + " €"}  <br></br>
                    {"Disponibilité : "} {p.dispo == 1 ? "Oui" : "Non"} <br></br>
                    {"Stock : " + p.stock + " unités"}  <br></br>

                </ClickableTile>)
            })}
        </div>);
}

export const ConsultProduct = () => {
    const [loading, setLoading] = useState(true);
    const [productResponse, setProductResponse] = FetchAPI();
    const [selectedProduct, setSelectedProduct] = useState();
    const [open, setOpen] = useState(false);

    const { isAuthenticated, name ,cart, setCart } = useContext(UserContext);

    const productContent = useMemo(() => renderConsultProduct(loading, productResponse, selectedProduct, setSelectedProduct, open, setOpen,  cart, setCart, isAuthenticated, name), [loading, productResponse, selectedProduct, open]);

    useEffect(() => {
        setProductResponse("http://localhost:8000/api/getproduit");
    }, []);


    useEffect(() => {
        if (productResponse)
            setLoading(false);
    }, [productResponse]);

    return (<div>{productContent}</div>)

}