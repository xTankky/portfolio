import React from 'react'
import './More.css'
import CV from './CV.pdf';

const More = () => {
    return (
        <div className="More-Wrapper">
            <p>
                Bonjour ! <br />
                Si vous êtes ici, c'est pour en apprendre plus sur moi ou le site Web.
            </p>
            <p>
                <u><b>A propos de moi :</b></u><br />
                <p>
                    Je m'appelle Jonathan, j'ai 22 ans et je suis passioné par la programmation.
                    J'ai commencé au lycée avec l'option ISN et je n'ai jamais arrêté depuis. <br />
                    Je me suis essayé à toutes sortes de programmation :
                    <ul className="More-Coding-List">
                        <li className="More-Class">IHM</li>
                        <li className="More-Class More-Hobby">Web</li>
                        <li className="More-Hobby">Jeu vidéo</li>
                        <li className="More-Hobby">Application</li>
                        <li className="More-Class">Système embarqué</li>
                        <li className="More-Hoby">Traitement de données</li>
                    </ul>
                    La plupart de ces essais sont réalisés sur mon <span className="More-Hobby">temps libre</span> mais certains ont été fait <span className="More-Class">en cours</span>. <br />
                </p>
                <p>
                    Je suis actuellement en recherche d'emploi,
                    je ne dispose pas encore du permis B
                    et je suis disponible dans la Région Hauts de France / Normandie facilement. <br />
                    Vous pouvez voir mon CV <a href={CV} target="_blank" rel="noopener noreferrer">ici</a>.
                </p>
            </p>
            <p>
                <u><b>A propos de ce site :</b></u><br />
                <p>
                    Ce site a été créée en autodidacte avec ReactJS.
                    C'est mon premier coup d'essai avec ReactJS et j'apprécie beaucoup.<br />
                    Conçu d'abord comme un site Portfolio, il me permet l'accès à mon Cloud personnel. <br />
                    Certains ajouts sont prévus, pas forcément professionnels.
                    Le code est disponible sur <a href="https://github.com/xTankky/portfolio" target="_blank" rel="noopener noreferrer">Github</a>.
                </p>
                <p>
                    Liste des modules React utilisés :
                    <ul>
                        <li>React-Router</li>
                        <li>React-Responsive-Carousel</li>
                    </ul>
                </p>
                <p>
                    En développant ce site, je me suis mis en tête d'utiliser le potentiel de React le plus possible et d'écrire un code flexible.
                </p>
            </p>
        </div>
    )
}

export default More
