# Header

Ce composant permet d'instancier un header responsive, animé et qui se modifie au scroll. Elle permet aussi de créer un menu mobile qui se ferme et s'ouvre avec l'utilisation d'un bouton hamburger.

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, créer une zone header, qui possѐde une classe header et l'attribut **data-component="Header"**. Dans cette zone, on pourra y ajouter une nav et un bouton.

<details>
<summary>Exemple complet</summary>

```
 <header class="header" data-component="Header">
                <a href="index.html" class="header__brand">
                    <img src="assets/images/logo-timtools.svg" alt="TimTools" />
                </a>
                <nav class="nav-primary">
                    <ul>
                        <li>
                            <a href="#" class="nav-primary__item">Menu 1</a>
                        </li>
                        <li>
                            <a href="#" class="nav-primary__item">Menu 2</a>
                        </li>
                        <li class="nav-right">
                            <a href="#" class="nav-primary__item">Menu 3</a>
                        </li>
                        <li>
                            <a href="#" class="nav-primary__item">Menu 4</a>
                        </li>
                    </ul>
                </nav>
                <button class="header__toggle js-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
```

</details>

<br><br>

# Scss

Dans notre scss, nous aurons plusieurs styles et animations que vous pourrez personnaliser à votre gout. L'important est surtout de comprendre le role des différentes classes que j'ai utilisé.

### **.is-scrolling-down**

Cette classe, determinée grace à du JavaScript, permet de déterminer si l'utilisateur navigue vers le bas dans notre page. Grace à cette variable, on peut ajouter des animations sur notre page, ou on peut restreindre des animations seulement à un scroll vers le bas ou vers le haut.

### **.is-scrolling-up**

Cette classe, determinée grace à du JavaScript, permet de déterminer si l'utilisateur navigue vers le haut dans notre page. Grace à cette variable, on peut ajouter des animations sur notre page, ou on peut restreindre des animations seulement à un scroll vers le bas ou vers le haut.

### **.header-is-hidden**

Cette classe permet de faire disparaitre le menu dѐs que l'utilisateur a défilé une certaine limite sur la page. Si la classe est active, le menu est caché, si la classe est inactive, le menu est visible.

### **.nav-is-active**

Cette classe permet de déterminer si le menu hamburger s'ouvre. Si la classe est active, ca ouvre notre menu hamburger en mode mobile. Si la classe est inactive, le menu hamburger est fermé. Cette classe est inutile en mode desktop.

<details>
<summary>Un exemple plus ou moins pertinent du code scss utilisant ces variables</summary>

```
.header {
    --header-height: 100px;
    --logo-width: 200px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    height: var(--header-height);
    width: 100%;
    z-index: 10;
    position: sticky;
    top: 0;
    left: 0;
    transition: all 0.4s $ease-out-expo;

    &::before {
        background-color: var(--color-bg-secondary);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    @media screen and (min-width: $breakpoint-md) {
        padding: calc(var(--spacing-md) / 2) var(--spacing-md);
        justify-content: center;
    }

    .header-is-hidden.is-scrolling-down & {
        transform: translateY(-100%) translateY(4px);
    }
}

.header__brand {
    width: 200px;
    position: relative;
    z-index: 10;

    @media screen and (min-width: $breakpoint-md) {
        position: absolute;
        margin: auto;
    }
}

.header__toggle {
    --bar-width: 50px;
    --bar-height: 8px;
    --bar-spacer: 6px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    padding: 0;
    position: relative;
    width: var(--bar-width);
    height: var(--bar-width);
    z-index: 10;

    span {
        background: var(--color-white);
        border-radius: 3px;
        display: block;
        height: var(--bar-height);
        width: var(--bar-width);
        position: absolute;
        top: calc(50% - var(--bar-height) / 2);
        left: calc(50% - var(--bar-width) / 2);

        transition: 0.3s all;

        &:nth-child(1) {
            top: calc(
                50% - var(--bar-height) / 2 - var(--bar-height) -
                    var(--bar-spacer)
            );
        }
        &:nth-child(3) {
            top: calc(
                50% - var(--bar-height) / 2 + var(--bar-height) +
                    var(--bar-spacer)
            );
        }
    }

    .nav-is-active & {
        span {
            top: calc(50% - var(--bar-height) / 2);
            &:nth-child(1) {
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                transform: scaleX(0);
            }
            &:nth-child(3) {
                transform: rotate(-45deg);
            }
        }
    }

    @media screen and (min-width: $breakpoint-md) {
        display: none;
    }
}

.nav-primary {
    background-color: var(--color-bg-secondary);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding-top: var(--header-height);
    display: flex;
    overflow-y: auto;
    z-index: 1;
    transition: all 0.4s $ease-out-expo;
    transform: translateY(-100%);

    @media screen and (min-width: $breakpoint-md) {
        transform: none;
        position: relative;
        height: auto;
        width: auto;
        padding-top: 0;
        display: block;
        z-index: 2;
    }

    .nav-is-active & {
        transform: translateY(0);
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
        width: 100%;
        margin: auto;
        transition: all 5s $ease-out-back;
        transform: translateY(-70%);
        opacity: 0;

        .nav-is-active & {
            transform: translateY(0);
            opacity: 1;
        }

        @media screen and (min-width: $breakpoint-md) {
            flex-direction: row;
            opacity: 1;
            transform: none;
        }
    }

    .nav-right {
        @media screen and (min-width: $breakpoint-md) {
            margin-left: calc(var(--logo-width) + 40px);
        }
    }
}

.nav-primary__item {
    font-size: var(--font-size-h1);
    color: var(--color-white);
    text-transform: uppercase;
    padding: 0 20px;
    position: relative;
    display: block;
    text-align: center;

    &::before {
        display: block;
        position: absolute;
        top: 100%;
        left: 20px;
        height: 2px;
        width: calc(100% - 40px);
        content: '';
        background-color: white;
        transform: scaleX(0);
        transition: 0.3s all;
    }

    &:hover {
        color: inherit;
    }

    @media screen and (min-width: $breakpoint-md) {
        font-size: var(--font-size-h2);
        color: var(--color-white);
        padding: 0 20px;
        position: relative;
        text-transform: none;
        display: inline;

        &::before {
            display: block;
            position: absolute;
            top: 100%;
            left: 20px;
            height: 2px;
            width: calc(100% - 40px);
            content: '';
            background-color: white;
            transform: scaleX(0);
            transition: 0.3s all;
        }

        &:hover {
            text-decoration: none;
            color: inherit;
            &::before {
                transform: scaleX(1);
            }
        }
    }
}

.nav-is-active {
    body {
        overflow: hidden;
    }
}

```

</details>

# Js

Tout ce qu'il faut retenir, c'est de rajouter la ligne _import Header from './components/Header';_ dans notre Main.js.


# Variantes

Il y a deux attribut que vous pouvez modifiez afin de personnaliser votre header. 

### **data-cache**

Cet attribut est situé sur votre balise header. Cet attribut permet d'ajouter l’option afin de permettre ou non que le header se cache automatiquement.

Par défaut, _data-cache="true"_ , le menu va donc se cacher, mais si vous enlever true et le remplacez par false, le menu ne va plus se cacher au défilement. A vous de le changer si vous ne voudriez pas que votre header se cache au scroll.

### **data-scrolllimit**

Cet attribut est situé sur votre balise header. Cet attribut permet d'ajouter l’option de pouvoir changer quand le menu se cache (scrollLimit). Pour ainsi dire, le chiffre que vous mettrez indique a quel pourcentage de la page votre menu va se cacher.

Par défaut, _data-scrolllimit="0.1"_ , le menu header va donc se cacher apres que 10% de la page web est été défilée. A vous de le modifier si vous voulez qu'il se cache plus tot ou plus tard.




# Crédit

Cette librairie est une création de Maxime Picard, pour le département TIM de Varennes.
