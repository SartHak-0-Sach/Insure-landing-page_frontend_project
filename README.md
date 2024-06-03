# Insure Landing Page

## Discover peace of mind with Insure. Our landing page highlights our comprehensive insurance services, tailored to protect you and your loved ones.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Got Feedback for Me?](#got-feedback-for-me)

## Overview

### The Challenge

Discover peace of mind with Insure. Our landing page highlights our comprehensive insurance services, tailored to protect you and your loved ones.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design Preview](./design/active-states.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/SartHak-0-Sach/Insure-landing-page_frontend_project)
- Live Site URL: [Live Site](https://insure-landing-page-frontend.netlify.app/)

## My Process

### Built With

- HTML5(designing the basic layout)
- CSS3(Styling it using properties like flexbox, grid, hover states etc)
- Vanilla JavaScript(for implementing dynamic functionalities of the webpage)

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### What I Learned

- Crafting a visually compelling and informative landing page
- Implementing responsive design techniques for optimal viewing on all devices
- Enhancing user engagement through interactive elements and hover states

Here is the code snippet that I am proud of-

```js
if (window.matchMedia('(max-width: 767px)').matches) {
    $('.dropdown-content').hide();
}
$(document).ready(function () {

    // jQuery methods go here...

    $('.dropbtn').click(function () {

        $('.dropdown-content').slideToggle(800, function () {
            if ($('.dropbtn').attr('src') == 'images/icon-hamburger.svg')
                $(".dropbtn").attr("src", "images/icon-close.svg");
            else if ($('.dropbtn').attr('src') == 'images/icon-close.svg')
                $(".dropbtn").attr("src", "images/icon-hamburger.svg");


        });
    })

    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.dropdown-content').removeAttr('style');
        }
    });

});
```

### Continued Development

The continuously learning journey of a programmer never ends. This project made me realize that there are many concepts that I need to work upon including fundamentals like flex-box and its properties, to more complex concepts like working with fetch and async await in javascript. These areas are some that I think I need to work more upon in the upcoming future as they highlight some of the most significant regions of web development that are important for every developer to know of. 

These key points mentioned here will help me grow accountable and consistent towards improving at writing good quality code and be a successful full stack developer one day.

- Adding interactive features like live chat support
- Integrating customer testimonials for social proof
- Improving SEO to increase organic traffic

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive documentation for web development technologies
- [CSS-Tricks](https://css-tricks.com/) - Helpful tips and tricks for CSS and web design
- [JavaScript.info](https://javascript.info/) - In-depth tutorials and resources for learning JavaScript
- [Harkirat Singh course notes](https://github.com/SartHak-0-Sach/harkirat-singh-course_code_and_notes) - I have added notes of all lectures along with code and lecture insights of all weeks along with bonus lectures to help you all as much as I can.
- [My development code and notes](https://github.com/SartHak-0-Sach/cwh-web-dev-playlist_code_and_notes) - These are my notes that I made while working on my development skills in initial days and did these courses. Make sure to star the repository if you like it.✨💫
- [mdn documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) - This is an amazing article which helped me finally understand promises, async and await syntax. I'd recommend it to anyone still learning this concept.

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LeetCode - [@sarthak_sachdev](https://leetcode.com/u/sarthak_sachdev/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I feel like the solutions provided on the website and the continuous doubt solving by industry experts on discord for free is something that is unmatched by anyone else and need to be acknowledged for their efforts in improving me as a developer by suggesting the best practices in your respective tech stack.

## Got feedback for me?

I love receiving feedback! I am always looking to improve my code and take up new innovative ideas to work upon. So if you have anything you'd like to mention, please email 'hi' at saarsaach30[at]gmail[dot]com.

If you found this project helpful, consider sharing it with others to gather more valuable feedback!

**Discover peace of mind with Insure.** 🛡️🏠✨
