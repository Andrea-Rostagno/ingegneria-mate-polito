---
tipo: competenza
area: statistica
corsi: [Modelli statistici, Statistica computazionale]
livello: [magistrale]
aliases: ["Bayesian network", "BN", "rete bayesiana", "fattorizzazione indotta da un DAG", "CPT", "conditional probability table", "tabella della congiunta", "regola della catena per densità"]
tags: [competenza, area/statistica]
---

# Rete bayesiana

> Un DAG i cui nodi sono variabili aleatorie, più la densità di ogni nodo condizionata ai suoi genitori: la densità congiunta è il prodotto di queste condizionate, e da essa si calcola qualunque probabilità condizionata.

## Definizione / enunciato
Un **DAG** è un grafo $(V,A)$ con archi orientati e senza cicli orientati; $\mathrm{Pa}(v)$ sono i genitori di $v$, un nodo senza genitori è *profondo*, uno senza figli è una *foglia* (libro, cap. 1, Def. 1.14). Una **rete bayesiana** per $\mathbf X=(X_1,\dots,X_n)$ è
$$\text{BN}=\text{DAG}+\text{densità condizionate } f_{X_i\mid\mathrm{Pa}(X_i)},$$
date come tabelle (**CPT**) per variabili discrete (Def. 1.15).

## Formule chiave
- Regola della catena (Prop. 1.13), valida per ogni vettore: $f(x_1,\dots,x_n)=f_{X_1}(x_1)f_{X_2\mid X_1}(x_2\mid x_1)\cdots f_{X_n\mid X_1,\dots,X_{n-1}}(x_n\mid\dots)$.
- **Fattorizzazione indotta dal DAG** (Teorema 1.16):
$$f(x_1,\dots,x_n)=\prod_{i=1}^nf_{X_i\mid\mathrm{Pa}(X_i)}\bigl(x_i\mid\mathrm{pa}(x_i)\bigr),$$
e viceversa ogni prodotto di condizionate di questo tipo è una densità congiunta.
- Casi limite: catena $X_1\to\cdots\to X_n$ (catena di Markov), DAG senza archi (indipendenza), stesse densità (i.i.d., il campione casuale).

## Intuizione
Il DAG traduce la descrizione del problema ("le frodi dipendono dal viaggio, l'acquisto all'estero dipende da entrambi"): ogni variabile ha bisogno solo della tabella dei suoi genitori, invece della congiunta completa con $2^n-1$ numeri.

## Come si usa
Metodo del docente, la **tabella della congiunta**: si elencano tutte le $2^k$ configurazioni, si calcola ciascuna probabilità con la fattorizzazione e si sommano le righe che interessano. Esempio (libro, Es. `c01-xyzw`): DAG $X\to Z\leftarrow Y$, $Y\to W\leftarrow Z$ con $P(X=1)=0.7$, $P(Y=1)=0.3$; $P(\text{almeno un }1)=1-0.3\cdot0.7\cdot0.8\cdot0.8=0.8656$. Sistema anti-frode $T\to F$, $(T,F)\to A$: $P(F=1\mid A=1)\approx0.0334$ (il libro corregge le etichette sfasate delle soluzioni del docente). In R la congiunta si costruisce con `expand.grid`.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 1 (§1.2-1.5, Def. 1.14-1.15, Teorema 1.16, pp. 10-14). Fonti: `Libri/Modelli statistici/capitoli/cap01.tex`; secondarie `magistrale/Modelli statistici/250925DAGS con esercizio.pdf`, `magistrale/Modelli statistici/PDF corretti/250925DAG.pdf`. Il modello bayesiano stesso è una rete (parametro → dati), con la plate notation per le repliche.
- **Statistica computazionale** (magistrale): "modelli grafici". DAG diretto e aciclico; per ogni nodo si definisce la condizionata dato solo i nodi che puntano a lui (es. $f(D\mid B,C)$, non $f(D\mid B,C,A)$) e la congiunta è il prodotto: per il DAG $A\to B$, $A\to C$, $B\to D$, $C\to D$, $D\to E$, $F$ isolato, $f(A,B,C,D,E,F)=f(A)f(B\mid A)f(C\mid A)f(D\mid C,B)f(E\mid D)f(F)$, caso particolare della decomposizione sequenziale completa; se le condizionate sono valide la congiunta lo è per costruzione. Il DAG serve a formalizzare i modelli gerarchici (esempi climatico e biologico, dipendenze temporali del primo ordine tra $x_{\cdot,t}$, $z_{\cdot,t}$, $y_{\cdot,t}$; l'ordine dato alle variabili cambia il modello) e a ricavare le **full conditional**, che dipendono dal Markov blanket. Fonti: `magistrale/Statistica computazionale/modelli grafici.pdf` (p. 11-14, 24-36); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 9-14).

## Prerequisiti
- [[Densità congiunta]]: oggetto che la rete fattorizza
- [[Distribuzione condizionata]]: i fattori del prodotto
- [[Formula di Bayes]]: per rovesciare un arco o calcolare le posteriori

## Porta a
- [[Indipendenza condizionata nelle reti bayesiane]]: lettura delle indipendenze dal grafo
- [[Rete bayesiana gaussiana]]: condizionate normali lineari
- [[Modello gerarchico bayesiano]]: DAG a più livelli con plate notation
- [[Linguaggio JAGS]]: un modello JAGS descrive il DAG nodo per nodo

## Collegati
- [[Catena di Markov a tempo discreto]]: caso particolare a catena
- [[Classificatore bayesiano]]: altro uso della formula di Bayes su variabili discrete, in data mining
- [[Full conditional]]: dipende solo dal Markov blanket nel DAG (Statistica computazionale)
- [[Modello gerarchico bayesiano]]: il DAG ne rappresenta i livelli (Statistica computazionale)
- [[Markov random field]]: contrasto, grafo non orientato definito dalle full conditional (Statistica computazionale)
- [[Ordinamento topologico]]: un DAG ammette un ordine compatibile con gli archi (Statistica computazionale)
