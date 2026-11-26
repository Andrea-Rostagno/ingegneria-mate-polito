---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Feynman-Kac formula, Feynman-Kac, teorema di Feynman-Kac, rappresentazione probabilistica di PDE, problema di Cauchy all'indietro, backward Cauchy problem]
tags: [competenza, area/probabilita]
---

# Formula di Feynman-Kac

> La soluzione di un problema di Cauchy parabolico all'indietro si scrive come valore atteso di un funzionale della diffusione associata: il ponte tra SDE e PDE.

## Definizione / enunciato
**Generatore** (def. c19-generatore) della SDE $dX=b(t,X)dt+\sigma(t,X)dW$: $\mathcal L_t\phi=\frac12\sigma^2(t,x)\partial_{xx}\phi+b(t,x)\partial_x\phi$.

**Teorema** (teo. c19-feynman-kac): supponiamo che la SDE abbia per ogni $(t,x)$ un'unica soluzione con momenti finiti, e siano $k\ge0$, $g$, $f$ continue con crescita al più polinomiale in $x$. Se $\phi\in C^{1,2}([0,T)\times\mathbb R)$, continua, risolve
$$-\partial_t\phi=\mathcal L_t\phi-k\phi+g,\qquad\phi(T,x)=f(x),$$
allora è l'unica soluzione a crescita polinomiale ed è
$$\phi(t,x)=\mathbb E_{t,x}\Big[f(X_T)e^{-\int_t^Tk(u,X_u)du}+\int_t^Tg(s,X_s)e^{-\int_t^sk(u,X_u)du}ds\Big].$$

## Formule chiave
Black-Scholes: $b=rx$, $\sigma(x)=\sigma x$, $k=r$, $g=0$, $f=\varphi$ dà $\Pi(t,x)=e^{-r(T-t)}\mathbb E^{\mathbb Q}_{t,x}[\varphi(S_T)]$. ZCB nei modelli di tasso: $k(x)=x$, $f=1$.

## Intuizione
Dimostrazione (derivate limitate): con la formula di Itô il processo $\phi(s,X_s)e^{-\int_t^sk}+\int_t^sg\,e^{-\int k}$ ha drift nullo, è una martingala, e si uguagliano le attese in $s=t$ e $s=T$. Il teorema non costruisce la soluzione: la PDE si risolve calcolando un'attesa, o un'attesa si calcola risolvendo la PDE. Attenzione al segno: $-\partial_t\phi$ con dato **finale** (senza il meno si ha un problema mal posto).

## Come si usa
Esempio del libro (lezione): $u_t+\frac12u_{xx}-ru=0$, $u(T,x)=x^2$: $\mathcal L=\frac12\partial_{xx}$ (browniano), $k=r$, quindi $u=e^{-r(T-t)}\mathbb E[(x+W_T-W_t)^2]=e^{-r(T-t)}(x^2+T-t)$. Call europea come soluzione della PDE di Black-Scholes con $x=K=100$, $r=5\%$, $\sigma=20\%$, $\tau=1$: si ritrova la formula di Black-Scholes. Generatore del GBM con $\phi=x^2$: $\mathcal L\phi=(2\mu+\sigma^2)x^2$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 19 §Generatore e formula di Feynman-Kac (dimostrazione nel caso di derivate limitate come a lezione). Fonti: `Libri/Financial engineering/capitoli/cap19.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 05 - analisi stocastica - 12 mag 26.pdf`, `Lezione 06 - analisi stocastica - 19 mag 2026.pdf` (manca un segno meno nell'osservazione della lezione 5, corretto nel libro).

## Prerequisiti
- [[Generatore infinitesimale]]: operatore $\mathcal L$
- [[Formula di Itô]]: dimostrazione
- [[Equazione differenziale stocastica]]: diffusione associata
- [[Problema di Cauchy]]: problema all'indietro con dato finale

## Porta a
- [[Equazione di Black-Scholes]]: caso particolare
- [[Modello per il tasso a breve]]: PDE dello zero-coupon bond

## Collegati
- [[Equazione del calore]]: caso $\mathcal L=\frac12\Delta$, $k=g=0$
- [[Problema di Dirichlet e moto browniano]]: rappresentazione analoga per il problema ellittico
- [[Valutazione neutrale al rischio]]: prezzo come attesa
- [[Formula di Dynkin]]: valore atteso di $\phi(X_\tau)$ tramite il generatore
