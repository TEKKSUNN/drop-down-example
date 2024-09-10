import "./stylesheets/styles.css"
import { loadDropDown } from "@tekksunn/drop-down";

document.addEventListener("DOMContentLoaded", () => {
    loadDropDown(".click-drop-down", "click");
    loadDropDown(".hover-drop-down", "hover");
});