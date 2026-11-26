---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Variance-Gamma distribution, VG, legge Variance-Gamma, "VG(theta,sigma,nu)", mistura normale-Gamma, normal variance-mean mixture]
tags: [competenza, area/probabilita]
---

# Distribuzione Variance-Gamma

> Normale con varianza aleatoria Gamma: $X=\theta G+\sigma\sqrt G\,Z$; produce code pesanti e asimmetria, oltre il modello gaussiano dei rendimenti.

## Definizione / enunciato
Con $\theta\in\mathbb R$, $\sigma,\nu>0$, $G\sim\mathrm{Gamma}(1/\nu,\nu)$ (forma $1/\nu$, scala $\nu$: media 1, varianza $\nu$) e $Z\sim\mathcal N(0,1)$ indipendente (def. c15-vg):
$$X=\theta G+\sigma\sqrt G\,Z\sim\mathrm{VG}(\theta,\sigma,\nu),\qquad X\mid G=g\sim\mathcal N(\theta g,\sigma^2g).$$
**Momenti** (prop. c15-momenti-vg): generatrice $\mathbb E[e^{uX}]=(1-\nu\theta u-\frac12\nu\sigma^2u^2)^{-1/\nu}$;
$$\mathbb E[X]=\theta,\qquad\mathrm{Var}(X)=\sigma^2+\nu\theta^2,\qquad\text{asimmetria}=\frac{\theta\nu(3\sigma^2+2\nu\theta^2)}{(\sigma^2+\nu\theta^2)^{3/2}},$$
curtosi in eccesso $\frac{3\sigma^4\nu+12\sigma^2\theta^2\nu^2+6\theta^4\nu^3}{(\sigma^2+\nu\theta^2)^2}$; per $\theta=0$ simmetrica con curtosi $3(1+\nu)$.

## Formule chiave
Simulazione: si genera $G$ con `gamrnd(1/nu,nu)` e poi $X=\theta G+\sigma\sqrt GZ$ (`vg_sample.m`).

## Intuizione
Mescolare normali con varianze diverse ingrassa le code; $\nu$ regola la curtosi, $\theta$ l'asimmetria ($\theta<0$ dà asimmetria negativa, come nei rendimenti azionari). Attenzione al fit con il metodo dei momenti: se media e asimmetria empiriche hanno segni opposti (con $\mathbb E[X]=\theta$) l'ottimizzatore converge a un caso limite privo di significato ($\nu\to0$); serve un parametro di posizione.

## Come si usa
Esempio del libro: $\theta=-0.1$, $\sigma=0.2$, $\nu=0.5$: media $-0.1$, varianza $0.045$, asimmetria $-0.681$, curtosi in eccesso $1.815$; un campione simulato di $10^6$ valori dà $-0.0997$, $0.0450$, $-0.677$, $1.78$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 15 §Oltre la normale: la distribuzione Variance-Gamma, listato lst:c15-vg. Il libro segnala con cautela il fit dei momenti del codice del corso. Fonti: `Libri/Financial engineering/capitoli/cap15.tex`; script `magistrale/Financial engineering/esercitazioni/moment_error.m`, `vg_sample.m` (solo come esempi).

## Prerequisiti
- [[Distribuzione Gamma]]: variabile di mescolamento
- [[Distribuzione normale]]: legge condizionata

## Collegati
- [[Metodo dei momenti]]: stima dei parametri
- [[QQ-plot]]: confronto delle code con i dati
- [[Varianza condizionata]]: varianza totale $\sigma^2+\nu\theta^2$
- [[Moto browniano geometrico]]: alternativa ai rendimenti logaritmici normali del modello
- [[Rendimenti logaritmici]]: code pesanti e asimmetria da riprodurre
