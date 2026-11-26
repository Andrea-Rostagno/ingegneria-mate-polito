---
tipo: competenza
area: probabilita
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [stochastic differential equation, SDE, EDS, equazioni differenziali stocastiche, soluzione forte, strong solution, unicità per traiettorie, pathwise uniqueness, SDE autonoma, coefficiente di diffusione]
tags: [competenza, area/probabilita]
---

# Equazione differenziale stocastica

> Equazione $dX_t=b(t,X_t)\,dt+\sigma(t,X_t)\,dW_t$, intesa come equazione integrale con un integrale di Itô: il linguaggio dei modelli per prezzi e tassi.

## Definizione / enunciato
Con $b,\sigma:[0,T]\times\mathbb R\to\mathbb R$ misurabili e $\xi$ $\mathcal F_0$-misurabile, la SDE $dX_t=b(t,X_t)dt+\sigma(t,X_t)dW_t$, $X_0=\xi$, è per definizione (def. c14-sde)
$$X_t=\xi+\int_0^tb(s,X_s)\,ds+\int_0^t\sigma(s,X_s)\,dW_s ;$$
$b$ è il drift, $\sigma$ il coefficiente di diffusione; se non dipendono da $t$ è **autonoma**.
- **Soluzione forte** (def. c14-soluzione-forte): sul browniano e la filtrazione dati, $X$ continuo e adattato, $X_0=\xi$ q.c., $b(\cdot,X)\in M^1_{\mathrm{loc}}$, $\sigma(\cdot,X)\in M^2_{\mathrm{loc}}$, e vale l'equazione integrale.
- **Soluzione debole** (def. c14-soluzione-debole): spazio, filtrazione e browniano fanno parte della soluzione (si determina la legge).
- **Unicità per traiettorie** (def. c14-unicita): due soluzioni sullo stesso spazio sono indistinguibili.

## Formule chiave
Interpretazione locale: $X_{t+\varepsilon}-X_t\approx b(t,X_t)\varepsilon+\sigma(t,X_t)\Delta W$.

## Intuizione
Un'ODE perturbata da un rumore la cui intensità dipende dallo stato. Per verificare che un processo dato risolve una SDE si calcola il suo differenziale con la formula di Itô e lo si riscrive in funzione di $X_t$.

## Come si usa
Esempio del libro: $X_t=W_t/(1+t)$ risolve $dX_t=-\frac{X_t}{1+t}dt+\frac1{1+t}dW_t$, $X_0=0$ (Itô con $f(t,x)=x/(1+t)$); $X_t\sim\mathcal N(0,t/(1+t)^2)$. Bachelier, $dX=\mu\,dt+\sigma\,dW$: $X_T\mid X_t=x\sim\mathcal N(x+\mu(T-t),\sigma^2(T-t))$. Coefficienti a tratti deterministici: le varianze dei tratti si sommano, $\mathrm{Var}\int_0^T\sigma_tdW_t=\int_0^T\sigma_t^2dt$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 14 §§Che cos'è una SDE, Soluzioni forti e deboli. Fonti: `Libri/Financial engineering/capitoli/cap14.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 07 - analisi stocastica - 22 mag 26.pdf`.
- **Ottimizzazione in condizione di incertezza** (magistrale): presentata per generare traiettorie: dal conto bancario $dB=rB\,dt$, $B(T)=B(0)e^{\int_0^Tr(t)dt}$, al processo di Itô $dS_t=a(S_t,t)\,dt+b(S_t,t)\,dW_t$ (drift e volatilità). Nella simulazione ci sono due errori: di **campionamento** (riducibile con la riduzione della varianza) e di **discretizzazione** (schema di Eulero), che può cambiare perfino la legge marginale, come nel GBM. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 3-8, 13).

## Prerequisiti
- [[Processo di Itô]]: la soluzione è un processo di Itô
- [[Integrale di Itô]]: termine di diffusione

## Porta a
- [[Esistenza e unicità per SDE]]: condizioni di Lipschitz e crescita lineare
- [[SDE lineari]]: soluzione esplicita
- [[Moto browniano geometrico]]: rumore moltiplicativo
- [[Processo di diffusione]]: soluzioni come processi di Markov
- [[Metodo di Euler-Maruyama]]: approssimazione numerica

## Collegati
- [[Problema di Cauchy]]: analogo deterministico ($\sigma=0$)
- [[Formula di Itô]]: verifica delle soluzioni
- [[Moto browniano con drift]]: SDE a coefficienti costanti
