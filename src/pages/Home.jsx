import Table from "../components/Table";

export default function Home() {
    const ProccessData = (data) => {
        let aux = []
        data.forEach((item) => {
            aux.push({
                ...item,
                estatus_show: item.estatus ? "Activo" : "Inactivo",
                estatus: item.estatus,
            })
        })

        return aux
    }

    return (
        <div>
        <Table ProccessData={ProccessData} />
        </div>
    );
}
