---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Bayes error", "classificatore di Bayes", "Bayes classifier", "ipotesi di Bayes", "rumore di etichetta", "noise(x)", "scenario deterministico e stocastico"]
tags: [competenza, area/data-ml]
---

# Errore di Bayes

> Il più piccolo errore di generalizzazione raggiungibile da una qualunque funzione misurabile; misura quanto il problema è intrinsecamente rumoroso.

## Definizione / enunciato
Nello scenario **stocastico** la distribuzione $D$ è su $\mathcal X\times\mathcal Y$ e l'etichetta di $x$ non è determinata da $x$. L'**errore di Bayes** è
$$R^*=\inf_{h\ \text{misurabile}}R(h).$$
Un'ipotesi $h$ con $R(h)=R^*$ è detta **ipotesi (classificatore) di Bayes** $h_{\rm Bayes}$. Nel caso **deterministico** ($y=f(x)$) si ha $R^*=0$.

## Formule chiave
In classificazione binaria, per ogni $x\in\mathcal X$ il **rumore** è
$$\mathrm{noise}(x)=\min\{\Pr[1\mid x],\Pr[0\mid x]\},\qquad \mathbb E[\mathrm{noise}(x)]=R^*.$$
Il classificatore di Bayes sceglie in ogni punto l'etichetta con probabilità a posteriori più alta: $h_{\rm Bayes}(x)=\arg\max_{y\in\{0,1\}}\Pr[y\mid x]$. Con $\alpha_x=\Pr[1\mid x]$ si ha $\Pr[h_{\rm Bayes}(x)\neq Y\mid X=x]=\min\{\alpha_x,1-\alpha_x\}$, mentre per ogni classificatore $g$ vale $\Pr[g(x)\neq Y\mid X=x]\ge\min\{\alpha_x,1-\alpha_x\}$; prendendo la speranza su $x\sim D_{\mathcal X}$ si ottiene $R(g)\ge R(h_{\rm Bayes})=R^*$ (dimostrazione negli appunti a mano di p. 124).

## Intuizione
Anche conoscendo perfettamente $D$, in un punto $x$ si sbaglia con probabilità $\mathrm{noise}(x)$: è l'errore "irriducibile". Un punto con rumore vicino a $1/2$ è difficile per qualsiasi algoritmo.

## Come si usa
L'eccesso di errore $R(h)-R^*$ si scompone in errore di stima più errore di approssimazione: $R^*$ è il riferimento rispetto a cui si misura la ricchezza di $H$. Nel modello agnostico non si confronta $R(h_S)$ con 0 ma con $\inf_{h\in H}R(h)$.

## Nei corsi
- **Matematica per l'AI** (triennale): slide "Errors" e "Noise" e appunti a mano su errore di Bayes e rumore. Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 17-18, 123-125); `FML.pdf` §2.4.

## Prerequisiti
- [[Errore di generalizzazione]]: $R^*$ è un estremo inferiore di $R(h)$
- [[Probabilità condizionata]]: il rumore usa $\Pr[y\mid x]$

## Porta a
- [[Errore di stima ed errore di approssimazione]]: l'eccesso $R(h)-R^*$ si scompone
- [[Apprendimento PAC agnostico]]: scenario con rumore

## Collegati
- [[Formula di Bayes]]: probabilità a posteriori dell'etichetta
- [[Classificatore bayesiano]]: versione pratica che stima le probabilità a posteriori
