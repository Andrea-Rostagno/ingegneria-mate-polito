---
tipo: competenza
area: probabilita
corsi: [Prova finale, Modelli statistici, Statistica computazionale, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["probability integral transform", "PIT", "trasformazione uniforme", "funzione quantile", "quantile function", "inversa generalizzata", "quantile inverse", "metodo dell'inversione", "inverse transform sampling"]
tags: [competenza, area/probabilita]
---

# Trasformazione integrale di probabilità

> Se $F$ è continua, $F(X)$ è uniforme su $[0,1]$; viceversa $F^{-1}(U)$ con $U$ uniforme ha f.d.r. $F$. È il ponte fra dati con qualsiasi marginale e il quadrato unitario delle copule.

## Definizione / enunciato
Sia $X$ una v.a. con f.d.r. $F$.
- **PIT** (Pellerey, slide 17): se $F$ è continua, $F(X)\sim\mathcal U[0,1]$.
- **Funzione quantile** (slide 18): $F^{-1}:(0,1)\to(-\infty,\infty)$, $F^{-1}(u)=\inf\{x\in\mathbb R: F(x)\ge u\}$ con $\inf\emptyset=\infty$.
- **Inversione**: se $U\sim\mathcal U[0,1]$, allora $F^{-1}(U)$ ha f.d.r. $F$. È la procedura per simulare un campione da una $F$ data.

## Formule chiave
Rappresentazione uniforme di un vettore (slide 19): con $U_i=F_i(X_i)$,
$$F(x_1,x_2)=\mathbb P[U_1\le F_1(x_1),U_2\le F_2(x_2)]=C(F_1(x_1),F_2(x_2)).$$
Versione empirica usata nella tesi: $u_i=\operatorname{rank}(x_i)/(n+1)$.

## Intuizione
La trasformazione "toglie" la forma della marginale e lascia solo la posizione relativa (il quantile) di ogni osservazione; per questo le copule lavorano su $[0,1]^d$. Il passo inverso rimette la marginale desiderata.

## Come si usa
Nella tesi in due direzioni:
- **verso $[0,1]$**: §4.4, i rendimenti sono portati in $[0,1]$ con la CDF del modello scelto (`stats.norm.cdf`, `stats.t.cdf`), oppure con i ranghi; in §5.2.2 `uniform_data` è ottenuto con `norm.cdf(standardized_data)`;
- **da $[0,1]$ ai dati**: in §6.1.3 le uniformi generate dalla copula gaussiana diventano rendimenti con `stats.norm.ppf(u, mu/252, sigma/sqrt(252))`; in `copula-analysis.py` (stress test) si usa l'inversa della CDF empirica, costruita interpolando i dati ordinati.

## Nei corsi
- **Prova finale** (triennale): trasformazione uniforme delle marginali (§4.4 "Trasformazione Uniforme con la Funzione di Ripartizione Cumulativa") e simulazione. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4, pp. 31-34; §6.1.3, p. 101); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 17-19); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/copula-analysis.py` (funzione `inverse_ecdf`).
- **Statistica computazionale** (magistrale): metodo di simulazione. Inversa generalizzata (funzione quantilica) di una $F$ non decrescente: $F^{-1}(u)=\inf\{x:F(x)\ge u\}$. **Teorema**: se $U\sim U(0,1)$, $F^{-1}(U)$ proviene da $F$. Dimostrazione nel caso continuo, $P(F^{-1}(U)\le x)=P(U\le F(x))=F(x)$, e nel caso discreto con supporto $\{\mathcal X_1,\mathcal X_2,\dots\}$ crescente e intervalli $\mathcal U_j=(a_{j-1},a_j]$ di ampiezza $a_j-a_{j-1}=P(X=\mathcal X_j)$, per cui $P(F^{-1}(U)\le x)=\sum_{h=1}^jP(X=\mathcal X_h)=F(\mathcal X_j)$. Esempio: $F(x)=1-e^{-\lambda x}=u\Rightarrow x=-\log(1-u)/\lambda$ e, poiché $1-U\sim U(0,1)$, $X=-\log U/\lambda\sim\mathrm{Exp}(\lambda)$. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 28, 31-33); `magistrale/Statistica computazionale/esercitazioni/Monte Carlo.R` (sezione "funzione inversa generalizzata").
- **Modelli statistici** (magistrale): **metodo dell'inversione** (libro, cap. 4, Teorema 4.1): se $F$ è continua e strettamente crescente dove $0<F<1$ e $U\sim\mathrm{Unif}(0,1)$, $X=F^{-1}(U)$ ha ripartizione $F$; una realizzazione si ottiene risolvendo $F(x)=u$. Il libro lo esercita su esponenziale, Pareto e densità a tratti, disegnando $f$ e $F$ e leggendo $x$ sull'asse orizzontale in corrispondenza di $u$. Primo passo della simulazione prima del metodo Monte Carlo e dell'MCMC. Fonti: `Libri/Modelli statistici/capitoli/cap04.tex` (§4.1, p. 57).
- **Ottimizzazione in condizione di incertezza** (magistrale): **inverse transform method** per generare variabili da uniformi: $U\sim U(0,1)$, $X=F^{-1}(U)$, con $P\{F^{-1}(U)\le x\}=P\{U\le F(x)\}=F(x)$ per monotonia di $F$. Esponenziale con $F(x)=1-e^{-\mu x}$ (media $1/\mu$): $x=-\frac1\mu\ln(1-U)$, in pratica $-\ln(U)/\mu$. Il legame monotono fra uniformi e variabili generate è ciò che fa funzionare il campionamento antitetico; nel quasi-Monte Carlo del GBM le uniformi di Halton/Sobol diventano normali con `norminv`. Nel newsvendor la quantità ottima è proprio un quantile $F^{-1}$. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 29-30); `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 11); `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 34).

## Prerequisiti
- [[Funzione di ripartizione]]: $F$ e la sua inversa generalizzata
- [[Distribuzione uniforme continua]]: legge di $F(X)$
- [[Trasformazione di una variabile aleatoria]]: legge di $g(X)$ col metodo della f.d.r.

## Porta a
- [[Copula]]: la copula è la f.d.r. di $(F_1(X_1),F_2(X_2))$
- [[Simulazione da una copula]]: dalle uniformi ai valori con $F^{-1}$
- [[Pseudo-osservazioni]]: PIT con la f.d.r. empirica
- [[Campionamento antitetico]]: la monotonia di $F^{-1}$ trasmette la correlazione negativa (Ottimizzazione in condizione di incertezza)
- [[Metodo Monte Carlo]]: i campioni simulati per inversione alimentano le stime Monte Carlo (Modelli statistici)
- [[Rappresentazione di Rényi]]: simulazione della Dirichlet a partire da Gamma (Modelli statistici)

## Collegati
- [[Metodo Monte Carlo]]: l'inversione genera campioni da una legge qualsiasi
- [[Teorema di Sklar]]: la PIT è il cuore della dimostrazione nel caso continuo
- [[Numeri pseudo-casuali]]: le uniformi da invertire (Statistica computazionale)
- [[Metodo accept-reject]]: alternativa quando $F^{-1}$ non è disponibile (Statistica computazionale)
- [[Trasformazione di Box-Muller]]: altra trasformazione di uniformi, per la normale (Statistica computazionale)
