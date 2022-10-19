import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Descricao, Foto, Informacoes, ItemLIsta, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLIsta key={professor.id }>
                            <Foto src={professor.foto}></Foto>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-br', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%' }}>Marcar aula com Leandro</Button>
                            </Informacoes>
                        </ItemLIsta>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado.</ListaVazia>
            )}
        </div>
    )
}

export default Lista