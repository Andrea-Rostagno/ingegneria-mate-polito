---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["tail dependence", "coefficiente di dipendenza di coda", "tail dependence coefficient", "dipendenza di coda inferiore", "lower tail dependence", "dipendenza di coda superiore", "upper tail dependence", "lambda_L", "lambda_U", "eventi estremi congiunti"]
tags: [competenza, area/probabilita]
---

# Dipendenza di coda

> Probabilità limite che una variabile sia estrema dato che lo è l'altra: misura la tendenza a crolli (o rialzi) congiunti, e dipende solo dalla copula.

## Definizione / enunciato
**Nelsen, Def. 5.4.1**: per $X,Y$ continue con f.d.r. $F,G$,
$$\lambda_U=\lim_{t\to1^-}\mathbb P\big[Y>G^{(-1)}(t)\mid X>F^{(-1)}(t)\big],\qquad \lambda_L=\lim_{t\to0^+}\mathbb P\big[Y\le G^{(-1)}(t)\mid X\le F^{(-1)}(t)\big].$$
**Thm 5.4.2**: se i limiti esistono, con $C$ copula di $(X,Y)$,
$$\lambda_L=\lim_{t\to0^+}\frac{C(t,t)}{t},\qquad \lambda_U=2-\lim_{t\to1^-}\frac{1-C(t,t)}{1-t}.$$

## Formule chiave
Nella tesi (§3.2), con $Q$ i quantili dei due indici:
$$\lambda(v)=\Pr(Q_{NKY}\le v\mid Q_{SP}\le v)=\frac{C(v,v)}v,\qquad \lambda_U=\lim_{v\to1^-}\frac{1-2v+C(v,v)}{1-v},$$
che coincide con la forma di Nelsen perché $\frac{1-2v+C}{1-v}=2-\frac{1-C}{1-v}$.
Valori per famiglia (Nelsen, Ex. 5.21-5.22):

| copula | $\lambda_L$ | $\lambda_U$ |
|---|---|---|
| Clayton ($\theta\ge0$) | $2^{-1/\theta}$ | $0$ |
| Gumbel | $0$ | $2-2^{1/\theta}$ |
| Frank | $0$ | $0$ |
| Marshall-Olkin | $0$ | $\min(\alpha,\beta)$ |
| Cuadras-Augé | $0$ | $\theta$ |

Gaussiana: nessuna dipendenza di coda (tesi §3.4.1); t di Student: sì, ma la formula non è nelle fonti.

## Intuizione
La non normalità univariata è il problema delle code grasse; in più dimensioni le code grasse riguardano anche la probabilità di grandi movimenti congiunti (§3.2). Due modelli con la stessa correlazione possono differire molto negli angoli del quadrato: è lì che si decide il rischio di portafoglio.

## Come si usa
Esempio della tesi: probabilità di un crollo del Nikkei 225 sotto il quantile $v=1\%$ dato un crollo dell'S&P 500 sotto l'1%, cioè $C(0.01,0.01)/0.01$. In presenza di dipendenza di coda, VaR ed Expected Shortfall calcolati con l'ipotesi normale **sottostimano** il rischio (§3.2.2). Le code pesanti viste sui rendimenti del DAX spingono la tesi verso t, Clayton e Gumbel (§4.6).

## Nei corsi
- **Prova finale** (triennale): §3.2 "Dipendenza di coda e impatti su VaR e Expected Shortfall"; slide "Dipendenze di coda". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.2, pp. 21-22; §4.6, p. 36); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Def. 5.4.1, Thm 5.4.2, Ex. 5.21-5.22); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 16, 51).

## Prerequisiti
- [[Copula]]: $\lambda_L,\lambda_U$ dipendono solo da $C$
- [[Distribuzione condizionata]]: probabilità condizionate agli estremi
- [[Trasformazione integrale di probabilità]]: soglie espresse in quantili

## Porta a
- [[Value at Risk]]: sottostimato se si ignora la coda
- [[Expected Shortfall]]: idem

## Collegati
- [[Copula di Clayton]]: coda inferiore
- [[Copula di Gumbel]]: coda superiore
- [[Copula t di Student]]: cattura la dipendenza di coda secondo la tesi
- [[Copula gaussiana]]: assenza di dipendenza di coda
