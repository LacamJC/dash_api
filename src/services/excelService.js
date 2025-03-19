const { Filter, FilterData } = require("../utils/filters")
const { readExcel } = require("../utils/functions")

exports.getAllData = () => {
    const data = readExcel()
    let total_chamados = data.length;
    let filtro = { UltimaSituacao : "Finalizada"}
    let chamados_finalizados = FilterData(data, filtro).length
    let chamados_em_aberto = total_chamados - chamados_finalizados
    let a = FilterData(data, filtro)
    return {
        message: "Informações da planilha",
        Total_de_chamados: total_chamados,
        chamados_finalizados: chamados_finalizados,
        chamados_em_aberto: chamados_em_aberto,
        planilha: a
    }
}

exports.getByFilters = (data) => {
    const { filtros } = data

    let campos = filtros.join()



    return Filter(readExcel(), campos)
}
