import "../styles/Contato.css"

export default function Contato() {
    return (
        <div className="contato" id="contato">
            <div className="contato-texto">
                <h1>Contato</h1>
                <p>Se interessou? Vamos criar algo juntos! </p>
            </div>
                <form>
                    <div className="form-group">
                        <input type="text" id="nome" name="nome" placeholder="NOME" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="E-MAIL" />
                    </div>
                    <div className="form-group">
                        <textarea id="mensagem" name="mensagem" placeholder="MENSAGEM"></textarea>
                    </div>
                    <div className="btn-wrapper">
                        <button type="submit">ENVIAR</button>
                    </div>
                </form>
        </div>
    )
}

