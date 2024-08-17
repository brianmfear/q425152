import { LightningElement } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";
import HELLO_WORLD_SCRIPT from "@salesforce/resourceUrl/helloWorld";

export default class HelloWorld extends LightningElement {
  connectedCallback() {
    loadScript(this, HELLO_WORLD_SCRIPT)
      .then(() => {
        window.helloWorld();
      })
      .catch((error) => {
        console.error("Error loading script:", error);
      });
  }
}
