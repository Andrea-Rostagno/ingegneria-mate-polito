---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["mean value property for harmonic functions", "teorema della media per le funzioni armoniche", "media sferica", "media di superficie", "media di volume"]
tags: [competenza, area/analisi]
---

# Proprietà di media delle funzioni armoniche

> Il valore di una funzione armonica in un punto è la media dei suoi valori su ogni sfera (e su ogni palla) centrata lì; e vale il viceversa: una continua con la proprietà di media è armonica e $C^\infty$.

## Definizione / enunciato
Sia $d_{\partial\Omega}(x)=\operatorname{dist}(x,\partial\Omega)$.
- **Lemma 3.1.1 (media di superficie).** Se $u$ è armonica in $\Omega$, per ogni $x\in\Omega$ e $\rho\in(0,d_{\partial\Omega}(x))$
$$u(x)=\frac{1}{\sigma_{N-1}\rho^{N-1}}\int_{\partial B_\rho(x)}u(y)\,d\sigma(y).\qquad(3.1)$$
- **Lemma 3.1.2 (media di volume).** Se $u\in C^0(\Omega)$ soddisfa (3.1), allora
$$u(x)=\frac1{|B_\rho(x)|}\int_{B_\rho(x)}u(y)\,dy.\qquad(3.4)$$
- **Lemma 3.1.3.** Per $u\in C^0(\Omega)$ le due proprietà sono equivalenti.
- **Lemma 3.1.4.** Una $u\in C^0(\Omega)$ con una proprietà di media è $C^\infty(\Omega)$.
- **Lemma 3.1.5.** Una $u\in C^0(\Omega)$ con una proprietà di media è armonica.
- **Lemma 3.1.7.** Se $u\in L^1_{\rm loc}(\Omega)$ soddisfa (3.4) per q.o. $x$ (Def. 3.1.6), esiste $v$ armonica con $u=v$ q.o.

## Formule chiave
Dimostrazione di 3.1.1: con $y=x+\rho z$, $f(\rho)=\frac1{\sigma_{N-1}}\int_{\partial B_1(0)}u(x+\rho z)\,d\sigma(z)$ e
$$f'(\rho)=\frac1{\sigma_{N-1}\rho^{N-1}}\int_{\partial B_\rho(x)}\partial_\nu u\,d\sigma=\frac1{\sigma_{N-1}\rho^{N-1}}\int_{B_\rho(x)}\Delta u\,dy=0,\qquad(3.3)$$
quindi $f$ è costante e vale $\lim_{\rho\to0^+}f(\rho)=u(x)$. Integrando per gusci, con $\sigma_{N-1}=N\omega_N$: $\int_{B_\rho(x)}u=\sigma_{N-1}\frac{\rho^N}Nu(x)=\omega_N\rho^Nu(x)=|B_\rho(x)|u(x)$ (3.5).

## Intuizione
L'armonicità dice che il flusso del gradiente attraverso ogni sfera è nullo: la media sferica non cambia al variare del raggio, quindi coincide col valore al centro. Per $N=1$ le armoniche sono le funzioni affini, e la media agli estremi di un intervallo è il valore nel punto medio.

## Come si usa
La proprietà di media è il "motore" di quasi tutto il capitolo: regolarità $C^\infty$ (mollificando con mollificatori radiali, Lemma 3.1.4: $u*\psi_\varepsilon=u$), principio del massimo forte, stime sulle derivate, passaggio al limite in successioni di armoniche (la media passa al limite anche solo in $L^1_{\rm loc}$), disuguaglianza di Harnack. Nel Lemma 3.1.5 si deriva $f(\rho)$ come in (3.3) per avere $\int_{B_\rho(x)}\Delta u=0$ per ogni $\rho$ e si conclude col lemma fondamentale del calcolo delle variazioni.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.1 "Proprietà delle funzioni armoniche", Lemmi 3.1.1-3.1.7, con $N$ dimensione, $\sigma_{N-1}$ misura di $\partial B_1$ e $\omega_N$ volume di $B_1$. Negli appunti le medie sono scritte con l'integrale barrato. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 16-19).

## Prerequisiti
- [[Funzione armonica]]: ipotesi della proprietà diretta
- [[Teorema della divergenza]]: trasforma il flusso del gradiente nell'integrale del laplaciano

## Porta a
- [[Stime sulle derivate delle funzioni armoniche]]: si applica la media alle derivate $D_iu$
- [[Convergenza di successioni di funzioni armoniche]]: la media passa al limite
- [[Disuguaglianza di Harnack]]: media di superficie nella dimostrazione
- [[Principio del massimo per le funzioni armoniche]]: il massimo interno si propaga

## Collegati
- [[Proprietà di media per l'equazione del calore]]: analogo parabolico con le palle di calore
- [[Formula integrale di Cauchy]]: analogo complesso della proprietà della media
- [[Mollificatori]]: con mollificatori radiali si prova $u\in C^\infty$
