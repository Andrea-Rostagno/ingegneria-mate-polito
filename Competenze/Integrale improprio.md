---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["improper integral", "integrale generalizzato", "integrale convergente", "integrale divergente"]
tags: [competenza, area/analisi]
---

# Integrale improprio

> Estensione dell'integrale a intervalli illimitati o a funzioni illimitate, come limite di integrali su intervalli chiusi: converge se il limite è finito.

## Definizione / enunciato
**Intervallo illimitato** (Lussardi, def. 4.4.1; Morandotti, def. 5.5.10). Se $f:[a,+\infty)\to\mathbb R$ è continua a tratti,
$$\int_a^{+\infty}f(x)\,dx=\lim_{c\to+\infty}\int_a^cf(x)\,dx$$
quando il limite esiste: se è finito l'integrale **converge**, se è $\pm\infty$ **diverge** positivamente o negativamente, altrimenti non esiste.

**Funzione illimitata** (Lussardi, def. 4.4.7; Morandotti, def. 5.5.1). Se $f:(a,b]\to\mathbb R$ è continua a tratti, $\int_a^bf=\lim_{c\to a^+}\int_c^bf$ (analogamente in $b^-$). Se i punti "impropri" sono più di uno si spezza l'integrale; il risultato non dipende dal punto di spezzamento.

**Integrali campione** (Lussardi, teor. 4.4.2 e 4.4.8):
$$\int_1^{+\infty}\frac{dx}{x^\alpha}\ \text{converge}\iff\alpha>1,\qquad \int_a^b\frac{dx}{(x-a)^\alpha}\ \text{converge}\iff\alpha<1,$$
e negli altri casi divergono positivamente.

## Formule chiave
$$\int_1^c\frac{dx}{x^\alpha}=\frac{c^{1-\alpha}-1}{1-\alpha}\ (\alpha\ne1),\qquad \int_1^c\frac{dx}x=\log c$$

## Intuizione
L'area di una regione illimitata può essere finita se la funzione va a zero abbastanza in fretta (all'infinito) o esplode abbastanza lentamente (vicino a un punto). La soglia è $\alpha=1$, con versi opposti nei due casi.

## Come si usa
Si calcola una primitiva sull'intervallo chiuso e si passa al limite; quando la primitiva non è calcolabile si usano i criteri di convergenza. Esercizi tipo: esercitazione 21 (2022-23, "integrali impropri su semirette e su intervalli limitati"), esercitazione 24 (2021-22).

## Nei corsi
- **Analisi 1** (triennale): "integrali impropri". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (cap. 4 §4, def. 4.4.1, 4.4.7, 4.4.10, teor. 4.4.2, 4.4.8, 4.4.9, pp. 77-82); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§5.5, def. 5.5.1, 5.5.10, (5.68), PDF pp. 205-212). La dispensa Mazzi `Integrali impropri.pdf` è una scansione non trascritta.

## Prerequisiti
- [[Teorema fondamentale del calcolo integrale]]: si calcola con una primitiva
- [[Limite di funzione]]: è un limite dell'integrale

## Porta a
- [[Criteri di convergenza per integrali impropri]]: definizione e integrali campione

## Collegati
- Nessuno.
