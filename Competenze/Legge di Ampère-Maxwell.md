---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Ampère-Maxwell law", "corrente di spostamento", "displacement current", "corrente generalizzata", "campo magnetico nel condensatore"]
tags: [competenza, area/fisica]
---

# Legge di Ampère-Maxwell

> La legge di Ampère corretta per campi variabili: la circuitazione di $\vec B$ dipende dalla corrente concatenata e dalla variazione del flusso di $\vec E$ (corrente di spostamento). È la quarta equazione di Maxwell.

## Definizione / enunciato
La legge di Ampère $\oint_L\vec B\cdot d\vec l=\mu_0\int_{S(L)}\vec j\cdot d\vec S$ non vale per campi dipendenti dal tempo: restringendo $L$ a un punto la superficie diventa chiusa, la circuitazione tende a zero e si avrebbe $\oint_S\vec j\cdot d\vec S=0$, che per la conservazione della carica vale solo con campo elettrico statico. In generale la conservazione della carica dà $\oint_S\vec j\cdot d\vec S+\varepsilon_0\frac{d}{dt}\oint_S\vec E\cdot d\vec S=0$: sostituendo questa **corrente generalizzata** nella legge di Ampère si ottiene una legge valida per campi statici e dinamici.

## Formule chiave
$$\oint_L\vec B\cdot d\vec l=\mu_0\left[\int_{S(L)}\vec j\cdot d\vec S+\varepsilon_0\frac{d}{dt}\int_{S(L)}\vec E\cdot d\vec S\right]=\mu_0\int_{S(L)}\left(\vec j+\varepsilon_0\frac{\partial\vec E}{\partial t}\right)\cdot d\vec S$$
$$I_{Spostamento}=\varepsilon_0\int_S\frac{\partial\vec E}{\partial t}\cdot d\vec S,\qquad \vec\nabla\times\vec B=\mu_0\left(\vec j+\varepsilon_0\frac{\partial\vec E}{\partial t}\right)$$

## Intuizione
La corrente di spostamento ha le dimensioni di una corrente ma non è un moto di cariche: è un effetto dei campi $\vec E$ e $\vec B$ variabili e correlati. Nel vuoto senza correnti un $\vec E$ variabile genera un $\vec B$ con $\oint\vec B\cdot d\vec l=\mu_0\varepsilon_0\frac{d}{dt}\int\vec E\cdot d\vec S$: è la legge simmetrica di Faraday-Henry.

## Come si usa
Esempio (pp. 13-17): condensatore piano circolare in carica. Una superficie attraversata dal filo e una che passa tra le armature devono dare la stessa circuitazione: tra le armature c'è solo corrente di spostamento. Con $E(t)=\frac{Q}{\varepsilon_0S}(1-e^{-t/RC})$ le linee di $\vec B$ sono circonferenze sull'asse e
$$B(t)=\mu_0\frac{V_0}{RS}e^{-\frac{t}{RC}}\frac r2\ (r<R),\qquad B(t)=\mu_0\left(\frac{V_0}{R}e^{-\frac{t}{RC}}\right)\frac{1}{2\pi r}\ (r>R).$$
Nella slide $R$ indica sia la resistenza sia, nelle condizioni $r<R$ e $r>R$, il raggio delle armature.

## Nei corsi
- **Fisica 2** (triennale): contraddizione della legge di Ampère, corrente di spostamento, esempio del condensatore; forma differenziale nella lezione successiva. Refuso a p. 14 di `29&30`: nella terza parentesi del rotore compare $\partial B_x/\partial z$ invece di $\partial B_x/\partial y$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/28.   LEZIONE.pdf` (pp. 8-17); `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (p. 14).

## Prerequisiti
- [[Legge di Ampère]]: si corregge la legge per campi variabili
- [[Equazione di continuità della carica]]: la contraddizione nasce dalla conservazione della carica
- [[Circuito RC]]: esempio del condensatore in carica

## Porta a
- [[Equazioni di Maxwell]]: quarta equazione

## Collegati
- [[Legge di Faraday-Henry]]: simmetria tra le due leggi in assenza di correnti
