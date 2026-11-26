---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Data science tecnologie basi di dati, Prova finale, Modelli statistici, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["Bayes' theorem", "teorema di Bayes", "formula di inversione del condizionamento", "Bayes formula"]
tags: [competenza, area/probabilita]
---

# Formula di Bayes

> Inverte il condizionamento: da $\mathbb P(B\mid A_i)$ (cause $\to$ effetto) ricava $\mathbb P(A_i\mid B)$ (effetto osservato $\to$ causa).

## Definizione / enunciato
Se $A,B\in\mathcal F$ con $\mathbb P(A),\mathbb P(B)>0$:
$$\mathbb P(A\mid B)=\frac{\mathbb P(B\mid A)\,\mathbb P(A)}{\mathbb P(B)}.$$
Se $\{A_1,\dots,A_m\}$ è una partizione dell'evento certo con $\mathbb P(A_i)>0$ e $\mathbb P(B)>0$:
$$\mathbb P(A_i\mid B)=\frac{\mathbb P(B\mid A_i)\,\mathbb P(A_i)}{\sum_{k=1}^m\mathbb P(B\mid A_k)\,\mathbb P(A_k)}.$$

## Formule chiave
Numeratore = un ramo dell'albero; denominatore = formula delle probabilità totali.

## Intuizione
Si confrontano tutte le "cause" possibili dell'evento osservato $B$, ciascuna pesata per la sua probabilità a priori $\mathbb P(A_i)$ e per quanto rende probabile $B$.

## Come si usa
Urna con 5 bianche e 10 nere (lezione 5): sapendo che la seconda estratta è bianca, $\mathbb P(B_1\mid B_2)=\frac{\frac5{15}\cdot\frac4{14}}{\frac13}=\frac27$. Tre monete BB, BN, NN (Foglio 2, es. 3, svolto a lezione): vista una faccia bianca, la probabilità che anche l'altra lo sia è $\mathbb P(M_1\mid B_1)=\frac{1\cdot\frac13}{\frac12}=\frac23$. Attenzione: $\mathbb P(F_2\mid A^c)\ne1-\mathbb P(F_2\mid A)$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 5 (appunto manoscritto); formula nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione05(29-03-23) (4).pdf` (lezione 5, pp. 7-11); `formularioprobabilita (1).pdf`.
- **Data science tecnologie basi di dati** (magistrale): base della classificazione bayesiana, nella forma $P(C|X)=P(X|C)\,P(C)/P(X)$ con $C$ classe e $X=\langle x_1,\dots,x_k\rangle$ record da classificare, ricavata da $P(C,X)=P(C|X)P(X)=P(X|C)P(C)$. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 85-86).
- **Prova finale** (triennale): versione per densità di v.a. (anche vettoriali), $f(x\mid y)=\frac{f(y\mid x)f(x)}{f(y)}$ con $f(y)=\int f(y,x)dx$, letta in modo "iterativo" (a priori, osservazione, a posteriori) e applicata con $x=\theta$ ai parametri delle copule. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.7, p. 54).
- **Modelli statistici** (magistrale): ipotesi $H_1,\dots,H_d$ esclusive ed esaustive, evidenza $E$, con i nomi prior, verosimiglianza, posteriori (libro, cap. 1, Def. 1.1, Teorema 1.2); poi la versione per densità $f_{X\mid Y}(x\mid y)=f_X(x)f_{Y\mid X}(y\mid x)/\int f_X(x')f_{Y\mid X}(y\mid x')dx'$ (Teorema 1.10) e la forma con le quote, quota a posteriori $=$ quota a priori $\times$ rapporto di verosimiglianza. Screening: prevalenza 0.01, sensibilità 0.90, specificità 0.95 danno $P(D=1\mid T=1)=0.009/0.0585\approx0.154$ (valore predittivo positivo); con $\mathrm{LR}^+=18$ due test positivi danno $\approx0.766$. Attenzione alla "fallacia del procuratore": sensibilità e PPV sono condizionate in verso opposto. Fonti: `Libri/Modelli statistici/capitoli/cap01.tex` (§1.1-1.2, pp. 3-9); `magistrale/Modelli statistici/250924BIntroBayes.pdf`.
- **Statistica computazionale** (magistrale): teorema di Bayes per due variabili aleatorie anche vettoriali, $f(x\mid y)=\frac{f(y,x)}{f(y)}=\frac{f(y\mid x)f(x)}{f(y)}$ con $f(y)=\int f(y,x)\,d\lambda(x)$ e $\lambda$ misura di riferimento (Lebesgue o conteggio); permette di passare dalla condizionata di $y\mid x$ a quella di $x\mid y$, ed è usato iterativamente nella dimostrazione del lemma di Brook. Fonti: `magistrale/Statistica computazionale/Modelli Bayesiani (1).pdf` (p. 3); `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 14).

## Prerequisiti
- [[Formula delle probabilità totali]]: denominatore
- [[Probabilità condizionata]]: inversione

## Porta a
- [[Classificatore bayesiano]]: probabilità a posteriori della classe
- [[Stima bayesiana]]: aggiornamento della distribuzione dei parametri
- [[Rete bayesiana]]: rovesciare un arco del DAG e calcolare condizionate dalla congiunta (Modelli statistici)
- [[Indipendenza condizionata nelle reti bayesiane]]: due test condizionatamente indipendenti dato lo stato di malattia (Modelli statistici)

## Collegati
- Nessuno.
- [[Lemma di Brook]]: si dimostra applicando Bayes iterativamente (Statistica computazionale)
