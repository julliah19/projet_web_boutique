import { useState, useMemo } from "react";
import { DataTable, Loading } from "@carbon/react";
import { useEffect } from "react";
import { FetchAPI } from "./FetchAPI";

const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableToolbar,
    TableToolbarContent,
    TableToolbarSearch
} = DataTable;

const renderConsultVisit = (loading, visitResponse) => {
    if (loading || !visitResponse) {
        return (<div><Loading description='Chargement des visites...' withOverlay={false} style={{ display: 'block', position: 'fixed', top: '50%', left: '50%' }} /></div>)
    }

    const headers = [
        {
            key: 'NomAgent',
            header: 'Nom Agent'
        },
        {
            key: 'PrenomAgent',
            header: 'Prénom Agent'
        },
        {
            key: 'ClientNom',
            header: 'Nom Client'
        },
        {
            key: 'ClientPrenom',
            header: 'Prénom Client'
        },
        {
            key: 'type',
            header: 'Type'
        },
        {
            key: 'nbPieces',
            header: 'Nb Pieces'
        },
        {
            key: 'nbSurfaces',
            header: 'Surface m²'
        },
        {
            key: 'Etat',
            header: 'Etat'
        },
        {
            key: 'adresse',
            header: 'Adresse'
        },
        {
            key: 'nomProprietaire',
            header: 'Nom du Propriétaire'
        },
        {
            key: 'prenomProprietaire',
            header: 'Prénom du Propriétaire'
        },
        {
            key: 'prix',
            header: 'Prix'
        },
        {
            key: 'ville',
            header: 'Ville'
        },
        {
            key: 'nbGarage',
            header: 'Nb Garage'
        }
    ]

    const rows = [];

    visitResponse.forEach(element => {
        rows.push(element);
    });

    console.log(rows);

    return (<div>
        <DataTable rows={rows} headers={headers} isSortable>
            {({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getToolbarProps,
                onInputChange,
                getTableProps,
                getTableContainerProps
            }) => {
                return (
                    <TableContainer
                        title="Les visites plannifiées"
                        {...getTableContainerProps()}
                        className='visitDataTable'>
                        <TableToolbar {...getToolbarProps()}>
                            <TableToolbarContent>
                                <TableToolbarSearch
                                    persistent="true"
                                    onChange={onInputChange}
                                />
                            </TableToolbarContent >
                        </TableToolbar>
                        <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                    {headers.map((header, i) => (
                                        <TableHeader key={i} {...getHeaderProps({ header })}>
                                            {header.header}
                                        </TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, i) => {
                                    console.log(row);
                                    return (
                                    <TableRow key={i} {...getRowProps({ row })}>
                                        {row.cells.map((cell) => (
                                            <TableCell key={cell.id}>{cell.value}</TableCell>
                                        ))
                                        }
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                );
            }}
        </DataTable>
    </div>);

}

export const ConsultVisit = () => {
    const [loading, setLoading] = useState(true);
    const [visitResponse, setVisitResponse] = FetchAPI();

    const VisitContent = useMemo(
        () => renderConsultVisit(loading, visitResponse),
        [loading, visitResponse]
    );

    useEffect(() => {
        setVisitResponse("http://localhost:8000/api/getvisite");
    }, [])

    useEffect(() => {
        setLoading(false);
    }, [visitResponse])

    return (
        <div>
            {VisitContent}
        </div>
    );
}