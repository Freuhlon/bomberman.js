import {Menu} from "./menu";

export class Options extends Menu {
    constructor() {
        super();
        this.code = "OPTIONS";
        document.addEventListener('state', (state) => {
            this.manageOverflowMenu(1, 2, state.detail.selectedOption);
        });
    }

    render(canvasContext) {
        super.render(canvasContext);

        canvasContext.ctx.font = 50 + "px Bomberman";
        canvasContext.ctx.fillStyle = this.getColorMenu("Sound");
        canvasContext.ctx.fillText(" Sound : yes", canvasContext.screenWidth / 2, 330);
        canvasContext.ctx.fillStyle = this.getColorMenu("Retour");
        canvasContext.ctx.fillText("Retour", canvasContext.screenWidth / 2, 420);
    }

    getColorMenu(menu) {

        if (menu === "Sound" && this.selectedOption === 1
            || menu === "Retour" && this.selectedOption === 2) {
            return "yellow";
        } else {
            return "rgb(250, 250, 250)"
        }

    }
}