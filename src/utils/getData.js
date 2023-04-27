export default function getData() {
    
    let aux = [
        { id: "075", comercio: "Comercio 1", cuit: "20-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "076", comercio: "Comercio 2", cuit: "21-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "077", comercio: "Comercio 3", cuit: "22-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "078", comercio: "Comercio 4", cuit: "23-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "079", comercio: "Comercio 5", cuit: "24-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "080", comercio: "Comercio 6", cuit: "25-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "081", comercio: "Comercio 7", cuit: "26-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "082", comercio: "Comercio 8", cuit: "27-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "083", comercio: "Comercio 9", cuit: "28-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "084", comercio: "Comercio 10", cuit: "29-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "085", comercio: "Comercio 11", cuit: "30-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 0, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "086", comercio: "Comercio 12", cuit: "31-12345678-9", c1: 100, c2: 200, c3: 300, c4: 0, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "087", comercio: "Comercio 13", cuit: "32-12345678-9", c1: 100, c2: 200, c3: 0, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "088", comercio: "Comercio 14", cuit: "33-12345678-9", c1: 100, c2: 0, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "089", comercio: "Comercio 15", cuit: "34-12345678-9", c1: 0, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "090", comercio: "Comercio 16", cuit: "35-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 0, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "091", comercio: "Comercio 17", cuit: "36-12345678-9", c1: 100, c2: 200, c3: 300, c4: 0, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "092", comercio: "Comercio 18", cuit: "37-12345678-9", c1: 100, c2: 200, c3: 0, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "093", comercio: "Comercio 19", cuit: "38-12345678-9", c1: 100, c2: 0, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        { id: "094", comercio: "Comercio 20", cuit: "39-12345678-9", c1: 0, c2: 200, c3: 300, c4: 400, c5: 500, c6: 600, balanceActual: 7200, estatus: false, ultimaVenta: "20/10/2021" },
        { id: "095", comercio: "Comercio 21", cuit: "40-12345678-9", c1: 100, c2: 200, c3: 300, c4: 400, c5: 0, c6: 600, balanceActual: 7200, estatus: true, ultimaVenta: "20/10/2021" },
        
    ]

    let response = {
        data: aux,
        page: 1,
        pages: 1000000,
        rowsPerPage: 10,
        total: 10000000
    }

    return response
}