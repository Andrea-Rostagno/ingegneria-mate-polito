---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Frank copula", "copula Frank", "famiglia di Frank", "funzione di Debye", "Debye function", "Nelsen (4.2.5)"]
tags: [competenza, area/probabilita]
---

# Copula di Frank

> Copula archimedea simmetrica che copre dipendenze negative e positive; il suo tau di Kendall passa per la funzione di Debye.

## Definizione / enunciato
Per $\theta\ne0$ (tesi §3.4.1, `formule.ipynb` §5):
$$C(u,v;\theta)=-\frac1\theta\ln\Big(1+\frac{(e^{-\theta u}-1)(e^{-\theta v}-1)}{e^{-\theta}-1}\Big).$$
$\theta>0$ dà dipendenza positiva, $\theta<0$ negativa; si riduce a $\Pi$ per $\theta\to0$ e raggiunge i limiti di Fréchet inferiore e superiore per $\theta\to-\infty$ e $\theta\to+\infty$. In dimensione $d$ (Pellerey, slide 79) serve $\theta>0$; solo per $d=2$ si ammette $\theta<0$.

## Formule chiave
- Generatore (Pellerey): $\psi(t)=-\frac1\theta\ln\big(1-(1-e^{-\theta})e^{-t}\big)$.
- Densità: $c(u,v;\theta)=\dfrac{\theta(1-e^{-\theta})e^{-\theta(u+v)}}{\big(1-e^{-\theta}-(1-e^{-\theta u})(1-e^{-\theta v})\big)^2}$.
- Tau di Kendall: $\tau=1-\dfrac4\theta\big(1-D_1(\theta)\big)$ con la funzione di Debye $D_1(\theta)=\dfrac1\theta\int_0^\theta\dfrac{t}{e^t-1}dt$; **non c'è inversione esplicita**.
- Dipendenza di coda: $\lambda_L=\lambda_U=0$ (Nelsen, Ex. 5.22, famiglia 4.2.5).

## Intuizione
È simmetrica rispetto al centro del quadrato e non concentra massa negli angoli. La tesi la descrive come capace di "catturare sia la dipendenza dalla coda superiore che quella dalla coda inferiore" (§3.4.1), ma per Nelsen i suoi coefficienti di coda sono nulli: in §4.6 la tesi stessa la riserva alle dipendenze "moderate e stabili", come termine di confronto.

## Come si usa
- Metodo dei momenti: si risolve $1-\frac4\theta(1-D_1(\theta))=\hat\tau$ con `root_scalar(..., bracket=[-50, 50], method='brentq')`, calcolando $D_1$ con `quad`; sul DAX $\hat\theta=9.7812$ (tab. 5.8).
- MLE: $\theta=-0.4603$ (log-verosimiglianza 19543.0218), segno negativo nonostante $\tau>0$; MCMC $\theta=-0.460$ con prior $\mathcal N(0,5)$, WAIC 2066.28 (tab. 5.9).
- Con il parametro medio $\theta=2.9536$ la log-verosimiglianza è $-88617.94$ e l'AIC $177237.88$: è l'ultima (tab. 5.14-5.15).

## Nei corsi
- **Prova finale** (triennale): copula simmetrica di confronto. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.4.1, p. 24; §4.6, p. 36; §5.2.5, p. 51; §5.3.3, pp. 75-76; tab. 5.7-5.15); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§5-6); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 79-80); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (famiglia (4.2.5), Ex. 5.22).

## Prerequisiti
- [[Copule archimedee]]: costruzione dal generatore
- [[Limiti di Fréchet-Hoeffding]]: casi limite $W$ e $M$

## Porta a
- [[Stima delle copule sul DAX]]: peggiore per AIC

## Collegati
- [[Dipendenza di coda]]: coefficienti nulli
- [[Tau di Kendall]]: relazione tramite la funzione di Debye
- [[Teorema degli zeri]]: `brentq` richiede un cambio di segno nell'intervallo $[-50,50]$
