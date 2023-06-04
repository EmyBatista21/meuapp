

export const Welcome = (props) => {
    return(
        <div>
            <h2>Bem vinda {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
};

