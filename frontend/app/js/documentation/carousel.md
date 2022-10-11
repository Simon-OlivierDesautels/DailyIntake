# Carousel

Cette composante permet d'instancier un carousel sur un élément html.

<br><br>

# Dépendance

### Swiper

Afin d'utiliser cette composante, vous devrez vous assurer que Swiper soit installé dans votre projet.

`npm install swiper`

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Carousel"** sur une structure html respectant celle de la librairie Swiper.

```
<div class="swiper-container" data-component="Carousel">
```

<details>
<summary>Exemple complet</summary>

```
<!-- Slider main container -->
<div class="swiper-container" data-component="Carousel">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>
</div>
```

</details>

<br><br>

### **SCSS**

Pour que les styles soient bien appliqués, il faut importer les styles de bases de Swiper.

```
@import '../../node_modules/swiper/swiper.scss';

// seulement si vous avez des options supplémentaire comme la pagination
@import '../../node_modules/swiper/components/pagination/pagination.scss';

```

Voir la [Documentation complète de Swiper](https://swiperjs.com/swiper-api)

<br><br>

# Js

Tout ce qu'il faut retenir, c'est de rajouter la ligne _import Carousel from './components/Carousel';_ dans notre Main.js.

# Variantes

<br>

### **DÉFAUT**

Cette variante permet d'avoir quatres _slide_ à la fois en desktop et 2 slides a la fois en mobiles, pour un carroussel stylé et adéquat. De plus, cette variante offre unje pagination en mobile et une navigation en desktop.

_Elle ne requiert aucune configuration supplémentaire._

<br>

### **SPLIT**

Cette variante permet d'avoir 2 _slides_ du carousel visible en simultanné sur grand écran (1024px et plus), mais seulement une _slide_ sur écran plus petit (1023px et moins).
Pour activer cette variante, il faut ajouter sur votre component l'attribut suivant:

### **HTML**

```
data-carousel="split"
```

<details>
<summary>Exemple complet</summary>

```
<!-- Slider main container -->
<div class="swiper-container" data-component="Carousel" data-carousel="split">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>
</div>
```

</details>

<br><br>

### **SCROLL**

Cette variante permet de retirer la navigation en desktop et la pagination en mobile. De plus, cette variante active une scrollbar horizontal qui montre le progrѐs du carroussel.
Pour activer cette variante, il faut ajouter sur votre component l'attribut suivant:

### **HTML**

```
data-carousel="scroll"
```

<details>
<summary>Exemple complet</summary>

```
<!-- Slider main container -->
<div class="swiper-container" data-component="Carousel" data-carousel="scroll">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
  </div>
</div>
```

</details>

<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Maxime Picard](https://dectim.ca/)
