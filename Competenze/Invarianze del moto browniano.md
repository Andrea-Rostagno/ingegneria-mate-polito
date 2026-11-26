---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [isotropia, isotropy, invarianza per scaling, scaling invariance, inversione temporale, time inversion, simmetria, Isotropia del moto browniano, Invarianza per scaling del moto browniano, Inversione temporale del moto browniano, autosimilarità]
tags: [competenza, area/probabilita]
---

# Invarianze del moto browniano

> Trasformazioni che mandano un moto browniano in un moto browniano: rotazioni (isotropia, simmetria), riscalamento di tempo e spazio, inversione temporale.

## Definizione / enunciato
Sia $(W_t)$ un moto browniano $d$-dimensionale.
- **Isotropia.** Se $R\in\mathbb R^{d\times d}$ è ortonormale, $(RW_t)$ è un browniano. Caso $d=1$, $R=(-1)$: **simmetria**, $(-W_t)$ è browniano. Corollario: con $\tau=\inf\{t:W_t\in S^{d-1}\}$, $W_\tau$ è uniforme sulla sfera.
- **Scaling.** Per $a>0$, $\big(\tfrac1aW_{a^2t}\big)_{t\ge0}$ è browniano.
- **Inversione.** $Y_0=0$, $Y_t=tW_{1/t}$ per $t>0$: $(Y_t)$ è browniano.

## Formule chiave
$$R(W_{t+h}-W_t)\sim N(0,R\,hI_d\,R^\top)=N(0,hI_d),\qquad \tfrac1a(W_{a^2(t+h)}-W_{a^2t})\sim N(0,hI_d),$$
$$\mathrm{Cov}(sW_{1/s},tW_{1/t})=st\min\{\tfrac1s,\tfrac1t\}=\frac{st}{\max\{s,t\}}=\min\{s,t\}.$$

## Intuizione
Il browniano non ha direzioni privilegiate ed è un frattale aleatorio: un tratto su $[0,\varepsilon]$, riscalato con $a=\sqrt{T/\varepsilon}$, è un browniano su $[0,T]$; con l'inversione, basta per costruirne uno su $[1/\varepsilon,\infty)$.

## Come si usa
Ogni prova verifica la definizione: $W_0=0$, continuità, incrementi indipendenti e gaussiani (oppure la caratterizzazione gaussiana). Per l'inversione l'unico punto delicato è la continuità in $0$, cioè $W_t/t\to0$ per $t\to\infty$:
1. sugli interi per la legge forte, $W_n/n\to0$;
2. tra gli interi, con rinnovo e massimale di Doob sulla submartingala $W_t^2$, $P(\sup_{0\le t\le1}W_t^2>n\sqrt n)\le1/(n\sqrt n)$;
3. Borel-Cantelli.

Lo schema "discretizzare e controllare tra i punti" è il "popular pattern" della lezione 25. Esercizio N(a): l'isotropia aiuta a provare che il browniano attraversa ogni iperpiano.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 18 (renewal, scaling, inversion, reflection). Il `.tex` scrive lo scaling come $W_{ct}/\sqrt c$ (equivalente con $c=a^2$); le slide lo dimostrano in $d$ dimensioni. Fonti: `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24), `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Proprietà di invarianza, `topics_2025_26.pdf` (argomento 18).

## Prerequisiti
- [[Caratterizzazione gaussiana del moto browniano]]: verifica delle covarianze dopo la trasformazione

## Porta a
- [[Legge del logaritmo iterato]]: inversione passa da t a 0 a infinito

## Collegati
- [[Principio di riflessione]]: usa la simmetria di -W
- [[Proprietà di rinnovo del moto browniano]]: invarianze elencate nell'argomento 18
