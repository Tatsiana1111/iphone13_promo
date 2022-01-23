const links = document.querySelectorAll(`.header-menu__item a`)
const linksCharacteristic = document.querySelector(`.card-details__link-characteristics`)

const array = [...links, linksCharacteristic]

seamless.polyfill()

array.forEach((element) => {
    element.addEventListener(`click`, () => {
        console.log(`click`)
    })
    element.addEventListener(`click`, (event) => {
        event.preventDefault()
        const id = element.getAttribute(`href`).substring(1)
        const section = document.getElementById(id)
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: `smooth`,
                block: `start`
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#card"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})
