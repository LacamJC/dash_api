const { excelSerialDateToJSDate, excelSerialTimeToHMS } = require("./delta")
const { Filter } = require("./filters")

const xlsx = require("xlsx");

const cabecalhos = [
    'Protocolo',
    'Assunto',
    'Categoria',
    'Atendente',
    'Cliente',
    'Prioridade',
    'TempoDeTrabalho',
    'DataDeCriacao',
    'DataDaUltimaSituacao',
    'null',
    'DataDeFinalizacao',
    'null',
    'TipoDeChamado',
    'Status',
    'UltimaSituacao'
];

const caminho = "./src/data/secor.xlsx"



exports.readExcel = () => {
    try {
        const workbook = xlsx.readFile(caminho);
        const nomePlanilha = workbook.SheetNames[0];
        const planilha = workbook.Sheets[nomePlanilha];

        const dados = xlsx.utils.sheet_to_json(planilha, { header: cabecalhos });

        // Converter datas e tempos
        const dadosConvertidos = dados.map(item => {
            if (item.DataDeCriacao) {
                item.DataDeCriacao = excelSerialDateToJSDate(item.DataDeCriacao);
            }
            if (item.DataDaUltimaSituacao) {
                item.DataDaUltimaSituacao = excelSerialDateToJSDate(item.DataDaUltimaSituacao);
            }
            if (item.DataDeFinalizacao) {
                item.DataDeFinalizacao = excelSerialDateToJSDate(item.DataDeFinalizacao);
            }
            if (item.TempoDeTrabalho) {
                item.TempoDeTrabalho = excelSerialTimeToHMS(item.TempoDeTrabalho);
            }
            return item;
        });

        // const filtros = { Prioridade : "Baixa", UltimaSituacao : "Finalizada" }
        // let res = FilterData(dadosConvertidos)
        let res = dadosConvertidos
        // res = Filter(dadosConvertidos, "Protocolo,Cliente,Categoria,Prioridade,TempoDeTrabalho,DataDeCriacao,DataDeFinalizacao")
        res = res.slice(4)
        res.pop()
        res.pop()
        return res;

    } catch (error) {
        console.log(error);
    }
}



