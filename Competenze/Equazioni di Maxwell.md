---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Maxwell's equations", "equazioni di Maxwell in forma integrale", "equazioni di Maxwell in forma differenziale", "equazioni di Maxwell nella materia"]
tags: [competenza, area/fisica]
---

# Equazioni di Maxwell

> Le quattro equazioni che descrivono il campo elettromagnetico: con la conservazione della carica e la forza di Lorentz riassumono tutto l'elettromagnetismo classico.

## Definizione / enunciato
Le due leggi di Gauss, la legge di Faraday-Henry e la legge di Ampère-Maxwell, in forma integrale (su superfici chiuse e curve chiuse $L$ con superficie $S(L)$) o differenziale (in ogni punto). Le due forme sono equivalenti: si passa dall'una all'altra con il teorema della divergenza e il teorema di Stokes (se i cammini di integrazione non dipendono dal tempo). Mostrano che la derivata temporale di $\vec E$ è sorgente di campo magnetico e viceversa: i due campi vanno trattati insieme come campo elettromagnetico.

## Formule chiave
Nel vuoto, forma integrale e differenziale:
$$\oint_{sup.chiusa}\vec E\cdot d\vec S=\frac{q}{\varepsilon_0}\qquad\qquad \vec\nabla\cdot\vec E=\frac{\rho}{\varepsilon_0}$$
$$\oint_{sup.chiusa}\vec B\cdot d\vec S=0\qquad\qquad \vec\nabla\cdot\vec B=0$$
$$\oint_L\vec E\cdot d\vec l=-\frac{d}{dt}\int_{S(L)}\vec B\cdot d\vec S\qquad\qquad \vec\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}$$
$$\oint_L\vec B\cdot d\vec l=\mu_0\left[I_L+\varepsilon_0\frac{d}{dt}\int_{S(L)}\vec E\cdot d\vec S\right]\qquad \vec\nabla\times\vec B=\mu_0\vec j+\varepsilon_0\mu_0\frac{\partial\vec E}{\partial t}$$
In un mezzo omogeneo e isotropo ($\vec E=\vec E_0/\varepsilon_r$, $\vec B=\mu_r\vec B_0$, cariche e correnti libere $\rho_L$, $\vec j_L$):
$$\vec\nabla\cdot\vec E=\frac{\rho_L}{\varepsilon_0\varepsilon_r},\qquad \vec\nabla\times\vec B=\mu_0\mu_r\left[\vec j_L+\varepsilon_0\varepsilon_r\frac{\partial\vec E}{\partial t}\right]$$
mentre $\vec\nabla\cdot\vec B=0$ e $\vec\nabla\times\vec E=-\partial\vec B/\partial t$ non dipendono dal mezzo.

## Intuizione
In statica le equazioni si separano ($\vec\nabla\times\vec E=0$, $\vec\nabla\times\vec B=\mu_0\vec j$); con campi dinamici Faraday-Henry e la corrente di spostamento accoppiano $\vec E$ e $\vec B$. È questo accoppiamento che permette al campo di propagarsi come onda senza supporto materiale.

## Come si usa
Nel vuoto senza cariche e correnti si applica il rotore alla terza equazione e si usa la quarta: si ottiene l'equazione delle onde per $\vec E$ e $\vec B$ con velocità $1/\sqrt{\varepsilon_0\mu_0}$. Nella materia la stessa procedura dà la velocità $c/\sqrt{\varepsilon_r\mu_r}$.

## Nei corsi
- **Fisica 2** (triennale): derivazione della forma differenziale, tabella riassuntiva, "principi dell'e.m." statici e dinamici, equazioni nel mezzo. Nelle slide la quarta equazione è intestata "Legge di Ampere-Laplace" (`29&30` p. 19; `33b` pp. 18, 21), ma è la legge di Ampère-Maxwell. Fonti: `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (pp. 14-23); `triennale/ANNO 2/fisica 2/lezioni/30bis. LEZIONE (Onde_em).pdf` (p. 1); `triennale/ANNO 2/fisica 2/lezioni/33b_OPZIONALE. LEZIONE.pdf` (pp. 18-21).

## Prerequisiti
- [[Teorema di Gauss del flusso]]: prima equazione
- [[Legge di Gauss per il campo magnetico]]: seconda equazione
- [[Legge di Faraday-Henry]]: terza equazione
- [[Legge di Ampère-Maxwell]]: quarta equazione

## Porta a
- [[Onde elettromagnetiche]]: rotore del rotore delle equazioni nel vuoto

## Collegati
- [[Trasformazioni galileiane]]: le equazioni di Maxwell non sono invarianti per Galileo ma per Lorentz
