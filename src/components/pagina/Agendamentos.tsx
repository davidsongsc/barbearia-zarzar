import React, { useState, useEffect } from 'react';
import DisponibilidadeIcones from '../corpo/Disponibilidade';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Galeria from './Galeria';
import IconIndisponivel from '../corpo/IconIndisponivel';
import IconOcupado from '../corpo/IconOcupado';
import IconDisponivel from '../corpo/IconDisponivel';


const Agendamentos: React.FC = () => {
    const [mostrarTodasAsSemanas, setMostrarTodasAsSemanas] = useState(false);
    const [agendamentos, setAgendamentos] = useState<string[][]>([]); // Array de agendamentos
    const [horariosIndisponiveis, setHorariosIndisponiveis] = useState<string[]>([]); // Horários indisponíveis

    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    // Função para gerar horários disponíveis
    const gerarHorarios = (diaAtual: Date) => {
        const horarios = [];
        const dataAtual = new Date(); // Obter a data e hora atual
        const diaDaSemana = diaAtual.getDay(); // Obtém o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
        const abertura = 9; // Hora de abertura padrão
        const diaFolgaSemana = 1;
        const fechamentoNormal = 21;
        const fechamentoSegunda = 12;
        const fechamento = (diaDaSemana === diaFolgaSemana) ? fechamentoSegunda : fechamentoNormal; // Hora de fechamento: 12h para domingo, 20h para outros dias
        const diaIndex = gerarProximosDias().findIndex((data) => data.getDate() === diaAtual.getDate());
        const agendamentosDoDia = agendamentos[diaIndex] || [];

        for (let hora = abertura; hora <= fechamento; hora++) {
            for (let minuto = 0; minuto < 60; minuto += 30) {
                const horario = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
                let disponibilidade: 'disponivel' | 'ocupado' | 'indisponivel' = 'disponivel';
                if (agendamentosDoDia.includes(horario)) {
                    disponibilidade = 'ocupado'; // Marcar como ocupado
                } else if (horariosIndisponiveis.includes(horario)) {
                    disponibilidade = 'indisponivel'; // Marcar como indisponível
                }
                // Verificar se o dia é igual ao dia atual
                if (
                    diaAtual.getDate() === dataAtual.getDate() &&
                    diaAtual.getMonth() === dataAtual.getMonth() &&
                    diaAtual.getFullYear() === dataAtual.getFullYear()
                ) {
                    // Verificar se o horário é igual ou anterior ao horário atual
                    if (
                        dataAtual.getHours() > hora ||
                        (dataAtual.getHours() === hora && dataAtual.getMinutes() >= minuto)
                    ) {
                        disponibilidade = 'indisponivel'; // Marcar como indisponível
                    }
                }

                if (horariosIndisponiveis.includes(horario)) {
                    disponibilidade = 'indisponivel'; // Marcar como indisponível se também estiver na lista de horários indisponíveis
                } else if (diaDaSemana === diaFolgaSemana) {
                    disponibilidade = 'ocupado'; // Segunda-feira: Marcar como ocupado
                }

                // Renderizar o ícone com base no estado de disponibilidade
                let IconComponent;
                if (disponibilidade === 'disponivel') {
                    IconComponent = IconDisponivel;
                } else if (disponibilidade === 'indisponivel') {
                    IconComponent = IconIndisponivel;
                } else {
                    IconComponent = IconOcupado;
                }

                horarios.push({ horario, disponibilidade, Icon: <IconComponent /> });
            }
        }

        return horarios;
    };



    // Função para gerar os próximos dias
    // Função para gerar os próximos dias
    const gerarProximosDias = () => {
        const dataAtual = new Date();
        const dias = [dataAtual];

        for (let i = 1; i < (mostrarTodasAsSemanas ? 7 : 7); i++) {
            const proximoDia = new Date(dataAtual);
            proximoDia.setDate(dataAtual.getDate() + i);
            dias.push(proximoDia);
        }

        // Certifique-se de que o dia atual seja sempre o primeiro da lista
        return dias.sort((a, b) => a.getTime() - b.getTime());
    };


    const listaDias = gerarProximosDias(); // Defina listaDias usando a função gerarProximosDias

    const [diaAtual, setDiaAtual] = useState(listaDias[0]);

    // Função para agendar um horário em um dia específico
    const agendarHorario = (dia: Date, horario: string) => {
        // Crie uma cópia do estado atual de agendamentos
        const novosAgendamentos = [...agendamentos];

        // Encontre o índice do dia no array de datas
        const diaIndex = gerarProximosDias().findIndex((data) => data.getDate() === dia.getDate());

        // Verifique se o dia é válido e se o horário não está em horários indisponíveis
        if (diaIndex !== -1 && !horariosIndisponiveis.includes(horario)) {
            // Se o array de agendamentos para o dia ainda não existir, crie-o
            if (!novosAgendamentos[diaIndex]) {
                novosAgendamentos[diaIndex] = [];
            }

            // Agende o horário para o dia especificado
            novosAgendamentos[diaIndex].push(horario);

            // Atualize o estado de agendamentos
            setAgendamentos(novosAgendamentos);
        }
        // Atualize o estado de agendamentos com os novos agendamentos
        setAgendamentos(novosAgendamentos);

    };

    useEffect(() => {
        // Carregar os horários indisponíveis inicialmente (por exemplo, 13:00 e 13:30)
        setHorariosIndisponiveis(['13:00', '13:30']);
    }, []);

    return (
        <>
            <Galeria />

            <div className="agendamento-pagina ">
                <Tabs>
                    <TabList className='lista-horarios-ag'>
                        {listaDias.map((dia, index) => (
                            <Tab key={index}>{diasDaSemana[dia.getDay()]}</Tab>
                        ))}
                    </TabList>
                    {gerarProximosDias().map((dia, index) => (

                        <TabPanel key={index} className="tabela-agendamentos" style={{ display: 'flex' }}>
                            {/* Renderize os horários para o dia específico aqui */}
                            {gerarHorarios(dia).map((item, horarioIndex) => (
                                <div key={horarioIndex} onClick={() => agendarHorario(dia, item.horario)} className={`agendamento-horario ${item.disponibilidade}`} >
                                    <p>{item.horario}</p>
                                    <DisponibilidadeIcones estado={diaAtual.getDate() === diaAtual.getDate() ? item.disponibilidade : 'disponivel'} />
                                    {/* Botão para agendar horário */}

                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </Tabs>
            </div >
        </>
    );
};

export default Agendamentos;
