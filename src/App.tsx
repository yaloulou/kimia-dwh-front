import type { ReactNode } from 'react'
import './App.css'

const loginUrl = import.meta.env.VITE_LOGIN_URL?.trim() || '/login'
const logoUrl = `${import.meta.env.BASE_URL}kimia-logo.png`
const landscapeUrl = `${import.meta.env.BASE_URL}kimia-territoire.jpg`

const iconPaths = {
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  activity: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M6.5 12h3l1.5-4 2.5 8 1.5-4h2.5" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-14.8a3 3 0 0 1 0 5.6M21 20v-2a4 4 0 0 0-3-3.9" /></>,
  hospital: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M12 7v6m-3-3h6m-5 11v-4h4v4" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6" /><path d="m15.2 15.2 4.3 4.3" /></>,
  folders: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  table: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M3 14.5h18M10 9v11" /></>,
  download: <><path d="M12 3v12m-4-4 4 4 4-4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" /></>,
  code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18" /></>,
  provenance: <><path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v5h5m-10 7 2 2 4-4" /></>,
} satisfies Record<string, ReactNode>

function Icon({ name, size = 20 }: { name: keyof typeof iconPaths; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  )
}

const themes = [
  {
    icon: 'activity',
    color: 'amber',
    title: 'Maladies tropicales négligées',
    description: 'Données d’études sur la répartition de ces maladies et l’évaluation des interventions de lutte.',
  },
  {
    icon: 'people',
    color: 'blue',
    title: 'Démographie',
    description: 'Données d’enquêtes sur la composition des ménages, la fécondité et la mortalité.',
  },
  {
    icon: 'hospital',
    color: 'green',
    title: 'Systèmes de santé',
    description: 'Données d’études sur l’accès aux soins, le recours aux services et le fonctionnement des établissements de santé.',
  },
] as const

const features = [
  {
    icon: 'search',
    title: 'Recherche par mot-clé',
    description: 'Retrouvez un jeu de données par son nom ou par un mot-clé lié à l’étude.',
  },
  {
    icon: 'folders',
    title: 'Navigation par catégorie',
    description: 'Repérez les jeux de données liés à votre question de recherche.',
  },
  {
    icon: 'table',
    title: 'Aperçu des données',
    description: 'Examinez les variables et quelques lignes pour voir si les données répondent à votre question.',
  },
  {
    icon: 'download',
    title: 'Téléchargement multiformat',
    description: 'Choisissez le format adapté à votre analyse parmi CSV, Excel et Parquet.',
  },
  {
    icon: 'code',
    title: 'Accès depuis Python et R',
    description: 'Chargez les données dans vos scripts à partir d’un lien web.',
  },
  {
    icon: 'provenance',
    title: 'Provenance des données',
    description: 'Identifiez l’étude d’origine et consultez les méthodes de collecte et de traitement documentées.',
  },
] as const

function Brand() {
  return (
    <a className="brand" href="#accueil" aria-label="KIMIA Data Warehouse, accueil">
      <img src={logoUrl} width="40" height="40" alt="" />
      <span className="brand-text">
        <strong>KIMIA</strong>
        <span>Data Warehouse</span>
      </span>
    </a>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header" id="accueil">
        <div className="page-width header-inner">
          <Brand />
          <nav className="site-nav" aria-label="Navigation principale">
            <a href="#accueil" aria-current="page">Accueil</a>
            <a href="#thematiques">Thématiques</a>
            <a href="#fonctionnalites">Fonctionnalités</a>
          </nav>
          <a className="button-login" href={loginUrl}>Se connecter</a>
        </div>
      </header>

      <main id="contenu">
        <section aria-labelledby="hero-title">
          <div className="page-width hero-intro">
            <h1 id="hero-title">Les données de recherche de la KSPH</h1>
            <div className="hero-summary">
              <p>
                KIMIA est l’entrepôt des jeux de données issus des études de la Kinshasa School of Public Health.
                Il a pour objectif de faciliter leur réutilisation pour de nouvelles analyses en santé publique.
              </p>
              <a className="hero-link" href="#thematiques">
                Explorer les thématiques <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <figure className="hero-figure">
            <img src={landscapeUrl} alt="" width="1448" height="1086" fetchPriority="high" />
{/*             <figcaption className="page-width">Illustration inspirée du fleuve Congo, près de Kinshasa.</figcaption>
 */}          </figure>
        </section>

        <section className="page-width themes-section" id="thematiques" aria-labelledby="themes-title">
          <h2 id="themes-title">Thématiques de recherche</h2>
          <p className="section-description">Exemples de thématiques pour parcourir les jeux de données.</p>
          <ul className="themes-grid">
            {themes.map(({ icon, color, title, description }) => (
              <li className="theme" key={icon}>
                <div className={`theme-icon theme-icon-${color}`}><Icon name={icon} size={23} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="features-section" id="fonctionnalites" aria-labelledby="features-title">
          <div className="page-width">
            <h2 id="features-title">Trouver et réutiliser les données</h2>
            <ul className="features-grid">
              {features.map(({ icon, title, description }) => (
                <li className="feature" key={icon}>
                  <Icon name={icon} size={21} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <Brand />
          <div className="footer-affiliation">
            <p>KSPH Initiative for Modelling, Innovation and Data Analysis</p>
            <p>Kinshasa School of Public Health</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

