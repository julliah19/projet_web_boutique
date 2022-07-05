import { Loading } from "@carbon/react";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FetchAPI } from "./FetchAPI";
import { ClickableTile, Modal, Select, SelectItem, TextInput, DatePicker, DatePickerInput } from "@carbon/react";

const renderConsultProduct = (loading, productResponse, selectedProduct, setSelectedProduct) => {
    if (loading, !productResponse) {
        return (<div><Loading description='Chargement des logements...' withOverlay={false} style={{ display: 'block', position: 'fixed', top: '50%', left: '50%' }} /></div>)
    }


    console.log(productResponse);

    return (<div>
        {productResponse.map((p) => {

            return(<ClickableTile onClick={() => setSelectedProduct(p.idProduit)} style={{textAlign:"left", lineHeight:"24px"}}>
                {p.img != "" ? <img src={require("../../assets/img/produits/" + p.img)} style={{maxWidth:"40vw", minHeight:"40vh", maxHeight:"40vh", display:"flex", justifyContent:"center", margin:"auto"}}/> : <img src="../../assets/img/produits/no-image-found.jpg"/> } <br></br>
                {"Nom du produit : " + p.nomProduit} <br></br>
                {"Description : " + p.description}  <br></br>
                {"Prix : " + p.prix + " €"}  <br></br>
                {"Disponibilité : "} {p.dispo==1 ? "Oui" : "Non"} <br></br>
                {"Stock : " + p.stock + " unités"}  <br></br>

            </ClickableTile>)
        })}
    </div>);
}

export const ConsultProduct = () => {
    const [loading, setLoading] = useState(true);
    const [productResponse, setProductResponse] = FetchAPI();
    const [selectedProduct, setSelectedProduct] = useState();

    const productContent = useMemo(() => renderConsultProduct(loading, productResponse, selectedProduct, setSelectedProduct), [loading, productResponse, selectedProduct]);

    useEffect(() => {
        setProductResponse("http://localhost:8000/api/getproduit");
    }, []);


    useEffect(() => {
        if (productResponse)
            setLoading(false);
    }, [productResponse]);

    return (<div>{productContent}</div>)

}