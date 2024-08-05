/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "we", "you", "us"];

  let adj = ["great", "big", "impossible", "large", "strong"];

  let noun = ["jogger", "racoon", "rabbit", "human", "cat"];

  let extension = [".com", ".net", ".io", ".us", ".gov"];

  function generateDomainNames(pronouns, adjs, nouns, extensions) {
    let domains = [];
    for (let p of pronouns) {
      for (let a of adjs) {
        for (let n of nouns) {
          for (let e of extensions) {
            domains.push(p + a + n + e);
          }
        }
      }
    }
    return domains;
  }
  function displayDomainNames(domain) {
    const container = document.getElementById("container-fluid");
    domains.forEach(domain => {
      const domainElement = document.createElement("p");
      domainElement.textContent = domain;
      container.appendChild(domainElement);
    });
  }

  const domains = generateDomainNames(pronoun, adj, noun, extension);
  displayDomainNames(domains);
};
