---
tipo: competenza
area: probabilita
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [Itô's formula, Itô's lemma, lemma di Itô, formula di Ito, Ito's lemma, regola della catena stocastica, correzione di Itô, Itô correction, calcolo di Itô, Itô calculus]
tags: [competenza, area/probabilita]
---

# Formula di Itô

> La regola della catena del calcolo stocastico: il differenziale di $f(t,X_t)$ ha un termine in più, $\frac12f_{xx}(dX_t)^2$, dovuto alla variazione quadratica.

## Definizione / enunciato
**Per $f(W_t)$** (teo. c13-ito-W), $f\in C^2$:
$$f(W_t)-f(W_0)=\int_0^tf'(W_s)\,dW_s+\frac12\int_0^tf''(W_s)\,ds .$$
**Per $f(t,W_t)$** (teo. c13-ito-tW), $f\in C^{1,2}$: $df=\big[\partial_tf+\frac12\partial_{xx}f\big]dt+\partial_xf\,dW_t$.

**Per processi di Itô** (teo. c13-ito-processo): se $dX_t=b_t\,dt+\sigma_t\,dW_t$ e $f\in C^{1,2}$,
$$df(t,X_t)=\partial_tf\,dt+\partial_xf\,dX_t+\frac12\partial_{xx}f\,(dX_t)^2=\Big[\partial_tf+b_t\partial_xf+\frac12\sigma_t^2\partial_{xx}f\Big]dt+\sigma_t\partial_xf\,dW_t .$$

## Formule chiave
$$d(W_t^2)=2W_t\,dW_t+dt,\qquad d(W_t^4)=6W_t^2\,dt+4W_t^3\,dW_t,\qquad d\ln S_t=\big(\mu-\tfrac12\sigma^2\big)dt+\sigma\,dW_t .$$

## Intuizione
Sviluppo di Taylor al secondo ordine con $(dW)^2=dt$: il termine quadratico non sparisce. Controllo di coerenza: se $f(W_t)$ ha media non costante, il differenziale deve contenere un termine in $dt$, perché $\int f'(W)\,dW$ ha media nulla. Dimenticare $\frac12f''dt$ significa usare la regola della catena ordinaria.

## Come si usa
Esempi del libro: $\int_0^tW\,dW=(W_t^2-t)/2$ in una riga; $\mathbb E[W_t^4]=6\int_0^ts\,ds=3t^2$ prendendo l'attesa; $S_t=S_0e^{\alpha t+\sigma W_t}$ è un GBM con drift $\alpha+\frac12\sigma^2$; fattore integrante per l'OU, $d(e^{\theta t}X_t)=\theta\mu e^{\theta t}dt+\sigma e^{\theta t}dW_t$; prezzo forward $F_t=S_te^{r(T-t)}$: $dF=(\mu-r)F\,dt+\sigma F\,dW$. Se $\partial_tf+\frac12\Delta f=0$, $f(t,W_t)$ è una martingala (locale): soluzioni di PDE come valori attesi.

## Nei corsi
- **Financial engineering** (magistrale): cap. 13 §§La formula di Itô per funzioni del moto browniano, La formula di Itô per i processi di Itô (dimostrazione euristica e completa facoltativa). Fonti: `Libri/Financial engineering/capitoli/cap13.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 04 - analisi stocastica - 8 mag 26.pdf`, `magistrale/Financial engineering/semeraro/semeraro ordinata/35 - lez 17 aprile - moto browniano geometrico.pdf` (Itô sul logaritmo).
- **Ottimizzazione in condizione di incertezza** (magistrale): "Itô's lemma" ricavato informalmente dallo sviluppo di Taylor di $f(X_t,t)$ con $\delta X=a\,\delta t+b\,\epsilon\sqrt{\delta t}$: il termine $b^2\epsilon^2\delta t$ non è trascurabile e, poiché $\mathrm{Var}(\epsilon^2\delta t)=2(\delta t)^2$, si tratta come deterministico (regola $(dW)^2=dt$), da cui $df=\big(a\,f_x+f_t+\frac12b^2f_{xx}\big)dt+b\,f_x\,dW$. Con $b=0$ si ritrova la regola della catena. Applicazioni: $d(W_t^2)=dt+2W_t\,dW_t$, quindi $\int_0^TW\,dW=\frac{W_T^2}2-\frac T2$, e il logaritmo del GBM. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 22-28).

## Prerequisiti
- [[Processo di Itô]]: classe di processi a cui si applica
- [[Variazione quadratica del moto browniano]]: origine del termine correttivo
- [[Formula di Taylor in più variabili]]: sviluppo al secondo ordine

## Porta a
- [[Formula di Itô multidimensionale]]: più browniani, regola del prodotto
- [[Moto browniano geometrico]]: soluzione con Itô sul logaritmo
- [[Processo di Ornstein-Uhlenbeck]]: fattore integrante
- [[Equazione di Black-Scholes]]: differenziale del prezzo dell'opzione
- [[Formula di Feynman-Kac]]: dimostrazione via Itô

## Collegati
- [[Generatore infinitesimale]]: il drift di $f(X_t)$ è $\mathcal Lf$
- [[Formula di Dynkin]]: versione integrata in media
- [[Integrale di Itô]]: $\int W\,dW$ ritrovato
