# Modal

Cette composante permet d'instancier un systeme de template simple permettant une ouverture de fenetre modale interactive lors d'un clic sur un bouton.

# Comment l'utiliser

### **HTML**

Il y a deux éléments importants pour le HTML.

1- Les data-components pour déterminer les boutons cliquables pour ouvrir la modale.
Pour ceci c'est trѐs simple, il faut utiliser le _data-component="Modal"_ et le data-modal-id="tpl_modal"

<details>
<summary>Exemple complet</summary>

```
 <section class="section">
                <div class="wrapper">
                    <h2 class="section__title">modal statique</h2>
                    <div class="cards">
                        <a
                            href="#"
                            data-component="Modal"
                            data-modal-id="tpl_modal"
                        >
                            <article class="card">1</article></a
                        >
                    </div>
                </div>
            </section>
```

</details>
<br>

2- Les templates, qui créer, eux, les fenêtres modales. Eux aussi sont trѐs simples. Il vous faut:

un _template id="tpl-modal-tool"_ , nommé comnme vous le voulez. C'est le nom de votre modale, apellez la en fonction de son but

et cette structure de hiérarchie:
<br>
div class="modal"

div class="modal_scrim"

div class="modal_box"

div class="modal_content"

tout ces div auront des roles scss et js précis.

<details>
<summary>Exemple complet</summary>

```
 <template id="tpl_modal">
            <div class="modal">
                <div class="modal_scrim"></div>
                <div class="modal_box">
                    <div class="modal_content">
                        <h2>Ta premiѐre modal de TimTool YAHOO</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus facilis perspiciatis amet
                            adipisci exercitationem minima qui voluptates alias
                            similique odit ab, reprehenderit ullam ut debitis
                            fugiat, dolorum quisquam, sint dolor!
                        </p>
                    </div>
                    <button class="modal__close js-close"></button>
                </div>
            </div>
        </template>
```

</details>

<br><br>

# Scss

Dans notre scss, nous utiliserons les différentes classes de notre template pour styler notre fenetre modale. C'est aussiici qu'on détermine les animations.

ATTENTION: dans ces styles, nous avons utilisé un mixin externe. Il est important d'intégrer le dossier _cover.scss_ disponible dans tools dans votre projet.

# Js

Tout ce qu'il faut retenir, c'est de rajouter la ligne _import Utils from './utilities/Utils';_ dans notre Modal.js.

# Variantes

<br>

### **TITRES RESPONSIVES**

Si vous aviez plusieurs boutons avec des noms d'outils, et que vous voudriez qu'en ouvrant la modale, le contenu de celle-ci se soit modifié en fonction du titre du bouton, c'est possible.

Il faudra utiliser une ligne comme celle-ci dans le HTML de votre template (fenetre modale):
<br>
<br>
 _Tu as choisi {{title}}_ 
 <br>
 <br>
 dans un h2 par exemple

_Tu as choisi_ restera identique d'une modale à l'autre, mais ce qui est dans {{title}} pourra changer pour le texte de votre choix.
<br>
<br>
<br>

Tout ce qu'il vous manque, c'est que quand vous créez vos boutons en html, vous leur rajoutiez 
<br>
<br>
_data-modal-title="CEQueVousVoulezQueLeTitreSoit"_ 
<br>
<br>
Ainsi, le contenu de CEQueVousVoulezQueLeTitreSoit sera remplacé a l'emplacement de _{{title}}_ choisi dans votre template auparavant

<details>
<summary>Exemple </summary>

```
 <section class="section">
                <div class="wrapper">
                    <h2 class="section__title">
                        Une grille qui contient plus que des outils
                    </h2>
                    <div class="cards">
                        <a
                            href="#"
                            data-component="Modal"
                            data-modal-id="tpl-modal-tool"
                            data-modal-title="la scie"
                        >
                            <article class="card">scie</article></a
                        >

                        <a
                            href="#"
                            data-component="Modal"
                            data-modal-id="tpl-modal-tool"
                            data-modal-title="la pelle"
                        >
                            <article class="card">pelle</article></a
                        >

                        <a
                            href="#"
                            data-component="Modal"
                            data-modal-id="tpl-modal-tool"
                            data-modal-title="les pinces"
                        >
                            <article class="card">pince</article></a
                        >

                        <a
                            href="#"
                            data-component="Modal"
                            data-modal-id="tpl-modal-tool"
                            data-modal-title="la lime"
                        >
                            <article class="card">lime</article></a
                        >
                    </div>
                </div>
            </section>
```

</details>

Dans cet exemple, les 4 outils différents ont un attribut _data-modal-title_ avec leur titre personnalisé pour leur modal.

ATTENTION: le template dans lequel vous codez ces titres devra etre le meme que dans la fonction JS _updateContent()_

<br>

# Crédit

Cette librairie est une création de Maxime Picard, pour le département TIM de Varennes.
