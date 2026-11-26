---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["quantum measurement", "autovalori e autofunzioni di un operatore", "eigenvalues of an operator", "collasso della funzione d'onda", "wave function collapse", "indeterminazione quantistica", "sviluppo in autofunzioni"]
tags: [competenza, area/fisica]
---

# Misura in meccanica quantistica

> Una misura della grandezza $F$ dà sempre uno degli autovalori dell'operatore $\hat F$, con probabilità $|a_i|^2$ data dallo sviluppo di $\Psi$ nelle autofunzioni; dopo la misura il sistema è nell'autostato corrispondente.

## Definizione / enunciato
Oltre alle indeterminazioni classiche (casuale, sistematica, strumentale, epistemiche e riducibili) esiste un'**indeterminazione quantistica** intrinseca, non epistemica, dovuta al significato probabilistico di $\Psi$. Essa si annulla se e solo se $\Psi$ soddisfa l'**equazione agli autovalori** di $\hat F$. Ogni $\Psi\in L^2(\Omega)$ si sviluppa nelle autofunzioni, che sono ortonormali. **Principio del collasso:** dopo una singola misura che dà $f_i$ il sistema è nell'autostato $\Psi_i$.

## Formule chiave
$$(\Delta F)^2_{quant}=\left\langle\left(\hat F-\langle\hat F\rangle\right)^2\right\rangle=\int_\Omega\Psi^*(\vec r,t)\left[\left(\hat F-\langle\hat F\rangle\right)^2\Psi(\vec r,t)\right]d\vec r$$
$$\hat F\Psi_i=f_i\Psi_i,\quad \Psi_i\in L^2(\Omega),\ f_i\in R\qquad\Rightarrow\ \langle F\rangle=f,\ (\Delta F)=0$$
$$\Psi(\vec r,t)=\sum_{i=1}^na_i\Psi_i(\vec r,t),\quad \langle\Psi_i|\Psi_j\rangle=\delta_{i,j},\quad a_i=\int_\Omega\Psi_i^*(\vec r,t)\Psi(\vec r,t)d\vec r$$
$$\langle F\rangle_{quant}=\sum_i|a_i|^2f_i,\qquad \sum_i|a_i|^2=1$$

## Intuizione
Sperimentalmente $\langle F\rangle_{sper}=\sum_jf_j\,n_j/N$: i risultati si raggruppano per valore, con frequenza $n_j/N$. Confrontando con $\sum|a_i|^2f_i$ si leggono gli $f_i$ come valori possibili e gli $|a_i|^2$ come pesi statistici.

## Come si usa
Data $\Psi$ e una grandezza: (1) si risolve l'equazione agli autovalori di $\hat F$; (2) si proietta $\Psi$ sulle autofunzioni ($a_i$); (3) i risultati possibili sono gli $f_i$ con probabilità $|a_i|^2$. Le formulazioni di Schrödinger (funzioni in $L^2$), Heisenberg (matrici su vettori colonna) e Dirac (vettori astratti) sono isomorfe (`55&56. LEZIONE.pdf` pp. 27-28). Gli assiomi del corso (osservabile, operatore, evoluzione) sono a p. 42.

## Nei corsi
- **Fisica 2** (triennale): lezioni 55-56, "teoria della misura" secondo l'interpretazione di Copenaghen. Fonti: `triennale/ANNO 2/fisica 2/lezioni/55&56. LEZIONE.pdf` (pp. 12-28, 42).
- **Quantum physics** (triennale): quinto assioma della dispensa di V. Penna (la misura che seleziona $\lambda$ porta lo stato in $\Psi_\lambda$) e interpretazione di $|f_n|^2$ come probabilità di ottenere $\alpha_n$; nelle note di M. Re Fiorentin il "postulato della misura" con probabilità $|c_i|^2=|\langle f_i|\psi\rangle|^2$, collasso e conseguenze per osservabili non compatibili, con un esempio svolto e il caso della misura di $S_x$ su uno spinore. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 72-73, 76); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 24-27, 48-50).

## Prerequisiti
- [[Operatori quantistici]]: si misurano gli autovalori dell'operatore
- [[Autovalori e autovettori]]: equazione agli autovalori F Ψi = fi Ψi

## Porta a
- [[Commutatore di operatori]]: misure simultanee con indeterminazione nulla
- [[Particella in una scatola]]: autovalori dell'hamiltoniano

## Collegati
- [[Postulati della meccanica quantistica]]: il collasso è il quinto assioma (Quantum physics)
- [[Disuguaglianza di Bell]]: il collasso su uno stato entangled è il cuore del paradosso EPR (Quantum physics)
