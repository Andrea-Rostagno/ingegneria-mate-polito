---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi 2]
livello: [triennale]
aliases: ["power series", "raggio di convergenza", "radius of convergence", "disco di convergenza", "serie di potenze complesse"]
tags: [competenza, area/analisi]
---

# Serie di potenze

> Una serie $\sum a_n(z-z_0)^n$ converge in un disco di raggio $R$ (il raggio di convergenza) e fuori non converge; dentro il disco la sua somma è una funzione analitica.

## Definizione / enunciato
**Teorema 3.6.** Per ogni serie di potenze $\sum_{n\ge0}a_nz^n$ esiste $R\in[0,+\infty]$, il **raggio di convergenza**, tale che:
- se $R=0$ la serie converge solo per $z=0$;
- se $R>0$ converge assolutamente per $|z|<R$ e uniformemente in ogni cerchio $\{|z|\le\rho\}$ con $0<\rho<R$;
- se $R=+\infty$ converge assolutamente su tutto $\mathbb C$ e uniformemente su ogni cerchio.

**Teorema 3.13.** Se $R>0$, la somma $f(z)=\sum a_nz^n$ è analitica nel disco $|z|<R$ e $f'(z)=\sum_{n\ge1}na_nz^{n-1}$ (derivazione termine a termine).

## Formule chiave
Criterio del rapporto (Teorema 3.9, $a_n\ne0$) e della radice (Teorema 3.10): se esiste $\ell=\lim\big|\frac{a_{n+1}}{a_n}\big|$ oppure $\ell=\lim\sqrt[n]{|a_n|}$,
$$R=\begin{cases}0 & \ell=+\infty\\ 1/\ell & 0<\ell<+\infty\\ +\infty & \ell=0\end{cases}\quad(3.3)$$

## Intuizione
La convergenza dipende solo da $|z|$ confrontato con una soglia: per questo l'insieme di convergenza è un disco (il comportamento sul bordo va studiato a parte). Dentro il disco la serie si comporta come un polinomio "infinito", derivabile termine a termine.

## Come si usa
Esempi 3.8 e 3.11: la serie geometrica $\sum z^n$ e $\sum nz^n$ hanno $R=1$ (il termine generale non tende a 0 per $|z|>1$); $\sum\frac{n!}{n^n}z^n$ ha $\ell=\lim\big(\frac{n}{n+1}\big)^n=e^{-1}$, quindi $R=e$; $\sum n^nz^n$ ha $\ell=+\infty$, quindi $R=0$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §3.1 "Successioni e serie di numeri complessi" e §3.1.1 "Serie di potenze" (Teor. 3.1-3.13). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 3 (1).pdf` (pp. 1-10 del PDF).
- **Analisi 2** (triennale): caso reale $\sum_{n\ge0}a_n(x-x_0)^n$, con "funzione somma" definita sull'insieme di convergenza $D\ni x_0$. **Lemma fondamentale**: se la serie converge in $\bar x\ne x_0$, converge assolutamente per $|x-x_0|<|\bar x-x_0|$ (confronto con una geometrica). Il raggio è $R=\sup\{|x-x_0|:\text{la serie converge in }x\}$ e $D$ è $\{x_0\}$, $\mathbb R$, oppure uno dei quattro intervalli di estremi $x_0\pm R$: gli estremi vanno studiati a parte. **Criterio della radice o del rapporto**: se esiste $A=\lim|a_n|^{1/n}$ o $B=\lim\frac{|a_{n+1}|}{|a_n|}$ (anche $+\infty$), allora $R=\frac1A$ o $\frac1B$; in generale $R=\frac1{\limsup|a_n|^{1/n}}$. Esempi: $\sum\frac{(x-5)^n}n$ ha $D=[4,6)$; $\sum\frac{(-1)^n}{2^n}(x+4)^n$ ha $D=(-6,-2)$; $\sum\frac{(-1)^n5^n}{n+\sqrt n}(x-1)^n$ ha $D=(\frac45,\frac65]$; $\sum n!\,x^n$ ha $R=0$. Errore frequente: per $\sum\frac{(x-2)^{2n}}{5^n}$ gli $a_n$ non sono $\frac1{5^n}$; con $t=(x-2)^2$ si trova $R=\sqrt5$ e $D=(2-\sqrt5,2+\sqrt5)$. Analogamente $\sum\frac{(x-1)^{3n+1}}{n8^n}$ ha $R=2$ e $D=[-1,3)$ (in generale $R_x=R_t^{1/k}$ se $t=(x-x_0)^k$). Fonti: `triennale/ANNO 2/analisi 2/AII 19 serie potenze.pdf` (lez. 05/12/2022, pp. 12-21); `triennale/ANNO 2/analisi 2/AII 20 2022 serie potenze.pdf` (lez. 07/12/2022, pp. 1-19).

## Prerequisiti
- [[Topologia del piano complesso]]: il dominio di convergenza è un disco
- [[Criteri del rapporto e della radice per successioni]]: calcolo del raggio
- [[Serie geometrica]]: prototipo di serie di potenze (Analisi 2)
- [[Convergenza assoluta di una serie]]: lemma fondamentale (Analisi 2)

## Porta a
- [[Serie di Taylor]]: le analitiche sono somme di serie di potenze
- [[Serie di Laurent]]: serie con potenze positive e negative
- [[Derivazione e integrazione termine a termine]]: funzione somma C^∞ nell'intervallo aperto (Analisi 2)

## Collegati
- [[Convergenza uniforme di successioni di funzioni]]: garantisce la derivazione termine a termine
