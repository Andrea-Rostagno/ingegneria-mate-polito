---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["label switching", "scambio delle etichette", "invarianza per permutazione delle etichette", "label.switching"]
tags: [competenza, area/statistica]
---

# Label switching

> Nei modelli mistura stimati in modo bayesiano, permutare insieme le etichette latenti e i parametri delle componenti lascia invariata la verosimiglianza: le catene MCMC possono saltare tra configurazioni equivalenti.

## Definizione / enunciato
Con $y_i\mid z_i\sim F(\theta_{z_i})$, $z_i\in\{1,2\}$, $i=1,2,3$, la verosimiglianza di
$$z_1=1,z_2=2,z_3=1,\ \theta_1=0,\theta_2=100$$
è la stessa di
$$z_1=2,z_2=1,z_3=2,\ \theta_1=100,\theta_2=0.$$
Cambiando (facendo uno switch di) tutte le etichette del processo latente e i valori dei parametri nello stesso modo la verosimiglianza non cambia: il modello non è identificabile.

## Formule chiave
La verosimiglianza $\prod_if(y_i\mid\theta_{z_i})$ dipende dalle etichette solo attraverso l'abbinamento tra $z_i$ e $\theta_{z_i}$: rinominare tutte le etichette e i parametri nello stesso modo, come nell'esempio sopra, non la cambia.

## Intuizione
Tutti i modelli mistura stimati con procedura bayesiana ne soffrono; in pratica "capita raramente, ma può accadere". Si riconosce dal traceplot: catene che saltano in continuazione tra 2 o più punti.

## Come si usa
Si controllano i traceplot dei parametri delle componenti; se c'è label switching si riordinano i campioni a posteriori, per esempio con il pacchetto R `label.switching`.

## Nei corsi
- **Statistica computazionale** (magistrale): "Label Switching" nei modelli mistura. Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 26-27).

## Prerequisiti
- [[Modello mistura finita]]: il modello affetto
- [[Identificabilità di un modello statistico]]: è un caso di non identificabilità

## Collegati
- [[Dimensione campionaria effettiva]]: diagnostica delle catene col traceplot
- [[Hidden Markov model]]: stesso problema per gli stati nascosti
