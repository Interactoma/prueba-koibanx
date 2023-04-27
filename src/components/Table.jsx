import { useState, useEffect } from "react"

import getData from "../utils/getData"

import Style from "./Table.module.css"

export default function Table(props) {
    const { ProccessData} = props
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1000000);
    const [notFound, setNotFound] = useState(false);
    const [filters, setFilters] = useState({
        stringSearch: '',
        active: '',
    })
    
    useEffect(() => {
        let response = getData()
        setData(ProccessData(response.data))
        setFilterData(ProccessData(response.data))
        setRowsPerPage(response.rowsPerPage)
        setTotalPages(response.pages)
    }, [])

    useEffect(() => {
        getDataApi()
    }, [ currentPage])

    const columnas = [
        {nombre: "ID", identificador: "id"},
        {nombre: "Comercio", identificador: "comercio", sort: true},
        {nombre: "CUIT", identificador: "cuit", sort: true},
        {nombre: "Concepto 1", identificador: "c1"},
        {nombre: "Concepto 2", identificador: "c2"},
        {nombre: "Concepto 3", identificador: "c3"},
        {nombre: "Concepto 4", identificador: "c4"},
        {nombre: "Concepto 5", identificador: "c5"},
        {nombre: "Concepto 6", identificador: "c6"},
        {nombre: "Balance Actual", identificador: "balanceActual"},
        {nombre: "Activo", identificador: "estatus_show"},
        {nombre: "Ultima venta", identificador: "ultimaVenta"},
    ]

    const getDataApi = () => {
        const { stringSearch, active } = filters
        let url = ''
        let prefix = 'https://api.koibanx.com/stores'

        if(stringSearch !== '' && active !== ''){
            url = `${prefix}?q={"search":"${stringSearch}","activo":"${active}"}&page=${currentPage}`
            console.log(url)
        } else if(stringSearch !== '' && active === ''){
            url = `${prefix}?q={"search":"${stringSearch}"}&page=${currentPage}`
            console.log(url)
        } else if(stringSearch === '' && active !== ''){
            url = `${prefix}?q={"activo":"${active}"}&page=${currentPage}`
            console.log(url)
        } else {
            url = `${prefix}?page=${currentPage}`
            console.log(url)
        }

    }

    const changeCurrentPage = (num) => {
        setCurrentPage(num)
    }

    const getPageNumbersToShow = () => {

        if(totalPages <= 3){
            return totalPages
        } else {
            const firstPageToShow = Math.max(1, currentPage - 1)
            const lastPageToShow = Math.min(totalPages, currentPage + 1)

            let pageNumbersToShow = [];

            if(firstPageToShow > 1){
                pageNumbersToShow.push(1)
                pageNumbersToShow.push('...')
            }

            for (let i = firstPageToShow; i <= lastPageToShow; i++) {
                pageNumbersToShow.push(i)
            }

            if(lastPageToShow < totalPages){
                pageNumbersToShow.push('...')
                pageNumbersToShow.push(totalPages)
            }

            return pageNumbersToShow
        }
    }

    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    const dataToShow = filterData.slice(startIndex, endIndex)
    
    const sortDataAsc = (identificador) => {
        const dataSorted = [...dataToShow].sort((a, b) => {
            if(a[identificador] > b[identificador]){
                return 1
            } else if(a[identificador] < b[identificador]){
                return -1
            } else {
                return 0
            }
        })
        setFilterData(dataSorted)
    }

    const sortDataDesc = (identificador) => {
        const dataSorted = [...filterData].sort((a, b) => {
            if(a[identificador] > b[identificador]){
                return -1
            } else if(a[identificador] < b[identificador]){
                return 1
            } else {
                return 0
            }
        })
        setFilterData(dataSorted)
    }

    const searchBar = (e) => {
        setFilters({
            ...filters,
            stringSearch: e.target.value
        })
    }

    const resetFilter = () => {
        setFilterData(data)
        setFilters({
            stringSearch: '',
            active: '',
        })
        setCurrentPage(1)
        setNotFound(false)
    }

    const activeSearch = (e) => {
        setFilters({
            ...filters,
            active: e.target.value === 'true' ? true : e.target.value === 'false' ? false : ''
        })
    }

    const search = () => {
        let dataFiltered = [...data]
        let aux = []
        
        if(filters.stringSearch !== '' && filters.active !== ''){
            aux = dataFiltered.filter((item) => {
                return (item.cuit.includes(filters.stringSearch) || item.comercio.includes(filters.stringSearch) || item.id.includes(filters.stringSearch)) && item.estatus === filters.active  
            })
        } else if(filters.stringSearch !== '' && filters.active === ''){
            aux = dataFiltered.filter((item) => {
                return (item.cuit.includes(filters.stringSearch) || item.comercio.includes(filters.stringSearch) || item.id.includes(filters.stringSearch))
            })
        } else if(filters.stringSearch === '' && filters.active !== ''){
            aux = dataFiltered.filter((item) => {
                return item.estatus === filters.active
            })
        } else {
            aux = dataFiltered
        }

        if(aux.length === 0){
            setNotFound(true)
        } else {
            setNotFound(false)
        }

        getDataApi()

        setFilterData(aux)
        setCurrentPage(1)
    }




    return (
        <div>
        <div>
            <input className={Style.searchBar} type="text" placeholder="Buscar..." onChange={searchBar} value={filters.stringSearch}/>
            <div className={Style.containerSelect}>
                <label className={Style.labelInput}>Activo</label>
                <select className={Style.selectInput} onChange={activeSearch} value={filters.active}>
                    <option value="">Todos</option>
                    <option value="true">Activos</option>
                    <option value="false">Inactivos</option>
                </select>    
            </div>
            
            <button className={Style.searchBtn} onClick={search}>Buscar</button>
            <button className={Style.resetBtn} onClick={resetFilter}>Reset</button>

        </div>
        {/* Tabla */}
        <div className={Style.container}>
            <table>
                <thead>
                    <tr>
                        {columnas.map((columna, index) => (
                            columna.sort ? (
                                <th key={index} >
                                    {columna.nombre}
                                    <button className={Style.sortButton} onClick={() => sortDataAsc(columna.identificador)}>&#9650;</button>
                                    <button className={Style.sortButton} onClick={() => sortDataDesc(columna.identificador)}> &#9660;</button>
                                </th>
                            ) : (
                                <th key={index}>{columna.nombre}</th>
                            )
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        notFound ? (
                            <tr >
                                <td colSpan="12" className={Style.cells}>No se encontraron resultados</td>
                            </tr>
                        ) : (
                            dataToShow.map((item, index) => (
                                <tr key={index}>
                                    {columnas.map((columna, index) => (
                                        <td key={index}>{item[columna.identificador]}</td>
                                    ))}
                                </tr>
                            ))
                        )
                    }
                    
                </tbody>
            </table>    
        </div>
        
        {/* //paginacion */}
        <div>
            <button onClick={() => changeCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&#60; Anterior</button>
            {getPageNumbersToShow().map((number, index) => (
                <button key={index} onClick={() => {
                    if(number !== '...'){
                        changeCurrentPage(number)
                    }
                }} disabled={number === currentPage}>{number}</button>
            ))}
            <button onClick={() => changeCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}> Siguiente &#62;</button>
        </div>

        </div>
    );
}