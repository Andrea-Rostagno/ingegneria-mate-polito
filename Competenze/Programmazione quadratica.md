---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["quadratic programming", "QP", "programmazione quadratica convessa", "problema QP", "MIQP", "pricing ottimale"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione quadratica

> Problemi con obiettivo quadratico e vincoli lineari; sono convessi quando la matrice dell'obiettivo è semidefinita positiva e si risolvono con metodi a punti interni.

## Definizione / enunciato
$$\min\ \tfrac12\mathbf x^TQ\mathbf x+\mathbf f^T\mathbf x\quad\text{s.t. }A\mathbf x\le\mathbf b,\ C\mathbf x=\mathbf d,\ \mathbf x\ge\mathbf 0 .$$
Il problema è **convesso** se $Q\in S^n_+$ (simmetrica semidefinita positiva). Massimizzare una forma quadratica convessa è invece un problema concavo. Se alcune variabili sono intere si ha un **MIQP** (misto-intero), non convesso.

## Formule chiave
$\tfrac12\mathbf x^TQ\mathbf x$ è convessa se e solo se $Q\succeq0$, strettamente convessa se e solo se $Q\succ0$.

**Pricing ottimale:** domanda lineare $d(p)=\max\{\alpha-\beta p,0\}$, nulla per $p_{\max}=\alpha/\beta$. Se all'ottimo $p<p_{\max}$:
$$\max_p\ p(\alpha-\beta p)=\alpha p-\beta p^2\ \Rightarrow\ p^*=\frac\alpha{2\beta}=\frac{p_{\max}}2 .$$

## Intuizione
Il ricavo è l'area del rettangolo prezzo × domanda sotto la retta di domanda: è massima a metà strada fra 0 e $p_{\max}$. Nel revenue management il costo variabile è trascurabile e il costo fisso è affondato, quindi irrilevante.

## Come si usa
Esempi di QP convessi nel corso: minimi quadrati (non vincolati, $A^TA\in S_+$), regressione ridge, support vector machine a margine massimo, $\min x_1^2+x_2^2$ con vincolo lineare (esempio dei moltiplicatori e della dualità). È il secondo livello della gerarchia convessa LP ⊂ QP ⊂ QCQP ⊂ SOCP ⊂ SDP.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 31-33); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 19-20).
- **Numerical opt** (magistrale): QP con soli vincoli di uguaglianza $\min\frac12x^TQx+c^Tx$ s.t. $Ax=b$, con $Q$ semidefinita positiva e $A$ di rango pieno ($m<n$). Le condizioni di ottimalità formano un sistema lineare ([[Matrice KKT]]), risolto con il [[Metodo del complemento di Schur]] o con il [[Metodo dello spazio nullo]]. DS §11.2 scrive anche le KKT del QP convesso con disuguaglianze $A^{(i)}x-b^{(i)}\ge0$. Fonti: `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 1-2); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§11.2-11.3).

## Prerequisiti
- [[Programmazione lineare]]: livello precedente della gerarchia
- [[Forma quadratica]]: l'obiettivo è una forma quadratica più un termine lineare
- [[Matrice simmetrica definita positiva]]: condizione di convessità su $Q$

## Porta a
- [[Programmazione conica del secondo ordine]]: livelli successivi QCQP e SOCP
- [[Support vector machine]]: classificatore a margine massimo come QP

## Collegati
- [[Problema di ottimizzazione convessa]]: QP convessa se $Q\succeq0$
- [[Regressione regolarizzata]]: ridge è un QP non vincolato
- [[Convessità di funzioni differenziabili]]: criterio dell'hessiana per $\frac12\mathbf x^TQ\mathbf x$
