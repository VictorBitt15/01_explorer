
const repositoryName = 'unform'
export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
        
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in ReactJS</p>

                    <a href="">
                        Acessar repositório
                    </a>
                </li>
            </ul>
        </section>

    );
}