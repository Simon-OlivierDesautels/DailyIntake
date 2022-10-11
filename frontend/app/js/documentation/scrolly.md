# Scrolly

Ce composant permet d'instancier un systѐme d'animations qui ont lieu sur les différents éléments du site pendant le défilement de la page. Cette composante vous aidera pour la création de scrollytelling.

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, il est obligatoire d'ajouter **data-component="Scrolly"** sur un div englobant tout le site (Un conseil: Ajoutez le sur votre div container).

Ensuite, il faudra ajouter un **data-scrolly** spécifique sur chacun des éléments que vous désirez animer. Les différents data-scrolly possibles sont ceux-ci:

### **data-scrolly="fromBottom"**

### **data-scrolly="fromLeft"**

### **data-scrolly="fromRight"**

### **data-scrolly="flipFromBottom"**

Ceux-ci sont ceux présentemment installé, mais vous pourriez evidemment créer vos propre noms de data-scrolly spécifiquement aux animations que vous créerez.

La seule chose qui importe, c'est ce que vous ferez en SCSS.

<details>
<summary>Exemple complet</summary>

```
  <section class="hero">
                <div class="wrapper grid">
                    <h1 class="hero__title" data-scrolly="fromBottom">
                        <br />Le coffre à outils <br />que tu&nbsp;attendais
                    </h1>
                    <div class="hero__content card" data-scrolly="fromRight">
                        héro
                    </div>
                </div>
            </section>

```

</details>

<br><br>

# Scss

Dans votre scss, il est crucial que vous créez des sélécteurs qui ont le même nom que les "data-scrolly" que vous aurez choisis en html juste avant. Ainsi, nommez les comme vous voulez, assurez vous juste de les avoir bien identifié ici.

Ce sont ensuite dans ces sélecteurs que vous pourrez déterminer vos animations.

<details>
<summary>Exemple complet</summary>

```
 [data-scrolly='fromBottom'] {
        opacity: 0;
        transition: all 0.4s ease-out;
        transform: translateY(60px);

        &.is-active {
            opacity: 1;
            transform: translateY(0);
        }
    }
```

</details>

<br><br>

# Javascript

Finalement, le Javascript. Celui-ci est trѐs simple. Tout ce qu'il faut retenir, c'est de rajouter la ligne _import Scrolly from './components/Scrolly';_ dans notre Main.js. Cette ligne créera un lien vers le deuxieme script de notre projet se nommant Scrolly.js. Ce deuxieme script servant à créer un "cadre" dans la page web. Dѐs que les items interagiront avec ce cadre, les animations se déclancheront.

# Crédit

Cette librairie est une création de Maxime Picard, pour le département TIM de Varennes.

