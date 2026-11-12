import React from "react";

function Content() {
  return (
    <>
      {/* <!-- ===================== ZONE DE CONTENU ===================== --> */}
      <main className="app-content p-3 p-lg-4">
        {/* <!-- COMPOSANT : PageHeader (titre, sous-titre, action) --> */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <div>
            <h2 className="h4 mb-0">Toutes les tâches</h2>
            <p className="text-secondary mb-0">200 tâches, dont 90 terminées</p>
          </div>
          <button className="btn btn-primary">
            <i className="bi bi-plus-lg me-1"></i>Nouvelle tâche
          </button>
        </div>

        {/* <!-- COMPOSANT : FilterBar (filtre sur completed) --> */}
        <div
          className="btn-group mb-3"
          role="group"
          aria-label="Filtrer les tâches"
        >
          <button type="button" className="btn btn-outline-primary active">
            Toutes
          </button>
          <button type="button" className="btn btn-outline-primary">
            À faire
          </button>
          <button type="button" className="btn btn-outline-primary">
            Terminées
          </button>
        </div>

        {/* <!-- ===================== COMPOSANT : TodoTable ===================== --> */}
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              {/* <!-- COMPOSANT : TableHeader (liste de colonnes) --> */}
              <thead className="table-light">
                <tr>
                  <th scope="col" style={{ width: "3rem" }}>
                    <span className="visually-hidden">Terminée</span>
                  </th>
                  <th scope="col">#</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Utilisateur</th>
                  <th scope="col">Statut</th>
                  <th scope="col" className="text-end">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- COMPOSANT : TodoRow (un todo) --> */}
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 1 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">1</td>
                  <td className="fw-medium">delectus aut autem</td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 1"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 1"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 2 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">2</td>
                  <td className="fw-medium">
                    quis ut nam facilis et officia qui
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 2"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 2"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 3 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">3</td>
                  <td className="fw-medium">fugiat veniam minus</td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 3"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 3"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked
                      aria-label="Marquer la tâche 4 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">4</td>
                  <td className="fw-medium text-decoration-line-through text-secondary">
                    et porro tempora
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-success">Terminée</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 4"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 4"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 5 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">5</td>
                  <td className="fw-medium">
                    laboriosam mollitia et enim quasi adipisci quia provident
                    illum
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 5"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 5"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 6 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">6</td>
                  <td className="fw-medium">
                    qui ullam ratione quibusdam voluptatem quia omnis
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 6"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 6"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 7 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">7</td>
                  <td className="fw-medium">
                    illo expedita consequatur quia in
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 7"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 7"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked
                      aria-label="Marquer la tâche 8 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">8</td>
                  <td className="fw-medium text-decoration-line-through text-secondary">
                    quo adipisci enim quam ut ab
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-success">Terminée</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 8"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 8"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      aria-label="Marquer la tâche 9 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">9</td>
                  <td className="fw-medium">molestiae perspiciatis ipsa</td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-warning">À faire</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 9"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 9"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked
                      aria-label="Marquer la tâche 10 comme terminée"
                    />
                  </td>
                  <td className="text-secondary">10</td>
                  <td className="fw-medium text-decoration-line-through text-secondary">
                    illo est ratione doloremque quia maiores aut
                  </td>
                  <td>Utilisateur 1</td>
                  {/* <!-- COMPOSANT : StatusBadge (completed → libellé + couleur) --> */}
                  <td>
                    <span className="badge text-bg-success">Terminée</span>
                  </td>
                  {/* <!-- COMPOSANT : RowActions --> */}
                  <td className="text-end text-nowrap">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      aria-label="Modifier la tâche 10"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      aria-label="Supprimer la tâche 10"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- COMPOSANT : Pagination --> */}
          <div className="card-footer bg-white d-flex flex-wrap justify-content-between align-items-center gap-2">
            <small className="text-secondary">Tâches 1 à 10 sur 200</small>
            <nav aria-label="Pagination des tâches">
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Précédent
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item disabled">
                  <span className="page-link">…</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    20
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Suivant
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- =================== FIN COMPOSANT : TodoTable =================== --> */}
      </main>
    </>
  );
}

export default Content;
