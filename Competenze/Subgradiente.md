---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["subgradient", "subdifferenziale", "subdifferential", "iperpiano di supporto di una funzione", "supporting hyperplane", "supergradiente", "funzione non differenziabile convessa"]
tags: [competenza, area/ottimizzazione]
---

# Subgradiente

> Vettore che definisce un iperpiano di supporto al grafico di una funzione convessa: sostituisce il gradiente nei punti di non differenziabilità, e $\mathbf 0\in\partial f(\mathbf x^*)$ caratterizza il minimo globale.

## Definizione / enunciato
Sia $f$ definita su $S\subseteq\mathbb R^n$ e $\mathbf x_0\in S$. $\boldsymbol\gamma\in\mathbb R^n$ è un **subgradiente** di $f$ in $\mathbf x_0$ se
$$f(\mathbf x)\ge f(\mathbf x_0)+\boldsymbol\gamma^T(\mathbf x-\mathbf x_0)\qquad\forall\mathbf x\in S .$$
L'insieme (eventualmente vuoto) dei subgradienti è il **subdifferenziale** $\partial f(\mathbf x_0)$; l'iperpiano $z=f(\mathbf x_0)+\boldsymbol\gamma^T(\mathbf x-\mathbf x_0)$ in $\mathbb R^{n+1}$ è un iperpiano di supporto.

Fatti: una funzione convessa è subdifferenziabile all'interno del dominio; se è anche differenziabile il subgradiente è unico e coincide col gradiente.

**Teorema (ottimalità globale).** Per $f$ convessa, $\mathbf x^*$ è minimo globale di $\min_{\mathbf x\in\mathbb R^n}f(\mathbf x)$ se e solo se $\mathbf 0\in\partial f(\mathbf x^*)$.

## Formule chiave
**Teorema.** Per $f:\mathbb R^n\to\mathbb R$ convessa, $\partial f(\mathbf x)$ è non vuoto, convesso e compatto e
$$f'(\mathbf x;\mathbf d)=\max_{\mathbf g\in\partial f(\mathbf x)}\mathbf g^T\mathbf d\qquad\forall\mathbf d\in\mathbb R^n .$$

## Intuizione
In un punto angoloso ci sono infinite "tangenti" che stanno sotto il grafico: le loro pendenze formano il subdifferenziale. Se una di esse è orizzontale, nessuna direzione fa scendere la funzione.

## Come si usa
Esempio delle slide: $f(x)=-x$ per $x<0$, $x^2$ per $x\ge0$; in $0$ le derivate direzionali sono $f'(0^-)=-1$, $f'(0^+)=0$, quindi $\partial f(0)=[-1,0]\ni0$ e $x^*=0$ è il minimo. Nella dualità, $\mathbf g(\hat{\mathbf x})$ è un subgradiente (supergradiente, per una funzione concava) della funzione duale.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 21-24).
- **Ottimizzazione in condizione di incertezza** (magistrale): $\boldsymbol\gamma$ subgradiente in $\mathbf x_0$ se $f(\mathbf x)\ge f(\mathbf x_0)+\boldsymbol\gamma^T(\mathbf x-\mathbf x_0)$; subdifferenziale non vuoto all'interno del dominio di una convessa, unico (il gradiente) se differenziabile; ottimalità $\mathbf 0\in\partial f(\mathbf x^*)$. È il mattone dei metodi a piani di taglio: tagli di Kelley, tagli di ottimalità di Benders/L-shaped ($-\mathbf u^T B$ è subgradiente della funzione duale), tagli di SDDP ricavati dai duali dei sottoproblemi, aggiornamento del prezzo nella decomposizione duale. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 13-14); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 10, 17-18); `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 42, 47); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 22-23).

## Prerequisiti
- [[Funzione convessa]]: garantisce l'esistenza dei subgradienti
- [[Derivata direzionale]]: legata ai subgradienti dal teorema del massimo

## Porta a
- [[Metodo del subgradiente]]: ottimizzazione non smooth
- [[Dualità lagrangiana]]: subgradienti della funzione duale

## Collegati
- [[Punti di non derivabilità]]: i punti angolosi di una funzione convessa
- [[Convessità di funzioni differenziabili]]: caso liscio con gradiente unico
- [[Teoremi di separazione]]: iperpiano di supporto di un convesso
