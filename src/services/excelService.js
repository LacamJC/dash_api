const { Filter, FilterData, FilterByInterval } = require("../utils/filters")
const { readExcel } = require("../utils/functions")

exports.getAllData = () => {
    const data = readExcel()
    let total_chamados = data.length;
    let filtro = { UltimaSituacao: "Finalizada" }
    let chamados_finalizados = FilterData(data, filtro).length
    let chamados_em_aberto = total_chamados - chamados_finalizados
    let a = FilterData(data, filtro)

    /**
     * Média dos chamados finalizados
     */
    let finalizados = FilterData(data, filtro).length

    let media_mensal = Math.floor(finalizados / 18) // Media de todos os meses

    const trimestral = () => {
        let finalizados = FilterData(data, filtro) // Chama os casos finalizados

        let ultimo_trimestre = FilterByInterval(data, '2024-06-01', '2025-03-31', "DataDeFinalizacao").length


        return Math.floor(ultimo_trimestre / 9)

    }

    let media_trimestral = trimestral()


    let media_anual = Math.floor(finalizados / 3) // Media dos 3 anos


    // 

    const response = {
        titulo: "Informações da planilha secor",

        metricas: {
            Total_de_chamados: total_chamados,
            chamados_finalizados: chamados_finalizados,
            chamados_em_aberto: chamados_em_aberto,
            medias: {
                mensal: media_mensal,
                trimestral: media_trimestral,
                anual: media_anual
            }

        },

        periodo: {

        }
    }
    return response
}

exports.getByFilters = (data) => {
    const { filtros } = data

    let campos = filtros.join()



    return Filter(readExcel(), campos)
}


exports.getStaticsByCategory = (req) => {
    const { categoria, prioridade } = req
    const data = readExcel()
    // const categoria = "Desenvolvimento"
    var filtro
    var qtd
    if (prioridade) {
        filtro = { UltimaSituacao: "Finalizada", Categoria: categoria, Prioridade: prioridade }
    } else {
        filtro = {
            UltimaSituacao: "Finalizada", Categoria: categoria
        }
    }


    let res = FilterData(data, filtro)
    let finalizados = FilterData(data, filtro)

    qtd = finalizados.length

    let porcentagem
    let qtd_finalizados = FilterData(data, { UltimaSituacao: "Finalizada" })

    porcentagem = Math.floor((qtd * 100) / qtd_finalizados.length)
    total_porcentagem = Math.floor((res.length * 100) / data.length)


    const message = {
        categoria: categoria,
        // prioridade: prioridade ?? "",
        chamados: {
            quantidade: res.length,
            finalizados: finalizados.length,
            em_aberto: res.length - finalizados.length

        },
        metricas: {
            porcentagem: {
                // total : total_porcentagem,
                finalizados: porcentagem,

            }
        }

    }


    return message
}


exports.getTendencia = (query) => {
    const { categoria } = query
    const data = readExcel()

    const data_ultimos_6_meses = [
        {
            dataInicio: "2024-10-01",
            dataFim: "2024-10-31",
        },
        {
            dataInicio: "2024-11-01",
            dataFim: "2024-11-30",
        },
        {
            dataInicio: "2024-12-01",
            dataFim: "2024-12-31",
        },
        {
            dataInicio: "2025-01-01",
            dataFim: "2025-01-31",
        },
        {
            dataInicio: "2025-02-01",
            dataFim: "2025-02-28",
        },
        {
            dataInicio: "2025-03-01",
            dataFim: "2025-03-31",
        }
    ];

  


    var filtros = { UltimaSituacao: "Finalizada", Categoria: categoria }
    var campos = "Categoria,UltimaSituacao"
    var res = FilterData(data, filtros)
    var tendencia = []
    // res = FilterByInterval(res, data_ultimos_6_meses[0].dataInicio, data_ultimos_6_meses[0].dataFim, "DataDeFinalizacao")
    // res = Filter(res, campos)

    var total = 0

    const nomes_meses = [
        "Outubro/2024",
        "Novembro/2024",
        "Dezembro/2024",
        "Janeiro/2025",
        "Fevereiro/2025",
        "Março/2025"
    ]
    data_ultimos_6_meses.forEach((data, index) => {
        let filter = FilterByInterval(res, data.dataInicio, data.dataFim, "DataDeFinalizacao")
        console.log(filter)
        total += filter.length
        let formatar = {
            mes : nomes_meses[index],
            quantidade : filter.length
        }
        tendencia.push(formatar)
    })


    if (res.length <= 0 || !res) {
        return { message: `Não houveram casos da categoria ${categoria}` }
    }

    const message = {
        categoria: `${categoria}`,
        total_chamados_finalizados: total,
        tendencia
    }


    return message
}
