---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [linear SDE, SDE lineare, equazioni differenziali stocastiche lineari, rumore additivo, additive noise, fattore integrante stocastico, metodo del fattore integrante, log-OU]
tags: [competenza, area/probabilita]
---

# SDE lineari

> Equazioni con drift affine in $X$ e diffusione deterministica: si risolvono con il fattore integrante e la soluzione è gaussiana.

## Definizione / enunciato
**Teorema** (teo. c14-sde-lineari): sia
$$dX_t=\big(a(t)+A(t)X_t\big)dt+\sigma(t)\,dW_t,\qquad X_0=\xi,$$
con $a,A,\sigma$ deterministiche, $\int_0^T|a|<\infty$, $\int_0^T|A|<\infty$, $\int_0^T\sigma^2<\infty$. Con $F(t)=\exp\{\int_0^tA(s)ds\}$ ($F'=AF$, $F(0)=1$) l'unica soluzione è
$$X_t=F(t)\Big[\xi+\int_0^tF(s)^{-1}a(s)\,ds+\int_0^tF(s)^{-1}\sigma(s)\,dW_s\Big].$$
Se $\mathbb E|\xi|<\infty$ la media risolve $m'(t)=A(t)m(t)+a(t)$; se $\xi$ è deterministico $X$ è gaussiano con
$$\mathrm{Var}(X_t)=F(t)^2\int_0^tF(s)^{-2}\sigma(s)^2ds .$$

## Formule chiave
Per la diffusione serve $\int\sigma^2<\infty$, non $\int|\sigma|<\infty$ (correzione di un errore della lezione segnalata dal libro).

## Intuizione
È la formula di variazione delle costanti delle ODE lineari, con un integrale di Wiener in più. Copre solo il **rumore additivo** ($\sigma$ indipendente da $X$): il GBM, con rumore moltiplicativo $\sigma X\,dW$, si risolve invece passando al logaritmo.

## Come si usa
Esempio del libro (esercizio di lezione, log-OU): $dX=k(\theta-\ln X)X\,dt+\sigma X\,dW$; con Itô $Y=\ln X$ soddisfa $dY=k\big[(\theta-\frac{\sigma^2}{2k})-Y\big]dt+\sigma\,dW$, un OU con media spostata dalla correzione di Itô; quindi $\mathbb E[Y_T\mid Y_t=y]=ye^{-k(T-t)}+(\theta-\frac{\sigma^2}{2k})(1-e^{-k(T-t)})$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 14 §§Le SDE lineari, Altre SDE risolubili (dimostrazione di esistenza e unicità come a lezione). Fonti: `Libri/Financial engineering/capitoli/cap14.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 07 - analisi stocastica - 22 mag 26.pdf`, `Lezione 10 - analisi stocastica - 4 giu 26.pdf`.

## Prerequisiti
- [[Equazione differenziale stocastica]]: classe di equazioni
- [[Integrale di Wiener]]: termine stocastico gaussiano
- [[Formula di Itô multidimensionale]]: regola del prodotto con il fattore integrante

## Porta a
- [[Processo di Ornstein-Uhlenbeck]]: caso $A=-\theta$, $a=\theta\mu$
- [[Modello di Vasicek]]: tasso a breve lineare

## Collegati
- [[Esistenza e unicità per SDE]]: caso con soluzione esplicita
- [[Moto browniano geometrico]]: contrasto, rumore moltiplicativo
